import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Contact & Book | Altus Apollo Men's Grooming Lounge | Costa Mesa Barber",
  description:
    "Contact Altus Apollo Men's Grooming Lounge in Costa Mesa. Book your appointment for premium haircuts, beard sculpting, or hot towel shave. Walk-ins welcome. Call (347) 854-7551.",
}

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 7:00 PM" },
  { day: "Friday", hours: "11:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 5:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock-photos/9.jpg"
            alt="Altus Apollo grooming atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Contact & Book Your Appointment
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Ready to experience refined men&apos;s grooming in Costa Mesa? Book your appointment or
              visit us for a walk-in. We look forward to serving you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Visit Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Altus Apollo Men&apos;s Grooming Lounge
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      1175 Baker St Unit E 19
                      <br />
                      Costa Mesa, CA 92626
                    </p>
                    <a
                      href="https://maps.google.com/?q=1175+Baker+St+Unit+E+19+Costa+Mesa+CA+92626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm mt-2"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+13478547551"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (347) 854-7551
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:maherhamdan82@hotmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      maherhamdan82@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-3">Hours</h3>
                    <div className="space-y-2">
                      {hours.map((item) => (
                        <div key={item.day} className="flex justify-between text-sm max-w-xs">
                          <span className="text-muted-foreground">{item.day}</span>
                          <span
                            className={
                              item.hours === "Closed" ? "text-muted-foreground" : "text-foreground"
                            }
                          >
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6">
                <p className="text-foreground font-medium mb-2">Walk-Ins Welcome</p>
                <p className="text-muted-foreground text-sm">
                  While we welcome walk-in clients, appointments are highly recommended to ensure
                  you receive the tailored experience you deserve without waiting.
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.9234567890123!2d-117.8876543!3d33.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQ0LjAiTiAxMTfCsDUzJzE1LjYiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=1175+Baker+St+Unit+E+19,+Costa+Mesa,+CA+92626"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Altus Apollo Men's Grooming Lounge Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-24 lg:py-32 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Book Now
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Reserve Your Appointment
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Ready to experience the Altus Apollo difference? Use this form to request your
                  appointment. We&apos;ll confirm your booking within 24 hours.
                </p>
                <p>
                  Whether you&apos;re seeking a precision haircut, expert beard sculpting, or our
                  signature hot towel shave, we&apos;re here to deliver an exceptional grooming
                  experience.
                </p>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-medium text-foreground mb-3">What to Expect</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                    We&apos;ll confirm your appointment via phone or email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                    Arrive 5-10 minutes early for your consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                    Bring reference photos if you have a specific style in mind
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                    Relax and enjoy the experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-background p-8 lg:p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Serving Costa Mesa & Beyond
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Your Costa Mesa Destination for Premium Grooming
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Altus Apollo Men&apos;s Grooming Lounge proudly serves gentlemen throughout Orange County.
              Whether you&apos;re coming from Newport Beach, Irvine, Huntington Beach, Santa Ana, or
              anywhere in the region, you&apos;ll find our Costa Mesa location convenient and welcoming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We invite you to experience what sets Altus Apollo apart—precision craftsmanship,
              personalized consultation, and a refined atmosphere that transforms grooming from a
              chore into a ritual you&apos;ll look forward to.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
