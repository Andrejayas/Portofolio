import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-dark py-[10vh] lg:py-[14vh]"
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[6vw] items-center">
          {/* Left Column - Illustration */}
          <div
            className={`flex items-center justify-center lg:justify-start order-2 lg:order-1 transition-all duration-[1000ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/images/about-guitarist.png"
                alt="Artistic illustration"
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 0 80px rgba(244, 244, 242, 0.08))',
                }}
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Heading */}
            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase text-cream mb-4 transition-all duration-[900ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              About
            </h2>

            {/* Gold Line */}
            <div
              className={`w-20 h-[2px] bg-gold mb-8 transition-all duration-[800ms] origin-left ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            />

            {/* Paragraphs */}
            <div className="space-y-6">
              <p
                className={`font-body text-base md:text-lg text-cream-secondary leading-relaxed transition-all duration-[800ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Saya adalah UI/UX Designer yang percaya bahwa desain yang baik dimulai dari
                memahami manusia — bukan tren. Dengan latar belakang di desain visual dan
                pengembangan frontend, saya membawa perspektif yang thoughtful ke setiap
                proyek.
              </p>

              <p
                className={`font-body text-base md:text-lg text-cream-secondary leading-relaxed transition-all duration-[800ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Saya fokus pada menciptakan pengalaman digital yang intuitif, estetis, dan
                bermakna. Setiap desain yang saya buat bertujuan untuk menjembatani
                kebutuhan pengguna dengan tujuan bisnis secara harmonis.
              </p>

              <p
                className={`font-body text-base md:text-lg text-cream-secondary leading-relaxed transition-all duration-[800ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                Saat ini saya fokus pada desain interface, design system, dan
                micro-interactions yang membuat produk terasa hidup dan menyenangkan
                digunakan.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#"
              className={`inline-flex items-center gap-3 mt-10 font-body text-sm uppercase tracking-[0.12em] text-cream hover:text-gold hover-shift link-underline transition-all duration-300 w-fit ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download coming soon!');
              }}
            >
              View Resume
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
