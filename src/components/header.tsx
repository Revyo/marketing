'use client'

import { useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { RevyoLogo } from "./revyo-logo"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (!targetId) {
      setIsOpen(false)
      return
    }

    if (pathname === '/') {
      e.preventDefault()
      handleSmoothScroll(targetId)
      setIsOpen(false)
      return
    }

    e.preventDefault()
    router.push(`/#${targetId}`)
    setIsOpen(false)
  }

  const navItems = [
    { href: "/#process", label: "Process", id: "process" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#contact", label: "Contact", id: "contact" },
    { href: "/partners", label: "Partners" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <RevyoLogo className="text-primary" width={180} height={40} />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader className='hidden'>
              <SheetTitle className="text-left">Navigation</SheetTitle>
              <SheetDescription className="text-left">
                Navigate to different sections of the website
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block px-4 py-3 text-lg font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
