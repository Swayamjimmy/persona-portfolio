"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"

// P5R diagonal-wipe page transition
// The offset between top and bottom clip-path points creates an angular leading edge
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ clipPath: "polygon(0 0, 15% 0, 0 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        exit={{ clipPath: "polygon(85% 0, 100% 0, 100% 100%, 100% 100%)" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}