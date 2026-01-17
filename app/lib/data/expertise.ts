/**
 * Expertise/Skills data
 */

import { ExpertiseItem } from "../../types";
import React from "react";
import { SiReact, SiFlutter } from "react-icons/si";

// Helper function to create expertise items with icons
export const createExpertiseData = (): ExpertiseItem[] => [
  {
    category: "Software Development",
    skills: ["Android", "iOS"],
    icon: React.createElement(
      "svg",
      { className: "w-8 h-8 sm:w-10 sm:h-10", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      })
    ),
    description: "Experienced in both functional and OOP: Dart, Python, JavaScript, TypeScript.",
    underlineWord: "Software",
    underlineColor: "#b7f",
  },
  {
    category: "Frontend Dev React, NextJS",
    skills: ["React", "NextJS"],
    icon: React.createElement(
      "div",
      { className: "text-white flex items-center justify-center" },
      React.createElement(SiReact, { size: 32 })
    ),
    description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    underlineWord: "Frontend Dev",
    underlineColor: "blue",
  },
  {
    category: "Flutter Dev Android, iOS",
    skills: [],
    icon: React.createElement(
      "div",
      { className: "text-white flex items-center justify-center" },
      React.createElement(SiFlutter, { size: 32 })
    ),
    description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
    underlineWord: "Flutter Dev",
    underlineColor: "orange",
  },
];

export const expertiseData = createExpertiseData();

