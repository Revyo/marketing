'use client'

import { useActionState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm } from "@/app/actions/contact"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormState {
  success?: boolean
  message?: string
  error?: string
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: FormState, formData: FormData): Promise<FormState> => {
      try {
        const result = await submitContactForm(formData)
        return {
          success: true,
          message: result.message
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'An unexpected error occurred'
        }
      }
    },
    { success: false }
  )

  // Reset form on successful submission
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement
      if (form) {
        form.reset()
      }
    }
  }, [state.success])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {state.success && state.message && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        {state.error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {state.error}
            </AlertDescription>
          </Alert>
        )}

        <form id="contact-form" action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="Your first name" 
                required
                disabled={isPending}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Your last name" 
                required
                disabled={isPending}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="your.email@company.com" 
              required
              disabled={isPending}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organization">Company/Organization</Label>
            <Input 
              id="organization" 
              name="organization"
              placeholder="Your company name" 
              disabled={isPending}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type</Label>
            <Input 
              id="projectType" 
              name="projectType"
              placeholder="e.g., Web Application, System Integration" 
              disabled={isPending}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us about your project requirements..."
              className="min-h-[120px]"
              required
              disabled={isPending}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 