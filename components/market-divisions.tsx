import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, Wheat, Milk, Egg, Fish, Apple } from "lucide-react"

export function MarketDivisions() {
  const divisions = [
    {
      icon: Store,
      title: "Livestock Market",
      description: "Cattle, goats, sheep, and poultry trading with verified sellers and quality assurance.",
      stats: "15,000+ Active Listings",
      color: "bg-amber-50 dark:bg-amber-950/20",
      iconColor: "text-amber-600",
    },
    {
      icon: Wheat,
      title: "Crop & Grain Market",
      description: "Buy and sell cereals, pulses, and cash crops directly from farmers to buyers.",
      stats: "8,500+ Products",
      color: "bg-green-50 dark:bg-green-950/20",
      iconColor: "text-green-600",
    },
    {
      icon: Milk,
      title: "Dairy Products",
      description: "Fresh milk, cheese, butter, and dairy products from local producers.",
      stats: "3,200+ Suppliers",
      color: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Egg,
      title: "Poultry & Eggs",
      description: "Chickens, eggs, and poultry products with daily fresh deliveries.",
      stats: "5,800+ Daily Orders",
      color: "bg-orange-50 dark:bg-orange-950/20",
      iconColor: "text-orange-600",
    },
    {
      icon: Fish,
      title: "Fisheries",
      description: "Fresh and processed fish from lakes, rivers, and aquaculture farms.",
      stats: "1,200+ Fishermen",
      color: "bg-cyan-50 dark:bg-cyan-950/20",
      iconColor: "text-cyan-600",
    },
    {
      icon: Apple,
      title: "Fruits & Vegetables",
      description: "Farm-fresh produce delivered directly from gardens to your market.",
      stats: "12,000+ Fresh Items",
      color: "bg-red-50 dark:bg-red-950/20",
      iconColor: "text-red-600",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Complete Market Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Access specialized marketplaces for every agricultural product category
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <Card key={index} className={`border-border hover:shadow-lg transition-all ${division.color}`}>
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-background flex items-center justify-center mb-4`}>
                  <division.icon className={`h-6 w-6 ${division.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{division.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{division.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{division.stats}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Explore →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
