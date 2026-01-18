"use client";

import { TECH_LOGOS } from "../../lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * LogoCarousel component displaying technology logos in an infinite scrolling carousel
 * Automatically scrolls horizontally with smooth infinite animation
 * Uses placeholder images that can be replaced later
 */
interface LogoCarouselProps {
  className?: string;
}

export default function LogoCarousel({ className = "" }: LogoCarouselProps) {
  // Duplicate logos multiple times for seamless infinite scroll
  // We need at least 3 copies to ensure all logos are visible
  // Animation goes from 0% to -33.333% (one third), creating seamless loop
  // This ensures Docker and all logos are visible before looping
  const duplicatedLogos = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];

  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (logoPath: string) => {
    setFailedImages((prev) => new Set(prev).add(logoPath));
  };

  return (
    <div className={`w-full overflow-hidden relative ${className}`}>
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20"
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedLogos.map((company, index) => {
          const hasFailed = failedImages.has(company.logo);
          
          return (
            <div
              key={`${company.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
              style={{ minWidth: "120px", maxWidth: "200px" }}
            >
              {hasFailed ? (
                <span className="text-gray-400 font-mono text-[10px] xs:text-xs sm:text-sm hover:text-gray-300 transition-colors">
                  {company.name}
                </span>
              ) : (
                <Image
                  src={company.logo}
                  alt={company.alt || company.name}
                  width={200}
                  height={80}
                  className="object-contain h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
                  style={{ filter: "none" }}
                  onError={() => handleImageError(company.logo)}
                  unoptimized
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

