import type { Metadata } from "next"
import { siteConfig } from "@/data/site"
import { projects } from "@/data/projects"
import ProjectsGridClient from "./ProjectsGridClient"

// SEO metadata so Google indexes this page with a clear title and description
export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${siteConfig.name}'s portfolio of web development projects featuring React, TypeScript, and modern frontend technologies.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore ${siteConfig.name}'s portfolio of web development projects.`,
    url: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-5xl font-bold text-persona-white mb-4">
          Projects
        </h1>
        <p className="text-persona-white/60 mb-12 max-w-2xl">
          A collection of projects I've built. Each one taught me something new
          and pushed my skills forward.
        </p>
        {/* Pass projects data down to the animated client component */}
        <ProjectsGridClient projects={projects} />
      </div>
    </section>
  )
}