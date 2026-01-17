"use client";

import { HERO_CONTENT } from "../../lib/constants";
import LogoCarousel from "../ui/LogoCarousel";
import Lottie from "lottie-react";
import scrollDownAnimation from "../../../public/Scroll down hint.json";
import { scrollToSection } from "../../lib/utils";
import Background3D from "../ui/Background3D";

/**
 * Hero section component displaying name and professional title
 * Main focal point of the homepage
 * Responsive design with adaptive text sizes
 * Includes FeaturedIn section at the bottom
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 snap-start"
      style={{ height: "100dvh", minHeight: "100dvh" }}
    >
      {/* Background 3D - only for Hero section */}
      <Background3D />
      
      {/* Spacer for header */}
      <div className="flex-shrink-0 relative z-10 h-20 sm:h-24 md:h-20" />
      
      <div className="text-center max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 relative z-10 px-2 sm:px-4">
        {/* Name and Title */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white uppercase tracking-tight leading-none px-2 !mb-5 sm:!mb-6 md:!mb-8">
            {HERO_CONTENT.name}
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase tracking-wider px-2 sm:px-4 leading-snug">
            {HERO_CONTENT.title}
          </h2>
        </div>

        {/* FeaturedIn section right below the title */}
        <div className="w-full flex-shrink-0 group">
          <h2 className="text-center font-mono text-gray-400 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wider !mb-6 sm:!mb-8 md:!mb-10 lg:!mb-12">
            AS FEATURED IN
          </h2>
          <div className="group-hover:[&_img]:brightness-0 group-hover:[&_img]:invert transition-all duration-300">
            <LogoCarousel />
          </div>
        </div>
      </div>
      
      {/* Bottom spacer */}
      <div className="flex-shrink-0 h-12 sm:h-16 md:h-20" />
      
      {/* Scroll down animation - bottom center */}
      <button
        onClick={() => scrollToSection("expertise")}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to next section"
      >
        <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Lottie animationData={scrollDownAnimation} loop={true} />
        </div>
      </button>
    </section>
  );
}

