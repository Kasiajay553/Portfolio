import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import Achievements from './components/Achievements';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { GiAchievement } from 'react-icons/gi';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Achievements/>
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}

export default App;