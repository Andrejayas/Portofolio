import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative bg-dark py-12 transition-all duration-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body text-xs text-[#666666]">
            © 2026 Alex Morgan. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-body text-xs uppercase tracking-[0.12em] text-[#666666] hover:text-cream hover:translate-y-[-2px] transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
