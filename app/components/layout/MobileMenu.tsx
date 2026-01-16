"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";
import Logo from "../ui/Logo";
import { CloseOutlined } from "@ant-design/icons";

/**
 * Mobile menu component with hamburger icon
 * Displays navigation items in a slide-out menu on mobile devices
 * Includes logo and close button for professional appearance
 * Enhanced with smooth animations and better visual design
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="lg:hidden z-50 relative flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 !p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <motion.span
          className="w-5 h-0.5 bg-white rounded-full"
          animate={isOpen ? { rotate: 45, y: 6, backgroundColor: "#00d9ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-5 h-0.5 bg-white rounded-full"
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-5 h-0.5 bg-white rounded-full"
          animate={isOpen ? { rotate: -45, y: -6, backgroundColor: "#00d9ff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
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
              onClick={handleClose}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 sm:w-80 bg-gradient-to-b from-[#0a0f1e] via-[#0a0f1e]/98 to-[#0a0f1e] backdrop-blur-xl z-50 lg:hidden shadow-2xl border-r border-cyan-400/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo and Close Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between !px-6 !py-6 border-b border-cyan-400/20 bg-gradient-to-r from-cyan-400/5 to-transparent"
              >
                <Logo />
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-400/30 transition-all duration-200 group"
                  aria-label="Close menu"
                >
                  <CloseOutlined className="text-white text-lg group-hover:text-cyan-400 transition-colors duration-200" />
                </button>
              </motion.div>

              {/* Navigation Items */}
              <div className="flex flex-col h-full pt-6 px-4 pb-6 overflow-y-auto">
                <nav className="flex flex-col gap-2">
                  {NAVIGATION_ITEMS.map((item, index) => {
                    const number = String(index + 1).padStart(2, "0");
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.05 }}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left group/item transition-all duration-200 py-3 px-4 rounded-lg relative overflow-hidden ${
                          isActive 
                            ? "bg-cyan-400/10 border border-cyan-400/30" 
                            : "hover:bg-cyan-400/5 border border-transparent"
                        }`}
                      >
                        {/* Active indicator line */}
                        {isActive && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full"
                          />
                        )}
                        
                        <div className="flex flex-col relative z-10">
                          <span className={`text-xs sm:text-sm leading-tight mb-1.5 transition-colors duration-200 font-mono ${
                            isActive ? "text-cyan-400" : "text-cyan-400/50 group-hover/item:text-cyan-400/70"
                          }`}>
                            {number}
                          </span>
                          <span className={`text-base sm:text-lg leading-tight font-semibold transition-colors duration-200 ${
                            isActive 
                              ? "text-cyan-400" 
                              : "text-cyan-400 group-hover/item:text-cyan-400"
                          }`}>
                            {"// "}{item.label}
                          </span>
                        </div>
                        
                        {/* Hover effect background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                          initial={false}
                        />
                      </motion.button>
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

