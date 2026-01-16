"use client";

import { COMPANY_LOGOS } from "../../lib/constants";

/**
 * FeaturedIn component displaying company logos
 * Shows where the portfolio owner has been featured
 * Uses text fallback for missing logos
 */
export default function FeaturedIn() {
  return (
    <section className="py-16 px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-mono text-gray-400 text-sm uppercase tracking-wider mb-8">
          AS FEATURED IN
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {COMPANY_LOGOS.map((company) => (
            <div
              key={company.id}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <span className="text-gray-400 font-mono text-xs md:text-sm hover:text-gray-300 transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

