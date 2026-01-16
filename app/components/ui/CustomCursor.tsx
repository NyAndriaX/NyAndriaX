"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor component displaying a custom cursor with a circle and dot
 * The dot expands smoothly when the mouse moves and returns to normal size when stopped
 * Replaces the default cursor with a custom design
 */
export default function CustomCursor() {
  const [isMoving, setIsMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // More direct following for better alignment with system cursor
  const springConfig = { damping: 30, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let movementTimer: NodeJS.Timeout;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if mouse actually moved (not just a tiny jitter)
      const deltaX = Math.abs(e.clientX - lastX);
      const deltaY = Math.abs(e.clientY - lastY);
      
      if (deltaX > 0.5 || deltaY > 0.5) {
        setIsMoving(true);
        
        // Clear existing timer
        if (movementTimer) {
          clearTimeout(movementTimer);
        }
        
        // Set moving to false after a short delay
        movementTimer = setTimeout(() => {
          setIsMoving(false);
        }, 150);
      }
      
      lastX = e.clientX;
      lastY = e.clientY;
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (movementTimer) {
        clearTimeout(movementTimer);
      }
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide cursor on mobile devices
  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Outer circle */}
      <motion.div
        className="rounded-full border border-cyan-400/80 flex items-center justify-center"
        style={{ borderColor: "rgba(0, 217, 255, 0.8)" }}
        animate={{
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {/* Inner dot - positioned to align with system cursor */}
        <motion.div
          className="rounded-full"
          style={{ backgroundColor: "#00d9ff" }}
          animate={{
            width: 6,
            height: 6,
            scale: isMoving ? 1.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

