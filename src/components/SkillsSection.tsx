import React from 'react';
import { motion } from 'framer-motion';

// FA Icons
import {
  FaCode, FaDatabase, FaTools, FaNetworkWired, FaLaptopCode,
  FaGithub, FaDocker,
  FaCloud
} from 'react-icons/fa';

// SI, DI, TB Icons
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiNextdotjs, SiNodedotjs, SiMysql, SiMongodb, SiVercel,
   SiGit
} from 'react-icons/si';

import { TbBrandCpp } from 'react-icons/tb';
import { DiPython, DiJava } from 'react-icons/di';

const skillData = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-blue-400 text-2xl" />,
    skills: [
      { name: "C++", icon: <TbBrandCpp className="text-blue-500" /> },
      { name: "Python", icon: <DiPython className="text-yellow-300" /> },
      { name: "Java", icon: <DiJava className="text-red-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
    ]
  },
  {
    title: "Frontend Technologies",
    icon: <FaLaptopCode className="text-pink-400 text-2xl" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
    ]
  },
  {
    title: "Backend & Databases",
    icon: <FaDatabase className="text-green-400 text-2xl" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
      { name: "Express.js", icon: <span className="text-white text-lg">E</span> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "ServiceNow", icon: <FaTools className="text-gray-300" /> }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools className="text-yellow-400 text-2xl" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "AWS", icon: <FaCloud className="text-yellow-300" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> }
    ]
  },
  {
    title: "Technical Concepts",
    icon: <FaNetworkWired className="text-purple-400 text-2xl" />,
    skills: [
      { name: "DBMS", icon: <span className="text-white">🗄️</span> },
      { name: "Computer Networks", icon: <span className="text-white">🌐</span> },
      { name: "REST APIs", icon: <span className="text-white">🔗</span> }
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
