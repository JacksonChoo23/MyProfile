import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500 overflow-x-hidden selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black relative">
        <div className="aurora-bg" />
        <div className="noise-overlay text-neutral-900 dark:text-white" />
        <Navbar />
        
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <TechStack />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
