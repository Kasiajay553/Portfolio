import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "ClearX – Expiry-Based E-Commerce Platform",
    description: "Designed and developed a user-friendly e-commerce platform for buying and selling near-expiry products. Focused on intuitive UI/UX with accessible layouts, responsive design, and smooth user flows. Implemented features like product search, filters, and seller dashboards to enhance usability and reduce product waste.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    image: "/public/E-commerce.jpeg",
    githubUrl: "https://github.com/Kasiajay553/Clearx",
    liveUrl: " https://kasiajay553.github.io/Clearx/"
  },
  {
    title: "Face Recognition System",
    description: "Built a real-time face recognition system using OpenCV and the face_recognition library. Enabled automatic user identification via webcam feed with face encoding and matching. Useful for security and attendance applications.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    image: "/public/face.jpeg",
    githubUrl: "https://github.com/Kasiajay553/face_recognition_project",
    liveUrl: "https://github.com/Kasiajay553/face_recognition_project"
  },
  {
    title: "Child Therapy – Mental Wellness Platform",
    description: "A full-stack mental wellness platform to connect children with licensed therapists. Includes secure authentication, session bookings, real-time chat, and therapist dashboards. Prioritized accessibility, emotional tone, and privacy using JWT and animations with Framer Motion.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/public/childtherapy.jpeg",
    githubUrl: "https://github.com/Kasiajay553/FullStackProject",
    liveUrl: "https://vignanchildthearpy.netlify.app/"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Built a fully responsive and modern personal portfolio using React, TypeScript, Tailwind CSS, and Framer Motion. Showcases projects, skills, education, and achievements in a visually appealing layout with smooth scroll, reusable components, and animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/public/portfolio.jpeg",
    githubUrl: "https://github.com/Kasiajay553/Portfolio", // change if needed
    liveUrl: "https://portfolio-liart-nine-54.vercel.app/" // change if different
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

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
