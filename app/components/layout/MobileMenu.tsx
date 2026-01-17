"use client";

import { useState } from "react";
import { Drawer } from "antd";
import { motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Mobile menu component with hamburger icon
 * Displays navigation items in an Ant Design Drawer on mobile devices
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden z-50 relative flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Ant Design Drawer */}
      <Drawer
        title={null}
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={280}
        closable={true}
        className="mobile-menu-drawer lg:hidden"
        styles={{
          body: {
            padding: "24px",
            backgroundColor: "#0a0f1e",
          },
          header: {
            backgroundColor: "#0a0f1e",
            borderBottom: "none",
            padding: "16px 24px",
          },
        }}
        maskStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(4px)",
        }}
      >
        <nav className="flex flex-col gap-4 sm:gap-6">
          {NAVIGATION_ITEMS.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="text-left group/item transition-colors duration-200 w-full"
              >
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs sm:text-sm leading-tight mb-1 transition-colors duration-200">
                    {number}
                  </span>
                  <span className="text-white text-base sm:text-lg leading-tight group-hover/item:text-gray-300 font-semibold transition-colors duration-200">
                    {"// "}{item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </Drawer>

      <style jsx global>{`
        .mobile-menu-drawer .ant-drawer-content {
          background-color: #0a0f1e !important;
        }
        
        .mobile-menu-drawer .ant-drawer-body {
          padding: 24px !important;
        }
        
        .mobile-menu-drawer .ant-drawer-close {
          color: white !important;
          font-size: 20px !important;
          width: 32px !important;
          height: 32px !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        .mobile-menu-drawer .ant-drawer-close:hover {
          color: #00d9ff !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-radius: 4px !important;
        }
        
        @media (min-width: 640px) {
          .mobile-menu-drawer .ant-drawer-body {
            padding: 32px !important;
          }
        }
      `}</style>
    </>
  );
}

