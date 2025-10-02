import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Settings, Rocket, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Setup",
      description:
        "Create your account in minutes. Add your farm details, livestock inventory, and connect IoT devices.",
      step: "01",
    },
    {
      icon: Settings,
      title: "Configure Your Dashboard",
      description:
        "Customize your dashboard with the features you need. Set up alerts, notifications, and preferences.",
      step: "02",
    },
    {
      icon: Rocket,
      title: "Start Managing",
      description: "Track crops, monitor livestock, access the marketplace, and get AI-powered insights instantly.",
      step: "03",
    },
    {
      icon: TrendingUp,
      title: "Grow & Scale",
      description: "Use predictive analytics to optimize operations, increase yields, and maximize your revenue.",
      step: "04",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From setup to success, we make it easy to transform your farming operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border h-full">
                <CardContent className="pt-6">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
