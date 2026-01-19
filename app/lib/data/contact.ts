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
  GithubOutlined 
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
    label: "Github", 
    icon: React.createElement(GithubOutlined, { className: "text-white text-lg" }),
    href: "https://github.com/NyAndriaX"
  },
];

export const socialLinksData = createSocialLinks();

export const contactEmail = "tsilavinaandriamahafaly01@gmail.com";
export const contactTitle = "Available for select freelance opportunities";
export const contactDescription = "Have an exciting project you need help with? Send me an email or contact me via instant message!";

