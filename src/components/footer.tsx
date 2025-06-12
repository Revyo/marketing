'use client'

import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'

export function Footer() {
  const router = useRouter()

  const handleCareersClick = () => {
    router.push('/careers')
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-2xl text-primary">
              Revyo Software
            </div>
            <p className="text-muted-foreground text-sm">
              Expert software consulting services for startups and local businesses. 
              Custom development, system integration, and digital transformation solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Custom Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">System Integration</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Enterprise Security</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Digital Transformation</a></li>
              <li><a href="/mvp-services" className="hover:text-foreground transition-colors">MVP Services</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/showcase" className="hover:text-foreground transition-colors">Showcase</a></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer" onClick={handleCareersClick} onKeyDown={handleCareersClick}>Careers</span></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@revyosoftware.com</li>
              <li>contracts@revyosoftware.com</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Revyo Software. All rights reserved.</p>
          <p>Based in Jacksonville, FL, USA 🇺🇸 </p>
        </div>
      </div>
    </footer>
  )
} 