"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Project } from "@/data/projects"

interface Props {
  projects: Project[]
}

export default function ProjectsGridClient({ projects }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => {
        const rotation = index % 2 === 0 ? "-rotate-1" : "rotate-1"
        const clipShape = "polygon(2% 0, 100% 0, 98% 100%, 0 98%)"
        const targetNumber = String(index + 1).padStart(2, "0")

        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative group ${rotation} hover:rotate-0 transition-transform duration-300 z-10 hover:z-20`}
          >
            <Link href={`/projects/${project.slug}`} className="block relative h-full">
              {/* Layer 1: The Drop Shadow */}
              <div
                className="absolute inset-0 bg-persona-white/20 translate-x-2.5 translate-y-2.5 group-hover:translate-x-3.5 group-hover:translate-y-3.5 group-hover:bg-persona-red transition-all duration-300"
                style={{ clipPath: clipShape }}
              />

              {/* Layer 2: The Thick Black Outline */}
              <div
                className="absolute inset-0 bg-persona-black"
                style={{ clipPath: clipShape }}
              />

              {/* Layer 3: The White Paper Content Box */}
              <div
                className="absolute inset-[4px] bg-persona-white group-hover:bg-[#f6f6f6] transition-colors"
                style={{ clipPath: clipShape }}
              />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Decorative Persona Tape */}
                <div className="absolute -top-2.5 right-6 w-12 h-5 bg-persona-red/90 -rotate-6 border border-persona-black shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" />

                {/* Sub-header Tracker Label */}
                <div className="flex items-center justify-between mb-3 pt-1">
                  <span className="font-p5-marker text-xs uppercase tracking-widest text-persona-black/60 bg-black/5 px-2 py-0.5 border border-persona-black/20">
                    TARGET #{targetNumber}
                  </span>
                  <span className="font-p5-block text-xs uppercase tracking-widest text-persona-red font-bold">
                    CONFIDENTIAL
                  </span>
                </div>

                {/* Prominent Attention-Grabbing Title Banner */}
                <div className="relative my-2 -mx-2">
                  {/* Angled Red Offset Underlay */}
                  <div
                    className="absolute inset-0 bg-persona-red translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"
                    style={{ clipPath: "polygon(0 0, 100% 4%, 98% 100%, 2% 96%)" }}
                  />

                  {/* High-Contrast Black Title Plate */}
                  <div
                    className="relative bg-persona-black px-4 py-2 border-2 border-persona-black group-hover:bg-persona-black transition-colors"
                    style={{ clipPath: "polygon(0 0, 100% 4%, 98% 100%, 2% 96%)" }}
                  >
                    <h2 className="font-p5-block text-4xl sm:text-5xl text-persona-white group-hover:text-persona-red uppercase tracking-wider leading-none transition-colors drop-shadow-[2px_2px_0px_rgba(0,0,0,0.9)]">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Short Description */}
                <p className="font-p3-sleek font-bold text-persona-black/80 text-lg my-4 flex-grow leading-snug">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Tags - Ransom Note Style */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 pr-20">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 font-p5-marker text-xs sm:text-sm bg-persona-black text-persona-white shadow-[2px_2px_0px_rgba(255,0,0,0.6)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal CTA */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  <span className="font-p5-block text-persona-red text-2xl tracking-wider inline-flex items-center">
                    OPEN ➔
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}