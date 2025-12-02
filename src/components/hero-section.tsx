'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { scheduleMeeting } from "@/lib/scheduleMeeting"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-normal">
          AI Automation for Agencies & SMBs
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
          Automate Your Operations <br />
          <span className="text-primary">with AI Agents</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          We turn your manual, repetitive processes into intelligent workflows that save time, reduce errors, and help you scale without adding headcount.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 h-12" onClick={scheduleMeeting}>
            Book a Free AI Workflow Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 h-12" onClick={() => {
             const processSection = document.getElementById('process')
             if (processSection) {
               processSection.scrollIntoView({ behavior: 'smooth' })
             }
          }}>
            How It Works
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div>
             <p className="text-3xl font-bold text-foreground">10+</p>
             <p className="text-sm text-muted-foreground mt-1">Hours Saved / Wk</p>
           </div>
           <div>
             <p className="text-3xl font-bold text-foreground">24/7</p>
             <p className="text-sm text-muted-foreground mt-1">Automated Ops</p>
           </div>
           <div>
             <p className="text-3xl font-bold text-foreground">0</p>
             <p className="text-sm text-muted-foreground mt-1">New Hires Needed</p>
           </div>
           <div>
             <p className="text-3xl font-bold text-foreground">100%</p>
             <p className="text-sm text-muted-foreground mt-1">Custom Built</p>
           </div>
        </div>
      </div>
    </section>
  )
}
