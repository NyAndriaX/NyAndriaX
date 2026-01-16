"use client";

import { scrollToSection } from "../../lib/utils";

/**
 * ScrollIndicator component
 * Displays a downward arrow indicating scrollable content
 * Responsive design with adaptive sizing
 */
export default function ScrollIndicator() {
  const handleScrollDown = () => {
    scrollToSection("expertise");
  };

  return (
    <button
      onClick={handleScrollDown}
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      aria-label="Scroll down"
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center">
        <svg
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </button>
  );
}

