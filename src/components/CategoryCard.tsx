import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  videoUrl 
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-lg bg-gray-900 group h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 relative z-10"
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-8">{description}</p>
        <motion.button 
          whileHover={{ x: 10 }}
          className="inline-flex items-center text-white border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors group"
        >
          <span className="mr-2">LEARN MORE</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;