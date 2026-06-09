import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { siteConfig } from "@/data/site"
import ProjectDetailClient from "./ProjectDetailClient"

// Define the type for route params (Promise in Next.js 16)
interface Props {
  params: Promise<{ slug: string }>
}

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate unique SEO metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
      images: [{ url: project.imageUrl, width: 1200, height: 630 }],
    },
  }
}

// The page component: looks up the project, embeds structured data, renders the client UI
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  // If no matching project, trigger the 404 page
  if (!project) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.fullDescription,
            url: project.deployUrl || `${siteConfig.url}/projects/${project.slug}`,
            author: { "@type": "Person", name: siteConfig.name },
            keywords: project.techStack.join(", "),
          }),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  )
}