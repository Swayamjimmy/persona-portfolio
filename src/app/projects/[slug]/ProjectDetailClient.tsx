// src/app/projects/[slug]/ProjectDetailClient.tsx

"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { Project } from "@/data/projects"

// Sharp, heavily stroked SVG icons to match the Persona UI aesthetic
const ChevronDown = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M4 9l8 8 8-8" />
  </svg>
)

const ChevronUp = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M4 15l8-8 8 8" />
  </svg>
)

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [expandOverview, setExpandOverview] = useState(false)
  const [expandObstacle, setExpandObstacle] = useState(false)
  const [expandSolution, setExpandSolution] = useState(false)

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

          {/* Flex-col controls document flow natively on mobile */}
          <div className="relative z-10 p-6 md:p-12 flex flex-col">
            
            {/* Stamp Graphic */}
            <div className="self-end md:absolute md:top-8 md:right-8 border-2 md:border-4 border-persona-red text-persona-red font-p5-block text-xl md:text-3xl px-3 py-1 rotate-6 md:rotate-12 opacity-80 z-20 mb-4 md:mb-0 pointer-events-none">
              TARGET SECURED
            </div>

            {/* Title */}
            <h1 className="font-p5-block text-5xl md:text-7xl font-bold text-persona-black uppercase tracking-wider mb-6 w-full md:w-5/6 leading-none">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-persona-black text-persona-white font-p5-marker text-sm md:text-lg shadow-[3px_3px_0px_rgba(255,0,0,1)] -rotate-1">
                  {tech}
                </span>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-10 font-p3-sleek text-lg md:text-xl text-persona-black/90 font-bold leading-relaxed">
              
              {/* Overview Section */}
              <section className="flex flex-col">
                <h2 className="font-p5-block text-3xl md:text-4xl text-persona-black border-b-4 border-persona-black pb-2 mb-4 inline-block self-start">
                  Overview
                </h2>
                <div className="flex-grow">
                  <p className={`transition-all duration-300 ${expandOverview ? "" : "line-clamp-4"}`}>
                    {project.fullDescription}
                  </p>
                </div>
                <button 
                  onClick={() => setExpandOverview(!expandOverview)}
                  className="mt-4 font-p5-block text-xl md:text-2xl text-persona-black flex items-center gap-2 self-start hover:bg-persona-black hover:text-persona-white transition-colors cursor-pointer bg-persona-black/5 px-4 py-2 border-2 border-persona-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                >
                  {expandOverview ? (
                    <>COLLAPSE <ChevronUp /></>
                  ) : (
                    <>EXPAND <ChevronDown /></>
                  )}
                </button>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                {/* The Obstacle Section */}
                <section className="bg-[#f0f0f0] p-6 border-4 border-persona-black relative flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-0 left-0 w-6 h-6 bg-persona-black" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                  <h2 className="font-p5-marker text-2xl text-persona-red mb-3 mt-2">The Obstacle</h2>
                  <div className="flex-grow">
                    <p className={`transition-all duration-300 ${expandObstacle ? "" : "line-clamp-4"}`}>
                      {project.challenge}
                    </p>
                  </div>
                  <button 
                    onClick={() => setExpandObstacle(!expandObstacle)}
                    className="mt-4 font-p5-block text-xl md:text-2xl text-persona-red flex items-center gap-2 self-start hover:bg-persona-red hover:text-persona-white transition-colors cursor-pointer bg-persona-white px-3 py-1 border-2 border-persona-red shadow-[3px_3px_0px_rgba(255,0,0,1)]"
                  >
                    {expandObstacle ? (
                      <>COLLAPSE <ChevronUp /></>
                    ) : (
                      <>EXPAND <ChevronDown /></>
                    )}
                  </button>
                </section>

                {/* The Execution Section */}
                <section className="bg-[#f0f0f0] p-6 border-4 border-persona-black relative flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-0 left-0 w-6 h-6 bg-persona-black" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                  <h2 className="font-p5-marker text-2xl text-persona-black mb-3 mt-2">The Execution</h2>
                  <div className="flex-grow">
                    <p className={`transition-all duration-300 ${expandSolution ? "" : "line-clamp-4"}`}>
                      {project.solution}
                    </p>
                  </div>
                  <button 
                    onClick={() => setExpandSolution(!expandSolution)}
                    className="mt-4 font-p5-block text-xl md:text-2xl text-persona-black flex items-center gap-2 self-start hover:bg-persona-black hover:text-persona-white transition-colors cursor-pointer bg-persona-white px-3 py-1 border-2 border-persona-black shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                  >
                    {expandSolution ? (
                      <>COLLAPSE <ChevronUp /></>
                    ) : (
                      <>EXPAND <ChevronDown /></>
                    )}
                  </button>
                </section>
              </div>
            </div>

            {/* Links */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 border-t-4 border-persona-black pt-8">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 font-p5-block text-2xl uppercase inline-flex items-center justify-center w-full sm:w-auto">
                <div className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:bg-persona-black transition-all" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
                <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
                <span className="relative z-10 text-persona-white">View Intel</span>
              </a>
              
              {project.deployUrl && (
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 font-p5-block text-2xl uppercase inline-flex items-center justify-center w-full sm:w-auto">
                  <div className="absolute inset-0 bg-persona-black translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-all" style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }} />
                  <div className="absolute inset-0 bg-persona-white group-hover:bg-[#e0e0e0] transition-colors" style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }} />
                  <span className="relative z-10 text-persona-black">Live Site</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}