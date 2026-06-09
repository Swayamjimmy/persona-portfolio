"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { siteConfig } from "@/data/site"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Diagonal background shapes */}
        <div
          className="absolute inset-0 bg-persona-red/10"
          style={{ clipPath: "polygon(0 0, 50% 0, 30% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-persona-red/5"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}
        />
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-persona-dark"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Hero content with staggered reveal */}
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-persona-red font-heading text-lg md:text-xl uppercase tracking-widest mb-4"
          >
            Frontend Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-persona-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons with angular clip-path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-persona-red text-persona-white font-heading uppercase tracking-wider hover:bg-red-700 transition-colors"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-persona-white/30 text-persona-white font-heading uppercase tracking-wider hover:border-persona-red hover:text-persona-red transition-colors"
              style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section - scroll triggered */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What I Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frontend Development", description: "Building responsive, performant web applications with React and TypeScript." },
            { title: "UI Animation", description: "Creating fluid, purposeful motion that guides users through interfaces." },
            { title: "Design Systems", description: "Crafting reusable component libraries that scale across products." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 border border-persona-white/10 hover:border-persona-red/50 transition-colors"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
            >
              <h3 className="font-heading text-xl font-bold text-persona-red mb-3">
                {item.title}
              </h3>
              <p className="text-persona-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}