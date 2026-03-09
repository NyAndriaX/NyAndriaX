"use client";

import { useEffect } from "react";
import { animate } from "animejs";
import { Header, Hero, About, Expertise, Work, Experience, Contact } from "./components";

/**
 * Home page component
 * Main landing page of the portfolio website
 * Combines all sections and components in a structured layout
 */
export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animatedSections = Array.from(
      document.querySelectorAll<HTMLElement>('section[data-animate-section="true"]'),
    );
    const animatedElements = new WeakSet<HTMLElement>();
    const cappedDelay = (index: number, step: number, cap: number) => Math.min(index * step, cap);

    const runSectionAnimation = (section: HTMLElement) => {
      const textTargets = Array.from(
        section.querySelectorAll<HTMLElement>("h1, h2, h3, p, li"),
      ).filter((element) => !animatedElements.has(element));
      const uiTargets = Array.from(
        section.querySelectorAll<HTMLElement>(".ant-card, .ant-tag, .ant-btn, a"),
      ).filter((element) => !animatedElements.has(element));

      if (!textTargets.length && !uiTargets.length) return;

      [...textTargets, ...uiTargets].forEach((element) => {
        animatedElements.add(element);
      });

      if (textTargets.length) {
        animate(textTargets, {
          opacity: [0, 1],
          translateY: [14, 0],
          delay: (_target, index) => cappedDelay(index, 22, 140),
          duration: 430,
          ease: "outCubic",
        });
      }

      if (uiTargets.length) {
        animate(uiTargets, {
          opacity: [0, 1],
          translateY: [12, 0],
          scale: [0.985, 1],
          delay: (_target, index) => 60 + cappedDelay(index, 24, 180),
          duration: 460,
          ease: "outCubic",
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runSectionAnimation(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    animatedSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
