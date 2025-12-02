import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Cpu, GitBranch, Layers } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Who We Are</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Engineers, Not Just Consultants
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a technical team focused on one thing: <b>Automation ROI</b>. 
              We don't sell slide decks or vague strategies. We build, deploy, and maintain 
              systems that do the work for you.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Led by experienced software engineers, Revyo Software bridges the gap between 
              complex AI capabilities and practical business needs. We speak API, 
              but we measure success in hours saved and dollars earned.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <h4 className="font-bold text-2xl mb-1 text-primary">100%</h4>
                    <p className="text-sm text-muted-foreground">Focused on Execution</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <h4 className="font-bold text-2xl mb-1 text-primary">0%</h4>
                    <p className="text-sm text-muted-foreground">Outsourcing</p>
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 border-border/60">
              <CardContent className="pt-0">
                <div className="p-3 bg-background rounded-lg w-fit border border-border mb-4">
                  <Terminal className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Code-First Approach</h3>
                <p className="text-muted-foreground text-sm">
                  We build robust, scalable integrations using code, not just fragile no-code zapier glues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-border/60">
              <CardContent className="pt-0">
                <div className="p-3 bg-background rounded-lg w-fit border border-border mb-4">
                  <Cpu className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Model Agnostic</h3>
                <p className="text-muted-foreground text-sm">
                  We use the best AI model for the job—whether it's GPT-4, Claude, or a local open-source model.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-border/60">
              <CardContent className="pt-0">
                <div className="p-3 bg-background rounded-lg w-fit border border-border mb-4">
                  <GitBranch className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Version Controlled</h3>
                <p className="text-muted-foreground text-sm">
                  Your business logic is treated like software: versioned, tested, and safely deployed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-border/60">
              <CardContent className="pt-0">
                <div className="p-3 bg-background rounded-lg w-fit border border-border mb-4">
                  <Layers className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Stack</h3>
                <p className="text-muted-foreground text-sm">
                  From the database to the frontend, we handle the entire technical stack.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
