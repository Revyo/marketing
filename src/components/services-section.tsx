import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Shield, Users, Zap, Settings } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built from the ground up to meet your unique business requirements.",
    features: ["Web Applications", "Mobile Solutions", "Desktop Software", "API Development"]
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Seamlessly connect your existing systems and streamline data flow across your organization.",
    features: ["Database Integration", "Third-party APIs", "Legacy System Modernization", "Cloud Migration"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Comprehensive security solutions to protect your critical business data and systems.",
    features: ["Security Audits", "Compliance Solutions", "Access Management", "Data Protection"]
  },
  {
    icon: Users,
    title: "Government Contracts",
    description: "Specialized services for local government agencies with deep understanding of public sector needs.",
    features: ["Compliance Standards", "Public Data Systems", "Citizen Services", "Reporting Solutions"]
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your business processes and leverage technology for competitive advantage.",
    features: ["Process Automation", "Cloud Solutions", "Analytics & BI", "Digital Strategy"]
  },
  {
    icon: Settings,
    title: "Consulting & Support",
    description: "Expert guidance and ongoing support to ensure your technology investments deliver results.",
    features: ["Technical Consulting", "Architecture Review", "Performance Optimization", "24/7 Support"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end software consulting services 
            tailored to startups and government clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 