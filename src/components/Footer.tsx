import { siteConfig } from "@/data/site"
import ConfidantEasterEgg from "@/components/ConfidantEasterEgg"

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 bg-persona-black overflow-hidden mt-20">
      {/* 
        Jagged Top Border / Slashes 
        These two layered polygons create an aggressive, chaotic cut dividing the footer from the page.
      */}
      <div 
        className="absolute top-0 left-0 w-full h-6 bg-persona-white" 
        style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 70%)" }} 
      />
      <div 
        className="absolute top-2 left-0 w-full h-6 bg-persona-red" 
        style={{ clipPath: "polygon(0 30%, 100% 0, 100% 70%, 0 100%)" }} 
      />

      {/* Subtle Halftone Texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)", 
          backgroundSize: "12px 12px" 
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
        
        {/* Signature / Branding Block */}
        <div className="flex flex-col items-center md:items-start rotate-1">
          <div className="relative group cursor-default mb-4">
            <span className="font-p5-marker text-persona-black text-xl md:text-2xl bg-persona-white px-6 py-2 border-4 border-persona-black shadow-[6px_6px_0px_rgba(255,0,0,1)] block -rotate-3 group-hover:rotate-0 transition-transform">
              END OF DOSSIER
            </span>
            {/* Red Tape Detail */}
            <div className="absolute -top-3 -right-4 w-10 h-6 bg-persona-red border-2 border-persona-black rotate-12" />
          </div>
          
          <h3 className="font-p5-block text-5xl md:text-6xl text-persona-white tracking-widest uppercase">
            {siteConfig.name}
          </h3>
          <p className="font-p3-sleek font-bold text-persona-white/50 text-lg uppercase tracking-widest mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Social Links Container */}
        <div className="flex flex-col items-center gap-6 -rotate-1">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "GitHub", url: siteConfig.links.github },
              { name: "LinkedIn", url: siteConfig.links.linkedin },
              { name: "Email", url: `mailto:${siteConfig.links.email}` }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group relative px-6 py-2 font-p5-block text-3xl uppercase text-persona-white hover:text-persona-black transition-colors"
              >
                {/* Manga Block Hover Fill */}
                <div 
                  className="absolute inset-0 bg-persona-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-200" 
                  style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} 
                />
                <span className="relative z-10 transition-colors duration-200">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
          
          {/* Easter Egg Trigger Container */}
          <div className="mt-4 md:mt-0 flex items-center justify-center p-4">
            <ConfidantEasterEgg />
          </div>
        </div>

      </div>
    </footer>
  )
}