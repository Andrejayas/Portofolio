import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    category: 'Design',
    items: ['Figma', 'Prototyping', 'Wireframing', 'Design System'],
  },
  {
    category: 'Research',
    items: ['User Interview', 'Usability Testing', 'Persona'],
  },
  {
    category: 'Visual',
    items: ['Typography', 'Color Theory', 'Motion Design'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe XD', 'Illustrator', 'Maze', 'Notion'],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen bg-dark py-[10vh] lg:py-[14vh]"
      style={{
        background: 'linear-gradient(to bottom, #0B0B0B 0%, #0F0F0F 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[6vw]">
          {/* Left Column - Header */}
          <div>
            {/* Heading */}
            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase text-cream mb-4 transition-all duration-[900ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Skills
            </h2>

            {/* Gold Line */}
            <div
              className={`w-20 h-[2px] bg-gold mb-8 transition-all duration-[800ms] origin-left ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            />

            {/* Description */}
            <p
              className={`font-body text-base md:text-lg text-cream-secondary leading-relaxed max-w-md transition-all duration-[800ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Kemampuan yang saya kembangkan selama bertahun-tahun bekerja di berbagai
              proyek digital.
            </p>
          </div>

          {/* Right Column - Skills List */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className={`transition-all duration-[700ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-body text-sm uppercase tracking-[0.08em] text-cream">
                    {category.category}
                  </span>
                  <span className="text-cream-secondary">—</span>
                  <span className="font-body text-sm uppercase tracking-[0.08em] text-cream-secondary">
                    {category.items.join(' / ')}
                  </span>
                </div>
                {index < skillCategories.length - 1 && (
                  <div className="w-full h-px bg-[#2A2A2A] mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
