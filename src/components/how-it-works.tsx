import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Hammer, RefreshCw, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "1. Discover & Audit",
    description: "We analyze your current workflows to identify high-impact opportunities for automation. You get a clear roadmap of what to automate and the ROI to expect.",
    details: ["Workflow Mapping", "Tech Stack Review", "ROI Calculation"]
  },
  {
    icon: Hammer,
    title: "2. Build & Implement",
    description: "We design and deploy custom AI agents and automations tailored to your business. No generic tools—everything connects to your existing stack.",
    details: ["Custom AI Agents", "Integration Setup", "Testing & Validation"]
  },
  {
    icon: RefreshCw,
    title: "3. Maintain & Scale",
    description: "AI moves fast. We act as your fractional AI Ops team, monitoring your systems, fixing issues, and implementing new features as technology evolves.",
    details: ["24/7 Monitoring", "Prompt Optimization", "Monthly Improvements"]
  }
]

export function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            From Manual Chaos to <span className="text-primary">Automated Efficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just build software; we partner with you to transform your operations.
            Our proven three-step process ensures we solve the right problems with the right tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-muted -z-10" />

          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 bg-background relative">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 border border-primary/20">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

