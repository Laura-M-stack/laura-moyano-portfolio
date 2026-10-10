import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Talks } from './sections/Talks';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { useLanguage } from './context/LanguageContext';

const App: React.FC = () => {
  const { language } = useLanguage();

  return (
    // reducedMotion="user": animations are skipped for visitors who ask the OS for less motion.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        {language === 'en' ? 'Skip to content' : 'Saltar al contenido'}
      </a>
      <Navbar />
      <main id="main" className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default App;
