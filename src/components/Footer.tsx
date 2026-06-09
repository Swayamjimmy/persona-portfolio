import Link from "next/link"
import { siteConfig } from "@/data/site"

export default function Footer() {
  return (
    <footer className="border-t border-persona-red/20 bg-persona-black py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social links */}
        <div className="flex items-center gap-4">
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
        {/* Built with note */}
        <p className="text-persona-white/40 text-sm">
          Built with Next.js, Tailwind CSS, and Motion.
        </p>
      </div>
    </footer>
  )
}