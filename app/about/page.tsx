import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Altus Apollo Men's Grooming Lounge | Costa Mesa Barber",
  description:
    "Discover the story behind Altus Apollo Men's Grooming Lounge. 17+ years of international grooming expertise from Dubai to California. Experience precision haircuts and luxury grooming in Costa Mesa.",
}

const milestones = [
  {
    year: "2007",
    title: "The Beginning",
    description:
      "Started the journey in men's grooming, developing foundational skills and discovering a passion for precision barbering.",
  },
  {
    year: "2015",
    title: "Dubai Excellence",
    description:
      "Joined the prestigious 1847 in Dubai, mastering luxury grooming techniques and serving an international clientele.",
  },
  {
    year: "2020",
    title: "California Calling",
    description:
      "Brought world-class expertise to Harold's Barbershop in Irvine, blending international standards with California style.",
  },
  {
    year: "2024",
    title: "Altus Apollo",
    description:
      "Opened Altus Apollo Men's Grooming Lounge in Costa Mesa, creating a sanctuary for refined men's grooming.",
  },
]

const values = [
  {
    title: "Precision",
    description:
      "Every cut, every fade, every line is executed with surgical accuracy. We don't just cut hair; we sculpt confidence.",
  },
  {
    title: "Consultation",
    description:
      "Your service begins with understanding. Face shape, hair type, lifestyle—we tailor every cut to you.",
  },
  {
    title: "Craft",
    description:
      "Barbering is an art form. We approach each service with the dedication and attention of true craftsmen.",
  },
  {
    title: "Experience",
    description:
      "Beyond the cut, we create an atmosphere of refinement and relaxation. This is grooming as ritual.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/4.jpg"
            alt="Master barber at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              The Art Behind Every Cut
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              17 years of passion, precision, and dedication to the craft of men&apos;s grooming.
              From the prestigious salons of Dubai to Costa Mesa&apos;s premier grooming destination.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/client-photos/barbershop-client.jpg"
                  alt="Founder at work in the shop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Journey of Mastery
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 17 years, the art of men&apos;s grooming has been more than a profession—it&apos;s
                  been a calling. What began as a passion for precision and detail evolved into a
                  journey across continents, learning from the best and serving clients who demand
                  excellence.
                </p>
                <p>
                  In Dubai, at the renowned 1847, the standards were uncompromising. Serving
                  international businessmen, royalty, and discerning gentlemen refined not just
                  technical skills, but an understanding of what luxury grooming truly means. Every
                  client received a bespoke experience, every cut was a consultation-driven
                  masterpiece.
                </p>
                <p>
                  Returning to the United States, the mission was clear: bring that same level of
                  excellence to California. After years at Harold&apos;s Barbershop in Irvine, the time
                  came to create something truly personal—a space that embodies the philosophy that
                  great grooming is an art, not a transaction.
                </p>
                <p>
                  Altus Apollo Men&apos;s Grooming Lounge in Costa Mesa is the realization of that
                  vision. A sanctuary where precision meets relaxation, where every gentleman leaves
                  not just looking his best, but feeling transformed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              From Dubai to Costa Mesa
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A timeline of growth, learning, and dedication to the craft of men&apos;s grooming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div className="bg-background p-8 h-full">
                  <p className="font-serif text-4xl text-accent mb-4">{milestone.year}</p>
                  <h3 className="font-serif text-xl text-foreground mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Barbering as an Art Form
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe that a haircut is not just a service—it&apos;s a transformation. Every face
                  is unique, every hair type presents its own possibilities, and every client
                  deserves a cut that&apos;s been thoughtfully crafted for them.
                </p>
                <p>
                  This is why every service at Altus Apollo begins with consultation. We analyze
                  your face shape, study your hair&apos;s natural growth patterns, discuss your
                  lifestyle, and understand what &quot;looking your best&quot; means to you. Only then do we
                  pick up our tools.
                </p>
                <p>
                  From classic fades to modern textured cuts, from precise line-ups to sculpted
                  beards, we approach each service with the same dedication: to deliver work that
                  makes you feel confident, refined, and unmistakably sharp.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/stock-photos/1.jpg"
                  alt="Precision scissor work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative mt-8">
                <Image
                  src="/stock-photos/2.jpg"
                  alt="Fade detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/16.jpg"
            alt="Luxury interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Experience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              What to Expect at Altus Apollo
            </h2>
            <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
              <p>
                From the moment you step through our doors, you&apos;ll notice the difference. The
                atmosphere is calm, refined, and designed for relaxation. This is your time to
                disconnect from the everyday and focus on yourself.
              </p>
              <p>
                Your service begins with a consultation. We&apos;ll discuss what you&apos;re looking for,
                make recommendations based on your features and lifestyle, and ensure we&apos;re aligned
                before the first cut is made.
              </p>
              <p>
                Throughout your service, attention to detail is paramount. Premium products, expert
                technique, and an unhurried pace ensure results that exceed expectations. You&apos;ll
                leave looking sharp, feeling confident, and understanding why Altus Apollo is Costa
                Mesa&apos;s destination for discerning gentlemen.
              </p>
            </div>
            <Button
              asChild
              className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link href="/contact#booking-form" className="flex items-center gap-2">
                Book Your Experience <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
