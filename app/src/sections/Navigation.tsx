import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] md:px-[5vw] lg:px-[6vw]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl tracking-wider text-cream hover:text-gold transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-body text-xs uppercase tracking-[0.12em] text-cream-secondary hover:text-cream hover-shift link-underline transition-colors duration-300 ${
                  activeSection === item.href.slice(1) ? 'text-gold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-md transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-[4vw] py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-body text-sm uppercase tracking-[0.12em] text-cream-secondary hover:text-cream transition-colors duration-300 ${
                activeSection === item.href.slice(1) ? 'text-gold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
