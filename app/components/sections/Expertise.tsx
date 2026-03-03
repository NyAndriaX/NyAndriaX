"use client";

import SectionLayout from "../layout/SectionLayout";

/**
 * Clean expertise section for progressive rebuilding
 */
export default function Expertise() {
  const coreSkills = ["Frontend", "Backend", "API", "Performance", "UI/UX"];

  return (
    <SectionLayout
      id="expertise"
      backgroundColor="#ffffff"
      fullHeight={false}
      autoHeight={false}
      className="py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Mes compétences
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
          Base propre de la section compétences. Nous pouvons maintenant ajouter les blocs et animations
          progressivement.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {coreSkills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

