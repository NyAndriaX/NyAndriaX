"use client";

/**
 * Contact section component displaying contact information and form
 * Provides ways for visitors to get in touch
 */
export default function Contact() {
  const contactMethods = [
    { label: "Email", value: "contact@example.com", href: "mailto:contact@example.com" },
    { label: "LinkedIn", value: "linkedin.com/in/tsilavina", href: "https://linkedin.com" },
    { label: "GitHub", value: "github.com/tsilavina", href: "https://github.com" },
  ];

  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 snap-start"
      style={{ backgroundColor: '#1a191d' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-center font-mono text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-12 md:mb-16">
          CONTACT
        </h2>
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-white text-base sm:text-lg md:text-xl font-mono px-4">
              Let's work together on your next project
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-mono px-4">
              Get in touch through any of the channels below
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-4 sm:p-6 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 text-center"
              >
                <h3 className="text-gray-400 font-mono text-[10px] xs:text-xs uppercase tracking-wider mb-1.5 sm:mb-2 group-hover:text-gray-300 transition-colors">
                  {method.label}
                </h3>
                <p className="text-white text-xs sm:text-sm font-mono group-hover:text-gray-300 transition-colors break-all">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/50 text-center px-4">
            <p className="text-gray-500 font-mono text-[10px] xs:text-xs uppercase tracking-wider">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

