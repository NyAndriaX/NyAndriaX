/**
 * Work/Projects data
 */

import { Project, ProjectFilter } from "../../types";

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All", count: 12 },
  { id: "web", label: "Web Development", count: 6 },
  { id: "api", label: "API & Backend", count: 5 },
  { id: "seo", label: "SEO & Analytics", count: 1 },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AutoDashboard (SaaS)",
    category: "Web Development",
    filter: "web",
    image: "/sites/autodashboard.jpg",
    description: "Full-stack SaaS platform for managing and automating automotive after-sales activities. Designed and implemented features, testing, and continuous platform improvements to streamline operations for automotive service providers.",
    url: "https://auto-dashboard.com/",
  },
  {
    id: 2,
    title: "Plato Tribune",
    category: "Web Development",
    filter: "web",
    image: "/sites/platotribune.jpg",
    description: "Plateforme SaaS complète de gestion de blog WordPress avec génération de contenu IA, planification automatique, gestion multi-tenant, intégration Stripe pour les paiements et authentification SSO avec Keycloak. Technologies: Next.js, TypeScript, Prisma, MongoDB.",
    url: "http://platotribune.com/",
  },
  {
    id: 3,
    title: "Rocket",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Application Next.js de gestion de sites web avec dashboard analytique, suivi SEO, analyse de mots-clés et gestion de trafic organique. Plateforme multi-sites avec authentification Keycloak et intégration de métriques de performance.",
    url: "https://rocket.woosells.co",
  },
  {
    id: 4,
    title: "Boisson Distributeur",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Application web moderne pour la gestion et distribution de boissons. Interface utilisateur intuitive avec gestion de stocks, commandes et livraisons. Développée avec Next.js et TypeScript.",
    url: "https://boisson-distributeur.onrender.com",
  },
  {
    id: 5,
    title: "Tsabo9",
    category: "Web Development",
    filter: "web",
    image: "/sites/tsabo9.jpg",
    description: "Plateforme web développée avec Next.js offrant des fonctionnalités avancées de gestion et d'organisation. Interface moderne et réactive avec optimisations de performance.",
    url: "https://tsabo9.onrender.com",
  },
  {
    id: 6,
    title: "PayrollPall",
    category: "Web Development",
    filter: "web",
    image: "/project-placeholder.svg",
    description: "Application SaaS de gestion de paie complète avec authentification sécurisée. Système de gestion des employés, calcul automatique des salaires et génération de bulletins de paie. Interface moderne et intuitive.",
    url: "https://payrollpall.onrender.com/login",
  },
  {
    id: 7,
    title: "Media Manager",
    category: "Web Development",
    filter: "api",
    image: "/project-placeholder.svg",
    description: "Application Next.js moderne pour la gestion de médias avec interface utilisateur réactive. Gestion de fichiers, organisation et intégration avec des systèmes de stockage cloud.",
    url: "",
  },
  {
    id: 8,
    title: "Blog Hub",
    category: "Web Development",
    filter: "api",
    image: "/project-placeholder.svg",
    description: "Plateforme Next.js de gestion et organisation de blogs multiples. Interface moderne avec gestion de contenu, planification de publications et analytics intégrés.",
    url: "",
  },
  {
    id: 9,
    title: "Media Creator API",
    category: "API & Backend",
    filter: "api",
    image: "/project-placeholder.svg",
    description: "API Flask robuste pour la création et gestion automatisée de sites WordPress/WooCommerce avec génération de contenu IA. Automatisation complète avec Playwright, gestion DNS, configuration de thèmes et création de contenu. Coverage de tests > 90%.",
    url: "",
  },
  {
    id: 10,
    title: "Assign Type Lang",
    category: "API & Backend",
    filter: "api",
    image: "/project-placeholder.svg",
    description: "Plateforme Python de détection automatique de types de sites web et langues utilisant l'automation de navigateur avec Playwright. Analyse DOM avancée, API REST pour l'intégration et stockage MongoDB.",
    url: "",
  },
  {
    id: 11,
    title: "SEMRUSH API",
    category: "SEO & Analytics",
    filter: "seo",
    image: "/project-placeholder.svg",
    description: "Service d'extraction de données SEO depuis l'API SEMRUSH. Analyse de mots-clés, extraction de données structurées au format JSON pour l'intégration dans d'autres systèmes. API Flask avec gestion d'authentification.",
    url: "",
  },
  {
    id: 12,
    title: "Shop Inspector",
    category: "Web Development",
    filter: "api",
    image: "/project-placeholder.svg",
    description: "Application Next.js d'inspection et d'analyse de boutiques en ligne. Outil de diagnostic pour e-commerce avec analyse de performance, SEO et expérience utilisateur.",
    url: "",
  },
];

export const workDescription = "Développement de solutions web complètes, APIs backend robustes et outils d'automatisation. Spécialisé en développement full-stack avec Next.js, React, TypeScript, Python et Flask. Création de plateformes SaaS scalables avec intégration de paiements, authentification SSO et génération de contenu IA.";

