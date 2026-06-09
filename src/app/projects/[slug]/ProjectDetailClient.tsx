"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Project } from "@/data/projects"

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 max-w-4xl mx-auto">
      {/* Hero section: title and short description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-5xl font-bold text-persona-white mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-persona-white/70 mb-8">
          {project.shortDescription}
        </p>
      </motion.div>

      {/* Tech stack tags with angular clip-path */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-persona-red/10 text-persona-red text-sm font-heading"
            style={{ clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)" }}
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Full project description */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="font-heading text-2xl text-persona-red mb-4">Overview</h2>
        <p className="text-persona-white/80 leading-relaxed">
          {project.fullDescription}
        </p>
      </motion.section>

      {/* Challenge and solution narrative */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12 grid md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="font-heading text-2xl text-persona-red mb-4">Challenge</h2>
          <p className="text-persona-white/80 leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl text-persona-teal mb-4">Solution</h2>
          <p className="text-persona-white/80 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </motion.section>

      {/* GitHub and optional deploy links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <Link
          href={project.githubUrl}
          target="_blank"
          className="px-6 py-3 bg-persona-red text-persona-white font-heading uppercase tracking-wider hover:bg-red-700 transition-colors"
          style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
        >
          View on GitHub
        </Link>
        {project.deployUrl && (
          <Link
            href={project.deployUrl}
            target="_blank"
            className="px-6 py-3 border border-persona-teal text-persona-teal font-heading uppercase tracking-wider hover:bg-persona-teal/10 transition-colors"
            style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            Live Demo
          </Link>
        )}
      </motion.div>
    </div>
  )
}