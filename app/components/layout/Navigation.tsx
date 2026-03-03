"use client";

import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Simple desktop navigation with clean links
 * Contact item uses a highlighted pill style
 */
export default function Navigation() {
  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <nav className="flex items-center gap-8">
      {NAVIGATION_ITEMS.map((item) => {
        const isContact = item.id === "contact";

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className={
              isContact
                ? "rounded-full bg-[#6b6fe6] px-4 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#5d61d8]"
                : "text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#6b6fe6]"
            }
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

