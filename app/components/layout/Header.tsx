"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

/**
 * Header component containing logo and navigation
 * Fixed at the top of the page with logo on left and navigation centered
 * Logo disappears on scroll, navigation remains visible
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between !px-6 !py-6 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/tamalsen-home-cover.jpg"
        alt="Portfolio background"
        fill
        priority
        className="object-cover object-center opacity-90"
        quality={75}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/50 via-[#0a0f1e]/30 to-[#0a0f1e]/50" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className={`transition-opacity duration-300 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Logo />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 nav-container">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

