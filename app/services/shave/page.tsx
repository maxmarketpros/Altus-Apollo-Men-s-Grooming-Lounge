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
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Hot Towel Shave & Razor Shave | Costa Mesa | Altus Apollo",
  description:
    "Experience a traditional hot towel shave in Costa Mesa. Premium straight razor shave with multi-step ritual, pre-shave oil, double hot towel prep, and cooling aftershave balm. Luxury grooming experience.",
}

const steps = [
  {
    number: "01",
    title: "Pre-Shave Preparation",
    description:
      "We begin with premium pre-shave oil to soften the beard and prepare the skin. This creates a protective barrier and allows the razor to glide smoothly.",
  },
  {
    number: "02",
    title: "Double Hot Towel Treatment",
    description:
      "Warm, steam-infused towels are applied to open pores, soften facial hair, and relax the skin. This traditional technique is essential for a close, comfortable shave.",
  },
  {
    number: "03",
    title: "Premium Lather Application",
    description:
      "Rich, warm lather is applied with a traditional brush, lifting the hair away from the skin and providing optimal cushioning for the razor.",
  },
  {
    number: "04",
    title: "Straight Razor Shave",
    description:
      "Using a precisely honed straight razor, we shave with the grain for the closest possible cut. Multiple passes ensure complete smoothness without irritation.",
  },
  {
    number: "05",
    title: "Cooling Aftershave Finish",
    description:
      "A cooling aftershave balm soothes the skin, closes pores, and leaves your face feeling refreshed and invigorated. The ritual is complete.",
  },
]

const faqs = [
  {
    question: "Is a straight razor shave safe?",
    answer:
      "Absolutely. In the hands of an experienced barber, a straight razor shave is completely safe. Our barbers have years of experience and use properly sanitized, razor-sharp blades. The technique requires skill, which is why you'll want to trust a professional.",
  },
  {
    question: "How close is a straight razor shave compared to regular shaving?",
    answer:
      "A professional straight razor shave is the closest shave you can get. The single, ultra-sharp blade cuts hair at the skin level without the tugging and multiple-pass irritation common with cartridge razors. Most clients experience 1-2 days of complete smoothness.",
  },
  {
    question: "I have sensitive skin. Can I still get a hot towel shave?",
    answer:
      "Yes. We use premium, hypoallergenic products designed for sensitive skin. The hot towel treatment actually helps reduce irritation by properly preparing the skin. We'll discuss any skin concerns during consultation and adjust our approach accordingly.",
  },
  {
    question: "How long does the full hot towel shave take?",
    answer:
      "Our Traditional Royal Shave is a complete ritual that takes approximately 45-60 minutes. This is not a rushed service—it's designed to be a relaxing, indulgent experience that leaves you feeling renewed.",
  },
  {
    question: "Can I combine a shave with a haircut?",
    answer:
      "Absolutely. Many clients book both services for a complete grooming experience. We recommend booking the combined service to ensure we have adequate time to deliver excellence in both areas.",
  },
]

export default function ShavePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/14.jpg"
            alt="Straight razor for traditional shave"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Traditional Royal Shave
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Luxury Hot Towel Shave & Straight Razor Experience
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              A multi-step ritual with pre-shave oil, double hot towel prep, precision straight
              razor shave, and cooling aftershave balm. The ultimate grooming indulgence.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Hot Towel Shave</Link>
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
                The Experience
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                The Traditional Shaving Ritual
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In an age of disposable razors and rushed routines, the traditional hot towel
                  shave stands apart. This is grooming as it was meant to be—unhurried, meticulous,
                  and deeply satisfying.
                </p>
                <p>
                  At Altus Apollo Men&apos;s Grooming Lounge in Costa Mesa, we&apos;ve elevated the
                  traditional shave to an art form. Drawing on techniques perfected over centuries
                  and refined during years of experience in Dubai&apos;s finest grooming establishments,
                  our hot towel shave is a complete sensory experience.
                </p>
                <p>
                  This isn&apos;t just about removing facial hair. It&apos;s about taking time for
                  yourself—a ritual of relaxation and renewal that leaves you looking sharp and
                  feeling rejuvenated.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/stock-photos/12.jpg"
                alt="Straight razor technique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Ritual
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              A Five-Step Journey to the Perfect Shave
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every hot towel shave at Altus Apollo follows a time-honored ritual designed for
              comfort, precision, and the ultimate close shave.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid lg:grid-cols-12 gap-8 items-start bg-background p-8"
              >
                <div className="lg:col-span-2">
                  <span className="font-serif text-5xl text-accent">{step.number}</span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort & Technique */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/stock-photos/13.jpg"
                  alt="Premium shaving tools"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/stock-photos/11.jpg"
                  alt="Precision razor work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Technique & Comfort
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Precision Razor Work with Complete Comfort
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The straight razor demands respect and skill. Our barbers have spent years
                  mastering the techniques that deliver the closest possible shave without
                  irritation or discomfort.
                </p>
                <p>
                  Proper preparation is key. The hot towel treatment and pre-shave oils do the heavy
                  lifting—softening the beard and preparing the skin so the blade glides effortlessly.
                  This is why a professional shave feels so different from shaving at home.
                </p>
                <p>
                  Throughout the service, your comfort is paramount. The reclined position, the warm
                  towels, the smooth technique—every element is designed to create a sense of
                  relaxation. Many clients find this to be the most calming 45 minutes of their week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Premium Experience */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/16.jpg"
            alt="Luxury grooming atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Difference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-8">
              Why This Is a Premium Experience
            </h2>
            <div className="space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                A professional hot towel shave isn&apos;t just about the end result—though the
                impossibly smooth finish is certainly part of the appeal. It&apos;s about the experience
                itself.
              </p>
              <p>
                In our Costa Mesa grooming lounge, you&apos;ll recline in comfort while skilled hands
                work their craft. The warm towels, the rich lather, the precise strokes of the
                razor—each element combines to create something that transcends ordinary grooming.
              </p>
              <p>
                This is time for yourself. A moment to disconnect from the demands of daily life and
                focus solely on self-care. When you leave, you&apos;ll carry that sense of renewal with
                you—along with the smoothest shave you&apos;ve ever experienced.
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
            Ready to Experience the Traditional Shave?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Book your Traditional Royal Shave at Altus Apollo Men&apos;s Grooming Lounge. This is
            grooming as ritual—a premium experience you won&apos;t find elsewhere in Costa Mesa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form">Book Hot Towel Shave</Link>
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
              <Link href="/services/haircuts" className="flex items-center gap-2">
                Explore Haircuts <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
