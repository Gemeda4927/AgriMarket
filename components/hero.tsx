import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/african-farmers-working-in-green-fields-with-cattl.jpg"
          alt="African agricultural landscape"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Empowering African Farmers with Technology
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Africa's Premier <span className="text-primary">Cattle Market</span> & Farm Platform
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Oromoo connects African farmers, pastoralists, and livestock traders with a comprehensive platform for
            cattle trading, agricultural management, and market intelligence powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
