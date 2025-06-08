'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Shield, Users, Zap, Settings, ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/20 min-h-screen overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-10 animate-pulse">
          <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-32 right-[15%] opacity-10 animate-pulse delay-1000">
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Database className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="absolute top-[60%] left-[5%] opacity-10 animate-pulse delay-2000">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
            <Shield className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[8%] opacity-10 animate-pulse delay-3000">
          <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <Settings className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="absolute top-[45%] right-[25%] opacity-10 animate-pulse delay-500">
          <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <Zap className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[20%] opacity-10 animate-pulse delay-1500">
          <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
            <Users className="h-8 w-8 text-cyan-500" />
          </div>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl" />
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-lg rotate-45 blur-lg" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-lg rotate-12 blur-lg" />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Enterprise Software Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Expert Software Consulting for{" "}
            <span className="text-primary">Modern Enterprises</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We deliver custom software solutions for startups and government clients, 
            specializing in system integration, digital transformation, and enterprise-grade applications.
          </p>
          
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => {
                // go to contact section
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}>
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => {
                // go to services section
                const servicesSection = document.getElementById('services')
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}>
                Learn More
              </Button>
            </div>

            {/* Tech Feature Points */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
} 