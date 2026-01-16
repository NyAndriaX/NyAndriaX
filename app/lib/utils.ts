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
 * Accounts for fixed header height to prevent content from being hidden
 * Responsive header height calculation based on screen size
 * @param elementId - ID of the element to scroll to
 */
export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    // Calculate header height based on screen size
    // Mobile: ~80px, Desktop: ~100px
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    const headerHeight = isMobile ? 80 : 100;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

