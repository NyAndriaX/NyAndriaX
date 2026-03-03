"use client";

import SectionLayout from "../layout/SectionLayout";

/**
 * Clean experience section placeholder for progressive rebuild
 */
export default function Experience() {
  return (
    <SectionLayout id="experience" backgroundColor="#ffffff" fullHeight={false} autoHeight={false} className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Expérience professionnelle
        </h2>
        <p className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-slate-600">
          Section nettoyée. Nous ajouterons les expériences ensuite, une par une.
        </p>
      </div>
    </SectionLayout>
  );
}
