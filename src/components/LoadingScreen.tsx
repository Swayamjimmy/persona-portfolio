"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function LoadingScreen() {
  // 1. Initialize to true so the server and client match perfectly on first render
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // 2. We are now safely on the client
    setIsMounted(true)

    // 3. Check session storage ONLY after mounting
    const hasSeenLoading = sessionStorage.getItem("persona-loading-seen")
    
    if (hasSeenLoading) {
      setIsLoading(false)
      return
    }

    // 4. If they haven't seen it, run the timer
    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("persona-loading-seen", "true")
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // 5. Prevent rendering the animation container until the client is ready
  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-persona-black"
        >
          {/* Diagonal background shape */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-persona-red/10 origin-left"
            style={{ clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)" }}
          />

          {/* Animated site logo text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 text-center"
          >
            <motion.h1
              className="font-heading text-5xl font-bold text-persona-red uppercase tracking-widest"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              PORTFOLIO
            </motion.h1>
            <motion.div
              className="h-0.5 bg-persona-red mx-auto mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}