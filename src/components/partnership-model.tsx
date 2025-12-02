'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { scheduleMeeting } from "@/lib/scheduleMeeting"

const benefits = [
  "Proactive Maintenance: We fix breaks before you notice them.",
  "Prompt Engineering: We refine AI instructions for better results over time.",
  "Feature Additions: Add small capabilities as your needs evolve.",
  "Tool Updates: We handle API changes and software updates.",
  "Priority Support: Direct access to your engineer, not a ticket queue.",
  "Strategy Calls: Monthly reviews to identify new automation opportunities."
]

export function PartnershipModel() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Ongoing Partnership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Your Part-Time AI Operations Team
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Automation isn't a "set it and forget it" project. APIs change, business logic evolves, 
              and new AI models are released weekly.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our <span className="font-semibold text-foreground">AI Ops Retainer</span> ensures your systems 
              stay reliable and get smarter over time. We handle the technical complexity so you can 
              focus on growing your business.
            </p>
            
            <Button size="lg" onClick={scheduleMeeting} className="text-base">
              Discuss Partnership Options
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-muted/20 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">What's included in the retainer?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-background rounded-lg border border-border/50">
              <p className="text-sm font-medium text-center text-muted-foreground">
                "It's like having a CTO and an engineering team for a fraction of the cost."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

