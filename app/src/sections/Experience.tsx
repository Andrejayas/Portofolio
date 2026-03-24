import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    position: 'Senior UI/UX Designer',
    company: 'TechCorp',
    year: '2022–Present',
  },
  {
    position: 'UI Designer',
    company: 'Creative Studio',
    year: '2020–2022',
  },
  {
    position: 'Junior Designer',
    company: 'StartUp Inc',
    year: '2018–2020',
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative bg-dark py-[10vh] lg:py-[14vh]"
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        {/* Header */}
        <div className="mb-16">
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase text-cream mb-4 transition-all duration-[900ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Experience
          </h2>

          <div
            className={`w-20 h-[2px] bg-gold transition-all duration-[800ms] origin-left ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`py-8 border-t border-[#2A2A2A] transition-all duration-[700ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-body text-sm uppercase tracking-[0.08em] text-cream">
                  {exp.position}
                </span>
                <span className="text-cream-secondary">—</span>
                <span className="font-body text-sm uppercase tracking-[0.08em] text-cream-secondary">
                  {exp.company}
                </span>
                <span className="text-cream-secondary">—</span>
                <span className="font-body text-sm uppercase tracking-[0.08em] text-cream-secondary">
                  {exp.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
