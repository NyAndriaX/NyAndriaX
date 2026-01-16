"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

/**
 * Header component with dual-state navigation bar
 * Primary navigation: visible only when scrollY === 0 (top of page)
 * Secondary navigation: hidden on load, appears with slide-down animation when scrollY > 0
 * Only one navigation bar is visible at a time, synchronized with scroll position
 * Mobile menu hamburger on small screens
 */
export default function Header() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavType, setActiveNavType] = useState<"primary" | "secondary">("primary");
  
  // Primary navigation bar: visible only at top (scrollY === 0)
  // Fades out and moves up when scrolling starts
  const primaryNavOpacity = useTransform(scrollY, [0, 50], [1, 0], { clamp: true });
  const primaryNavY = useTransform(scrollY, [0, 50], [0, -20], { clamp: true });
  
  // Secondary navigation bar: hidden on load, appears when scrolling
  // Slides down from top with very smooth, gentle animation
  // Animation range: 0-200px scroll for extremely smooth and slow transition
  const secondaryNavOpacity = useTransform(scrollY, [0, 200], [0, 1], { clamp: true });
  const secondaryNavY = useTransform(scrollY, [0, 200], [-30, 0], { clamp: true });
  
  // Background blur and opacity for secondary nav
  const blurValue = useTransform(scrollY, [0, 200], [0, 10], { clamp: true });
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
  const backgroundOpacity = useTransform(scrollY, [0, 200], [0, 0.8], { clamp: true });
  
  // Responsive padding: mobile (40px) to desktop (56px) when not scrolled, (24px) to (32px) when scrolled
  const paddingYMobile = useTransform(scrollY, [0, 50], [40, 24], { clamp: true });
  const paddingYDesktop = useTransform(scrollY, [0, 50], [56, 32], { clamp: true });
  const paddingY = isMobile ? paddingYMobile : paddingYDesktop;
  
  // Font sizes for secondary navigation (smaller when scrolled)
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

  // Track which navigation is currently active
  useMotionValueEvent(scrollY, "change", (latest) => {
    setActiveNavType(latest === 0 ? "primary" : "secondary");
  });

  return (
    <>
      {/* Primary Navigation Bar - Visible only at top of page */}
      <motion.header 
        data-nav-type="primary"
        data-nav-active={activeNavType === "primary" ? "true" : "false"}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-6 ${activeNavType === "primary" ? "nav-primary-active" : ""}`}
        style={{ 
          paddingTop: isMobile ? 40 : 56, 
          paddingBottom: isMobile ? 40 : 56,
          opacity: primaryNavOpacity,
          y: primaryNavY,
          pointerEvents: useTransform(primaryNavOpacity, (opacity) => opacity < 0.1 ? "none" : "auto"),
        }}
        initial={{ opacity: 1, y: 0 }}
      >
        {/* Mobile menu hamburger - visible on mobile */}
        <div className="lg:hidden relative z-10">
          <MobileMenu />
        </div>
        
        {/* Logo - always visible on mobile, visible on desktop in primary nav */}
        <div className="relative z-10 ml-1 sm:ml-2 md:ml-0 lg:absolute lg:left-4 xl:left-6">
          <Logo />
        </div>
        
        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 nav-container z-20 pointer-events-auto">
          <Navigation variant="secondary" />
        </div>
      </motion.header>

      {/* Secondary Navigation Bar - Appears on scroll */}
      <motion.header 
        data-nav-type="secondary"
        data-nav-active={activeNavType === "secondary" ? "true" : "false"}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-6 ${activeNavType === "secondary" ? "nav-secondary-active" : ""}`}
        style={{ 
          paddingTop: paddingY, 
          paddingBottom: paddingY,
          opacity: secondaryNavOpacity,
          y: secondaryNavY,
          pointerEvents: useTransform(secondaryNavOpacity, (opacity) => opacity < 0.1 ? "none" : "auto"),
        }}
        initial={{ opacity: 0, y: -30 }}
        transition={{
          type: "tween",
          ease: [0.25, 0.1, 0.25, 1],
          duration: 0.8,
        }}
      >
        {/* Background with blur effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: 'rgba(26, 25, 29, 0.85)',
            backdropFilter: blurFilter,
            WebkitBackdropFilter: blurFilter,
            opacity: backgroundOpacity,
          }}
        />
        
        {/* Mobile menu hamburger - visible on mobile */}
        <div className="lg:hidden relative z-10">
          <MobileMenu />
        </div>
        
        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 nav-container z-20 pointer-events-auto">
          <Navigation fontSize={fontSize} numberFontSize={numberFontSize} variant="primary" />
        </div>
      </motion.header>
    </>
  );
}

