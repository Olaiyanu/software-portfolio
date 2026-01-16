import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AllProjects from './components/AllProjects';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'all-projects'>('home');

  if (view === 'all-projects') {
    return <AllProjects onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex flex-col gap-0">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects onViewAll={() => setView('all-projects')} />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;