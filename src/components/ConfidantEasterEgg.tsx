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

  return (
    <>
      {/* Hidden trigger card in footer */}
      <button
        onClick={handleClick}
        className="opacity-30 hover:opacity-60 transition-opacity text-sm cursor-default select-none"
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
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-persona-black/95"
            onClick={closeModal}
          >
            {/* Diamond-shaped entrance container */}
            <motion.div
              initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
              animate={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-80 h-96 flex flex-col items-center justify-center"
            >
              {/* 3D Tarot card flip */}
              <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="w-48 h-72 bg-gradient-to-b from-persona-red to-persona-midnight rounded-lg border-2 border-persona-red/50 flex items-center justify-center mb-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-6xl">{"\uD83C\uDCC3"}</span>
              </motion.div>

              {/* Staggered text reveal */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="font-heading text-persona-red text-xl uppercase tracking-widest"
              >
                Confidant Rank Up!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="font-heading text-persona-white/70 text-lg mt-2"
              >
                Rank: Visitor
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
                className="text-persona-white/40 text-sm mt-6"
              >
                Click anywhere to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}