/**
 * Constants used throughout the portfolio application
 */

import { NavigationItem, CompanyLogo } from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "home", label: "home", href: "#home" },
  { id: "expertise", label: "expertise", href: "#expertise" },
  { id: "work", label: "work", href: "#work" },
  { id: "experience", label: "experience", href: "#experience" },
  { id: "contact", label: "contact", href: "#contact" },
];

export const COMPANY_LOGOS: CompanyLogo[] = [
  { id: "masai", name: "Masai", logo: "/logos/masai.svg", alt: "Masai logo" },
  { id: "blogduwebdesign", name: "BlogDuWebdesign", logo: "/logos/blogduwebdesign.svg", alt: "BlogDuWebdesign logo" },
  { id: "featured", name: "Featured", logo: "/logos/featured.svg", alt: "Featured logo" },
  { id: "hostinger", name: "Hostinger", logo: "/logos/hostinger.svg", alt: "Hostinger logo" },
  { id: "upwork", name: "Upwork", logo: "/logos/upwork.svg", alt: "Upwork logo" },
];

export const HERO_CONTENT = {
  name: "TSILAVINA",
  title: "SOFTWARE ENGINEER, FRONT END & APP DEVELOPER",
};

export const LOGO_TEXT = "Tsilavina._";

