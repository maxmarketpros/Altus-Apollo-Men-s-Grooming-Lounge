import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Men's Haircuts | Costa Mesa Barber | Altus Apollo Grooming Lounge",
  description:
    "Premium men's haircuts in Costa Mesa. Expert fades, tapers, skin fades, line-ups, and shape-ups. Walk-in barber with 17+ years experience. Consultation-driven precision cuts tailored to your face shape.",
}

const services = [
  "Classic Haircuts",
  "Modern Textured Cuts",
  "Fades & Skin Fades",
  "Tapers",
  "Line-Ups & Shape-Ups",
  "Gray Covering",
  "Scissor Cuts",
  "Razor Neck Clean-Up",
]

const faqs = [
  {
    question: "Do I need an appointment for a haircut?",
    answer:
      "While we welcome walk-ins, appointments are highly recommended to ensure you receive the tailored experience you deserve without waiting. Walk-ins are accommodated based on availability.",
  },
  {
    question: "What should I bring to my haircut appointment?",
    answer:
      "Bring any reference photos of styles you like. Most importantly, come prepared to discuss your lifestyle, styling preferences, and any concerns about your hair. The more we understand, the better your cut.",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "Our signature haircuts typically take 45-60 minutes. This includes consultation, precision cutting, straight razor neck clean-up, and premium styling. We don't rush—quality takes time.",
  },
  {
    question: "What's the difference between a fade and a taper?",
    answer:
      "A taper gradually shortens hair from top to bottom, maintaining some length at the sides. A fade takes hair down to the skin, creating a seamless blend from bald to longer hair. Skin fades take this even further for a clean, sharp look.",
  },
  {
    question: "Do you offer gray covering services?",
    answer:
      "Yes, we offer natural-looking gray covering that blends seamlessly with your natural hair color. This service can be added to any haircut for a refreshed, youthful appearance.",
  },
]

export default function HaircutsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/1.jpg"
            alt="Precision men's haircut"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Signature Bespoke Cut
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Premium Men&apos;s Haircuts in Costa Mesa
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              Consultation-driven precision cuts tailored to your face shape, hair type, and
              personal style. From classic cuts to modern fades, tapers, and skin fades.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Your Haircut</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Altus Apollo Difference
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Tailored Haircuts for the Discerning Gentleman
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Altus Apollo Men&apos;s Grooming Lounge, every men&apos;s haircut begins with a
                  consultation. We believe the perfect cut isn&apos;t one-size-fits-all—it&apos;s crafted
                  specifically for you.
                </p>
                <p>
                  Our Costa Mesa barbershop brings over 17 years of international grooming expertise
                  to every service. Whether you&apos;re looking for a classic cut, a modern fade, or a
                  complete transformation, we approach each haircut as an opportunity to enhance
                  your natural features.
                </p>
                <p>
                  Walk-ins are always welcome at our Costa Mesa location, though appointments are
                  recommended for the tailored experience you deserve.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/stock-photos/8.jpg"
                alt="Modern textured haircut result"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3]">
              <Image
                src="/stock-photos/4.jpg"
                alt="Haircut consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                It Starts with Consultation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Before scissors touch hair, we talk. What&apos;s your daily routine? How much time do
                  you spend styling? What looks have you admired? These questions help us understand
                  not just what you want, but what will work best for your lifestyle.
                </p>
                <p>
                  We analyze your face shape, hairline, hair texture, and growth patterns. A cut
                  that looks great on someone else may not be right for you—and vice versa. Our job
                  is to find the style that makes you look and feel your absolute best.
                </p>
                <p>
                  This consultation-first approach is why clients trust Altus Apollo for their most
                  important grooming needs. We don&apos;t just cut hair; we craft confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Fades, Tapers, Skin Fades & More
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From classic barbershop cuts to modern styles, our Costa Mesa barbers deliver
              precision results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service} className="bg-secondary p-6 flex items-center gap-4">
                <Check className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="aspect-[4/3] relative">
              <Image
                src="/stock-photos/7.jpg"
                alt="Clean fade profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/stock-photos/10.jpg"
                alt="Fade in progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/stock-photos/2.jpg"
                alt="Precision clipper work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Precision Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Finish
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Precision, Finish & Styling
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every haircut at Altus Apollo includes our signature finishing touches. A straight
                  razor neck clean-up creates those sharp, clean lines that separate a good haircut
                  from a great one.
                </p>
                <p>
                  We use premium styling products to complete your look, teaching you how to
                  recreate the style at home. Whether you prefer a natural finish, a textured look,
                  or a sleek, polished style, we&apos;ll show you exactly how to achieve it.
                </p>
                <p>
                  The result? A haircut that looks just as good on day 14 as it does on day one. A
                  cut you can confidently maintain until your next visit.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/stock-photos/11.jpg"
                  alt="Precision detail work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/stock-photos/12.jpg"
                  alt="Razor finish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Why Altus Apollo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Why Costa Mesa Chooses Altus Apollo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary">
              <p className="font-serif text-4xl text-accent mb-4">17+</p>
              <h3 className="font-serif text-xl text-foreground mb-2">Years Experience</h3>
              <p className="text-muted-foreground text-sm">
                International grooming expertise from Dubai to California
              </p>
            </div>
            <div className="text-center p-8 bg-secondary">
              <p className="font-serif text-4xl text-accent mb-4">100%</p>
              <h3 className="font-serif text-xl text-foreground mb-2">Consultation-Driven</h3>
              <p className="text-muted-foreground text-sm">
                Every cut begins with understanding your unique needs
              </p>
            </div>
            <div className="text-center p-8 bg-secondary">
              <p className="font-serif text-4xl text-accent mb-4">5-Star</p>
              <h3 className="font-serif text-xl text-foreground mb-2">Premium Experience</h3>
              <p className="text-muted-foreground text-sm">
                Luxury atmosphere with attention to every detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-none px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready for Your Best Haircut?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Book your appointment at Altus Apollo Men&apos;s Grooming Lounge and experience the
            difference precision and consultation make. Walk-ins welcome, appointments recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Your Haircut</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <a href="tel:+13478547551">(347) 854-7551</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <Link href="/services/beard" className="flex items-center gap-2">
                Explore Beard Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
