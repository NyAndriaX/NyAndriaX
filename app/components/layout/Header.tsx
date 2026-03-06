"use client";

import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../../lib/utils";

/**
 * Minimal fixed header with simple and effective navigation
 */
export default function Header() {
  return (
    <header className="!fixed !left-0 !right-0 !top-0 !z-50 !border-b !border-slate-200/80 !bg-white/90 !backdrop-blur">
      <div className="!mx-auto !flex !h-[74px] !w-full !max-w-7xl !items-center !px-4 sm:!px-6 md:!px-10 lg:!px-12 xl:!px-16">
        <button
          onClick={() => scrollToSection("home")}
          className="!text-xl !tracking-[0.16em] sm:!text-2xl"
          style={{ color: "#5d64d6", fontWeight: 800 }}
          aria-label="Aller à la section d'accueil"
        >
          ATH
        </button>

        <div className="!ml-auto !hidden lg:!flex">
          <Navigation />
        </div>

        <div className="!ml-auto lg:!hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

