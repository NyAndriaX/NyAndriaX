"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

/**
 * Header component containing logo and navigation
 * Fixed at the top of the page with logo on left and navigation centered
 * Logo disappears on scroll, navigation remains visible
 * Navigation background becomes blurred on scroll
 * Mobile menu hamburger on small screens
 */
export default function Header() {
  const { scrollY } = useScroll();
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const blurValue = useTransform(scrollY, [0, 50], [0, 10], { clamp: true });
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.8], { clamp: true });
  
  // Responsive padding: mobile (40px) to desktop (56px) when not scrolled, (24px) to (32px) when scrolled
  const paddingYMobile = useTransform(scrollY, [0, 50], [40, 24], { clamp: true });
  const paddingYDesktop = useTransform(scrollY, [0, 50], [56, 32], { clamp: true });
  const paddingY = isMobile ? paddingYMobile : paddingYDesktop;
  
  const fontSize = useTransform(scrollY, [0, 50], [18, 16], { clamp: true });
  const numberFontSize = useTransform(scrollY, [0, 50], [14, 12], { clamp: true });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    setIsScrolled(scrolled);
    // Logo disappears on scroll only on desktop, stays visible on mobile
    setLogoOpacity(scrolled && !isMobile ? 0 : 1);
  });

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6"
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0f1e]/80"
        style={{
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter,
          opacity: backgroundOpacity,
        }}
      />
      {/* Mobile menu hamburger - visible on mobile */}
      <div className="lg:hidden relative z-10">
        <MobileMenu />
      </div>
      
      {/* Logo - always visible on mobile, hides on scroll on desktop */}
      <motion.div 
        animate={{ opacity: logoOpacity }}
        transition={{ duration: 0.3 }}
        className={`relative z-10 ml-2 sm:ml-0 lg:absolute lg:left-6 ${isScrolled && !isMobile ? "lg:pointer-events-none" : ""}`}
      >
        <Logo />
      </motion.div>
      
      {/* Desktop navigation - hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 nav-container z-10">
        <Navigation fontSize={fontSize} numberFontSize={numberFontSize} />
      </div>
    </motion.header>
  );
}

