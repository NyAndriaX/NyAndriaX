"use client";

/**
 * Expertise section component displaying skills and technologies
 * Shows the portfolio owner's areas of expertise
 * Includes HTML code background for visual appeal
 */
export default function Expertise() {
  const expertiseItems = [
    { 
      category: "Flutter Dev", 
      skills: ["Android", "iOS"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      underlineWord: "Flutter"
    },
    { 
      category: "Frontend Dev", 
      skills: ["React", "NextJS"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      underlineWord: "Frontend"
    },
    { 
      category: "Software Development", 
      skills: [],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
      underlineWord: "Software"
    },
  ];

  return (
    <section
      id="expertise"
      className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 overflow-hidden snap-start"
    >
      {/* HTML Code Background */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30 pointer-events-none z-0 flex justify-center">
        <div className="max-w-4xl w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 font-mono text-xs sm:text-sm md:text-base">
          <pre className="text-gray-400 whitespace-pre-wrap text-center">
            <span className="text-purple-400">&lt;</span><span className="text-blue-400">html</span><span className="text-purple-400"> </span><span className="text-yellow-400">lang</span><span className="text-gray-300">=</span><span className="text-green-400">&quot;en&quot;</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">  &lt;</span><span className="text-blue-400">head</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">    &lt;</span><span className="text-blue-400">meta</span><span className="text-purple-400"> </span><span className="text-yellow-400">name</span><span className="text-gray-300">=</span><span className="text-green-400">&quot;viewport&quot;</span>{'\n'}
            <span className="text-purple-400">          </span><span className="text-yellow-400">content</span><span className="text-gray-300">=</span><span className="text-green-400">&quot;width=device-width, initial-scale=1.0&quot;</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">    &lt;</span><span className="text-blue-400">title</span><span className="text-purple-400">&gt;</span><span className="text-gray-300">What do I do</span><span className="text-purple-400">&lt;/</span><span className="text-blue-400">title</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">  &lt;/</span><span className="text-blue-400">head</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">  &lt;</span><span className="text-blue-400">body</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">    &lt;</span><span className="text-blue-400">h1</span><span className="text-purple-400">&gt;</span><span className="text-gray-300">Things I do to get a perfect background image</span><span className="text-purple-400">&lt;/</span><span className="text-blue-400">h1</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">    &lt;</span><span className="text-blue-400">p</span><span className="text-purple-400">&gt;</span><span className="text-gray-300">Maybe I should stop tinkering with VSCode settings just to take a screenshot of this dummy html code.</span><span className="text-purple-400">&lt;/</span><span className="text-blue-400">p</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">    &lt;</span><span className="text-blue-400">span</span><span className="text-purple-400">&gt;</span><span className="text-gray-300">Oops, Almost forgot to say </span><span className="text-green-400">&quot;Hello World!&quot;</span><span className="text-gray-300">!</span><span className="text-purple-400">&lt;/</span><span className="text-blue-400">span</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">  &lt;/</span><span className="text-blue-400">body</span><span className="text-purple-400">&gt;</span>{'\n'}
            <span className="text-purple-400">&lt;/</span><span className="text-blue-400">html</span><span className="text-purple-400">&gt;</span>
          </pre>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-center text-2xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-none px-2 !mb-16 sm:!mb-20">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {expertiseItems.map((item, index) => {
            const titleParts = item.category.split(item.underlineWord);
            return (
              <div
                key={index}
                className={`relative text-left !p-8 sm:!p-10 md:!p-12 lg:!p-16 border-2 border-white/30 hover:border-white/50 transition-colors duration-200 bg-[#0a0f1e]/60 backdrop-blur-sm ${
                  index === 0 ? 'rounded-l-lg' : index === expertiseItems.length - 1 ? 'rounded-r-lg' : ''
                } ${
                  index !== 0 ? 'border-l-0' : ''
                }`}
              >
                {/* HTML opening tag */}
                <div className="text-gray-500 font-mono text-sm sm:text-base opacity-60 mb-2">
                  &lt;h3&gt;
                </div>
                
                {/* Icon and Title */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div className="text-white shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    {titleParts[0]}
                    <span className="underline decoration-pink-500 decoration-2 underline-offset-2">
                      {item.underlineWord}
                    </span>
                    {titleParts[1]}
                  </h3>
                </div>
                
                {/* Content with vertical line */}
                <div className="relative pl-6 sm:pl-8 md:pl-10 border-l border-gray-600/50">
                  <p className="text-white font-mono text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* HTML closing tag */}
                <div className="text-gray-500 font-mono text-sm sm:text-base opacity-60 mt-4">
                  &lt;/h3&gt;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

