import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'Behance', url: 'https://behance.net' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-cream py-[10vh] lg:py-[14vh]"
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[6vw]">
          {/* Left Column - Text */}
          <div>
            {/* Heading */}
            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase text-[#0B0B0B] mb-4 transition-all duration-[900ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Let's Connect
            </h2>

            {/* Subtext */}
            <p
              className={`font-body text-base md:text-lg text-[#666666] leading-relaxed max-w-md transition-all duration-[800ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Got a project in mind? Let's make something great together.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-center">
            {/* Email */}
            <a
              href="mailto:hello@alexmorgan.design"
              className={`group inline-flex items-center gap-3 mb-10 transition-all duration-[700ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="font-body text-xl sm:text-2xl md:text-3xl text-[#0B0B0B] group-hover:text-[#D6C96F] group-hover:translate-x-2 transition-all duration-300">
                hello@alexmorgan.design
              </span>
              <ArrowUpRight
                size={24}
                className="text-[#0B0B0B] group-hover:text-[#D6C96F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.12em] text-[#666666] hover:text-[#0B0B0B] hover:translate-x-2 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
