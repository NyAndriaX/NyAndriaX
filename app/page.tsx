"use client";

import { Header, Hero, Expertise, Work, Experience, Contact } from "./components";

/**
 * Home page component
 * Main landing page of the portfolio website
 * Combines all sections and components in a structured layout
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}
