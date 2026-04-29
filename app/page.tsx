import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Award, Scissors, MapPin, Phone, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Men's Haircuts",
    subtitle: "Signature Bespoke Cut",
    description:
      "Consultation, precision tailored cut, straight razor neck clean-up, and premium styling. From classic cuts to modern fades, tapers, and skin fades.",
    image: "/stock-photos/1.jpg",
    href: "/services/haircuts",
  },
  {
    title: "Beard Trim & Sculpting",
    subtitle: "Executive Beard Sculpting",
    description:
      "Detailed shaping, free-hand trimming, hot towel infusion, and premium conditioning oils. Precision line-ups and shape-ups for a refined look.",
    image: "/stock-photos/6.jpg",
    href: "/services/beard",
  },
  {
    title: "Hot Towel Shave",
    subtitle: "Traditional Royal Shave",
    description:
      "A multi-step ritual with pre-shave oil, double hot towel prep, straight razor shave, and cooling aftershave balm. The ultimate grooming experience.",
    image: "/stock-photos/14.jpg",
    href: "/services/shave",
  },
]

const trustPoints = [
  {
    icon: Award,
    title: "17+ Years Experience",
    description: "International grooming expertise from Dubai to California",
  },
  {
    icon: Scissors,
    title: "Precision Craftsmanship",
    description: "Meticulous attention to detail in every cut and shave",
  },
  {
    icon: Clock,
    title: "Walk-Ins Welcome",
    description: "Appointments recommended for the tailored experience",
  },
]

const galleryVideos = [
  { src: "https://drive.google.com/file/d/1zascKL2Ntxe3RZmRcRMX7UQqx3ZzatB5/preview", title: "Grooming reel 1" },
  { src: "https://drive.google.com/file/d/1WsU8ag0uEZvS-wk4orXfdYKZ009eW4Re/preview", title: "Grooming reel 2" },
  { src: "https://drive.google.com/file/d/1rYnqBUJLcmZiIDU5w-3lAs_lwUA3Nv2t/preview", title: "Grooming reel 3" },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/3.jpg"
            alt="Luxury barbershop experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Costa Mesa&apos;s Premier Grooming Destination
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Barber in Costa Mesa CA
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Precision haircuts, meticulous beard sculpting, and traditional hot towel shaves.
              Experience the art of the unhurried cut at Altus Apollo Men&apos;s Grooming Lounge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              >
                <Link href="/contact#booking-form">Book Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8"
              >
                <a href="tel:+13478547551">(347) 854-7551</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Where Tradition Meets Tranquility
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Altus Apollo Men&apos;s Grooming Lounge represents over 17 years of dedicated
                  craftsmanship in the art of men&apos;s grooming. From the prestigious salons of
                  Dubai, including the renowned 1847, to Harold&apos;s Barbershop in Irvine, our
                  founder has honed his skills across continents.
                </p>
                <p>
                  Now in Costa Mesa, we bring that same world-class expertise to Southern
                  California. Every service begins with a consultation, because the perfect cut
                  starts with understanding your unique face shape, hair type, and personal style.
                </p>
              </div>
              <Button asChild variant="link" className="mt-6 p-0 text-accent hover:text-accent/80">
                <Link href="/about" className="flex items-center gap-2">
                  Learn Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/client-photos/client-landscape.png"
                  alt="Master barber at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 hidden lg:block">
                <p className="font-serif text-4xl mb-1">17+</p>
                <p className="text-sm text-primary-foreground/70">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section id="services" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Signature Grooming Experiences
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each service at Altus Apollo is a ritual, not a transaction. From precision fades to
              traditional razor shaves, we bring meticulous attention to every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="bg-background h-full flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-accent text-sm font-medium tracking-wide mb-2">
                      {service.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/stock-photos/11.jpg"
                  alt="Precision clipper work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative mt-8">
                <Image
                  src="/stock-photos/12.jpg"
                  alt="Straight razor detailing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                The Craft
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Precision-Driven Artistry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Altus Apollo, we see barbering as an art form. Every fade, taper, and skin fade
                  is executed with surgical precision. Every beard is sculpted to complement your
                  unique facial structure.
                </p>
                <p>
                  Our approach begins with consultation. We analyze your face shape, hair type,
                  texture, and growth patterns. Only then do we craft a cut that transforms not just
                  your look, but your confidence.
                </p>
                <p>
                  From classic line-ups and shape-ups to modern textured cuts and gray covering
                  services, we bring technical mastery to every service. This is precision-driven
                  grooming at its finest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/16.jpg"
            alt="Luxury lounge interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Experience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              More Than a Haircut. A Ritual.
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Step into Altus Apollo and step away from the ordinary. Our curated lounge atmosphere
              offers a sanctuary from the everyday, where every visit becomes an immersive
              experience in refined grooming.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              This is where tradition meets tranquility. Where precision meets relaxation. Where you
              leave not just looking sharp, but feeling renewed. Welcome to a reservation for your
              best self.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Why Altus Apollo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              The Altus Apollo Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center p-8 bg-background">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-6">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">Dubai Luxury Grooming Experience</span>
            </div>
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">California Barbershop Expertise</span>
            </div>
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">Tailored Consultations</span>
            </div>
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">Premium Products & Tools</span>
            </div>
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">Private Studio Atmosphere</span>
            </div>
            <div className="bg-background p-6 flex items-center gap-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-foreground">Walk-Ins Always Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              The Art of Grooming
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryVideos.map((video, index) => (
              <div
                key={index}
                className="aspect-[9/16] relative overflow-hidden bg-primary/5"
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Visit Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Located in Costa Mesa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Conveniently located in Costa Mesa, Altus Apollo Men&apos;s Grooming Lounge serves
                gentlemen throughout Orange County. Whether you&apos;re from Newport Beach, Irvine,
                Huntington Beach, or beyond, experience Costa Mesa&apos;s premier destination for
                refined men&apos;s grooming.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      1175 Baker St Unit E 19
                      <br />
                      Costa Mesa, CA 92626
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+13478547551"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (347) 854-7551
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <div className="text-muted-foreground">
                      <p>Tuesday - Saturday: 11AM - 7PM</p>
                      <p>Sunday: 11AM - 5PM</p>
                      <p>Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Directions & Contact</Link>
              </Button>
            </div>

            <div className="relative aspect-square lg:aspect-[4/3]">
              <Image
                src="/stock-photos/9.jpg"
                alt="Premium grooming atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
