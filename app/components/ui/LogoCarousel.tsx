"use client";

import { COMPANY_LOGOS } from "../../lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * LogoCarousel component displaying company logos in an infinite scrolling carousel
 * Automatically scrolls horizontally with smooth animation
 * Uses placeholder images that can be replaced later
 */
interface LogoCarouselProps {
  className?: string;
}

export default function LogoCarousel({ className = "" }: LogoCarouselProps) {
  // Duplicate logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <div className={`w-full overflow-hidden relative ${className}`}>
      <motion.div
        className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
            style={{ minWidth: "150px", maxWidth: "200px" }}
          >
            <Image
              src={company.logo || `https://via.placeholder.com/200x80/4a5568/ffffff?text=${encodeURIComponent(company.name)}`}
              alt={company.alt || company.name}
              width={200}
              height={80}
              className="object-contain h-12 sm:h-16 md:h-20 w-auto"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/200x80/4a5568/ffffff?text=${encodeURIComponent(company.name)}`;
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

