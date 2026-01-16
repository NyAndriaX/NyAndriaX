"use client";

/**
 * Expertise section component displaying skills and technologies
 * Shows the portfolio owner's areas of expertise
 */
export default function Expertise() {
  const expertiseItems = [
    { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Mobile", skills: ["React Native", "iOS", "Android"] },
    { category: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
    { category: "Tools", skills: ["Git", "Docker", "CI/CD", "Testing"] },
  ];

  return (
    <section
      id="expertise"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center font-mono text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-12 md:mb-16">
          EXPERTISE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-200"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-wide">
                {item.category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {item.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-400 font-mono text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

