import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Beef, Droplets, Users, Mountain, CheckCircle2 } from "lucide-react"

export function Solutions() {
  const problemCategories = [
    {
      icon: Sprout,
      title: "Land, Soil & Crop Management",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      problems: 14,
      solutions: [
        "AI-powered soil analysis and fertility mapping",
        "Crop recommendation system based on soil type and climate",
        "Virtual land inspection with satellite imagery",
        "Seed and fertilizer marketplace with quality verification",
        "Expert guidance platform connecting farmers with agronomists",
        "Crop rotation planning and management tools",
        "Seed quality testing and certification",
        "Rainfall prediction and planting calendar",
        "Machinery rental and sharing platform",
        "Post-harvest storage and management guidance",
      ],
      image: "/african-farmer-examining-soil-green-field.jpg",
    },
    {
      icon: Beef,
      title: "Livestock & Pasture Management",
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      problems: 10,
      solutions: [
        "Real-time livestock tracking with GPS and IoT",
        "Early disease detection using AI image recognition",
        "Pasture monitoring and grazing management",
        "Veterinary telemedicine and consultation",
        "Livestock breeding and genetics database",
        "Drone-based livestock monitoring",
        "Lost/stolen livestock recovery system",
        "Remote health monitoring with wearable sensors",
        "Quality-focused breeding recommendations",
        "Pastoralist community support network",
      ],
      image: "/livestock-management-technology-african-cattle.jpg",
    },
    {
      icon: Droplets,
      title: "Water & Health Management",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      problems: 5,
      solutions: [
        "Water source mapping and accessibility tracking",
        "Smart irrigation system recommendations",
        "Telemedicine platform for rural healthcare",
        "Veterinary health services network",
        "Mobile health clinics coordination",
        "Water quality testing and monitoring",
        "Irrigation scheduling based on crop needs",
        "Emergency health response system",
      ],
      image: "/irrigation-system-african-farm-water-management.jpg",
    },
    {
      icon: Users,
      title: "Social, Market & Knowledge",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      problems: 7,
      solutions: [
        "Digital marketplace with real-time pricing",
        "Expert network and knowledge sharing platform",
        "Infrastructure mapping and logistics optimization",
        "Community connection and social networking",
        "Research-based training and education programs",
        "Market intelligence and price forecasting",
        "Mobile-first platform for remote access",
        "Multi-language support for diverse communities",
      ],
      image: "/african-farmers-community-meeting-knowledge-sharing.jpg",
    },
    {
      icon: Mountain,
      title: "Natural Resources & Specialty Crops",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      problems: 4,
      solutions: [
        "Mineral detection and land value assessment",
        "Coffee variety selection and temperature optimization",
        "Organic vs inorganic farming guidance",
        "Crop disease prevention and early testing",
        "Specialty crop market connections",
        "Resource extraction partnership facilitation",
      ],
      image: "/coffee-plantation-ethiopia-specialty-crops.jpg",
    },
  ]

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Complete Solutions</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Solving Every Agricultural Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Oromoo addresses 40+ critical problems faced by farmers and pastoralists across Africa with comprehensive,
            technology-driven solutions
          </p>
        </div>

        <div className="space-y-8">
          {problemCategories.map((category, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${category.bgColor} opacity-20`}></div>
                </div>
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-sm">{category.problems} Problems Solved</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.solutions.map((solution, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-5 w-5 ${category.color} flex-shrink-0 mt-0.5`} />
                          <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10 inline-block">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">40+ Problems. One Platform.</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                From soil analysis to livestock tracking, market intelligence to health services - Oromoo is your
                complete agricultural technology partner
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Mobile-First
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Expert Network
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Real-Time Data
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
