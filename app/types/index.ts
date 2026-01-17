/**
 * Type definitions for portfolio components
 */

import React from "react";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

export interface HeroContent {
  name: string;
  title: string;
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  location: string;
  website: string;
  websiteUrl: string;
  description: string;
  skills: string[];
  logo: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  filter: string;
  image: string;
  description: string;
}

export interface ProjectFilter {
  id: string;
  label: string;
  count: number;
}

export interface ExpertiseItem {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  description: string;
  underlineWord: string;
  underlineColor: string;
}

export interface SocialLink {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  bgColor: string;
}

