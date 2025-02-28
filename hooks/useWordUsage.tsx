'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/lib/supabase';

export type WordUsageData = {
  wordsUsed: number;
  wordLimit: number;
  percentageUsed: number;
  planName: string;
  isFreePlan: boolean;
};

export function useWordUsage() {
  const { user } = useAuth();
  const [usageData, setUsageData] = useState<WordUsageData>({
    wordsUsed: 0,
    wordLimit: 3000, // Default free plan limit
    percentageUsed: 0,
    planName: 'Free',
    isFreePlan: true
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWordUsage = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        
        // Fetch subscription data from Supabase
        const { data: subscription, error: subscriptionError } = await supabase
          .from('subscriptions')
          .select('word_balance, plan_id, plans:subscription_plans(name, word_limit)')
          .eq('user_id', user.id)
          .single();

        if (subscriptionError) {
          // If no subscription found, assume free plan
          if (subscriptionError.code === 'PGRST116') {
            // Fetch word usage for free plan
            const { data: usageData, error: usageError } = await supabase
              .from('word_usage_logs')
              .select('words_used')
              .eq('user_id', user.id)
              .gte('created_at', new Date(new Date().setDate(1)).toISOString()) // Current month
              .order('created_at', { ascending: false });

            if (usageError) throw usageError;

            const totalUsed = usageData?.reduce((sum, log) => sum + log.words_used, 0) || 0;
            const freeLimit = 3000;
            
            setUsageData({
              wordsUsed: totalUsed,
              wordLimit: freeLimit,
              percentageUsed: Math.min(100, (totalUsed / freeLimit) * 100),
              planName: 'Free',
              isFreePlan: true
            });
          } else {
            throw subscriptionError;
          }
        } else if (subscription) {
          // Handle paid subscription
          const planName = subscription.plans?.name || 'Standard';
          const wordLimit = subscription.plans?.word_limit || 100000;
          const wordsUsed = wordLimit - (subscription.word_balance || 0);
          
          setUsageData({
            wordsUsed,
            wordLimit,
            percentageUsed: Math.min(100, (wordsUsed / wordLimit) * 100),
            planName,
            isFreePlan: false
          });
        }
      } catch (err) {
        console.error('Error fetching word usage:', err);
        setError('Failed to load usage data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWordUsage();
    
    // Setup real-time subscription for word usage updates
    const channel = supabase
      .channel('word-usage-updates')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'word_usage_logs',
        filter: `user_id=eq.${user?.id}`
      }, () => {
        fetchWordUsage();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return {
    usageData,
    isLoading,
    error
  };
}
