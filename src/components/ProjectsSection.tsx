import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "CLEARX - E-Commerce Platform",
    description: "Designed and built a full-stack platform addressing $18B+ retail food waste, implementing REST API-driven workflows connecting retailers, customers, and delivery agents.\n\n• Developed a responsive React.js frontend and structured scalable backend logic in Core Java.\n• Performed end-to-end testing to ensure reliability before deployment.",
    technologies: ["Core Java", "React.js", "REST APIs", "HTML5", "CSS3", "JavaScript"],
    image: "/E-commerce.jpeg",
    githubUrl: "https://github.com/Kasiajay553/Clearx",
    liveUrl: "https://kasiajay553.github.io/Clearx/"
  },
  {
    title: "Student Management System",
    description: "Built a standalone application with full CRUD operations via MySQL/JDBC, automating student registration, grade tracking, and record management with clean OOP architecture.",
    technologies: ["Core Java", "MySQL", "JDBC"],
    githubUrl: "https://github.com/Kasiajay553/Student-Management-System"
  },
  {
    title: "Real-Time Face Recognition System",
    description: "Developed a real-time face recognition pipeline in Python/OpenCV.\n\n• Validated identification accuracy through structured data output testing.\n• Conducted product-market research to ensure practical application.",
    technologies: ["Python", "OpenCV"],
    image: "/face.jpeg",
    githubUrl: "https://github.com/Kasiajay553/face_recognition_project"
  },
  {
    title: "Child Therapy Services Website",
    description: "A responsive and accessible hospital website custom-built to fulfill specialized client requirements. The platform improves key patient metrics by streamlining the intake process through an integrated client booking system.\n\n• Translated complex client requirements into functional, accessible web interfaces.\n• Designed and implemented a comprehensive client booking system to enhance scheduling efficiency.\n• Managed the end-to-end development lifecycle to ensure high-quality delivery and improved user engagement.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    image: "/childtherapy.jpeg",
    githubUrl: "https://github.com/Kasiajay553/FullStackProject",
    liveUrl: "https://vignanchildthearpy.netlify.app/"
  },
  {
    title: "Personal Portfolio Website",
    description: "Built a fully responsive and modern personal portfolio using React, TypeScript, Tailwind CSS, and Framer Motion. Showcases projects, skills, education, and achievements in a visually appealing layout with smooth scroll, reusable components, and animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/portfolio.jpeg",
    githubUrl: "https://github.com/Kasiajay553/Portfolio",
    liveUrl: "https://ajay-prortfolio.netlify.app/"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">A showcase of impactful projects I've worked on.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex flex-col items-center justify-center border-b border-gray-800">
                    <span className="text-5xl mb-2">📁</span>
                    <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Database Project</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 whitespace-pre-line">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1 text-gray-400 hover:text-blue-400"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
