import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Droplets,
  Sprout,
  Beef,
  TrendingUp,
  GraduationCap,
  Heart,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Users,
} from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Beef,
      title: "Livestock Management",
      description:
        "Track cattle health, GPS locations, breeding records, and growth patterns with AI-powered disease alerts.",
      color: "text-amber-600",
    },
    {
      icon: TrendingUp,
      title: "Market Access & Trading",
      description: "Real-time cattle marketplace with AI pricing, auction system, and direct buyer-seller connections.",
      color: "text-primary",
    },
    {
      icon: Droplets,
      title: "Water & Irrigation",
      description:
        "IoT sensors track water availability, AI predicts drought patterns, and suggests optimal irrigation.",
      color: "text-blue-600",
    },
    {
      icon: Sprout,
      title: "Crop & Soil Management",
      description: "Soil mapping, crop recommendations, and AI-powered disease detection for healthy harvests.",
      color: "text-green-600",
    },
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Access veterinary consultations, training modules, and community forums for peer learning.",
      color: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Health Services",
      description: "Track health events, vaccination reminders, and preventive care for humans and livestock.",
      color: "text-red-600",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Predictive analytics for crop yield, market trends, income tracking, and business insights.",
      color: "text-indigo-600",
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Track missing livestock, monitor grazing lands, and receive theft or disease outbreak alerts.",
      color: "text-orange-600",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Full-featured mobile app works offline with SMS support for areas with limited connectivity.",
      color: "text-cyan-600",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in Oromo, Amharic, Swahili, English, and other African languages.",
      color: "text-pink-600",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Machine learning predicts weather, prices, diseases, and optimal farming decisions.",
      color: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with 50,000+ farmers, share knowledge, and build cooperative partnerships.",
      color: "text-teal-600",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive suite of tools designed specifically for African agricultural management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
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
      </div>
    </section>
  )
}
