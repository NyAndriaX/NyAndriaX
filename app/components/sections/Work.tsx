"use client";

import SectionLayout from "../layout/SectionLayout";

/**
 * Clean work section placeholder for step-by-step rebuild
 */
export default function Work() {
  return (
    <SectionLayout id="work" backgroundColor="#f8fafc" fullHeight={false} autoHeight={false} className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Mes projets
        </h2>
        <p className="rounded-xl border border-slate-200 bg-white px-6 py-5 text-slate-600">
          Section nettoyée. Nous ajouterons les projets un par un ensuite.
        </p>
      </div>
    </SectionLayout>
  );
}
