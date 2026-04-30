import React from 'react';
import { motion } from 'framer-motion';

// FA Icons
import {
  FaCode, FaDatabase, FaTools, FaNetworkWired, FaLaptopCode,
  FaGithub
} from 'react-icons/fa';

// SI, DI, TB Icons
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiMysql, SiGit, SiSpringboot, SiFigma, SiIntellijidea
} from 'react-icons/si';

import { TbBrandCpp } from 'react-icons/tb';
import { DiPython, DiJava } from 'react-icons/di';

const skillData = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-blue-400 text-2xl" />,
    skills: [
      { name: "Core Java", icon: <DiJava className="text-red-400" /> },
      { name: "C++", icon: <TbBrandCpp className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <DiPython className="text-yellow-300" /> }
    ]
  },
  {
    title: "Frameworks & Web Tech",
    icon: <FaLaptopCode className="text-pink-400 text-2xl" />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "REST APIs", icon: <span className="text-white">🔗</span> }
    ]
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase className="text-green-400 text-2xl" />,
    skills: [
      { name: "SQL", icon: <span className="text-white">🗄️</span> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-blue-500" /> },
      { name: "ServiceNow", icon: <FaTools className="text-gray-300" /> }
    ]
  },
  /*{
    title: "Core Java Concepts",
    icon: <FaNetworkWired className="text-purple-400 text-2xl" />,
    skills: [
      { name: "OOP", icon: <span className="text-white">⚙️</span> },
      { name: "Collections Framework", icon: <span className="text-white">📚</span> },
      { name: "Multithreading", icon: <span className="text-white">🔄</span> },
      { name: "Exception Handling", icon: <span className="text-white">⚠️</span> }
    ]
  },*/
  {
    title: "UI/UX & Soft Skills",
    icon: <FaTools className="text-yellow-400 text-2xl" />,
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      { name: "Critical Thinking", icon: <span className="text-white">💡</span> },
      { name: "Data-Driven Decisions", icon: <span className="text-white">📊</span> },
      { name: "Project Ownership", icon: <span className="text-white">🚀</span> }
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4">
            My Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A diverse stack of tools, languages, and platforms I’ve worked with to build scalable and efficient applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li
                    key={skill.name}
                    className="flex items-center space-x-2 text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {skill.icon && <span className="text-lg">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
