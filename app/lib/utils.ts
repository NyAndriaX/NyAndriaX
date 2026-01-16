/**
 * Utility functions for the portfolio application
 */

/**
 * Combines multiple CSS class names into a single string
 * @param classes - Array of class names to combine
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Smooth scroll to a section by ID
 * @param elementId - ID of the element to scroll to
 */
export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

