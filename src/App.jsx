import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CircularEconomy from './components/CircularEconomy';
import Impact from './components/Impact';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import Gallery from './components/Gallery';
import Team from './components/Team';
import MythsFacts from './components/MythsFacts';
import MapLocation from './components/MapLocation';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Products from './components/Products';
import BSFProcess from './components/BSFProcess';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'economy', 'impact', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <About />
        <Products />          
        <CircularEconomy />
        <BSFProcess />        
        <Impact />
        <Gallery />
        <Team />
        <Partners />          
        <MythsFacts />
        <FAQ />               
        <Timeline />
        <MapLocation />       
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;