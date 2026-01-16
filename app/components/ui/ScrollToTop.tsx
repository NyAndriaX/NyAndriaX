"use client";

import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../../lib/utils";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

/**
 * ScrollToTop component
 * Displays a button to scroll back to the top/home section
 * Only visible when user has scrolled past the Hero section
 * Positioned at bottom right of the screen
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has scrolled past the Hero section (approximately 100vh)
  useEffect(() => {
    const checkScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleScrollToTop = () => {
    scrollToSection("home");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 z-50 !p-2 sm:!p-3 md:!p-4 bg-[#fff]/80 shadow-lg"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} className="text-[#b7f] sm:w-5 sm:h-5 md:w-5 md:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

