import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { siteConfig } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate a URL entry for each project from the data layer
  const projectUrls = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...projectUrls,
  ]
}