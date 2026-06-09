"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Project } from "@/data/projects"

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative bg-persona-black overflow-hidden">
      {/* Background Dots */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)", backgroundSize: "12px 12px" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/projects" className="font-p5-block text-2xl text-persona-white hover:text-persona-red transition-colors inline-block -rotate-2">
            ← BACK TO ARCHIVE
          </Link>
        </motion.div>

        {/* Main Dossier Paper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Shadow */}
          <div className="absolute inset-0 bg-persona-white/20 translate-x-3 translate-y-3" style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }} />
          {/* Border */}
          <div className="absolute inset-0 bg-persona-black" style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }} />
          {/* Paper */}
          <div className="absolute inset-[4px] bg-persona-white" style={{ clipPath: "polygon(0 0, 100% 1%, 99% 100%, 1% 99%)" }} />

          <div className="relative z-10 p-8 md:p-12">
            {/* Stamp Graphic */}
            <div className="absolute top-8 right-8 border-4 border-persona-red text-persona-red font-p5-block text-3xl px-4 py-1 rotate-12 opacity-80">
              TARGET ACQUIRED
            </div>

            <h1 className="font-p5-block text-6xl md:text-7xl font-bold text-persona-black uppercase tracking-wider mb-6 w-5/6">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-persona-black text-persona-white font-p5-marker text-lg shadow-[3px_3px_0px_rgba(255,0,0,1)] -rotate-1">
                  {tech}
                </span>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-10 font-p3-sleek text-xl text-persona-black/90 font-bold leading-relaxed">
              <section>
                <h2 className="font-p5-block text-4xl text-persona-black border-b-4 border-persona-black pb-2 mb-4 inline-block">Overview</h2>
                <p>{project.fullDescription}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-[#f0f0f0] p-6 border-2 border-persona-black relative">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-persona-black" />
                  <h2 className="font-p5-marker text-2xl text-persona-red mb-3">The Obstacle</h2>
                  <p>{project.challenge}</p>
                </section>

                <section className="bg-[#f0f0f0] p-6 border-2 border-persona-black relative">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-persona-black" />
                  <h2 className="font-p5-marker text-2xl text-persona-black mb-3">The Execution</h2>
                  <p>{project.solution}</p>
                </section>
              </div>
            </div>

            {/* Links */}
            <div className="mt-12 flex flex-wrap gap-6 border-t-4 border-persona-black pt-8">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 font-p5-block text-2xl uppercase inline-block">
                <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
                <span className="relative z-10 text-persona-white">View Intel (GitHub)</span>
              </a>
              
              {project.deployUrl && (
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 font-p5-block text-2xl uppercase inline-block">
                  <div className="absolute inset-0 bg-persona-white border-4 border-persona-black group-hover:bg-[#e0e0e0] transition-colors" style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }} />
                  <span className="relative z-10 text-persona-black">Infiltrate Live Site</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}