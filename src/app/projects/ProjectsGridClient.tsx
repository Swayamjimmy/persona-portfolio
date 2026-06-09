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
        // Generate a slight random rotation for each card to make it look like scattered papers
        const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1'
        const clipShape = "polygon(2% 0, 100% 0, 98% 100%, 0 98%)"

        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative group ${rotation} hover:rotate-0 transition-transform duration-300 z-10 hover:z-20`}
          >
            <Link href={`/projects/${project.slug}`} className="block relative h-full">
              
              {/* Layer 1: The Drop Shadow (Black, turns Red on hover) */}
              <div 
                className="absolute inset-0 bg-persona-white/20 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:bg-persona-red transition-all duration-300" 
                style={{ clipPath: clipShape }} 
              />
              
              {/* Layer 2: The Thick Black Outline */}
              <div 
                className="absolute inset-0 bg-persona-black" 
                style={{ clipPath: clipShape }} 
              />
              
              {/* Layer 3: The White Paper Content Box */}
              <div 
                className="absolute inset-[4px] bg-persona-white group-hover:bg-[#f0f0f0] transition-colors" 
                style={{ clipPath: clipShape }} 
              />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                
                {/* Decorative Tape */}
                <div className="absolute top-0 right-4 w-8 h-4 bg-persona-red/80 -rotate-6" />

                <h2 className="font-p5-block text-3xl text-persona-black uppercase tracking-wider mb-3 leading-tight mt-4">
                  {project.title}
                </h2>
                
                <p className="font-p3-sleek font-bold text-persona-black/70 text-lg mb-6 flex-grow">
                  {project.shortDescription}
                </p>
                
                {/* Tech Stack Tags - Ransom Note Style */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 font-p5-marker text-sm bg-persona-black text-persona-white shadow-[2px_2px_0px_rgba(255,0,0,0.5)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-p5-block text-persona-red text-xl">
                    EXECUTE ➔
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