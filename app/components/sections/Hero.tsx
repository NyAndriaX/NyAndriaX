"use client";

import { HERO_CONTENT } from "../../lib/constants";

/**
 * Hero section component displaying name and professional title
 * Main focal point of the homepage
 * Responsive design with adaptive text sizes
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 pt-20 sm:pt-24"
    >
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white uppercase tracking-tight leading-none px-2">
          {HERO_CONTENT.name}
        </h1>
        <p className="font-mono text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest mt-2 sm:mt-4 px-4 leading-relaxed">
          {HERO_CONTENT.title}
        </p>
      </div>
    </section>
  );
}

