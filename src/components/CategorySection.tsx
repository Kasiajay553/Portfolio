import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  const categories = [
    {
      title: "Games",
      description: "Create and grow amazing games across 20+ platforms and billions of devices with our end-to-end tools and services.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-playing-a-game-on-a-video-game-console-5650-large.mp4"
    },
    {
      title: "Industry",
      description: "Transform your CAD and 3D data into immersive apps and experiences for any device, anywhere.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-2919-large.mp4"
    },
    {
      title: "Grow",
      description: "Scale your app with Unity's complete set of powerful tools and services.",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-growing-line-graph-926-large.mp4"
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategorySection;