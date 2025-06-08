'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to discuss your software consulting needs and discover how we can help 
            transform your business with custom technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our team directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@revyosoftware.com</p>
                    <p className="text-muted-foreground">contracts@revyosoftware.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Serving clients worldwide</p>
                    <p className="text-sm text-muted-foreground">Based in Jacksonville, FL, USA 🇺🇸 </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                    <p className="text-sm text-muted-foreground">Emergency support available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
                <p className="mb-4 opacity-90">
                  Schedule a free consultation to discuss your project requirements and explore how we can help.
                </p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    window.open('https://calendly.com/jess-daniel/30min', '_blank')
                  }}
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 