"use client";

import { HERO_CONTENT } from "../../lib/constants";

/**
 * Hero section component displaying name and professional title
 * Main focal point of the homepage
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 relative z-10"
    >
      <div className="text-center space-y-4 md:space-y-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white uppercase tracking-tight leading-none">
          {HERO_CONTENT.name}
        </h1>
        <p className="font-mono text-gray-300 text-xs md:text-sm lg:text-base uppercase tracking-widest mt-4">
          {HERO_CONTENT.title}
        </p>
      </div>
    </section>
  );
}

