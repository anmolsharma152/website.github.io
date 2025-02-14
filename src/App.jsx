import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-purple-50 dark:bg-purple-800 py-6">
        <div className="container mx-auto px-4 text-center text-black dark:text-purple-300">
          {new Date().getFullYear()} Anmol Sharma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
