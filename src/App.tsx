import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ThemeSelector } from './components/ThemeSelector';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Talks } from './sections/Talks';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { Skills } from './sections/Skills';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ThemeSelector />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
