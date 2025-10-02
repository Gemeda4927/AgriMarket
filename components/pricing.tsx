import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Freemium",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Basic farm tracking",
        "Livestock logs",
        "Simple market info",
        "Community access",
        "Mobile app access",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Subscription",
      price: "$29",
      period: "/month",
      description: "For serious farmers",
      features: [
        "Everything in Freemium",
        "Advanced AI insights",
        "Multi-channel marketing",
        "Predictive analytics",
        "Expert consultation",
        "Priority support",
      ],
      cta: "Start Trial",
      popular: true,
    },
    {
      name: "Premium Marketplace",
      price: "$99",
      period: "/month",
      description: "For market leaders",
      features: [
        "Everything in Subscription",
        "Commission on sales",
        "Logistics support",
        "Featured listings",
        "Advanced marketing tools",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: [
        "Everything in Premium",
        "Custom AI models",
        "Drone monitoring",
        "Government/NGO integration",
        "White-label options",
        "Custom SLA",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-border relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
