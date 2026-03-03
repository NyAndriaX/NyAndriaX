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
        aria-label="Ouvrir ou fermer le menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-slate-700"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-slate-700"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-slate-700"
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
            backgroundColor: "#ffffff",
          },
          header: {
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            padding: "16px 24px",
          },
        }}
        maskStyle={{
          backgroundColor: "rgba(15, 23, 42, 0.35)",
          backdropFilter: "blur(4px)",
        }}
      >
        <nav className="flex flex-col gap-4 sm:gap-6">
          {NAVIGATION_ITEMS.map((item) => {
            const isContact = item.id === "contact";
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={
                  isContact
                    ? "w-full rounded-full bg-[#6b6fe6] px-4 py-2 text-left text-sm font-medium text-white transition-colors duration-200 hover:bg-[#5d61d8]"
                    : "w-full text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#6b6fe6]"
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </Drawer>

      <style jsx global>{`
        .mobile-menu-drawer .ant-drawer-content {
          background-color: #ffffff !important;
        }
        
        .mobile-menu-drawer .ant-drawer-body {
          padding: 24px !important;
        }
        
        .mobile-menu-drawer .ant-drawer-close {
          color: #334155 !important;
          font-size: 20px !important;
          width: 32px !important;
          height: 32px !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        .mobile-menu-drawer .ant-drawer-close:hover {
          color: #6b6fe6 !important;
          background-color: rgba(99, 102, 241, 0.1) !important;
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

