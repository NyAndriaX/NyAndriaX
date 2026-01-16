"use client";

import { useState } from "react";
import { Collapse, Tag } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import type { CollapseProps } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Experience section component displaying work history
 * Shows the portfolio owner's professional experience and timeline
 */
export default function Experience() {
  // First experience expanded by default
  const [activeKeys, setActiveKeys] = useState<string[]>(["1"]);

  const experiences = [
    {
      id: "1",
      title: "Co-Founder @ Life Coach Elevate",
      period: "2024 - Present",
      location: "Arizona, USA",
      website: "lifecoachelevate.com",
      websiteUrl: "https://lifecoachelevate.com",
      description:
        "Co-founded Life Coach Elevate, managing end-to-end technical infrastructure, including server architecture, automation pipeline development, leadership of the web development and design team, and driving initiatives to optimize scalability and system performance.",
      skills: ["DevOps", "CI/CD", "Kubernetes", "JS/TS", "NextJS"],
      logo: "LIFECOACH ELEVATE",
    },
    {
      id: "2",
      title: "Senior Lead Software Engineer @ Saimon Global Ltd",
      period: "2019 - 2024",
      location: "",
      website: "",
      websiteUrl: "",
      description:
        "Led a team of software engineers in developing scalable web applications and mobile solutions. Architected and implemented microservices infrastructure, improved system performance by 40%, and mentored junior developers. Collaborated with cross-functional teams to deliver high-quality products for global clients.",
      skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      logo: "",
    },
    {
      id: "3",
      title: "Web Developer @ influenceTHIS Canada",
      period: "2018 - 2019",
      location: "",
      website: "",
      websiteUrl: "",
      description:
        "Developed responsive web applications and e-commerce platforms using modern JavaScript frameworks. Collaborated with design teams to implement pixel-perfect UI/UX designs. Optimized website performance and implemented SEO best practices.",
      skills: ["JavaScript", "React", "CSS", "WordPress", "PHP"],
      logo: "",
    },
    {
      id: "4",
      title: "Top Rated Web Developer @ Upwork Inc.",
      period: "2017 - Present",
      location: "",
      website: "",
      websiteUrl: "",
      description:
        "Delivered high-quality web development solutions to clients worldwide as a top-rated freelancer. Specialized in building custom web applications, e-commerce platforms, and responsive websites. Maintained 100% client satisfaction rate and completed 200+ successful projects.",
      skills: ["Full Stack", "React", "Next.js", "TypeScript", "MongoDB"],
      logo: "",
    },
  ];

  const items: CollapseProps["items"] = experiences.map((exp) => ({
    key: exp.id,
    label: (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-4 pr-4 sm:pr-8">
        <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
          {exp.title}
        </span>
        <span className="text-white text-xs sm:text-sm md:text-base">{exp.period}</span>
      </div>
    ),
    children: (
      <div className="relative">
        {/* Location and Website */}
        {(exp.location || exp.website) && (
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-gray-400 text-xs sm:text-sm">
            {exp.location && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-words">{exp.location}</span>
              </div>
            )}
            {exp.website && (
              <a
                href={exp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors break-words"
              >
                <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{exp.website}</span>
              </a>
            )}
          </div>
        )}

        {/* Description */}
        {exp.description && (
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
            {exp.description}
          </p>
        )}

        {/* Skills Tags */}
        {exp.skills && exp.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {exp.skills.map((skill) => (
              <Tag
                key={skill}
                className="bg-transparent border-none text-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm shadow-lg"
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {skill}
              </Tag>
            ))}
          </div>
        )}

        {/* Logo */}
        {exp.logo && (
          <div className="absolute bottom-0 right-0 text-right pr-2 sm:pr-4">
            <div className="text-white font-bold text-xs sm:text-sm md:text-base">
              LIFECOACH
            </div>
            <div className="text-white font-bold text-xs sm:text-sm md:text-base flex items-center gap-1">
              ELEVAT
              <span className="text-orange-500">↑</span>
            </div>
          </div>
        )}
      </div>
    ),
  }));

  const onChange = (keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  };

  return (
    <SectionLayout
      id="experience"
      backgroundColor="#1a191d"
      fullHeight={true}
      className="flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl !mx-auto w-full flex flex-col items-center px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-none !mb-8 sm:!mb-10 md:!mb-12 lg:!mb-16 xl:!mb-20">
          Professional Experience
        </h2>

        {/* Experience Items - Ant Design Collapse */}
        <div className="w-full">
          <Collapse
            items={items}
            activeKey={activeKeys}
            onChange={onChange}
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusOutlined className="text-white" />
              ) : (
                <PlusOutlined className="text-white" />
              )
            }
            expandIconPosition="end"
            className="experience-collapse"
            style={{
              background: "#1a191d",
              border: "none",
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        .experience-collapse .ant-collapse-item {
          background: #430d78 !important;
          border: none !important;
          margin-bottom: 8px !important;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .experience-collapse .ant-collapse-item {
            margin-bottom: 10px !important;
          }
        }
        
        @media (min-width: 768px) {
          .experience-collapse .ant-collapse-item {
            margin-bottom: 12px !important;
          }
        }

        .experience-collapse .ant-collapse-header {
          background: #430d78 !important;
          padding: 12px 16px !important;
          border-radius: 8px !important;
          color: white !important;
        }
        
        @media (min-width: 640px) {
          .experience-collapse .ant-collapse-header {
            padding: 14px 18px !important;
          }
        }
        
        @media (min-width: 768px) {
          .experience-collapse .ant-collapse-header {
            padding: 16px 20px !important;
          }
        }

        .experience-collapse .ant-collapse-header:hover {
          background: #430d78 !important;
        }

        .experience-collapse .ant-collapse-content {
          background: #430d78 !important;
          border: none !important;
        }

        .experience-collapse .ant-collapse-content-box {
          padding: 12px 16px !important;
          position: relative;
          min-height: 150px;
        }
        
        @media (min-width: 640px) {
          .experience-collapse .ant-collapse-content-box {
            padding: 16px 18px !important;
            min-height: 180px;
          }
        }
        
        @media (min-width: 768px) {
          .experience-collapse .ant-collapse-content-box {
            padding: 20px !important;
            min-height: 200px;
          }
        }

        .experience-collapse .ant-collapse-expand-icon {
          background: rgba(255, 255, 255, 0.1) !important;
          border-radius: 4px !important;
          padding: 4px !important;
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin-right: 0 !important;
        }
        
        @media (min-width: 640px) {
          .experience-collapse .ant-collapse-expand-icon {
            padding: 5px !important;
            width: 30px !important;
            height: 30px !important;
          }
        }
        
        @media (min-width: 768px) {
          .experience-collapse .ant-collapse-expand-icon {
            padding: 6px !important;
            width: 32px !important;
            height: 32px !important;
          }
        }
        
        .experience-collapse .ant-collapse-body {
          background: #1a191d !important;
          border: none !important;
        }
      `}</style>
    </SectionLayout>
  );
}
