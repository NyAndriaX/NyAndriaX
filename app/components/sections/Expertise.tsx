"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionLayout from "../layout/SectionLayout";
import { expertiseData } from "../../lib/data";

/**
 * Expertise section component displaying skills and technologies
 * Shows the portfolio owner's areas of expertise
 * Includes HTML code background for visual appeal
 */
export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
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

  return (
    <SectionLayout
      id="expertise"
      backgroundColor="#1a191d"
      fullHeight={true}
      autoHeight={true}
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      {/* HTML Code Background Image */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30 pointer-events-none z-0 flex justify-center items-end pb-2 sm:pb-4 md:pb-6 lg:pb-8">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl px-4 sm:px-6 md:px-8">
          <Image
            src="/hello-world-html-code-768x384.png"
            alt="HTML code background"
            width={768}
            height={384}
            className="w-full h-auto object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-tight leading-none px-2 !mb-8 sm:!mb-12 md:!mb-16"
        >
          My Expertise
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
        >
          {expertiseData.map((item, index) => {
            const titleParts = item.category.split(item.underlineWord);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative text-left !p-6 sm:!p-7 md:!p-8 lg:!p-9 xl:!p-10 border-2 border-white/30 hover:border-white/50 transition-colors duration-200 bg-[#0a0f1e]/20 backdrop-blur-[1px] ${
                  index === 0 ? 'sm:rounded-l-lg rounded-t-lg sm:rounded-t-none' : index === expertiseData.length - 1 ? 'sm:rounded-r-lg rounded-b-lg sm:rounded-b-none' : ''
                } ${
                  index !== 0 ? 'sm:border-l-0 border-t-0 sm:border-t-2' : ''
                }`}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6 md:mb-8">
                  <div className="text-white shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                    {titleParts[0]}
                    <span 
                      className="relative inline-block"
                      style={{
                        lineHeight: '1.2'
                      }}
                    >
                      <span className="relative z-10">{item.underlineWord}</span>
                      <span
                        className="absolute left-0 right-0 -z-10"
                        style={{
                          bottom: '4px',
                          height: '6px',
                          backgroundColor: typeof item.underlineColor === 'string' && item.underlineColor.startsWith('#') 
                            ? item.underlineColor 
                            : item.underlineColor === 'red' ? '#ef4444' :
                              item.underlineColor === 'blue' ? '#3b82f6' :
                              item.underlineColor === 'orange' ? '#f97316' :
                              '#ec4899'
                        }}
                      />
                    </span>
                    {titleParts[1]}
                  </h3>
                </div>
                
                {/* Content with vertical line and HTML tags */}
                <div className="relative">
                  {/* Vertical line centered relative to h3 tags - continuous line */}
                  <div className="absolute left-2 sm:left-3 md:left-4 lg:left-5 top-0 bottom-0 w-0.5 bg-gray-600/50" 
                       style={{ 
                         top: '1rem', 
                         bottom: '1rem',
                         height: 'calc(100% - 2rem)'
                       }}>
                  </div>
                  
                  {/* HTML opening tag */}
                  <div className="text-gray-500 font-mono text-xs sm:text-sm md:text-base opacity-60 mb-1 sm:mb-2 pl-4 sm:pl-6 md:pl-8 lg:pl-10">
                    &lt;h3&gt;
                  </div>
                  
                  {/* Content with vertical line - between the tags */}
                  <div className="relative !pl-4 sm:!pl-6 md:!pl-8 lg:!pl-10">
                    <p className="text-white font-mono text-xs sm:text-sm leading-relaxed pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* HTML closing tag */}
                  <div className="text-gray-500 font-mono text-xs sm:text-sm md:text-base opacity-60 mt-1 sm:mt-2 pl-4 sm:pl-6 md:pl-8 lg:pl-10">
                    &lt;/h3&gt;
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionLayout>
  );
}

