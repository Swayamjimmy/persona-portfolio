import type { Metadata } from "next"
import { Bebas_Neue, Permanent_Marker, Rajdhani } from "next/font/google"
import { siteConfig } from "@/data/site"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import CustomCursor from "@/components/CustomCursor"
import "./globals.css"

// P5R Block Font (Massive, heavy headers)
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-p5r-block" })
// P5R Jagged/Marker Font (Handwritten, chaotic notes)
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-p5r-marker" })
// P3R Sleek Font (Futuristic, highly legible body text)
const rajdhani = Rajdhani({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-p3r-sleek" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${permanentMarker.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body className="bg-persona-black text-persona-white font-p3-sleek antialiased selection:bg-persona-red selection:text-persona-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LoadingScreen />
        <CustomCursor />
      </body>
    </html>
  )
}