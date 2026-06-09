import type { Metadata } from "next"
import { siteConfig } from "@/data/site"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import CustomCursor from "@/components/CustomCursor"
import "./globals.css"

// Global metadata for SEO and social sharing
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
// The root component that wraps every page
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-persona-black text-persona-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LoadingScreen />
        <CustomCursor />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, url: siteConfig.url, sameAs: [siteConfig.links.github, siteConfig.links.linkedin], jobTitle: "Frontend Developer" }) }} />
      </body>
    </html>
  )
}