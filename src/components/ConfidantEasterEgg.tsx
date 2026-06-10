"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function ConfidantEasterEgg() {
  // Track the number of clicks on the hidden trigger
  const [clickCount, setClickCount] = useState(0)
  // Control whether the modal is visible
  const [showModal, setShowModal] = useState(false)
  // Prevent triggering more than once per session
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Check sessionStorage on mount to see if already triggered
    const triggered = sessionStorage.getItem("confidant-triggered")
    if (triggered) {
      setHasTriggered(true)
    }
  }, [])

  const handleClick = useCallback(() => {
    if (hasTriggered) return

    const newCount = clickCount + 1
    setClickCount(newCount)

    // Trigger the modal after 5 clicks
    if (newCount >= 5) {
      setShowModal(true)
      setHasTriggered(true)
      sessionStorage.setItem("confidant-triggered", "true")
    }
  }, [clickCount, hasTriggered])

  const closeModal = () => setShowModal(false)

  const cardClipPath = "polygon(2% 0, 100% 2%, 98% 100%, 0 98%)"

  return (
    <>
      {/* Hidden trigger card in footer */}
      <button
        onClick={handleClick}
        className="opacity-30 hover:opacity-100 hover:text-persona-red transition-all text-sm cursor-default select-none"
        aria-label="Hidden easter egg trigger"
      >
        {"\uD83C\uDCC3"}
      </button>

      {/* Full-screen Confidant Rank Up modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="confidant-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-persona-black overflow-hidden"
            onClick={closeModal}
          >
            {/* Subtle B&W Halftone Background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(var(--color-persona-white) 15%, transparent 15%)",
                backgroundSize: "16px 16px"
              }}
            />

            {/* Jagged Entrance Container */}
            <motion.div
              initial={{ clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center w-full max-w-lg z-10"
            >
              {/* 3D Manga Panel Card Flip */}
              <motion.div
                initial={{ rotateY: 180, scale: 0.8 }}
                animate={{ rotateY: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7, type: "spring", bounce: 0.4 }}
                className="relative w-64 h-96 mb-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Shadow Layer (Red) */}
                <div 
                  className="absolute inset-0 bg-persona-red translate-x-4 translate-y-4" 
                  style={{ clipPath: cardClipPath }} 
                />
                
                {/* Border Layer (Black) */}
                <div 
                  className="absolute inset-0 bg-persona-black" 
                  style={{ clipPath: cardClipPath }} 
                />
                
                {/* Paper Layer (White) */}
                <div 
                  className="absolute inset-[4px] bg-persona-white flex flex-col items-center justify-center p-6" 
                  style={{ clipPath: cardClipPath }}
                >
                  {/* Decorative Tape */}
                  <div className="absolute -top-4 -left-4 w-16 h-8 bg-persona-black rotate-12" />
                  
                  {/* Card Content */}
                  <span className="text-8xl mb-4 text-persona-black drop-shadow-md">🃏</span>
                  
                  {/* Red Stamp */}
                  <div className="absolute bottom-12 right-0 border-4 border-persona-red text-persona-red font-p5-block text-4xl px-3 py-1 -rotate-12 opacity-90 bg-persona-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    MAX RANK
                  </div>
                </div>
              </motion.div>

              {/* Text Reveal Container */}
              <div className="relative text-center group cursor-default">
                {/* Background Slash Shadow */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  className="absolute inset-0 bg-persona-red translate-x-2 translate-y-2"
                  style={{ originX: 0, clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                />
                {/* Background Slash Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  className="absolute inset-0 bg-persona-black"
                  style={{ originX: 0, clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                />
                {/* Background Slash Fill */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  className="absolute inset-[4px] bg-persona-white"
                  style={{ originX: 0, clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                />

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="font-p5-block text-5xl md:text-6xl text-persona-black uppercase tracking-widest px-10 py-4 relative z-10"
                >
                  Confidant Forged!
                </motion.h2>
              </div>

              {/* Rank Designation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.6 }}
                className="mt-10 -rotate-2"
              >
                <p className="font-p5-marker text-persona-white text-3xl tracking-widest bg-persona-black px-6 py-2 border-4 border-persona-white shadow-[6px_6px_0px_rgba(255,0,0,1)]">
                  Rank: Accomplice
                </p>
              </motion.div>

              {/* Close Hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
                className="font-p3-sleek font-bold text-persona-white/60 text-sm mt-12 uppercase tracking-widest animate-pulse"
              >
                Click anywhere to close dossier
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}