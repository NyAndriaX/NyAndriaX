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
        className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20"
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
            style={{ minWidth: "120px", maxWidth: "200px" }}
          >
            <Image
              src={company.logo || `https://via.placeholder.com/200x80/4a5568/ffffff?text=${encodeURIComponent(company.name)}`}
              alt={company.alt || company.name}
              width={200}
              height={80}
              className="object-contain h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
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

