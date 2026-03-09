"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../../lib/utils";

/**
 * Minimal fixed header with simple and effective navigation
 */
export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastWindowScrollY = useRef(0);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const applyVisibilityFromScroll = (current: number, last: number, nearTopThreshold: number) => {
      const isNearTop = current < nearTopThreshold;
      if (isNearTop) {
        setIsHeaderVisible(true);
        return;
      }

      const isScrollingDown = current > last;
      const scrollDelta = Math.abs(current - last);

      // Ignore tiny movements to avoid flicker.
      if (scrollDelta > 6) {
        setIsHeaderVisible(!isScrollingDown);
      }
    };

    const handleGlobalScroll = () => {
      const current = window.scrollY;
      const last = lastWindowScrollY.current;
      applyVisibilityFromScroll(current, last, 24);
      lastWindowScrollY.current = current;
    };

    const applyVisibilityFromDelta = (deltaY: number) => {
      if (Math.abs(deltaY) < 4) return;
      setIsHeaderVisible(deltaY < 0);
    };

    const handleWheel = (event: WheelEvent) => {
      applyVisibilityFromDelta(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentTouchY = event.touches[0]?.clientY;
      if (touchStartY.current === null || currentTouchY === undefined) return;

      const deltaY = touchStartY.current - currentTouchY;
      applyVisibilityFromDelta(deltaY);
      touchStartY.current = currentTouchY;
    };

    window.addEventListener("scroll", handleGlobalScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <header
      className={`!fixed !left-0 !right-0 !top-0 !z-50 !border-b !border-slate-200/80 !bg-white/90 !backdrop-blur !transition-all !duration-500 !ease-in-out ${
        isHeaderVisible ? "!translate-y-0 !opacity-100" : "!-translate-y-full !opacity-0"
      }`}
    >
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

