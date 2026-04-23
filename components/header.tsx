"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Men's Haircuts", href: "/services/haircuts" },
  { name: "Beard Trim & Sculpting", href: "/services/beard" },
  { name: "Hot Towel Shave", href: "/services/shave" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Altus Apollo Men's Grooming Lounge"
            width={240}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground outline-none">
              Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 bg-background border-border">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link
                    href={service.href}
                    className="cursor-pointer text-sm font-medium text-foreground/80 hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6">
            <a href="tel:+13478547551">(347) 854-7551</a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
            <Link href="/contact#booking-form">Book Service</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block pl-4 text-base font-medium text-foreground/80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="block text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <a href="tel:+13478547551" onClick={() => setMobileMenuOpen(false)}>
                  (347) 854-7551
                </a>
              </Button>
              <Button asChild className="w-full bg-primary text-primary-foreground">
                <Link href="/contact#booking-form" onClick={() => setMobileMenuOpen(false)}>
                  Book Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
