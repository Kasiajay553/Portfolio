import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-2919-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl -top-[100px] -left-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl top-[30%] right-[10%]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I'm
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="block text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-3"
            >
              T.K.N.V. Ajay Kumar
            </motion.span>
          </h1>

          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Software Engineer',
              2000,
              'UI/UX Designer',
              2000
            ]}
            wrapper="p"
            repeat={Infinity}
            className="text-xl md:text-2xl text-gray-300 mt-4"
          />

          <p className="text-lg text-gray-400 mt-6 max-w-xl mx-auto">
            Passionate about creating innovative web solutions and building scalable applications.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
          <a
            href="#projects"
            className="border border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex space-x-6 mb-12"
        >
          <a href="https://github.com/Kasiajay553" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/kasi-ajay-tekkali-94042b28a/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/KasiAjay553/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-110">
            <SiLeetcode size={24} />
          </a>
          <a href="https://www.codechef.com/users/tkasiajay553" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-transform hover:scale-110">
            <FaCode size={24} />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
