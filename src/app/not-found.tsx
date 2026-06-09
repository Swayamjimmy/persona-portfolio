"use client"

import Link from "next/link"
import { motion } from "motion/react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Angular P5R shape in the background */}
      <div
        className="absolute inset-0 bg-persona-red/5"
        style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <h1 className="font-heading text-8xl font-bold text-persona-red mb-4">404</h1>
        <p className="font-heading text-2xl text-persona-white/70 mb-8">
          You've entered the Shadow World.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-persona-red text-persona-white font-heading uppercase tracking-wider hover:bg-red-700 transition-colors inline-block"
          style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
        >
          Return to Reality
        </Link>
      </motion.div>
    </div>
  )
}