"use client";

import { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Mobile menu component with hamburger icon
 * Displays navigation items in an Ant Design Drawer on mobile devices
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuProps["items"] = NAVIGATION_ITEMS.map((item) => {
    const isContact = item.id === "contact";
    return {
      key: item.id,
      label: (
        <span className={isContact ? "mobile-nav-item-contact" : "mobile-nav-item-default"}>
          {item.label}
        </span>
      ),
    };
  });

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const matchedItem = NAVIGATION_ITEMS.find((item) => item.id === key);
    if (!matchedItem) return;
    const sectionId = matchedItem.href.replace("#", "");
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        type="text"
        icon={<MenuOutlined />}
        size="large"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:!hidden mobile-nav-trigger"
        aria-label="Ouvrir ou fermer le menu"
      />

      {/* Ant Design Drawer */}
      <Drawer
        title={<span className="mobile-drawer-title">Navigation</span>}
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={312}
        closable={true}
        className="mobile-menu-drawer lg:!hidden"
        styles={{
          body: {
            padding: "28px",
            backgroundColor: "#ffffff",
          },
          header: {
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            padding: "18px 24px",
          },
        }}
        maskStyle={{
          backgroundColor: "rgba(15, 23, 42, 0.35)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Menu mode="inline" selectable={false} items={menuItems} onClick={handleMenuClick} className="mobile-nav-menu" />
      </Drawer>

      <style jsx global>{`
        .mobile-drawer-title {
          color: #1e293b;
          font-size: 1.02rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .mobile-nav-trigger {
          color: #334155 !important;
          font-size: 22px !important;
        }

        .mobile-nav-trigger:hover {
          color: #5d64d6 !important;
        }

        .mobile-menu-drawer .ant-drawer-content {
          background-color: #ffffff !important;
        }
        
        .mobile-menu-drawer .ant-drawer-body {
          padding: 28px !important;
        }

        .mobile-nav-menu {
          border-inline-end: none !important;
          background: transparent !important;
        }

        .mobile-nav-menu .ant-menu-item {
          margin: 0 0 16px !important;
          padding-inline: 0 !important;
          padding-block: 6px !important;
          height: auto !important;
          line-height: normal !important;
        }

        .mobile-nav-menu .ant-menu-item:last-child {
          margin-bottom: 0 !important;
        }

        .mobile-nav-menu .ant-menu-item::after {
          display: none !important;
        }

        .mobile-nav-item-default {
          color: #334155;
          font-size: 1.08rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .mobile-nav-menu .ant-menu-item:hover .mobile-nav-item-default {
          color: #6b6fe6;
        }

        .mobile-nav-item-contact {
          width: 100%;
          display: inline-block;
          border-radius: 999px;
          background-color: #6b6fe6;
          padding: 11px 16px;
          color: #ffffff;
          font-size: 1.08rem;
          font-weight: 600;
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
            padding: 36px !important;
          }
        }
      `}</style>
    </>
  );
}

