"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Masonry, Modal, Carousel } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import SectionLayout from "../layout/SectionLayout";
import { projectsData, projectFilters, workDescription } from "../../lib/data";

/**
 * Get the image source for a project
 * Priority: project.image (if valid) > project.url (as background) > placeholder
 */
const getProjectImageSrc = (project: { image: string; url?: string }): string => {
  // If image exists and is not placeholder, use it
  if (project.image && project.image !== "/project-placeholder.svg") {
    return project.image;
  }
  
  // If no valid image but URL exists, use URL as background image source
  if (project.url) {
    return project.url;
  }
  
  // Default to placeholder
  return "/project-placeholder.svg";
};

/**
 * Project Image Component with fallback handling
 */
function ProjectImage({ 
  project
}: { 
  project: { id: number; title: string; image: string; url?: string };
}) {
  const imageSrc = getProjectImageSrc(project);
  const isExternalUrl = imageSrc.startsWith('http');
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(isExternalUrl);

  // Preload external images to detect errors
  useEffect(() => {
    if (isExternalUrl) {
      const img = new window.Image();
      img.onload = () => {
        setImageLoading(false);
        setImageError(false);
      };
      img.onerror = () => {
        setImageError(true);
        setImageLoading(false);
      };
      img.src = imageSrc;
    }
  }, [imageSrc, isExternalUrl]);

  return (
    <div className="w-full h-full relative">
      {isExternalUrl ? (
        // Use background image for external URLs
        <div 
          className="w-full h-full bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
          style={{
            backgroundImage: imageError ? 'url(/project-placeholder.svg)' : `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: imageLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      ) : (
        // Use Next.js Image for local images
        <Image
          src={imageError ? "/project-placeholder.svg" : imageSrc}
          alt={project.title}
          fill
          className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />
    </div>
  );
}

/**
 * Work section component displaying portfolio projects
 * Shows the portfolio owner's featured work and projects
 */

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [screenshotModalVisible, setScreenshotModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{ title: string; screenshots: string[] } | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectsData;
    }
    return projectsData.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  const handleViewProject = (projectId: number, url?: string) => {
    // Handle project view action
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.log("View project:", projectId);
    }
  };

  const handleViewScreenshots = (project: { title: string; screenshots?: string[] }, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.screenshots && project.screenshots.length > 0) {
      setSelectedProject({ title: project.title, screenshots: project.screenshots });
      setScreenshotModalVisible(true);
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.6,
        delay: 0.3,
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
        duration: 0.6,
        delay: index * 0.1,
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
                    href={project.url || "#"} 
                    onClick={(e) => {
                      if (!project.url) {
                        e.preventDefault();
                      }
                      handleViewProject(project.id, project.url);
                    }}
                    className="block w-full h-full"
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                  >
                    <ProjectImage project={project} />
                  </a>
                </div>

                {/* Portfolio Item Details */}
                <div className="portfolio-item-details text-left !p-4 sm:!p-5 md:!p-6 lg:!p-7 xl:!p-8 flex-grow">
                  {/* Headline */}
                  <h3 className="portfolio-item-headline title text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Category / Show Project Link / View Screenshots */}
                  <div className="category-holder flex items-center gap-3 sm:gap-4">
                    <span className="category relative inline-block min-h-[18px] sm:min-h-[20px] whitespace-nowrap">
                      <a 
                        href={project.url || "#"} 
                        onClick={(e) => {
                          if (!project.url) {
                            e.preventDefault();
                          }
                          handleViewProject(project.id, project.url);
                        }}
                        className="text-gray-600 text-xs sm:text-sm hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                        target={project.url ? "_blank" : undefined}
                        rel={project.url ? "noopener noreferrer" : undefined}
                      >
                        <span className="inline-block opacity-100 group-hover:opacity-0 group-hover:absolute group-hover:pointer-events-none transition-opacity duration-300 ease-in-out whitespace-nowrap">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 absolute left-0 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out whitespace-nowrap">
                          {project.url ? "Show project" : "View details"}
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
                    {/* Screenshots Button */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        onClick={(e) => handleViewScreenshots(project, e)}
                        className="text-gray-600 hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                        title="View screenshots"
                      >
                        <PictureOutlined className="text-base sm:text-lg" />
                        <span className="hidden sm:inline">Screenshots</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              </motion.div>
            );
          }}
        />

        {/* Screenshots Modal */}
        <Modal
          title={
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              {selectedProject?.title}
            </span>
          }
          open={screenshotModalVisible}
          onCancel={() => setScreenshotModalVisible(false)}
          footer={null}
          width="90%"
          style={{ maxWidth: "1200px" }}
          styles={{
            body: { backgroundColor: "#1a191d", padding: "20px" },
            header: { backgroundColor: "#1a191d", borderBottom: "1px solid #333" },
          }}
        >
          {selectedProject && selectedProject.screenshots.length > 0 && (
            <Carousel
              autoplay={false}
              dots={true}
              infinite={selectedProject.screenshots.length > 1}
              className="screenshot-carousel"
            >
              {selectedProject.screenshots.map((screenshot, index) => (
                <div key={index} className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={screenshot}
                    alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              ))}
            </Carousel>
          )}
        </Modal>
    </SectionLayout>
  );
}
