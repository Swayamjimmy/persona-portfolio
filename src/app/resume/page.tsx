import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Dossier",
  description: `View and download ${siteConfig.name}'s official dossier and resume.`,
  openGraph: {
    title: `Dossier | ${siteConfig.name}`,
    description: `View and download ${siteConfig.name}'s official dossier.`,
    url: `${siteConfig.url}/resume`,
  },
}

export default function ResumePage() {
  return (
    <section className="min-h-screen py-32 px-6 relative bg-persona-black overflow-hidden">
      
      {/* Subtle B&W Halftone Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)",
          backgroundSize: "12px 12px"
        }}
      />

      {/* Decorative background slash */}
      <div 
        className="absolute top-0 left-0 w-1/4 h-full bg-persona-white/5 pointer-events-none skew-x-12 -translate-x-20" 
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-full mb-12 flex flex-col items-start -rotate-2">
          <span className="font-p5-marker text-persona-red text-2xl mb-2 ml-4">
            Level 5 Clearance Required
          </span>
          <h1 className="font-p5-block text-7xl md:text-8xl text-stroke-p5 uppercase tracking-wider">
            Official Dossier
          </h1>
          <div className="h-2 w-1/2 bg-persona-white mt-2 shadow-[4px_4px_0px_rgba(255,0,0,1)]" />
        </div>

        {/* PDF Viewer Container - Styled like a physical folder/panel */}
        <div className="w-full relative group mb-16">
          
          {/* Layer 1: Shadow */}
          <div 
            className="absolute inset-0 bg-persona-white/20 translate-x-4 translate-y-4"
            style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }}
          />
          
          {/* Layer 2: Thick Black Border Frame */}
          <div 
            className="absolute inset-0 bg-persona-black"
            style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }}
          />
          
          {/* Layer 3: White Inner Background */}
          <div 
            className="absolute inset-[6px] bg-persona-white"
            style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }}
          />

          {/* Stamp Graphic */}
          <div className="absolute top-[-20px] right-8 z-20 border-4 border-persona-red text-persona-red font-p5-block text-4xl px-4 py-1 rotate-12 opacity-90 shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-persona-black">
            CONFIDENTIAL
          </div>

          {/* Tape Accent */}
          <div className="absolute -top-4 -left-4 z-20 w-16 h-8 bg-persona-red/80 -rotate-12" />

          {/* Actual PDF Embed */}
          <div className="relative z-10 p-4 h-[800px] w-full">
            <iframe
              src="/resume.pdf"
              className="w-full h-full border-4 border-persona-black bg-gray-100"
              title="Resume PDF Viewer"
            />
          </div>
        </div>

        {/* Download Button - Fixed Layered Style */}
        <a
          href="/resume.pdf"
          download
          className="group relative px-12 py-5 font-p5-block text-3xl uppercase tracking-wider text-persona-white hover:scale-105 hover:-rotate-2 transition-transform inline-flex items-center justify-center"
        >
          {/* Shadow Layer */}
          <div 
            className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:bg-persona-black transition-all" 
            style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} 
          />
          
          {/* Main Background Layer */}
          <div 
            className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" 
            style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} 
          />
          
          <span className="relative z-10 group-hover:text-persona-black transition-colors">
            Extract Data ➔
          </span>
        </a>

      </div>
    </section>
  )
}