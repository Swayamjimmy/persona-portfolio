import type { Metadata } from "next"
import { siteConfig } from "@/data/site"
import { projects } from "@/data/projects"
import ProjectsGridClient from "./ProjectsGridClient"

export const metadata: Metadata = {
  title: "Targets",
  description: `Explore ${siteConfig.name}'s portfolio of web development projects.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore ${siteConfig.name}'s portfolio of web development projects.`,
    url: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-32 px-6 bg-persona-black relative overflow-hidden">
      {/* Subtle halftone background for texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)",
          backgroundSize: "12px 12px"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 -rotate-2 inline-block">
          <h1 className="font-p5-block text-7xl md:text-8xl text-stroke-p5 uppercase tracking-wider">
            Projects
          </h1>
          <div className="h-2 w-3/4 bg-persona-white mt-2 shadow-[4px_4px_0px_rgba(255,0,0,1)]" />
        </div>

        {/* Pass projects data down to the animated client component */}
        <ProjectsGridClient projects={projects} />
      </div>
    </section>
  )
}