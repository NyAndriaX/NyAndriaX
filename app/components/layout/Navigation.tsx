"use client";

import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Navigation component displaying menu items with numbers and "//" prefix
 * Styled with sans-serif font
 * Numbers positioned directly above the link text
 */
export default function Navigation() {
  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <nav className="flex items-center group">
      {NAVIGATION_ITEMS.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className="text-left transition-colors duration-200 group/item"
            style={{ marginRight: index < NAVIGATION_ITEMS.length - 1 ? "24px" : "8px" }}
          >
            <div className="flex flex-col items-end">
              <span className="text-gray-400 text-sm leading-tight mb-0.5 transition-colors duration-200">
                {number}
              </span>
              <span className="text-white text-lg leading-tight group-hover:text-gray-400 group-hover/item:text-white font-semibold transition-colors duration-200">
                {"// "}{item.label}
              </span>
            </div>
          </button>
        );
      })}
      {/* Vertical line separator */}
      <div className="h-8 w-px bg-gray-400/30" />
    </nav>
  );
}

