"use client";

import { HERO_CONTENT } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";
import { socialLinksData } from "../../lib/data";

/**
 * Hero section component with a light banner layout
 * Focuses on personal introduction with action buttons
 */
export default function Hero() {
  const githubLink = socialLinksData.find((link) => link.label.toLowerCase() === "github")?.href ?? "#";
  const initials = HERO_CONTENT.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <section id="home" className="min-h-screen bg-[#eef1ff] px-6 pb-14 pt-28 sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-medium text-slate-500">Bonjour, je suis</p>

          <h1 className="text-4xl font-extrabold leading-tight text-[#5d64d6] sm:text-5xl lg:text-6xl">
            {HERO_CONTENT.name}
          </h1>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Ingénieur Logiciel Full Stack
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Ingénieur en génie logiciel passionné par la tech, avec plus de 6 ans
            d&apos;expérience dans le développement d&apos;applications web performantes
            et innovantes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-[#5d64d6] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#5d64d6]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5157c2]"
              aria-label="Aller à la section contact"
            >
              Me contacter
            </button>

            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-[#9ca3ff] bg-white px-6 py-3 text-sm font-semibold text-[#5d64d6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5d64d6]"
            >
              Télécharger CV
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#9ca3ff] bg-white px-6 py-3 text-sm font-semibold text-[#5d64d6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5d64d6]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-sm items-center justify-center lg:justify-end">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-8 border-white bg-linear-to-br from-[#e2e7ff] via-[#f4f6ff] to-[#c7ceff] shadow-xl sm:h-80 sm:w-80">
            <span className="text-6xl font-bold text-[#5d64d6] sm:text-7xl">{initials}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("expertise")}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[#b3b8ff] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#5d64d6] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
        aria-label="Aller à la section suivante"
      >
        Défiler
      </button>
    </section>
  );
}

