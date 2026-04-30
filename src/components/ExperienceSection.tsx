import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "TechDenali",
      period: "Feb 2026 - Apr 2026",
      location: "Offline",
      description: [
        "Completed a rigorous offline internship focused on enterprise-level application development within an Agile environment.",
        "Applied Object-Oriented Programming principles and Core Java concepts to build and optimize backend processing logic.",
        "Collaborated with senior developers during Daily Stand-ups and Sprint Planning to manage data structures, debug code, and ensure efficient application performance."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Internpe",
      period: "May 2024 - Jun 2024",
      location: "Remote",
      description: [
        "Collaborated with cross-functional teams (Product, QA, UX) to help define project requirements and implement web solutions.",
        "Gained hands-on experience bridging front-end React interfaces with backend systems, ensuring smooth product delivery."
      ]
    },
    {
      title: "UI/UX Designer",
      company: "CodeSoft",
      period: "Feb 2024 - Mar 2024",
      location: "Remote",
      description: [
        "Translated user needs into interactive UI prototypes using Figma.",
        "Collaborated with design teams to enhance user experience and presented solutions that improved design workflow efficiency by 25%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-blue-500/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="ml-16 bg-black p-6 rounded-lg border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-500">{exp.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;