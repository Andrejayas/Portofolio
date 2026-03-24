import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-dark noise-overlay overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[6vw] items-center pt-20">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1 z-10">
            {/* Label */}
            <span
              className={`font-body text-xs uppercase tracking-[0.2em] text-cream-secondary mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Portfolio
            </span>

            {/* Name */}
            <h1
  className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-cream leading-[0.95] mb-6 transition-all duration-[900ms] ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ transitionDelay: '150ms' }}
>
  Andrean Rayhan
  <br />
  Wijaya
</h1>


            {/* Tagline */}
            <p
              className={`font-body text-lg md:text-xl text-cream-secondary mb-8 transition-all duration-[800ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              UI/UX Designer & Creative Developer
            </p>

            {/* Gold Line */}
            <div
              className={`w-20 h-[2px] bg-gold mb-8 transition-all duration-[800ms] origin-left ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            />

            {/* CTA */}
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#works');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.12em] text-cream hover:text-gold hover-shift link-underline transition-all duration-300 w-fit ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - Illustration */}
          <div
            className={`flex items-center justify-center lg:justify-end order-1 lg:order-2 transition-all duration-[1100ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/images/hero-guitarist.png"
                alt="Artistic silhouette"
                className="w-full h-auto opacity-90"
                style={{
                  filter: 'drop-shadow(0 0 60px rgba(244, 244, 242, 0.1))',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <span className="font-body text-xs uppercase tracking-[0.12em] text-cream-secondary">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-cream-secondary animate-bounce"
          style={{ animationDuration: '2s' }}
        />
      </div>
    </section>
  );
}
