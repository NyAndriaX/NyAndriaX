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
      className="flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 relative z-10 snap-start"
      style={{ height: "100dvh", minHeight: "100dvh" }}
    >
      {/* Background 3D - only for Hero section */}
      <Background3D />
      
      {/* Spacer for header */}
      <div className="flex-shrink-0 relative z-10" style={{ height: "80px" }} />
      
      <div className="text-center max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center gap-20 relative z-10">
        {/* Name and Title */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
          <h1 className="text-4xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none px-2 !mb-8">
            {HERO_CONTENT.name}
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wider px-4 leading-snug">
            {HERO_CONTENT.title}
          </h2>
        </div>

        {/* FeaturedIn section right below the title */}
        <div className="w-full flex-shrink-0 group">
          <h2 className="text-center font-mono text-gray-400 group-hover:text-white transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wider !mb-12">
            AS FEATURED IN
          </h2>
          <div className="group-hover:[&_img]:brightness-0 group-hover:[&_img]:invert transition-all duration-300">
            <LogoCarousel />
          </div>
        </div>
      </div>
      
      {/* Bottom spacer */}
      <div className="flex-shrink-0" style={{ height: "40px" }} />
      
      {/* Scroll down animation - bottom center */}
      <button
        onClick={() => scrollToSection("expertise")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to next section"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Lottie animationData={scrollDownAnimation} loop={true} />
        </div>
      </button>
    </section>
  );
}

