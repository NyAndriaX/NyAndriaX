"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Masonry } from "antd";
import SectionLayout from "../layout/SectionLayout";
import { projectsData, projectFilters, workDescription } from "../../lib/data";

/**
 * Work section component displaying portfolio projects
 * Shows the portfolio owner's featured work and projects
 */

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectsData;
    }
    return projectsData.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  const handleViewProject = (projectId: number) => {
    // Handle project view action
    console.log("View project:", projectId);
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <SectionLayout
      id="work"
      backgroundColor="#1a191d"
      fullHeight={false}
      autoHeight={true}
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
        <div ref={ref} className="!mb-8 sm:!mb-10 md:!mb-12 lg:!mb-16">
          <div className="flex flex-col justify-center text-center lg:text-left max-w-3xl">
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-none mb-4 sm:mb-6 md:mb-8"
            >
              My Work
            </motion.h2>
            <motion.p
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {workDescription}
            </motion.p>
          </div>
        </div>

        {/* Filter Section - Navigation Style Links */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="!mb-6 sm:!mb-8 md:!mb-10 lg:!mb-12"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start !gap-0">
            <span className="text-white/80 text-xs sm:text-sm md:text-base font-medium mr-1 sm:mr-2">Filter by</span>
            {projectFilters.map((filter, index) => (
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
                {index < projectFilters.length - 1 && (
                  <span className="!mx-1 sm:!mx-2">/</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

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
              <motion.div
                key={project.id}
                custom={index}
                variants={projectVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="portfolio-item-wrap group cursor-pointer h-full"
              >
                <div className="portfolio-item portfolio-item-grid portfolio-grid-type-1 boxed hover-scale-img hover-color-overlay bg-transparent transition-all duration-300 hover:shadow-xl border-0 h-full flex flex-col"
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
                  <h3 className="portfolio-item-headline title text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
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
              </motion.div>
            );
          }}
        />
    </SectionLayout>
  );
}
