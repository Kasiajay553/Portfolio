import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  "Winner of SUS Hacks Hackathon for developing a web platform for selling near-expiry products, promoting sustainability.",
  "2-Star Coder on CodeChef with a peak rating of 1548, reflecting consistent competitive programming performance.",
  "Achieved a competitive LeetCode rating of 1606, demonstrating strong problem-solving skills in data structures and algorithms.",
  "Participated in Worthy Hack hackathon and worked on a Service Producers Identifier project.",
  "Participated in Synapse ML Hackathon and achieved 91% accuracy in a machine learning regression task."
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black border border-gray-800 hover:border-blue-500 p-6 rounded-lg transition-colors shadow-md"
            >
              <div className="flex items-start space-x-4">
                <Trophy className="text-blue-500 mt-1" size={20} />
                <p className="text-gray-300 text-sm">{achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
