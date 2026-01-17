"use client";

import { useState, useEffect, useRef } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

/**
 * Header component with dual-state navigation bar
 * Primary navigation: visible only when at top of home section and not scrolled
 * Secondary navigation: appears when scrolling within any section or when not on home section
 * Only one navigation bar is visible at a time, synchronized with scroll position
 * Mobile menu hamburger on small screens
 */
export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavType, setActiveNavType] = useState<"primary" | "secondary">("primary");
  const scrollProgress = useMotionValue(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Calculate scroll progress based on section visibility and internal scroll
  useEffect(() => {
    const updateScrollState = () => {
      // Check window scroll position first (for transitions between sections)
      const windowScrollY = window.scrollY || window.pageYOffset || 0;
      
      // Find the currently visible section
      const sections = document.querySelectorAll("section[id]");
      let activeSection: HTMLElement | null = null;
      let maxIntersection = 0;
      
      // Find section with most visibility in viewport
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const intersection = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (intersection > maxIntersection && rect.top <= window.innerHeight / 2) {
          maxIntersection = intersection;
          activeSection = section as HTMLElement;
        }
      });

      // If no section found by intersection, find by position
      if (!activeSection) {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            activeSection = section as HTMLElement;
          }
        });
      }

      // Check if we're at the very top of home section
      const homeSection = document.getElementById("home");
      const homeRect = homeSection?.getBoundingClientRect();
      const homeScrollTop = homeSection?.scrollTop || 0;
      
      // More lenient check for being at top
      const isAtTopOfPage = homeSection && 
        windowScrollY < 5 && 
        homeScrollTop === 0 &&
        homeRect &&
        homeRect.top >= -20 &&
        homeRect.top <= 20 &&
        activeSection?.id === "home";

      if (isAtTopOfPage) {
        // At top of home section - show primary nav
        scrollProgress.set(0);
        setActiveNavType("primary");
      } else {
        // Scrolled - show secondary nav
        const scrollTop = activeSection?.scrollTop || 0;
        const isHomeSection = activeSection?.id === "home";
        
        // Calculate progress: use window scroll or internal scroll
        // Always ensure minimum progress of 100 to make secondary nav clearly visible
        let progressValue = 100; // Default visible state
        
        if (windowScrollY > 5) {
          progressValue = Math.min(200, windowScrollY);
        } else if (scrollTop > 0) {
          progressValue = Math.min(200, scrollTop + (isHomeSection ? 0 : 150));
        } else if (!isHomeSection && activeSection) {
          // Not on home section, show secondary nav
          progressValue = 150;
        }
        
        scrollProgress.set(progressValue);
        setActiveNavType("secondary");
      }
    };

    // Initial check with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateScrollState, 100);
    
    // Also check periodically to ensure state stays in sync
    const intervalId = setInterval(updateScrollState, 200);

    // Listen to scroll events on all sections (for internal scroll)
    const sections = document.querySelectorAll("section[id]");
    const scrollHandlers: Array<() => void> = [];
    
    sections.forEach((section) => {
      const handler = () => updateScrollState();
      section.addEventListener("scroll", handler, { passive: true });
      scrollHandlers.push(handler);
    });

    // Listen to window scroll (for transitions between sections)
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    
    // Also listen on document for better scroll detection
    document.addEventListener("scroll", updateScrollState, { passive: true, capture: true });

    // Use IntersectionObserver as additional check
    observerRef.current = new IntersectionObserver(
      (entries) => {
        updateScrollState();
      },
      { threshold: [0, 0.1, 0.5, 1], rootMargin: "-100px 0px" }
    );

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      sections.forEach((section, index) => {
        section.removeEventListener("scroll", scrollHandlers[index]);
      });
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      document.removeEventListener("scroll", updateScrollState, { capture: true } as EventListenerOptions);
      observerRef.current?.disconnect();
    };
  }, [scrollProgress]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Primary navigation bar: visible only at top (scrollProgress === 0)
  // Fades out and moves up when scrolling starts
  const primaryNavOpacity = useTransform(scrollProgress, [0, 50], [1, 0], { clamp: true });
  const primaryNavY = useTransform(scrollProgress, [0, 50], [0, -20], { clamp: true });

  // Secondary navigation bar: hidden on load, appears when scrolling
  // Slides down from top with very smooth, gentle animation
  // Animation range: 0-200px scroll for extremely smooth and slow transition
  const secondaryNavOpacity = useTransform(scrollProgress, [0, 200], [0, 1], { clamp: true });
  const secondaryNavY = useTransform(scrollProgress, [0, 200], [-30, 0], { clamp: true });

  // Background blur and opacity for secondary nav
  const blurValue = useTransform(scrollProgress, [0, 200], [0, 10], { clamp: true });
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
  const backgroundOpacity = useTransform(scrollProgress, [0, 200], [0, 0.8], { clamp: true });

  // Responsive padding: mobile (40px) to desktop (56px) when not scrolled, (24px) to (32px) when scrolled
  const paddingYMobile = useTransform(scrollProgress, [0, 50], [40, 24], { clamp: true });
  const paddingYDesktop = useTransform(scrollProgress, [0, 50], [56, 32], { clamp: true });
  const paddingY = isMobile ? paddingYMobile : paddingYDesktop;

  // Font sizes for secondary navigation (smaller when scrolled)
  const fontSize = useTransform(scrollProgress, [0, 50], [18, 16], { clamp: true });
  const numberFontSize = useTransform(scrollProgress, [0, 50], [14, 12], { clamp: true });

  return (
    <>
      {/* Primary Navigation Bar - Visible only at top of page */}
      <motion.header 
        data-nav-type="primary"
        data-nav-active={activeNavType === "primary" ? "true" : "false"}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-5 md:px-6 ${activeNavType === "primary" ? "nav-primary-active" : ""}`}
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
        
        {/* Logo - hidden on mobile, visible on desktop in primary nav */}
        <div className="hidden lg:block relative z-10 lg:absolute lg:left-4 xl:left-6">
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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-5 md:px-6 ${activeNavType === "secondary" ? "nav-secondary-active" : ""}`}
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

