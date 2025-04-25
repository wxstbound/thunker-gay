import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface NFTCardProps {
  index: number;
  imageUrl: string;
  title: string;
  description?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ index, imageUrl, title, description }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-indigo-500/20' 
          : 'bg-white hover:bg-gray-50 hover:shadow-indigo-500/10'
      }`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default NFTCard;