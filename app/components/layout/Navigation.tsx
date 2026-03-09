"use client";

import { Button, Space } from "antd";
import { NAVIGATION_ITEMS } from "../../lib/constants";
import { scrollToSection } from "../../lib/utils";

/**
 * Simple desktop navigation with clean links
 * Contact item uses a highlighted pill style
 */
export default function Navigation() {
  const desktopItems = NAVIGATION_ITEMS.filter((item) => item.id !== "contact");
  const contactItem = NAVIGATION_ITEMS.find((item) => item.id === "contact");

  const handleItemClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
  };

  const handleContactClick = () => {
    if (!contactItem) return;
    const sectionId = contactItem.href.replace("#", "");
    scrollToSection(sectionId);
  };

  return (
    <Space size={14} align="center">
      {desktopItems.map((item) => (
        <Button
          key={item.id}
          type="text"
          size="large"
          onClick={() => handleItemClick(item.href)}
          style={{
            color: "#334155",
            fontSize: "1.1rem",
            fontWeight: 600,
            paddingInline: 14,
            height: 46,
          }}
        >
          {item.label}
        </Button>
      ))}

      <Button
        type="primary"
        size="large"
        onClick={handleContactClick}
        style={{
          borderRadius: 999,
          backgroundColor: "#6b6fe6",
          borderColor: "#6b6fe6",
          fontWeight: 600,
          fontSize: "1.05rem",
          height: 46,
          paddingInline: 20,
        }}
      >
        Contact
      </Button>
    </Space>
  );
}

