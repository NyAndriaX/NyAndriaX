"use client";

import { contactEmail, contactTitle, contactDescription } from "../../lib/data";

/**
 * Clean contact section for progressive rebuild
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{contactTitle}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-slate-300">{contactDescription}</p>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-200"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  );
}
