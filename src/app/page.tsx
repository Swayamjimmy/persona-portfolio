"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { siteConfig } from "@/data/site"

export default function HomePage() {
  return (
    <div className="relative bg-persona-black selection:bg-persona-white selection:text-persona-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-persona-black" />
        
        {/* Giant Halftone Starburst / Angle */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-halftone"
          style={{ clipPath: "polygon(0 0, 60% 0, 30% 100%, 0 100%)" }}
        />
        
        {/* Aggressive Red Slash */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          className="absolute inset-0 bg-persona-red"
          style={{ clipPath: "polygon(70% 0, 100% 0, 100% 100%, 40% 100%)" }}
        />

        {/* Floating Decorative "Take Your Time" element */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 md:left-32 z-0 opacity-50 hidden md:block"
        >
          <div className="border-4 border-persona-white text-persona-white font-p5-block text-4xl px-4 py-2 -rotate-12 tracking-widest">
            TAKE YOUR TIME
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-4 -rotate-2 mt-16">
          
          {/* Calling Card Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.6 }}
            className="relative bg-persona-white px-8 py-2 border-4 border-persona-black mb-6 shadow-[6px_6px_0px_rgba(255,0,0,1)]"
          >
            {/* Tape Corner */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-persona-black rotate-12" />
            <p className="font-p5-marker text-persona-black text-2xl md:text-3xl tracking-widest mt-1">
              Frontend Developer
            </p>
          </motion.div>

          {/* Massive Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.5 }}
            className="font-p5-block text-7xl md:text-9xl lg:text-[11rem] text-stroke-p5 uppercase mb-6 leading-none text-center"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Description Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative bg-persona-black border-4 border-persona-white p-4 md:p-6 mb-12 max-w-2xl shadow-[8px_8px_0px_rgba(255,255,255,0.2)] rotate-1"
          >
            <p className="font-p3-sleek font-bold text-persona-white text-xl md:text-2xl text-center">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* Fixed CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <Link
              href="/projects"
              className="group relative px-10 py-5 font-p5-block text-3xl uppercase tracking-wider text-persona-white transition-transform hover:scale-110 hover:-rotate-3 inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:bg-persona-black transition-all" style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} />
              <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-persona-black">
                View Targets
              </span>
            </Link>

            <Link
              href="/about"
              className="group relative px-10 py-5 font-p5-block text-3xl uppercase tracking-wider text-persona-black transition-transform hover:scale-110 hover:rotate-3 inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-persona-black translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:bg-persona-red transition-all" style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }} />
              <div className="absolute inset-0 bg-persona-white group-hover:bg-[#e0e0e0] transition-colors" style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }} />
              <span className="relative z-10 transition-colors duration-300">
                Read Dossier
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= ARSENAL SECTION ================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 -rotate-2 inline-block"
        >
          <h2 className="font-p5-block text-6xl md:text-7xl text-stroke-p5 uppercase">
            My Arsenal
          </h2>
          <div className="h-2 w-full bg-persona-white mt-2 shadow-[4px_4px_0px_rgba(255,0,0,1)]" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Frontend", description: "Building responsive, highly interactive web applications with React and Next.js.", rotation: "-rotate-2" },
            { title: "Animation", description: "Creating fluid, purposeful motion that guides users and breaks the grid.", rotation: "rotate-1" },
            { title: "Systems", description: "Crafting scalable component libraries and integrating complex backend APIs.", rotation: "-rotate-1" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group ${item.rotation} hover:rotate-0 transition-transform duration-300`}
            >
              {/* Layered Manga Panel */}
              <div className="absolute inset-0 bg-persona-white/20 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:bg-persona-red transition-all" style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }} />
              <div className="absolute inset-0 bg-persona-black" style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }} />
              <div className="absolute inset-[4px] bg-persona-white group-hover:bg-[#f5f5f5] transition-colors" style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }} />
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Red Tape Detail */}
                <div className="absolute -top-2 -left-2 w-12 h-6 bg-persona-red/90 -rotate-12 border-2 border-persona-black" />
                
                <h3 className="font-p5-block text-4xl text-persona-black tracking-wider mb-4 mt-2">
                  {item.title}
                </h3>
                <p className="font-p3-sleek font-bold text-persona-black/80 text-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-40 px-6 relative overflow-hidden bg-persona-black">
        {/* Subtle Background Halftone */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)", backgroundSize: "12px 12px" }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="mb-8 rotate-1"
          >
            <h2 className="font-p5-block text-7xl md:text-8xl text-stroke-p5 uppercase bg-persona-black p-4 inline-block">
              Send A Calling Card
            </h2>
          </motion.div>

          <p className="font-p5-marker text-persona-black text-2xl md:text-3xl mb-16 bg-persona-white px-8 py-3 -rotate-2 inline-block border-4 border-persona-black shadow-[6px_6px_0px_rgba(255,0,0,1)]">
            Ready to steal the show?
          </p>

          {/* Contact Links - Upgraded to Layered Blocks */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 font-p5-block text-3xl uppercase inline-flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform"
            >
              <div className="absolute inset-0 bg-persona-white translate-x-2 translate-y-2 group-hover:bg-persona-red transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-white transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <span className="relative z-10 text-persona-white group-hover:text-persona-black transition-colors">
                GitHub
              </span>
            </a>
            
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 font-p5-block text-3xl uppercase inline-flex items-center justify-center rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="absolute inset-0 bg-persona-white translate-x-2 translate-y-2 group-hover:bg-persona-red transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-white transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <span className="relative z-10 text-persona-white group-hover:text-persona-black transition-colors">
                LinkedIn
              </span>
            </a>
            
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="group relative px-10 py-4 font-p5-block text-3xl uppercase inline-flex items-center justify-center -rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="absolute inset-0 bg-persona-black translate-x-2 translate-y-2 transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <div className="absolute inset-0 bg-persona-red group-hover:bg-persona-white transition-colors" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }} />
              <span className="relative z-10 text-persona-black transition-colors">
                Email Me
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}