import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Runa',
    subtitle: 'Finance App Redesign',
    description: 'Redesign aplikasi keuangan untuk mempermudah pengelolaan budget harian.',
    role: 'UI/UX Designer',
    tools: 'Figma, FigJam',
    outcome: 'User flow dipangkas dari 7 langkah menjadi 3',
    image: '/images/project-runa.jpg',
  },
  {
    id: 2,
    name: 'Lumina',
    subtitle: 'E-commerce Platform',
    description: 'Platform e-commerce dengan fokus pada pengalaman belanja yang personal.',
    role: 'Product Designer',
    tools: 'Figma, Principle',
    outcome: 'Meningkatkan conversion rate 25%',
    image: '/images/project-lumina.jpg',
  },
  {
    id: 3,
    name: 'Kroma',
    subtitle: 'Design System',
    description: 'Design system komprehensif untuk konsistensi visual across products.',
    role: 'Design Lead',
    tools: 'Figma, Storybook',
    outcome: 'Mengurangi waktu development 40%',
    image: '/images/project-kroma.jpg',
  },
];

export default function Works() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative min-h-screen bg-dark py-[10vh] lg:py-[14vh]"
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        {/* Header */}
        <div className="mb-16">
          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase text-cream mb-4 transition-all duration-[900ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Selected Works
          </h2>

          <div
            className={`w-20 h-[2px] bg-gold transition-all duration-[800ms] origin-left ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-[900ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[6vw] py-12 border-t border-[#2A2A2A]">
                {/* Left - Info */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                  {/* Project Name */}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Project details coming soon!');
                    }}
                    className="group/link inline-flex items-start gap-2 mb-4"
                  >
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream group-hover/link:text-gold group-hover/link:translate-x-2 transition-all duration-350">
                      {project.name}
                    </h3>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl text-cream-secondary">
                      —
                    </span>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl text-cream-secondary group-hover/link:text-gold group-hover/link:translate-x-2 transition-all duration-350">
                      {project.subtitle}
                    </span>
                    <ArrowUpRight
                      size={24}
                      className="text-cream-secondary group-hover/link:text-gold group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-350 mt-1"
                    />
                  </a>

                  {/* Description */}
                  <p className="font-body text-base text-cream-secondary mb-6 max-w-md">
                    {project.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-cream">
                        Role
                      </span>
                      <span className="text-cream-secondary">—</span>
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-cream-secondary">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-cream">
                        Tools
                      </span>
                      <span className="text-cream-secondary">—</span>
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-cream-secondary">
                        {project.tools}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-cream">
                        Outcome
                      </span>
                      <span className="text-cream-secondary">—</span>
                      <span className="font-body text-xs uppercase tracking-[0.08em] text-gold">
                        {project.outcome}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right - Image */}
                <div
                  className={`flex items-center justify-center lg:justify-end order-1 lg:order-2 transition-all duration-[1000ms] ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <div className="relative w-full max-w-lg overflow-hidden rounded-sm group/image">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover/image:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
