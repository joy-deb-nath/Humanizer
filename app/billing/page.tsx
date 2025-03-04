'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export default function BillingPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [plan, setPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Get the plan from URL params
    const planParam = searchParams.get('plan');
    setPlan(planParam);

    // If not authenticated, redirect to auth page with plan
    if (!isLoading && !user) {
      router.push(`/auth?plan=${planParam || ''}`);
    }
  }, [user, isLoading, searchParams, router]);

  const handleSubscribe = async () => {
    setIsProcessing(true);
    try {
      // Here you would integrate with Paddle checkout
      // This would use the Paddle components mentioned in the MEMORY
      console.log(`Processing subscription for plan: ${plan}`);
      
      // Simulate processing for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // After successful subscription, redirect to dashboard or confirmation
      router.push('/');
    } catch (error) {
      console.error('Error processing subscription:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground mb-4">
            Complete Your Subscription
          </h1>
          <p className="text-xl text-muted-foreground">
            You're just one step away from upgrading your experience.
          </p>
        </div>

        <Card className="border-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle>Selected Plan: {formatPlanName(plan)}</CardTitle>
            <CardDescription>
              Review your plan details before completing your subscription
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium mb-2">Plan Details</h3>
              <PlanDetails planId={plan} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => router.push('/pricing')}
            >
              Change Plan
            </Button>
            <Button
              onClick={handleSubscribe}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                'Complete Subscription'
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function formatPlanName(planId: string | null): string {
  if (!planId) return 'Free';
  
  const parts = planId.split('-');
  if (parts.length !== 2) return 'Unknown';
  
  const [tier, billing] = parts;
  
  const tierMap: Record<string, string> = {
    'basic': 'Basic',
    'standard': 'Standard',
    'plus': 'Plus',
    'agency': 'Agency'
  };
  
  const billingMap: Record<string, string> = {
    'monthly': 'Monthly',
    'yearly': 'Yearly'
  };
  
  return `${tierMap[tier] || tier} (${billingMap[billing] || billing})`;
}

interface PlanFeature {
  name: string;
  value: string;
}

function PlanDetails({ planId }: { planId: string | null }) {
  // This would ideally come from your Paddle configuration
  const planDetails: Record<string, { price: string; features: PlanFeature[] }> = {
    'basic-monthly': {
      price: '$9.99/month',
      features: [
        { name: 'Word limit', value: '30,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'standard-monthly': {
      price: '$29.99/month',
      features: [
        { name: 'Word limit', value: '100,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'plus-monthly': {
      price: '$49.99/month',
      features: [
        { name: 'Word limit', value: '200,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'agency-monthly': {
      price: '$99.99/month',
      features: [
        { name: 'Word limit', value: '500,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'basic-yearly': {
      price: '$4.99/month (billed annually)',
      features: [
        { name: 'Word limit', value: '30,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'standard-yearly': {
      price: '$14.99/month (billed annually)',
      features: [
        { name: 'Word limit', value: '100,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'plus-yearly': {
      price: '$24.99/month (billed annually)',
      features: [
        { name: 'Word limit', value: '200,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    },
    'agency-yearly': {
      price: '$49.99/month (billed annually)',
      features: [
        { name: 'Word limit', value: '500,000 words per month' },
        { name: 'Submission limit', value: '5,000 words per submission' },
        { name: 'Support', value: 'Priority customer support' }
      ]
    }
  };

  const details = planId ? planDetails[planId] : null;
  
  if (!details) {
    return <p>Plan details not available</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-medium">Price:</span>
        <span className="text-lg font-bold">{details.price}</span>
      </div>
      {details.features.map((feature, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-muted-foreground">{feature.name}:</span>
          <span>{feature.value}</span>
        </div>
      ))}
    </div>
  );
}
