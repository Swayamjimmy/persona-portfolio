"use client"

import { motion, type Variants } from "motion/react"
import { education } from "@/data/education"

// Animation variants for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
}

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Git",
  "Docker",
  "PostgreSQL",
  "REST APIs",
  "CI/CD",
  "AWS",
  "Langgraph",
  "Langchain",
]

export default function AboutPage() {
  return (
    <section className="min-h-screen py-32 px-6 relative bg-persona-black overflow-hidden">
      
      {/* Subtle B&W Background Elements */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-persona-white) 15%, transparent 15%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-persona-white/5 pointer-events-none -skew-x-12 translate-x-20"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 relative z-10">

        {/* ================= LEFT COLUMN ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 relative"
        >
          {/* Section Title */}
          <div className="mb-6 -rotate-2 inline-block">
            <span className="font-p5-marker text-persona-white text-3xl bg-persona-black px-4 py-1 border-2 border-persona-white inline-block shadow-[4px_4px_0px_rgba(255,255,255,1)]">
              CONFIDENTIAL INTEL
            </span>
          </div>

          {/* Bio Paper Block */}
          <div className="relative group mt-4">

            {/* Shadow Layer */}
            <div
              className="absolute inset-0 bg-persona-white/20 translate-x-3 translate-y-3"
              style={{
                clipPath:
                  "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)",
              }}
            />

            {/* Main Content */}
            <div
              className="relative bg-persona-white p-10 border-4 border-persona-black text-persona-black"
              style={{
                clipPath:
                  "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)",
              }}
            >
              {/* Red Corner Decoration */}
              <div
                className="absolute top-0 left-0 w-16 h-16 bg-persona-red border-b-4 border-r-4 border-persona-black"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              />

              <h1 className="font-p5-block text-6xl mb-6 mt-2 tracking-wide uppercase">
                About Me
              </h1>

              <div className="space-y-6 font-p3-sleek text-xl font-bold leading-relaxed">
                <p>
                  I'm a frontend developer who cares deeply about user
                  experience, performance, and clean code. I build animated,
                  accessible web applications that feel as good to use as they
                  look.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring game UI design,
                  contributing to open source, and learning new frameworks to
                  add to my arsenal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-5 space-y-16 mt-8 md:mt-0"
        >

          {/* ================= EDUCATION ================= */}
          <div>
            <h2 className="font-p5-block text-5xl text-persona-white mb-8 border-b-4 border-persona-white pb-2 inline-block">
              History
            </h2>

            <div className="space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >

                  {/* Year Tag */}
                  <div className="absolute -top-4 -left-4 z-30 -rotate-3">
                    <span className="font-p5-marker text-persona-white text-lg bg-persona-black border-2 border-persona-white px-3 py-1 shadow-[2px_2px_0px_rgba(255,255,255,1)] group-hover:bg-persona-red group-hover:border-persona-black group-hover:text-persona-black transition-colors inline-block">
                      {item.year}
                    </span>
                  </div>

                  {/* Education Card */}
                  <div className="relative group-hover:-translate-y-1 transition-transform mt-2">

                    {/* Outer White Border */}
                    <div
                      className="absolute inset-0 bg-persona-white"
                      style={{
                        clipPath:
                          "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
                      }}
                    />

                    {/* Inner Black Background */}
                    <div
                      className="absolute inset-[4px] bg-persona-black"
                      style={{
                        clipPath:
                          "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
                      }}
                    />

                    {/* ================= CGPA PILL ================= */}
                    <div className="absolute -top-5 right-3 sm:right-5 z-40 rotate-2">
                      <span
                        className="
                          font-p5-marker
                          text-persona-black
                          text-base
                          sm:text-lg
                          bg-persona-white
                          border-2
                          border-persona-black
                          px-3
                          sm:px-4
                          py-1
                          shadow-[3px_3px_0px_rgba(255,0,0,1)]
                          inline-block
                          whitespace-nowrap
                        "
                      >
                        CGPA: {item.cgpa}
                      </span>
                    </div>

                    {/* Education Content */}
                    <div className="relative z-10 p-6 pt-9 sm:pt-8">

                      <h3 className="font-p5-block text-2xl sm:text-3xl text-persona-white tracking-widest mt-1 pr-20">
                        {item.degree}
                      </h3>

                      <p className="font-p3-sleek font-bold text-persona-white/70 text-base sm:text-lg mt-1 uppercase">
                        {item.institution}
                      </p>

                      {item.description && (
                        <p className="font-p3-sleek text-persona-white/90 mt-3 border-t-2 border-persona-white/20 pt-3">
                          {item.description}
                        </p>
                      )}

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= SKILLS ================= */}
          <div>
            <h2 className="font-p5-block text-5xl text-persona-white mb-8 border-b-4 border-persona-white pb-2 inline-block">
              Arsenal
            </h2>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group cursor-default"
                >

                  {/* Skill Shadow */}
                  <div
                    className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:bg-persona-red group-hover:translate-x-2 group-hover:translate-y-2 transition-all"
                    style={{
                      clipPath:
                        "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                    }}
                  />

                  {/* Skill Tag */}
                  <div className="relative px-4 py-2 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">

                    {/* Outer Border */}
                    <div
                      className="absolute inset-0 bg-persona-white"
                      style={{
                        clipPath:
                          "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                      }}
                    />

                    {/* Inner Background */}
                    <div
                      className="absolute inset-[2px] bg-persona-black group-hover:bg-persona-white transition-colors"
                      style={{
                        clipPath:
                          "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                      }}
                    />

                    <span className="relative z-10 font-p5-block text-xl tracking-wider text-persona-white group-hover:text-persona-black transition-colors block">
                      {skill}
                    </span>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}