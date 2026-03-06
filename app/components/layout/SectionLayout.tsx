"use client";

import { ReactNode } from "react";

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  fullHeight?: boolean;
  snapStart?: boolean;
  snapEnd?: boolean;
  autoHeight?: boolean;
}

/**
 * SectionLayout component
 * Provides a consistent layout structure for all sections
 * Manages padding, max width, and responsive design
 * Sections are limited to screen height with internal scroll if content overflows
 */
export default function SectionLayout({
  id,
  children,
  className = "",
  backgroundColor = "#1a191d",
  fullHeight = false,
  snapStart = false,
  snapEnd = false,
  autoHeight = false,
}: SectionLayoutProps) {
  const heightClass = autoHeight ? "min-h-screen" : "h-screen";
  const overflowClass = autoHeight ? "" : "overflow-y-auto";
  
  return (
    <section
      id={id}
      className={`${heightClass} flex flex-col justify-start ${overflowClass} relative z-10 !py-8 sm:!py-12 md:!py-16 lg:!py-20 xl:!py-24 ${className}`}
      style={{ backgroundColor }} // Section background color
    >
      <div className="!max-w-7xl !mx-auto !w-full !flex-1 !relative !z-10 !px-4 sm:!px-6 md:!px-12 lg:!px-16 xl:!px-20">
        {children}
      </div>
    </section>
  );
}

