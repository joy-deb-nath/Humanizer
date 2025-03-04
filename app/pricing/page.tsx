'use client';

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function PricingPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlanSelection = (planId: string) => {
    if (!isMounted) return;
    
    // If user is authenticated, redirect to billing page
    if (user) {
      router.push(`/billing?plan=${planId}`);
    } else {
      // If not authenticated, redirect to auth page with plan in URL
      router.push(`/auth?plan=${planId}`);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Flexible pricing options for individuals and teams of all sizes.
        </p>
      </div>

      <Tabs defaultValue="monthly" className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-80 grid-cols-2 p-1 rounded-full">
            <TabsTrigger 
              value="monthly" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger 
              value="yearly" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Yearly (Save 50%)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Monthly Plans */}
        <TabsContent value="monthly" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <PricingCard
              title="Basic"
              description="For individuals getting started"
              price="$9.99"
              period="month"
              features={[
                "30,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Basic"
              onSelect={() => handlePlanSelection("basic-monthly")}
              highlighted={false}
            />

            {/* Standard Plan */}
            <PricingCard
              title="Standard"
              description="For growing needs"
              price="$29.99"
              period="month"
              features={[
                "100,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Standard"
              onSelect={() => handlePlanSelection("standard-monthly")}
              highlighted={true}
            />

            {/* Plus Plan */}
            <PricingCard
              title="Plus"
              description="For professionals"
              price="$49.99"
              period="month"
              features={[
                "200,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Plus"
              onSelect={() => handlePlanSelection("plus-monthly")}
              highlighted={false}
            />

            {/* Agency Plan */}
            <PricingCard
              title="Agency"
              description="For teams and businesses"
              price="$99.99"
              period="month"
              features={[
                "500,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Agency"
              onSelect={() => handlePlanSelection("agency-monthly")}
              highlighted={false}
            />
          </div>
        </TabsContent>

        {/* Yearly Plans */}
        <TabsContent value="yearly" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Basic Plan - Yearly */}
            <PricingCard
              title="Basic"
              description="For individuals getting started"
              price="$4.99"
              period="month"
              billingNote="billed annually"
              features={[
                "30,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Basic"
              onSelect={() => handlePlanSelection("basic-yearly")}
              highlighted={false}
            />

            {/* Standard Plan - Yearly */}
            <PricingCard
              title="Standard"
              description="For growing needs"
              price="$14.99"
              period="month"
              billingNote="billed annually"
              features={[
                "100,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Standard"
              onSelect={() => handlePlanSelection("standard-yearly")}
              highlighted={true}
            />

            {/* Plus Plan - Yearly */}
            <PricingCard
              title="Plus"
              description="For professionals"
              price="$24.99"
              period="month"
              billingNote="billed annually"
              features={[
                "200,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Plus"
              onSelect={() => handlePlanSelection("plus-yearly")}
              highlighted={false}
            />

            {/* Agency Plan - Yearly */}
            <PricingCard
              title="Agency"
              description="For teams and businesses"
              price="$49.99"
              period="month"
              billingNote="billed annually"
              features={[
                "500,000 words per month",
                "5,000 words per submission",
                "Priority customer support",
                "Full feature access"
              ]}
              ctaLabel="Choose Agency"
              onSelect={() => handlePlanSelection("agency-yearly")}
              highlighted={false}
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Free Plan */}
      <div className="mt-16 max-w-6xl mx-auto">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Free Plan</CardTitle>
            <CardDescription>Get started with our free plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-center">
              <span className="text-2xl font-bold text-foreground">$0</span>
              <span className="ml-1 text-muted-foreground">/forever</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="flex items-start">
                <div className="rounded-full h-5 w-5 mt-0.5 mr-2 flex items-center justify-center bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">3,000 words</h3>
                  <p className="text-sm text-muted-foreground">Per month</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full h-5 w-5 mt-0.5 mr-2 flex items-center justify-center bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">500 words</h3>
                  <p className="text-sm text-muted-foreground">Per submission</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full h-5 w-5 mt-0.5 mr-2 flex items-center justify-center bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Basic tools</h3>
                  <p className="text-sm text-muted-foreground">For casual users</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" onClick={() => router.push('/')}>
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-lg mb-2">How does billing work?</h3>
            <p className="text-muted-foreground">You'll be billed either monthly or annually depending on your chosen plan. Payment is processed securely via Paddle.</p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-muted-foreground">Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated amount for the remaining billing period. When downgrading, your new plan will take effect at the start of your next billing cycle.</p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-lg mb-2">What happens when I reach my word limit?</h3>
            <p className="text-muted-foreground">When you reach your monthly word limit, you'll be prompted to upgrade your plan to continue using the service. Your limit resets at the start of each billing cycle.</p>
          </div>
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-lg mb-2">Do unused words roll over to the next month?</h3>
            <p className="text-muted-foreground">No, unused words do not roll over to the next month. Your word count resets at the beginning of each billing cycle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Updated PricingCard component with onSelect event handler
function PricingCard({
  title,
  description,
  price,
  period,
  billingNote,
  features,
  ctaLabel,
  onSelect,
  highlighted,
}: {
  title: string
  description: string
  price: string
  period: string
  billingNote?: string
  features: string[]
  ctaLabel: string
  onSelect: () => void
  highlighted: boolean
}) {
  return (
    <Card className={`flex flex-col h-full ${highlighted ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
      <CardHeader className="flex-1">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          <span className="ml-1 text-sm font-medium text-muted-foreground">/{period}</span>
        </div>
        {billingNote && (
          <p className="text-sm text-muted-foreground mt-1">{billingNote}</p>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="rounded-full h-5 w-5 mt-0.5 mr-2 flex items-center justify-center bg-primary/20">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={highlighted ? "default" : "outline"}
          className="w-full"
          onClick={onSelect}
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
