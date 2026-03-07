"use client";

import SectionLayout from "../layout/SectionLayout";

/**
 * About section displayed right after hero.
 */
export default function About() {
  return (
    <SectionLayout
      id="about"
      backgroundColor="#ffffff"
      fullHeight={false}
      autoHeight={false}
      className="!relative !z-10 !h-auto !min-h-[70vh] !py-16 md:!py-20"
    >
      <div className="!mx-auto !w-full !max-w-7xl">
        <h2 className="!mb-5 !text-4xl !font-extrabold !text-[#5d64d6] sm:!text-5xl">
          À propos
        </h2>
        <p className="!max-w-3xl !text-lg !leading-8 !text-slate-700 sm:!text-xl">
          Je suis ingénieur logiciel full stack, passionné par la création d&apos;expériences web modernes,
          performantes et maintenables. J&apos;aime transformer des idées en produits concrets avec une attention
          forte sur la qualité du code, l&apos;ergonomie et l&apos;impact utilisateur.
        </p>
      </div>
    </SectionLayout>
  );
}
