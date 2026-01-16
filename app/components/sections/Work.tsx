"use client";

/**
 * Work section component displaying portfolio projects
 * Shows the portfolio owner's featured work and projects
 */
export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with React and Next.js",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile application for iOS and Android platforms",
      technologies: ["React Native", "TypeScript"],
    },
    {
      id: 3,
      title: "Project Three",
      description: "Full-stack application with modern architecture",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="work"
      className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 snap-start"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center font-mono text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-12 md:mb-16">
          WORK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-4 sm:p-6 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 hover:transform hover:scale-105"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-mono leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-gray-500 text-[10px] xs:text-xs font-mono px-2 py-1 rounded border border-gray-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

