import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

// SEO metadata for the resume page
export const metadata: Metadata = {
  title: "Resume",
  description: `View and download ${siteConfig.name}'s resume.`,
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description: `View and download ${siteConfig.name}'s resume.`,
    url: `${siteConfig.url}/resume`,
  },
}

export default function ResumePage() {
  return (
    <section className="min-h-screen py-24 px-6 relative">
      {/* Angular background accent */}
      <div
        className="absolute inset-0 bg-persona-red/5"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-heading text-5xl font-bold text-persona-white mb-8">
          Resume
        </h1>

        {/* Embedded PDF viewer with angular frame */}
        <div
          className="w-full border-2 border-persona-red/30 bg-persona-dark"
          style={{ clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)" }}
        >
          <iframe
            src="/resume.pdf"
            className="w-full h-[800px]"
            title="Resume PDF Viewer"
          />
        </div>

        {/* Download button with P5R parallelogram shape */}
        <div className="mt-8 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="px-10 py-4 bg-persona-red text-persona-white font-heading text-lg uppercase tracking-wider hover:bg-red-700 transition-colors inline-block"
            style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}