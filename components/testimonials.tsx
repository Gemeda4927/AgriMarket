import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Dairy Farmer, Kenya",
      image: "/african-woman-farmer-smiling.jpg",
      content:
        "AgriMarket360 transformed my dairy farm. The livestock tracking and health alerts helped me reduce losses by 40%. The marketplace connected me directly with buyers, doubling my income.",
      rating: 5,
    },
    {
      name: "James Omondi",
      role: "Crop Farmer, Uganda",
      image: "/african-man-farmer-in-field.jpg",
      content:
        "The AI-powered crop recommendations and irrigation scheduling increased my yield by 65%. I can now predict the best planting times and avoid crop diseases before they spread.",
      rating: 5,
    },
    {
      name: "Amina Hassan",
      role: "Pastoralist, Tanzania",
      image: "/african-woman-with-livestock.jpg",
      content:
        "Tracking my herd has never been easier. The GPS monitoring and disease alerts saved me from losing animals. The expert consultations are invaluable for someone in a remote area.",
      rating: 5,
    },
    {
      name: "David Mwangi",
      role: "Agricultural Cooperative Leader",
      image: "/african-man-agricultural-leader.jpg",
      content:
        "We use AgriMarket360 for our entire cooperative of 200+ farmers. The analytics dashboard helps us make data-driven decisions, and the marketplace has increased our collective revenue by 3x.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Farmers Across Africa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how AgriMarket360 is transforming lives and livelihoods
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
