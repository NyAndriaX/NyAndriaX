"use client";

import Image from "next/image";

/**
 * Background3D component displaying the portfolio background image
 * Uses the provided cover image as the main background
 * This background is unique to the home page only
 */
export default function Background3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 home-background">
      {/* Background image */}
      <Image
        src="/tsilavina-home-cover.jpg"
        alt="Portfolio background"
        fill
        priority
        className="object-cover object-center opacity-90"
        quality={75}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-[#0a0f1e]/20 to-[#0a0f1e]/40" />
    </div>
  );
}

