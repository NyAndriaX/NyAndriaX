"use client";

import { Header, Hero, FeaturedIn, Expertise, Work, Experience, Contact, Background3D, ScrollIndicator } from "./components";

/**
 * Home page component
 * Main landing page of the portfolio website
 * Combines all sections and components in a structured layout
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background 3D elements */}
      <Background3D />
      
      {/* Header with logo and navigation */}
      <Header />
      
      {/* Hero section with name and title */}
      <Hero />
      
      {/* Featured in section with company logos */}
      <FeaturedIn />
      
      {/* Expertise section */}
      <Expertise />
      
      {/* Work section */}
      <Work />
      
      {/* Experience section */}
      <Experience />
      
      {/* Contact section */}
      <Contact />
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </main>
  );
}
