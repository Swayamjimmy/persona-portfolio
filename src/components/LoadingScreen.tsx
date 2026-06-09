"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [playExitAnimation, setPlayExitAnimation] = useState(true)

  useEffect(() => {
    // We are safely on the client now, React has hydrated
    const hasSeenLoading = sessionStorage.getItem("persona-loading-seen")
    
    if (hasSeenLoading) {
      // Returning user: Delete the component immediately (the CSS already hid it, so no flash!)
      setPlayExitAnimation(false)
      setIsLoading(false)
      return
    }

    // New user: Let the timer run
    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("persona-loading-seen", "true")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* 
        This script runs synchronously BEFORE the page paints. 
        If the user has been here before, it adds a class to the HTML tag that instantly hides the loader using CSS.
      */}
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && window.sessionStorage && sessionStorage.getItem('persona-loading-seen')) {
              document.documentElement.classList.add('hide-persona-loader');
            }
          `
        }}
      />
      
      {/* The CSS rule that guarantees the loader is invisible if the script found the session token */}
      <style suppressHydrationWarning>{`
        .hide-persona-loader #persona-global-loader {
          display: none !important;
        }
      `}</style>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="persona-global-loader"
            key="loading-screen"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={
              playExitAnimation
                ? { 
                    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", 
                    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
                  }
                : { opacity: 0, transition: { duration: 0 } }
            }
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-persona-black"
          >
            {/* Background Halftone Pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)", backgroundSize: "16px 16px" }}
            />

            {/* Aggressive Red Background Slice */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0 }}
              className="absolute inset-0 bg-persona-red"
              style={{ clipPath: "polygon(0 0, 50% 0, 30% 100%, 0 100%)" }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center -rotate-3">
              
              {/* Spinning Phantom Thief Star */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative w-20 h-20 mb-6 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-persona-red" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
                <div className="absolute inset-[4px] bg-persona-black" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
                <div className="absolute inset-[10px] bg-persona-white" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
              </motion.div>

              {/* "TAKE YOUR TIME" Banner */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring", bounce: 0.5 }}
                className="bg-persona-white border-4 border-persona-black px-8 py-3 shadow-[8px_8px_0px_rgba(255,0,0,1)] relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-persona-black rotate-12" />
                <h1 className="font-p5-block text-5xl md:text-7xl text-persona-black uppercase tracking-widest mt-1">
                  Take Your Time
                </h1>
              </motion.div>
              
              {/* Bouncing Loading Dots */}
              <div className="flex gap-4 mt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i} 
                    animate={{ y: [0, -15, 0] }} 
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }} 
                    className="w-5 h-5 bg-persona-white border-2 border-persona-black rotate-12 shadow-[2px_2px_0px_rgba(255,0,0,1)]" 
                  />
                ))}
              </div>
            </div>
            
            {/* Bottom Right "Now Loading" Indicator */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8 flex items-center gap-3 -rotate-2"
            >
              <div className="bg-persona-red px-4 py-1 border-2 border-persona-white animate-pulse">
                <span className="font-p5-marker text-persona-white text-2xl tracking-widest">
                  NOW LOADING
                </span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}