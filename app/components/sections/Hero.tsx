"use client";

import { motion } from "framer-motion";
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
  // Split name and title into words
  const nameWords = HERO_CONTENT.name.split(" ");
  const titleWords = HERO_CONTENT.title.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: nameWords.length * 0.1 + 0.3 + i * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const featuredVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: nameWords.length * 0.1 + titleWords.length * 0.1 + 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: nameWords.length * 0.1 + titleWords.length * 0.1 + 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 0.6,
        delay: nameWords.length * 0.1 + titleWords.length * 0.1 + 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between !px-4 sm:!px-6 md:!px-12 lg:!px-16 xl:!px-20 relative z-10"
      style={{ height: "100dvh", minHeight: "100dvh" }}
    >
      {/* Background 3D - only for Hero section */}
      <Background3D />
      
      {/* Spacer for header */}
      <div className="shrink-0 relative z-10 h-20 sm:h-24 md:h-20" />
      
      <div className="text-center max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center gap-12 sm:gap-12 md:gap-16 lg:gap-20 relative z-10">
        {/* Name and Title */}
        <div className="mb-12 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white uppercase tracking-tight leading-none px-2 !mb-6 sm:!mb-6 md:!mb-8">
            {nameWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <h2 className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase tracking-wider px-2 sm:px-4 leading-snug">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={titleWordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
                {index < titleWords.length - 1 && (
                  <span className="inline-block" style={{ width: "0.3em" }} />
                )}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* FeaturedIn section right below the title */}
        <div className="w-full shrink-0 group">
          <motion.h2
            variants={featuredVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-mono text-gray-400 group-hover:text-white transition-colors duration-300 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wider !mb-8 sm:!mb-8 md:!mb-10 lg:!mb-12"
          >
            TECHNOLOGIES
          </motion.h2>
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="group-hover:[&_img]:saturate-150 group-hover:[&_img]:brightness-110 transition-all duration-300"
          >
            <LogoCarousel />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom spacer */}
      <div className="shrink-0 h-12 sm:h-16 md:h-20" />
      
      {/* Scroll down animation - bottom center */}
      <motion.button
        variants={scrollButtonVariants}
        initial="hidden"
        animate="visible"
        onClick={() => scrollToSection("expertise")}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to next section"
        whileHover={{ opacity: 1 }}
      >
        <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Lottie animationData={scrollDownAnimation} loop={true} />
        </div>
      </motion.button>
    </section>
  );
}

