import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/kasi.jpg"
                  alt="My Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-gray-800"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-500">Full Stack Developer, Software Deveploper, UI/UX Designer</h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Computer Science Engineering student with a strong foundation in programming, software development, and problem solving.
              Proficient in designing and developing scalable applications while optimizing system performance. 
              Adept at working in dynamic, agile environments and eager to expand knowledge of emerging technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span className="text-gray-300">visakhapatnam, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-blue-500" />
                <span className="text-gray-300">Available for work</span>
              </div>
            </div>

            <div className="pt-6">
              <motion.a
                href="/resume.pdf"
                download="AJAY_RESUME.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
