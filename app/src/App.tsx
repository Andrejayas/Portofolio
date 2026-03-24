import { useEffect, useRef, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Works from './sections/Works';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-dark">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
