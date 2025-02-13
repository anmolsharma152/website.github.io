import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Software Engineer', 'Full Stack Developer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm Anmol Sharma
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          I'm a <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
}
