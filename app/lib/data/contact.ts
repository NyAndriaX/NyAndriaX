/**
 * Contact section data
 * 
 * How to get your social media links:
 * 
 * 1. MESSENGER:
 *    - Option 1: Go to https://www.facebook.com/help/contact/1630884101990219
 *      and follow instructions to get your Messenger link
 *    - Option 2: Use format: https://m.me/[your-username]
 *      Replace [your-username] with your Facebook username
 *    - Option 3: Get your Facebook ID and use: https://www.facebook.com/messages/t/[your-id]
 * 
 * 2. LINKEDIN:
 *    - Go to your LinkedIn profile
 *    - Copy the URL from your browser's address bar
 *    - Format: https://www.linkedin.com/in/[your-username]
 *    - Example: https://www.linkedin.com/in/john-doe
 * 
 * 3. GITHUB:
 *    - Go to your GitHub profile
 *    - Copy the URL from your browser's address bar
 *    - Format: https://github.com/[your-username]
 *    - Example: https://github.com/johndoe
 */

import { SocialLink } from "../../types";
import React from "react";
import { 
  MessageOutlined, 
  LinkedinOutlined, 
  GithubOutlined,
  CalendarOutlined
} from "@ant-design/icons";

// Helper function to create social links with icons
export const createSocialLinks = (): SocialLink[] => [
  { 
    label: "Messenger", 
    icon: React.createElement(MessageOutlined, { className: "text-white text-lg" }),
    href: "https://m.me/tsilavina.andriamahafaly.5"
  },
  { 
    label: "LinkedIn", 
    icon: React.createElement(LinkedinOutlined, { className: "text-white text-lg" }),
    href: "https://www.linkedin.com/in/tsilavina-henintsoa-andriamahafaly-6949a4247/"
  },
  { 
    label: "GitHub", 
    icon: React.createElement(GithubOutlined, { className: "text-white text-lg" }),
    href: "https://github.com/NyAndriaX"
  },
  { 
    label: "Prendre rendez-vous", 
    icon: React.createElement(CalendarOutlined, { className: "text-white text-lg" }),
    href: "https://calendly.com/tsilavinaandriamahafaly01/30min"
  },
];

export const socialLinksData = createSocialLinks();

export const contactEmail = "tsilavinaandriamahafaly01@gmail.com";
export const contactTitle = "Disponible pour des missions freelance ciblées";
export const contactDescription = "Vous avez un projet ambitieux et besoin d'un accompagnement technique ? Envoyez-moi un email ou contactez-moi en message instantané.";

