"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export default function CustomCursor() {
  // Track whether the cursor is hovering an interactive element
  const [isHovering, setIsHovering] = useState(false)
  // Track the current color based on page section
  const [cursorColor, setCursorColor] = useState("#FF0000")

  // Motion values for smooth cursor position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Apply spring physics so the cursor trails slightly behind the mouse
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Detect which section the cursor is in by checking element beneath
      const element = document.elementFromPoint(e.clientX, e.clientY)
      if (element) {
        const section = element.closest("[data-section]")
        if (section?.getAttribute("data-section") === "p3r") {
          setCursorColor("#00bcd4") // P3R teal
        } else {
          setCursorColor("#FF0000") // P5R red
        }
      }
    }

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full mix-blend-difference hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        backgroundColor: cursorColor,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )
}