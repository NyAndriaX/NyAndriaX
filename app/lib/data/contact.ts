/**
 * Contact section data
 */

import { SocialLink, Testimonial } from "../../types";
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

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he's been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he's provided us with great advice to stay on top of the current changes in web technologies. He's also implemented effective project management and Q&A processes. As a result Tamal has been an highly valued and impactful member of our team.",
    name: "Mark Greenspan",
    title: "Founder at influenceTHIS Canada",
    avatar: "/tamalsen-home-cover.jpg",
    bgColor: "#bc60fb",
  },
  {
    id: 2,
    quote: "Tamal is AMAZING! If you have any doubt about hiring him, ask me - I am really impressed by this guy!",
    name: "Wilfried Hajek",
    title: "Agile Coach | Speaker | Trainer",
    avatar: "/tamalsen-home-cover.jpg",
    bgColor: "#0067dc",
  },
  {
    id: 3,
    quote: "Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.",
    name: "Jonathan Castro",
    title: "CEO & Founder at The Cliff",
    avatar: "/tamalsen-home-cover.jpg",
    bgColor: "#923fe6",
  },
];

export const contactEmail = "tsilavinaandriamahafaly01@gmail.com";
export const contactTitle = "Available for select freelance opportunities";
export const contactDescription = "Have an exciting project you need help with? Send me an email or contact me via instant message!";

