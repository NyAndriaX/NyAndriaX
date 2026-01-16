"use client";

import { scrollToSection } from "../../lib/utils";

/**
 * ScrollIndicator component
 * Displays a downward arrow indicating scrollable content
 */
export default function ScrollIndicator() {
  const handleScrollDown = () => {
    scrollToSection("expertise");
  };

  return (
    <button
      onClick={handleScrollDown}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      aria-label="Scroll down"
    >
      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
        <svg
          className="w-4 h-4 text-white"
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

