import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
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
              ctaLink="/auth/signin?plan=basic-monthly"
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
              ctaLink="/auth/signin?plan=standard-monthly"
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
              ctaLink="/auth/signin?plan=plus-monthly"
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
              ctaLink="/auth/signin?plan=agency-monthly"
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
              ctaLink="/auth/signin?plan=basic-yearly"
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
              ctaLink="/auth/signin?plan=standard-yearly"
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
              ctaLink="/auth/signin?plan=plus-yearly"
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
              ctaLink="/auth/signin?plan=agency-yearly"
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
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>3,000 words per month</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>500 words per submission limit</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Standard customer support</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-64" variant="outline" asChild>
              <Link href="/auth/signin?plan=free">
                Get Started for Free
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <FAQItem
            question="How does billing work?"
            answer="You'll be billed either monthly or annually depending on your chosen plan. Payment is processed securely via Paddle."
          />
          <FAQItem
            question="Can I upgrade or downgrade my plan?"
            answer="Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated amount for the remaining billing period. When downgrading, your new plan will take effect at the start of your next billing cycle."
          />
          <FAQItem
            question="What happens when I reach my word limit?"
            answer="When you reach your monthly word limit, you'll be prompted to upgrade your plan to continue using the service. Your limit resets at the start of each billing cycle."
          />
          <FAQItem
            question="Do unused words roll over to the next month?"
            answer="No, unused words do not roll over to the next month. Your word count resets at the beginning of each billing cycle."
          />
        </div>
      </div>
    </div>
  )
}

function PricingCard({
  title,
  description,
  price,
  period,
  billingNote,
  features,
  ctaLabel,
  ctaLink,
  highlighted,
}: {
  title: string
  description: string
  price: string
  period: string
  billingNote?: string
  features: string[]
  ctaLabel: string
  ctaLink: string
  highlighted: boolean
}) {
  return (
    <Card className={`flex flex-col h-full ${
      highlighted 
        ? 'border-primary shadow-lg relative before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:blur-xl'
        : ''
    }`}>
      {highlighted && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      <CardHeader className={`pb-8 ${highlighted ? 'pt-8' : ''}`}>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-baseline justify-center mb-6">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="ml-1 text-muted-foreground">/{period}</span>
        </div>
        {billingNote && (
          <div className="text-sm text-muted-foreground mb-6 text-center">
            {billingNote}
          </div>
        )}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button 
          className="w-full" 
          variant={highlighted ? "default" : "outline"}
          asChild
        >
          <Link href={ctaLink}>
            {ctaLabel}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-border pb-4">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}
