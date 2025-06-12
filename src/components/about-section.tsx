import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4">About Revyo Software</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner in Software Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Revyo Software, we specialize in delivering enterprise-grade software solutions 
              that drive digital transformation for startups and local businesses. Our team 
              of experienced developers and consultants brings deep technical expertise and industry 
              knowledge to every project.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Proven Expertise</h3>
                  <p className="text-muted-foreground">
                    Years of experience delivering complex software solutions across various industries and sectors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Client-Centric Approach</h3>
                  <p className="text-muted-foreground">
                    We work closely with our clients to understand their unique needs and deliver tailored solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Rigorous testing and quality control processes ensure reliable, secure, and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Strategic Focus</h3>
                <p className="text-muted-foreground text-sm">
                  We align technology solutions with your business objectives for maximum impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">
                  Certified professionals with extensive experience in enterprise software development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Standards</h3>
                <p className="text-muted-foreground text-sm">
                  Adherence to industry best practices and compliance requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Proven Results</h3>
                <p className="text-muted-foreground text-sm">
                  Track record of successful project delivery and satisfied clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 