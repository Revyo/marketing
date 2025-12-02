import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, FileText, Users, BarChart3, Database } from "lucide-react"

const useCases = [
  {
    icon: Mail,
    title: "Smart Lead Qualification",
    description: "Automatically capture, enrich, and score leads from forms or emails. AI drafts personalized responses and schedules meetings with qualified prospects.",
    result: "Save 10+ hours/week on sales admin"
  },
  {
    icon: MessageSquare,
    title: "Customer Support Triage",
    description: "Route incoming tickets to the right department and draft instant answers for common queries. Escalate complex issues to humans with full context.",
    result: "Reduce response time by 70%"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Extract data from invoices, contracts, or resumes automatically. Transform unstructured PDFs into structured data in your CRM or database.",
    result: "Eliminate manual data entry errors"
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Aggregate data from marketing, sales, and finance tools. AI analyzes trends and generates weekly executive summaries delivered to Slack or Email.",
    result: "Instant visibility into metrics"
  },
  {
    icon: Users,
    title: "Internal Knowledge Base",
    description: "A custom RAG (Retrieval-Augmented Generation) chatbot trained on your SOPs and Notion docs. Staff gets instant answers to procedure questions.",
    result: "Faster onboarding & less distraction"
  },
  {
    icon: Database,
    title: "Legacy System Bridge",
    description: "Connect old, disconnected software with modern AI agents. Read/write data to legacy databases via simple natural language commands.",
    result: "Modernize without rebuilding"
  }
]

export function UseCases() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">Real-World Applications</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            What We Automate
          </h2>
          <p className="text-lg text-muted-foreground">
            We build practical, high-ROI tools that integrate with the software you already use.
            No experimental tech—just solutions that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-background rounded-lg border border-border">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-primary/5 text-primary text-xs font-medium px-3 py-2 rounded-md inline-block">
                  {useCase.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

