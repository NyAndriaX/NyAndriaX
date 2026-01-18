/**
 * Expertise/Skills data
 */

import { ExpertiseItem } from "../../types";
import React from "react";
import { SiReact } from "react-icons/si";

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
    description: "Experienced in both functional and OOP: Python, JavaScript, TypeScript.",
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
    description: "Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    underlineWord: "Frontend Dev",
    underlineColor: "blue",
  },
  {
    category: "React Native Dev Android, iOS",
    skills: ["Android", "iOS"],
    icon: React.createElement(
      "svg",
      { 
        className: "w-8 h-8 sm:w-10 sm:h-10", 
        fill: "currentColor", 
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      React.createElement("path", {
        d: "M13.5 0L21 3.5v17L13.5 24l-7.5-3.5v-17L13.5 0zm0 2.5L6.5 5v14l7 3.5 7-3.5V5l-7-2.5zM8 7.5l4 1.5v9l-4-1.5v-9zm8 0v9l-4 1.5V9l4-1.5z"
      })
    ),
    description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.",
    underlineWord: "React Native",
    underlineColor: "orange",
  },
];

export const expertiseData = createExpertiseData();

