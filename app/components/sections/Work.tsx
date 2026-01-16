"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Masonry } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Work section component displaying portfolio projects
 * Shows the portfolio owner's featured work and projects
 */

const filters = [
  { id: "all", label: "All", count: 10 },
  { id: "data", label: "Data Visualization", count: 1 },
  { id: "web", label: "Web Development", count: 8 },
];

const projects = [
    {
      id: 1,
      title: "Flight Local (B2B Travel Solution)",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "B2B travel platform for agencies",
    },
    {
      id: 2,
      title: "AI Lab Granada",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "AI research and development platform",
    },
    {
      id: 3,
      title: "Knora - Urban Thinkers Community",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "Community platform for urban thinkers",
    },
    {
      id: 4,
      title: "Tryotel - Cross-Platform Travel App",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "Cross-platform travel booking application",
    },
    {
      id: 5,
      title: "Tapy - Download. Connect. Share",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "Social media platform for content sharing",
    },
    {
      id: 6,
      title: "Tryotel Web (B2C)",
      category: "Web Development",
      filter: "web",
      image: "/tamalsen-home-cover.jpg",
      description: "B2C travel booking web application",
    },
    {
      id: 7,
      title: "Data Analytics Dashboard",
      category: "Data Visualization",
      filter: "data",
      image: "/tamalsen-home-cover.jpg",
      description: "Interactive data visualization dashboard",
    },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  const handleViewProject = (projectId: number) => {
    // Handle project view action
    console.log("View project:", projectId);
  };

  return (
    <SectionLayout
      id="work"
      backgroundColor="#1a191d"
      fullHeight={false}
      className="overflow-y-auto"
    >
      {/* HTML Code Background Image */}
      <div className="absolute top-0 left-0 opacity-20 pointer-events-none z-0">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-6 md:px-8">
          <Image
            src="/hello-world-html-code-768x384.png"
            alt="HTML code background"
            width={300}
            height={150}
            className="opacity-30 w-full h-auto"
            priority={false}
          />
        </div>
      </div>
        {/* Top Section: Title and Description */}
        <div className="!mb-8 sm:!mb-10 md:!mb-12 lg:!mb-16">
          <div className="flex flex-col justify-center text-center lg:text-left max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-none mb-4 sm:mb-6 md:mb-8">
              My Work
            </h2>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA. Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
            </p>
          </div>
        </div>

        {/* Filter Section - Navigation Style Links */}
        <div className="!mb-6 sm:!mb-8 md:!mb-10 lg:!mb-12">
          <div className="flex flex-wrap items-center justify-center lg:justify-start !gap-0">
            <span className="text-white/80 text-xs sm:text-sm md:text-base font-medium mr-1 sm:mr-2">Filter by</span>
            {filters.map((filter, index) => (
              <div key={filter.id} className="flex items-center">
                <button
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-xs sm:text-sm md:text-base transition-colors duration-200 !px-2 sm:!px-3 md:!px-4 !py-1 ${
                    activeFilter === filter.id
                      ? "!text-cyan-400 font-semibold"
                      : "!text-gray-400 hover:!text-cyan-400/80"
                  }`}
                >
                  {filter.label}{" "}
                  <sup className="!text-xs sm:!text-sm !ml-0.5 sm:!ml-1">
                    {String(filter.count).padStart(2, "0")}
                  </sup>
                </button>
                {index < filters.length - 1 && (
                  <span className="!mx-1 sm:!mx-2">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid - Ant Design Masonry */}
        <Masonry
          gutter={[16, 16]}
          columns={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
          }}
          items={filteredProjects.map((project) => ({
            key: project.id,
            data: project,
          }))}
          itemRender={({ data: project, index }) => {
            // Vary aspect ratios for masonry effect
            const aspectRatios = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[5/4]', 'aspect-[4/5]', 'aspect-[3/2]'];
            const aspectRatio = aspectRatios[index % aspectRatios.length];
            
            return (
              <div className="portfolio-item-wrap group cursor-pointer h-full">
                <div className="portfolio-item portfolio-item-grid portfolio-grid-type-1 boxed hover-scale-img hover-color-overlay bg-transparent rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border-0 h-full flex flex-col"
                >
                  {/* Portfolio Item Image */}
                  <div 
                    data-cursor-class="cursor-link"
                    className={`portfolio-item-image relative overflow-hidden ${aspectRatio} flex-shrink-0`}
                  >
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewProject(project.id);
                    }}
                    className="block w-full h-full"
                  >
                    <div className="w-full h-full relative">
                      {/* Project Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />
                    </div>
                  </a>
                </div>

                {/* Portfolio Item Details */}
                <div className="portfolio-item-details text-left !p-4 sm:!p-5 md:!p-6 lg:!p-7 xl:!p-8 flex-grow">
                  {/* Headline */}
                  <h3 className="portfolio-item-headline title text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Category / Show Project Link */}
                  <div className="category-holder">
                    <span className="category relative inline-block min-h-[18px] sm:min-h-[20px] whitespace-nowrap">
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleViewProject(project.id);
                        }}
                        className="text-gray-600 text-xs sm:text-sm hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                      >
                        <span className="inline-block opacity-100 group-hover:opacity-0 group-hover:absolute group-hover:pointer-events-none transition-opacity duration-300 ease-in-out whitespace-nowrap">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 absolute left-0 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out whitespace-nowrap">
                          Show project
                          <svg 
                            className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            );
          }}
        />
    </SectionLayout>
  );
}
