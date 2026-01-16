"use client";

import { LOGO_TEXT } from "../../lib/constants";

/**
 * Logo component with blinking cursor effect
 * Displays the portfolio logo with a terminal-style blinking underscore
 * Responsive design with adaptive text sizes
 */
export default function Logo() {
  // Extract logo text without the underscore
  const logoText = LOGO_TEXT.replace("._", "");
  
  return (
    <div className="flex items-center gap-0 font-mono text-cyan-400 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
      <span className="text-cyan-400">{logoText}</span>
      <span className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">.</span>
      <span className="text-purple-500 animate-pulse">_</span>
    </div>
  );
}

