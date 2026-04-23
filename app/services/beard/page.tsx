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
  title: "Beard Trim & Sculpting | Costa Mesa Beard Barber | Altus Apollo",
  description:
    "Expert beard trim and sculpting in Costa Mesa. Precision line-ups, shape-ups, hot towel treatment, and premium conditioning. Professional beard barber with international grooming experience.",
}

const services = [
  "Full Beard Sculpting",
  "Beard Trim & Maintenance",
  "Line-Ups & Shape-Ups",
  "Mustache Grooming",
  "Hot Towel Treatment",
  "Beard Conditioning",
  "Neck & Cheek Clean-Up",
  "Beard Design & Styling",
]

const faqs = [
  {
    question: "How often should I get my beard professionally trimmed?",
    answer:
      "For maintaining a well-groomed appearance, we recommend professional beard maintenance every 2-3 weeks. However, this varies based on your beard's growth rate and the style you're maintaining. Some styles require more frequent touch-ups for sharp lines.",
  },
  {
    question: "Can you help me decide on a beard style?",
    answer:
      "Absolutely. Our consultation process includes analyzing your face shape, jaw structure, and natural growth patterns to recommend beard styles that complement your features. We'll discuss options and help you find the perfect look.",
  },
  {
    question: "What products do you use for beard treatment?",
    answer:
      "We use premium beard oils, balms, and conditioning products that nourish the hair and skin beneath. These products soften coarse beard hair, reduce itching, and promote healthy growth while adding a refined finish to your look.",
  },
  {
    question: "Do you offer beard coloring or gray coverage?",
    answer:
      "Yes, we offer natural-looking beard coloring services that can reduce gray or enhance your beard's natural color. The results are subtle and sophisticated, never obvious or harsh.",
  },
  {
    question: "What's included in the hot towel treatment?",
    answer:
      "Our hot towel treatment softens beard hair, opens pores, and relaxes facial muscles. It's followed by premium oils and conditioning treatments that leave your beard soft, manageable, and healthy-looking.",
  },
]

export default function BeardPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/6.jpg"
            alt="Professional beard sculpting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Executive Beard Sculpting
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Professional Beard Trim & Sculpting in Costa Mesa
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              Detailed shaping, precision line-ups, hot towel treatment, and premium conditioning.
              Expert beard sculpting tailored to your face structure.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Beard Service</Link>
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
                Beard Expertise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                More Than a Trim. Precision Sculpting.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A great beard doesn&apos;t just happen—it&apos;s sculpted. At Altus Apollo Men&apos;s Grooming
                  Lounge in Costa Mesa, our beard services go far beyond basic trimming. We approach
                  beard grooming as an art form.
                </p>
                <p>
                  Every face is different. Your jawline, cheekbones, and face shape determine which
                  beard style will enhance your features. Our consultation process ensures we
                  understand your goals and recommend the approach that will make you look your
                  best.
                </p>
                <p>
                  Whether you&apos;re maintaining a full beard, shaping stubble, or getting precision
                  line-ups and shape-ups, our Costa Mesa beard barbers deliver meticulous results
                  every time.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/stock-photos/5.jpg"
                alt="Beard trimming with clippers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sculpting Process */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3]">
              <Image
                src="/stock-photos/15.jpg"
                alt="Precision beard scissor work"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Beard Shaping for Your Face Structure
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The key to a great-looking beard is understanding how it relates to your face. A
                  beard that&apos;s too wide can make a round face look rounder. Lines that are too sharp
                  can look unnatural. Balance and proportion are everything.
                </p>
                <p>
                  We analyze your facial structure and natural growth patterns before making the
                  first cut. Using a combination of clippers, scissors, and precision tools, we
                  sculpt your beard to complement your features—creating definition where you need
                  it and soft transitions where appropriate.
                </p>
                <p>
                  The result is a beard that looks intentional, refined, and unmistakably
                  well-maintained.
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
              Line-Ups, Shape-Ups & Full Sculpting
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From quick maintenance to complete beard transformations, our Costa Mesa barbershop
              delivers precision results.
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

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="aspect-[16/9] relative">
              <Image
                src="/stock-photos/9.jpg"
                alt="Full beard styling"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[16/9] relative">
              <Image
                src="/stock-photos/3.jpg"
                alt="Refined gentleman after grooming"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hot Towel & Conditioning */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Premium Finishing
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Hot Towel Treatment & Premium Conditioning
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The difference between a good beard service and a great one is in the details. Our
                  executive beard sculpting includes hot towel treatments that soften hair and
                  relax the skin beneath—preparing your beard for precision work and leaving it
                  healthy.
                </p>
                <p>
                  Following the shaping, we apply premium beard oils and conditioning treatments.
                  These products nourish both the hair and skin, reducing itchiness, adding shine,
                  and making your beard soft and manageable.
                </p>
                <p>
                  You&apos;ll leave not just looking sharp, but with a beard that feels as good as it
                  looks. We&apos;ll also recommend products and techniques for maintaining that freshly
                  groomed look between visits.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/stock-photos/13.jpg"
                  alt="Premium grooming tools"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/stock-photos/17.jpg"
                  alt="Professional scissors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Expert Beard Design */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Difference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Why Expert Beard Design Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary">
              <h3 className="font-serif text-xl text-foreground mb-4">Facial Enhancement</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A well-sculpted beard can define your jawline, balance facial proportions, and
                highlight your best features. Poor shaping does the opposite.
              </p>
            </div>
            <div className="text-center p-8 bg-secondary">
              <h3 className="font-serif text-xl text-foreground mb-4">Professional Image</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In professional settings, an unkempt beard can undermine your appearance. Regular
                expert maintenance ensures you always look polished and intentional.
              </p>
            </div>
            <div className="text-center p-8 bg-secondary">
              <h3 className="font-serif text-xl text-foreground mb-4">Healthy Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional beard care promotes healthy growth, reduces skin irritation, and keeps
                your beard looking full and well-maintained.
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
            Ready for Expert Beard Sculpting?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Book your appointment at Altus Apollo Men&apos;s Grooming Lounge and experience the
            difference precision beard work makes. Walk-ins welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Beard Service</Link>
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
              <Link href="/services/shave" className="flex items-center gap-2">
                Explore Hot Towel Shave <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
