"use client";

import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../../lib/utils";

/**
 * Minimal fixed header with simple and effective navigation
 */
export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <button
          onClick={() => scrollToSection("home")}
          className="text-base font-bold tracking-wide text-[#6b6fe6] transition-colors duration-200 hover:text-[#5d61d8]"
          aria-label="Aller à la section d'accueil"
        >
          MNA
        </button>

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <Navigation />
        </div>

        <div className="ml-auto lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

