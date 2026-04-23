import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://altusapollo.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Altus Apollo Men's Grooming Lounge | Premium Barbershop in Costa Mesa",
    template: "%s | Altus Apollo Men's Grooming Lounge",
  },
  description:
    "Experience refined men's grooming at Altus Apollo in Costa Mesa. Precision haircuts, beard sculpting, and traditional hot towel shaves. 17+ years of luxury grooming expertise from Dubai to California. Walk-ins welcome.",
  keywords: [
    "barber",
    "barbershop",
    "Costa Mesa barber",
    "men's haircut",
    "fade",
    "taper",
    "skin fade",
    "beard trim",
    "line up",
    "shape up",
    "hot towel shave",
    "razor shave",
    "gray covering",
    "walk in barber",
    "luxury barbershop",
    "Costa Mesa",
    "Orange County barber",
    "men's grooming",
    "barber near me",
  ],
  authors: [{ name: "Altus Apollo Men's Grooming Lounge" }],
  creator: "Altus Apollo Men's Grooming Lounge",
  publisher: "Altus Apollo Men's Grooming Lounge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Altus Apollo Men's Grooming Lounge | Premium Barbershop in Costa Mesa",
    description:
      "Refined men's grooming in Costa Mesa. Precision haircuts, beard sculpting, and traditional hot towel shaves. 17+ years of international grooming expertise.",
    url: siteUrl,
    siteName: "Altus Apollo Men's Grooming Lounge",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Altus Apollo Men's Grooming Lounge - Premium Barbershop in Costa Mesa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altus Apollo Men's Grooming Lounge | Premium Barbershop in Costa Mesa",
    description:
      "Refined men's grooming in Costa Mesa. Precision haircuts, beard sculpting, and traditional hot towel shaves.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Barber Shop",
}

export const viewport: Viewport = {
  themeColor: "#1e2a3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
