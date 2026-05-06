import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Men's Haircuts", href: "/services/haircuts" },
    { name: "Beard Trim & Sculpting", href: "/services/beard" },
    { name: "Hot Towel Shave", href: "/services/shave" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            A Reservation for Your Best Self
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Experience the art of refined grooming at Altus Apollo. Walk-ins welcome, appointments
            recommended for the tailored experience you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base"
            >
              <Link href="/contact#booking-form">Book Your Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              <a href="tel:+13478547551">(347) 854-7551</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Altus Apollo"
              width={220}
              height={73}
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A sanctuary for the discerning gentleman. Precision haircuts, meticulous beard
              sculpting, and traditional grooming rituals in Costa Mesa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Navigate</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  1175 Baker St Unit E 19
                  <br />
                  Costa Mesa, CA 92626
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+13478547551"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  (347) 854-7551
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:maherhamdan82@hotmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  maherhamdan82@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Tue - Sat: 11AM - 7PM</p>
                  <p>Sun: 11AM - 5PM</p>
                  <p>Mon: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Altus Apollo Men&apos;s Grooming Lounge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/sculpture_mh?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
