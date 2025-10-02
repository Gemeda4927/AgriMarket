import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MapPin, BarChart3, Target, Lightbulb, ArrowRight, DollarSign, Package } from "lucide-react"

export function MarketAnalysis() {
  const marketLocations = [
    {
      name: "Addis Ababa Central Market",
      region: "Ethiopia",
      type: "Livestock & Crops",
      avgPrice: "ETB 75,000",
      volume: "2,500+ weekly",
      trend: "+12%",
      image: "/addis-ababa-market-busy-livestock-trading.jpg",
      bestFor: ["Cattle", "Grains", "Coffee"],
    },
    {
      name: "Nairobi Agricultural Hub",
      region: "Kenya",
      type: "Mixed Agriculture",
      avgPrice: "KES 95,000",
      volume: "3,200+ weekly",
      trend: "+8%",
      image: "/nairobi-agricultural-market-vendors-produce.jpg",
      bestFor: ["Dairy", "Vegetables", "Poultry"],
    },
    {
      name: "Mombasa Coastal Market",
      region: "Kenya",
      type: "Fisheries & Produce",
      avgPrice: "KES 45,000",
      volume: "1,800+ weekly",
      trend: "+15%",
      image: "/mombasa-fish-market-fresh-catch-vendors.jpg",
      bestFor: ["Fish", "Fruits", "Coconuts"],
    },
    {
      name: "Dire Dawa Trading Center",
      region: "Ethiopia",
      type: "Livestock Specialist",
      avgPrice: "ETB 68,000",
      volume: "1,900+ weekly",
      trend: "+10%",
      image: "/dire-dawa-livestock-market-camels-cattle.jpg",
      bestFor: ["Camels", "Goats", "Sheep"],
    },
  ]

  const analysisFeatures = [
    {
      icon: BarChart3,
      title: "Price Trend Analysis",
      description: "AI-powered price predictions based on historical data, seasonal patterns, and market demand.",
      color: "text-blue-600",
    },
    {
      icon: Target,
      title: "Best Market Recommendations",
      description:
        "Get personalized recommendations on which market to sell or buy based on your location and product.",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Compare prices across different regions and find the most profitable markets near you.",
      color: "text-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "Receive actionable insights on market timing, pricing strategies, and demand forecasts.",
      color: "text-amber-600",
    },
  ]

  return (
    <section id="market-analysis" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Market Intelligence</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            AI-Powered Market Analysis & Recommendations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Make informed decisions with real-time market data, price comparisons, and personalized recommendations
          </p>
        </div>

        {/* Analysis Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analysisFeatures.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <feature.icon className={`h-10 w-10 ${feature.color} mb-4`} />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Locations */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Top Agricultural Markets</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {marketLocations.map((market, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={market.image || "/placeholder.svg"}
                    alt={market.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {market.trend} Growth
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{market.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {market.region} • {market.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <DollarSign className="h-3 w-3" />
                        <p className="text-xs">Avg Price</p>
                      </div>
                      <p className="font-semibold text-foreground text-sm">{market.avgPrice}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Package className="h-3 w-3" />
                        <p className="text-xs">Volume</p>
                      </div>
                      <p className="font-semibold text-foreground text-sm">{market.volume}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <TrendingUp className="h-3 w-3" />
                        <p className="text-xs">Trend</p>
                      </div>
                      <p className="font-semibold text-primary text-sm">{market.trend}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Best for:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {market.bestFor.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Market Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Comparison Tool */}
        <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Compare Markets & Get Recommendations</CardTitle>
            <CardDescription className="text-base">
              Enter your product details and location to find the best market for your needs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Target className="mr-2 h-5 w-5" />
              Get Market Recommendation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
