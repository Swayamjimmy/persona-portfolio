"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Intel" },
  { href: "/projects", label: "Targets" },
  { href: "/resume", label: "Dossier" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  return (
    <>
      {/* Trigger Button - Layered for a 3D block effect instead of borders */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-[100] group flex items-center justify-center -rotate-3 hover:-rotate-6 transition-all duration-300"
        aria-label="Open Menu"
      >
        {/* Shadow Layer (Acts like the border/depth) */}
        <div className="absolute inset-0 bg-persona-red translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform" 
             style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }} />
        
        {/* Main Background Layer */}
        <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-white transition-colors" 
             style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }} />
             
        {/* Text Layer - Added px-8 so the cut edges don't hit the text */}
        <span className="relative z-10 px-8 py-3 font-p5-block text-3xl tracking-widest text-persona-white group-hover:text-persona-black">
          MENU
        </span>
      </button>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="p5r-menu"
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[101] bg-persona-black flex flex-col justify-center pl-8 md:pl-24"
          >
            {/* Background elements to add chaos */}
            <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
            <div className="absolute right-0 top-0 w-3/4 md:w-1/2 h-full bg-persona-red pointer-events-none" 
                 style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }} />

            {/* Close Button - Using the same layered 3D fix */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 group flex items-center justify-center rotate-3 hover:-rotate-3 transition-all duration-300 z-50"
            >
              {/* Shadow Layer */}
              <div className="absolute inset-0 bg-persona-white translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform" 
                   style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }} />
              
              {/* Main Background Layer */}
              <div className="absolute inset-0 bg-persona-black group-hover:bg-persona-red transition-colors" 
                   style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }} />
                   
              <span className="relative z-10 px-8 py-3 font-p5-block text-3xl tracking-widest text-persona-white group-hover:text-persona-black">
                CLOSE
              </span>
            </button>

            {/* Staggered Navigation Links */}
            <div className="relative z-10 flex flex-col items-start gap-6 -rotate-3 mt-12 md:mt-0">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group block relative"
                    >
                      <div className={`absolute -inset-2 md:-inset-4 bg-persona-white border-4 border-persona-black transition-transform origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                           style={{ clipPath: "polygon(0 0, 100% 10%, 95% 100%, 5% 90%)", transitionDuration: '400ms' }} />
                      
                      <span className={`relative z-10 font-p5-block text-5xl md:text-7xl lg:text-8xl tracking-wider whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-persona-black' : 'text-stroke-p5 group-hover:text-persona-black group-hover:[-webkit-text-stroke:0px]'}`}>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}