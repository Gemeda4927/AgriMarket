import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Beef, MapPin, TrendingUp, Shield, Users, Truck, DollarSign, Award, ArrowRight } from "lucide-react"

export function CattleMarket() {
  const marketFeatures = [
    {
      icon: Beef,
      title: "Live Cattle Listings",
      description: "Browse thousands of cattle listings with detailed health records, breed information, and pricing.",
      color: "text-amber-600",
    },
    {
      icon: MapPin,
      title: "Regional Markets",
      description: "Access cattle markets across Ethiopia, Kenya, Somalia, and East Africa with location-based search.",
      color: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Pricing",
      description: "AI-powered price predictions based on breed, age, weight, and market demand trends.",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Verified Sellers",
      description: "Trade with confidence through our seller verification system and buyer protection program.",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Auction System",
      description: "Participate in live cattle auctions with real-time bidding and transparent pricing.",
      color: "text-orange-600",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Integrated transportation and delivery services for safe cattle movement across regions.",
      color: "text-red-600",
    },
    {
      icon: DollarSign,
      title: "Secure Payments",
      description: "Mobile money integration with escrow protection for safe and convenient transactions.",
      color: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Quality Certification",
      description: "Veterinary-verified health certificates and breed authenticity documentation.",
      color: "text-indigo-600",
    },
  ]

  const featuredListings = [
    {
      breed: "Boran Bull",
      age: "3 years",
      weight: "450 kg",
      price: "ETB 85,000",
      location: "Addis Ababa, Ethiopia",
      image: "/healthy-boran-cattle-bull-brown-ethiopian-breed.jpg",
      verified: true,
    },
    {
      breed: "Ankole Cow",
      age: "4 years",
      weight: "380 kg",
      price: "ETB 72,000",
      location: "Nairobi, Kenya",
      image: "/ankole-cattle-with-long-horns-african-breed.jpg",
      verified: true,
    },
    {
      breed: "Zebu Heifer",
      age: "2 years",
      weight: "320 kg",
      price: "ETB 58,000",
      location: "Mombasa, Kenya",
      image: "/zebu-cattle-young-heifer-white-african-breed.jpg",
      verified: true,
    },
  ]

  return (
    <section id="cattle-market" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Cattle Marketplace</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Africa's Largest Digital Cattle Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Buy, sell, and trade cattle with confidence. Connect with verified sellers and buyers across East Africa.
          </p>
        </div>

        {/* Market Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketFeatures.map((feature, index) => (
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

        {/* Featured Listings */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Cattle Listings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.breed}
                    className="w-full h-full object-cover"
                  />
                  {listing.verified && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{listing.breed}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {listing.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Age</p>
                      <p className="font-semibold text-foreground">{listing.age}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-semibold text-foreground">{listing.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-2xl font-bold text-primary">{listing.price}</p>
                    </div>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Browse All Cattle Listings
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
