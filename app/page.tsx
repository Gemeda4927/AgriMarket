import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { CattleMarket } from "@/components/cattle-market"
import { MarketAnalysis } from "@/components/market-analysis"
import { MarketDivisions } from "@/components/market-divisions"
import { Solutions } from "@/components/solutions"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <CattleMarket />
      <MarketAnalysis />
      <MarketDivisions />
      <Solutions />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
