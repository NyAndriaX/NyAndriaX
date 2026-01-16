"use client";

import { useState } from "react";
import { MotionValue, motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

interface NavigationProps {
  fontSize?: MotionValue<number>;
  numberFontSize?: MotionValue<number>;
  variant?: "primary" | "secondary";
}

/**
 * Navigation component displaying menu items with numbers and "//" prefix
 * Styled with sans-serif font
 * Numbers positioned directly above the link text
 */
export default function Navigation({ fontSize, numberFontSize, variant = "secondary" }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  // Color classes based on variant and hover state
  const getLinkColor = (index: number) => {
    if (variant === "primary") {
      // Secondary nav: cyan by default, lighter cyan when nav hovered, cyan when item hovered
      if (hoveredIndex === index) return "text-cyan-400";
      if (isNavHovered) return "text-cyan-400/50";
      return "text-cyan-400";
    } else {
      // Primary nav: white by default, gray when nav hovered, white when item hovered
      if (hoveredIndex === index) return "text-white";
      if (isNavHovered) return "text-gray-400";
      return "text-white";
    }
  };

  return (
    <nav 
      className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6" 
      data-nav-variant={variant}
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => {
        setIsNavHovered(false);
        setHoveredIndex(null);
      }}
    >
      {NAVIGATION_ITEMS.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className="text-left transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col items-end">
              {numberFontSize ? (
                <motion.span 
                  className={variant === "primary" ? "text-cyan-400/50 leading-tight mb-0.5 transition-colors duration-200" : "text-gray-400 leading-tight mb-0.5 transition-colors duration-200"}
                  style={{ fontSize: numberFontSize }}
                >
                  {number}
                </motion.span>
              ) : (
                <span className={variant === "primary" ? "text-cyan-400/50 text-sm leading-tight mb-0.5 transition-colors duration-200" : "text-gray-400 text-sm leading-tight mb-0.5 transition-colors duration-200"}>
                  {number}
                </span>
              )}
              {fontSize ? (
                <motion.span 
                  className={`${getLinkColor(index)} font-semibold leading-tight transition-colors duration-200`}
                  style={{ fontSize }}
                >
                  {"// "}{item.label}
                </motion.span>
              ) : (
                <span 
                  className={`${getLinkColor(index)} font-semibold text-lg leading-tight transition-colors duration-200`}
                >
                  {"// "}{item.label}
                </span>
              )}
            </div>
          </button>
        );
      })}
      {/* Vertical line separator */}
      <div className="h-6 sm:h-7 md:h-8 w-px bg-gray-400/30" />
    </nav>
  );
}

