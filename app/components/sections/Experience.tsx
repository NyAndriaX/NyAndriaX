"use client";

/**
 * Experience section component displaying work history
 * Shows the portfolio owner's professional experience and timeline
 */
export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: "Developed and maintained web applications using modern technologies",
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: "Created responsive web interfaces and collaborated with design teams",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-center font-mono text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-12 md:mb-16">
          EXPERIENCE
        </h2>
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 md:pl-12 border-l border-gray-800/50 hover:border-gray-700/50 transition-colors duration-200"
            >
              <div className="absolute left-0 top-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400 -translate-x-[4px] sm:-translate-x-[6px]"></div>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <span className="text-gray-500 font-mono text-xs sm:text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-wide mb-1 sm:mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

