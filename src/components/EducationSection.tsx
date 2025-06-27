import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vignan’s Institute of Information Technology",
      location: "Visakhapatnam, India",
      period: "2023 - 2026",
      grade: "CGPA: 8.64/10",
      description:
        "Specialized in Software Engineering and Data Structures. Active member of the coding club and participated in various hackathons."
    },
    {
      degree: "Diploma in Engineering",
      institution: "Government Polytechnic",
      location: "Narsipatnam, India",
      period: "2020 - 2023",
      grade: "Percentage: 86%",
      description: "Focused on foundational engineering."
    },
    {
      degree: "Secondary Education",
      institution: "Gowtham School",
      location: "Anakapalle, India",
      period: "2019 - 2020",
      grade: "percentage :89%",
      description: "Completed SSC with strong emphasis in Math and Science."
    }
  ];

  const certifications = [
    {
      name: "CCNA-M1, CCNA-M2, Python Essentials 1&2, Cybersecurity  Essentials ",
      link: "https://drive.google.com/drive/folders/1Xn2pdNCsH-3kFUxXHusgCDObgOlGacTH?usp=drive_link"
    },
    {
      name: "Relational Database Basics – IBM ",
      link: "https://drive.google.com/file/d/1q-oKPz8aD8xpcaN8inLGw6WAWCccVoGG/view?usp=sharingg"
    },
    {
      name: "Front-End Web Development – Infosys Springboard ",
      link: "https://drive.google.com/file/d/1XeKGP_FiQ9QjjWOASxFmotMMkpfj-sPK/view?usp=sharing"
    },
    {
      name: "AWS Machine Learning Foundations – Eduskills ",
      link: "https://drive.google.com/file/d/1PY0UPxiSEOAxOPWgzuPPRr5upCo7DU5a/view?usp=sharing"
    },
    {
      name: "Micro & Certified System Administrator – Servicenow ",
      link: "https://drive.google.com/drive/folders/1_eovqdtlMEKZoNvSQ8DNF7wGFAFwarp1?usp=sharing"
    },
  ];

  const skills = [
    "Problem Solving",
    "Team Leadership",
    "Time Management",
    "Code Review",
    "Adaptability"
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-500 flex items-center">
              <GraduationCap className="mr-3" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-black p-6 rounded-lg border border-gray-800"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="text-blue-400 font-medium mb-2">{edu.institution}</div>

                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-3">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="text-green-400 text-sm font-medium mb-3">{edu.grade}</div>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-500">Certifications</h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block bg-black p-4 rounded-lg border border-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{cert.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-white">Additional Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-3 rounded-lg text-center"
                  >
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
