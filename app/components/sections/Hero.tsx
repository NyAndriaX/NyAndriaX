"use client";

import { HERO_CONTENT, COMPANY_LOGOS } from "../../lib/constants";

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
      className="flex flex-col justify-between px-4 sm:px-6 md:px-8 relative z-10"
      style={{ height: "100dvh" }}
    >
      {/* Spacer to push content down and account for header */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-5xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white uppercase tracking-tight leading-none px-2">
            {HERO_CONTENT.name}
          </h1>
          <p className="font-mono text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest mt-2 sm:mt-4 px-4 leading-relaxed">
            {HERO_CONTENT.title}
          </p>
        </div>
      </div>

      {/* FeaturedIn section at the bottom */}
      <div className="py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-mono text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 md:mb-8">
            AS FEATURED IN
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {COMPANY_LOGOS.map((company) => (
              <div
                key={company.id}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <span className="text-gray-400 font-mono text-[10px] xs:text-xs sm:text-sm hover:text-gray-300 transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

