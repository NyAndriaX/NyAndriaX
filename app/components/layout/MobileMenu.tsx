"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Mobile menu component with hamburger icon
 * Displays navigation items in a slide-out menu on mobile devices
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden z-50 relative flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#0a0f1e]/95 backdrop-blur-md z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="flex flex-col gap-6">
                  {NAVIGATION_ITEMS.map((item, index) => {
                    const number = String(index + 1).padStart(2, "0");
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left group/item transition-colors duration-200"
                      >
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs leading-tight mb-1 transition-colors duration-200">
                            {number}
                          </span>
                          <span className="text-white text-lg leading-tight group-hover/item:text-gray-300 font-semibold transition-colors duration-200">
                            {"// "}{item.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

