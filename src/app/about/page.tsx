"use client"

import { motion } from "motion/react"
import { education } from "@/data/education"

// Animation variants for staggered timeline entries
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

// Skills data displayed as animated tags
const skills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS",
  "Node.js", "Python", "Git", "Docker",
  "PostgreSQL", "REST APIs", "GraphQL", "CI/CD",
]

export default function AboutPage() {
  return (
    <section className="min-h-screen py-24 px-6">
      {/* Split layout: Bio on the left, Education timeline on the right */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Bio side with P3R blue gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-lg"
          style={{
            background: "linear-gradient(135deg, var(--color-persona-midnight), var(--color-persona-blue))",
          }}
        >
          <h1 className="font-heading text-4xl font-bold text-persona-white mb-6">
            About Me
          </h1>
          <p className="text-persona-white/80 leading-relaxed mb-4">
            I'm a frontend developer who cares deeply about user experience,
            performance, and clean code. I build animated, accessible web
            applications that feel as good to use as they look.
          </p>
          <p className="text-persona-white/80 leading-relaxed">
            When I'm not coding, you'll find me exploring game UI design,
            contributing to open source, and learning new frameworks.
          </p>
          {/* Decorative P3R triangular accent */}
          <div
            className="absolute top-0 right-0 w-24 h-24 bg-persona-teal/20"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />
        </motion.div>

        {/* Education timeline with staggered entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-heading text-3xl font-bold text-persona-white mb-8">
            Education
          </h2>
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-persona-teal/50 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-persona-teal" />
              <span className="text-persona-teal text-sm font-mono">
                {item.year}
              </span>
              <h3 className="font-heading text-xl text-persona-white mt-1">
                {item.degree}
              </h3>
              <p className="text-persona-white/60">{item.institution}</p>
              {item.description && (
                <p className="text-persona-white/50 text-sm mt-1">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills sub-section with scroll-triggered reveal */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="font-heading text-3xl font-bold text-persona-white mb-8">
          Skills
        </h2>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="px-4 py-2 bg-persona-dark border border-persona-teal/30 text-persona-teal font-mono text-sm hover:border-persona-teal hover:bg-persona-teal/10 transition-colors"
              style={{ clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}