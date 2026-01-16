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
 * Composant SectionLayout
 * Fournit une structure de mise en page cohérente pour toutes les sections
 * Gère le padding, la largeur maximale et le design responsive
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
      className={`${fullHeight ? "h-screen" : "min-h-screen"} flex flex-col justify-center relative z-10 !py-8 sm:!py-12 md:!py-16 lg:!py-20 xl:!py-24 ${snapStart ? "snap-start" : ""} ${className}`}
      style={{ backgroundColor }} // Couleur de fond de la section
    >
      <div className="max-w-7xl !mx-auto w-full flex-1 relative z-10 !px-4 sm:!px-6 md:!px-12 lg:!px-16 xl:!px-20">
        {children}
      </div>
    </section>
  );
}

