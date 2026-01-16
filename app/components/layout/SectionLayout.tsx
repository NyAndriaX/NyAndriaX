"use client";

import { ReactNode } from "react";

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  fullHeight?: boolean;
  snapStart?: boolean;
}

/**
 * SectionLayout component
 * Provides consistent layout structure for all sections
 * Handles padding, max-width, and responsive design
 */
export default function SectionLayout({
  id,
  children,
  className = "",
  backgroundColor = "#1a191d",
  fullHeight = false,
  snapStart = true,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={`${fullHeight ? "h-screen" : "min-h-screen"} flex flex-col justify-center relative z-10 !py-12 sm:!py-16 md:!py-20 lg:!py-24 ${snapStart ? "snap-start" : ""} ${className}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl !mx-auto w-full flex-1 relative z-10 !px-6 md:!px-20">
        {children}
      </div>
    </section>
  );
}

