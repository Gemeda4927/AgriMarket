import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-10 opacity-90 text-pretty leading-relaxed">
            Join thousands of farmers who are already using AgriMarket360 to increase yields, reduce losses, and
            maximize revenue. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">No credit card required • Free 14-day trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
