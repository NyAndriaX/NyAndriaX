/**
 * Contact section data
 */

import { SocialLink } from "../../types";
import React from "react";
import { 
  MessageOutlined, 
  LinkedinOutlined, 
  InstagramOutlined, 
  GithubOutlined 
} from "@ant-design/icons";

// Helper function to create social links with icons
export const createSocialLinks = (): SocialLink[] => [
  { 
    label: "Messenger", 
    icon: React.createElement(MessageOutlined, { className: "text-white text-lg" }),
    href: "#" 
  },
  { 
    label: "LinkedIn", 
    icon: React.createElement(LinkedinOutlined, { className: "text-white text-lg" }),
    href: "#" 
  },
  { 
    label: "Instagram", 
    icon: React.createElement(InstagramOutlined, { className: "text-white text-lg" }),
    href: "#" 
  },
  { 
    label: "Github", 
    icon: React.createElement(GithubOutlined, { className: "text-white text-lg" }),
    href: "#" 
  },
];

export const socialLinksData = createSocialLinks();

export const contactEmail = "tsilavinaandriamahafaly01@gmail.com";
export const contactTitle = "Available for select freelance opportunities";
export const contactDescription = "Have an exciting project you need help with? Send me an email or contact me via instant message!";

