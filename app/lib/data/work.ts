/**
 * Work/Projects data
 */

import { Project, ProjectFilter } from "../../types";

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All", count: 10 },
  { id: "data", label: "Data Visualization", count: 1 },
  { id: "web", label: "Web Development", count: 8 },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AutoDashboard (SaaS)",
    category: "Web Development",
    filter: "web",
    image: "/sites/autodashboard.jpg",
    description: "Full-stack SaaS platform for managing and automating automotive after-sales activities. Designed and implemented features, testing, and continuous platform improvements to streamline operations for automotive service providers.",
  },
  {
    id: 2,
    title: "AI Lab Granada",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "AI research and development platform",
  },
  {
    id: 3,
    title: "Knora - Urban Thinkers Community",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Community platform for urban thinkers",
  },
  {
    id: 4,
    title: "Tryotel - Cross-Platform Travel App",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Cross-platform travel booking application",
  },
  {
    id: 5,
    title: "Tapy - Download. Connect. Share",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Social media platform for content sharing",
  },
  {
    id: 6,
    title: "Tryotel Web (B2C)",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "B2C travel booking web application",
  },
  {
    id: 7,
    title: "Data Analytics Dashboard",
    category: "Data Visualization",
    filter: "data",
    image: "/project-placeholder.svg",
    description: "Interactive data visualization dashboard",
  },
];

export const workDescription = "Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA. Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.";

