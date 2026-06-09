"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Project } from "@/data/projects"

interface Props {
  projects: Project[]
}

export default function ProjectsGridClient({ projects }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="relative bg-persona-dark border border-persona-red/20 p-6 cursor-pointer group"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
        >
          <Link href={`/projects/${project.slug}`} className="block">
            {/* Project title with red hover color shift */}
            <h2 className="font-heading text-xl font-bold text-persona-white mb-2 group-hover:text-persona-red transition-colors">
              {project.title}
            </h2>
            {/* Short description clamped to 2 lines */}
            <p className="text-persona-white/60 text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-persona-red/10 text-persona-red/80 border border-persona-red/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
          {/* Angular corner accent that lights up on hover */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-persona-red/40 group-hover:bg-persona-red transition-colors" />
        </motion.div>
      ))}
    </div>
  )
}