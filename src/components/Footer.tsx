import { siteConfig } from "@/data/site"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-persona-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-persona-white/60 hover:text-persona-red transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-persona-white/60 hover:text-persona-red transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-persona-white/60 hover:text-persona-red transition-colors"
          >
            Email
          </a>
        </div>

        {/* Easter Egg Trigger - the Secret Mission will wire this up */}
        <button
          aria-label="Hidden easter egg"
          className="text-persona-white/20 hover:text-persona-white/40 transition-colors text-sm cursor-default"
        >
          \uD83C\uDCCF
        </button>

        {/* Built With note */}
        <p className="text-persona-white/40 text-sm">
          Built with Next.js, Tailwind CSS, and Motion.
        </p>
      </div>
    </footer>
  )
}