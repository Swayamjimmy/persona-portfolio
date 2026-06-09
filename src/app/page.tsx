"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { siteConfig } from "@/data/site"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-persona-black">
        
        {/* Halftone background slice - angled sharply */}
        <div
          className="absolute inset-0 bg-halftone opacity-80"
          style={{ clipPath: "polygon(0 0, 45% 0, 25% 100%, 0 100%)" }}
        />
        
        {/* Solid red intersecting slice */}
        <div
          className="absolute inset-0 bg-persona-red"
          style={{ clipPath: "polygon(65% 0, 100% 0, 100% 100%, 35% 100%)" }}
        />

        {/* Hero content - Tilted to break the grid */}
        <div className="relative z-10 flex flex-col items-center px-4 -rotate-3">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-persona-black border-4 border-persona-white px-6 py-2 -skew-x-12 mb-4 shadow-[8px_8px_0px_rgba(255,0,0,1)]"
          >
            <p className="font-p5-marker text-persona-white text-2xl md:text-4xl tracking-widest">
              Frontend Developer
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="font-p5-block text-7xl md:text-9xl lg:text-[10rem] text-stroke-p5 uppercase mb-6 leading-none text-center"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-p3-sleek font-bold text-persona-white text-xl md:text-2xl max-w-2xl bg-persona-black/80 backdrop-blur-sm p-4 border-l-4 border-persona-red mb-10"
          >
            {siteConfig.description}
          </motion.p>

{/* CTA Buttons - Jagged Manga Panel Style (Fixed Text Contrast) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mt-4"
          >
            <Link
              href="/projects"
              className="group relative px-10 py-4 font-p5-block text-3xl uppercase tracking-wider text-persona-white transition-transform hover:scale-110 hover:-rotate-2 inline-flex items-center justify-center"
            >
              {/* Shadow Layer */}
              <div className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:bg-persona-black transition-all" 
                   style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} />
              
              {/* Main Background Layer (Turns Red) */}
              <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" 
                   style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} />
              
              {/* Text Layer: Transitions from White to sharp Black on hover */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-persona-black">
                Take Your Heart
              </span>
            </Link>

            <Link
              href="/about"
              className="group relative px-10 py-4 font-p5-block text-3xl uppercase tracking-wider text-persona-black transition-transform hover:scale-110 hover:rotate-2 inline-flex items-center justify-center"
            >
              {/* Shadow Layer */}
              <div className="absolute inset-0 bg-persona-black translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:bg-persona-white transition-all" 
                   style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }} />
              
              {/* Main Background Layer (Turns Halftone) */}
              <div className="absolute inset-0 bg-persona-white group-hover:bg-halftone transition-all" 
                   style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }} />
              
              {/* Text Layer: Transitions from Black to stark White to pop off the halftone */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-persona-white">
                View Intel
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-32 px-4 max-w-5xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-p5-block text-6xl text-stroke-p5 mb-16 -rotate-2 inline-block"
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", description: "Building responsive, performant web applications with React and TypeScript." },
            { title: "Animation", description: "Creating fluid, purposeful motion that guides users through interfaces." },
            { title: "Systems", description: "Crafting reusable component libraries that scale across products." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative p-6 bg-persona-dark border-4 border-persona-black hover:border-persona-red transition-colors group shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_rgba(255,0,0,1)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
            >
              <h3 className="font-p5-marker text-3xl text-persona-red mb-3 group-hover:scale-105 origin-left transition-transform">
                {item.title}
              </h3>
              <p className="font-p3-sleek text-persona-white/80 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-persona-black">
        <div className="absolute inset-0 bg-halftone opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center rotate-1">
          <h2 className="font-p5-block text-7xl text-stroke-p5 mb-6">
            Get In Touch
          </h2>

          <p className="font-p5-marker text-persona-white text-2xl mb-12 bg-persona-red px-6 py-2 -rotate-2 inline-block shadow-[4px_4px_0px_rgba(255,255,255,1)] text-persona-black">
            Looking for ambitious projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-persona-black border-4 border-persona-white font-p5-block text-2xl uppercase tracking-wider text-persona-white hover:bg-persona-white hover:text-persona-black transition-colors -skew-x-12"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-persona-black border-4 border-persona-white font-p5-block text-2xl uppercase tracking-wider text-persona-white hover:bg-persona-white hover:text-persona-black transition-colors -skew-x-12"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="px-8 py-3 bg-persona-red border-4 border-persona-black font-p5-block text-2xl uppercase tracking-wider text-persona-black hover:bg-persona-black hover:text-persona-red transition-colors -skew-x-12"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}