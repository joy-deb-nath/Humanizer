'use client';

import { useWordUsage } from "@/hooks/useWordUsage";
import { useAuth } from "@/hooks/useAuth";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cva } from "class-variance-authority";

const progressVariants = cva("h-2 w-full", {
  variants: {
    usage: {
      low: "bg-gradient-to-r from-emerald-500 to-green-500",
      medium: "bg-gradient-to-r from-yellow-400 to-amber-500",
      high: "bg-gradient-to-r from-red-500 to-rose-600",
    },
  },
});

interface WordUsageDisplayProps {
  showText?: boolean;
  showProgress?: boolean;
  className?: string;
}

export function WordUsageDisplay({ 
  showText = false, 
  showProgress = false,
  className = ""
}: WordUsageDisplayProps) {
  const { user } = useAuth();
  const { usageData, isLoading } = useWordUsage();
  
  if (!user) return null;
  
  if (isLoading) {
    return showText ? (
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-24" />
      </div>
    ) : null;
  }
  
  const { wordsUsed, wordLimit, percentageUsed, planName, isFreePlan } = usageData;
  
  const usageLevel = 
    percentageUsed < 60 ? "low" : 
    percentageUsed < 85 ? "medium" : 
    "high";
  
  return (
    <div className={`flex flex-col ${className}`}>
      {showText && (
        <div className="flex items-center text-sm">
          <span className="text-muted-foreground mr-2">
            {wordsUsed.toLocaleString()}/{wordLimit.toLocaleString()}
          </span>
          <Badge 
            variant={isFreePlan ? "outline" : "secondary"}
            className={`text-xs px-1.5 py-0 ${isFreePlan ? "border-indigo-500/30 text-indigo-400" : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"}`}
          >
            {planName}
          </Badge>
        </div>
      )}
      
      {(showProgress || !showText) && (
        <div className="flex flex-col space-y-1 w-full mt-1">
          <Progress 
            value={percentageUsed} 
            max={100}
            className="h-2 bg-gray-800"
            indicatorClassName={progressVariants({ usage: usageLevel })}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{wordsUsed.toLocaleString()}</span>
            <span>{wordLimit.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
