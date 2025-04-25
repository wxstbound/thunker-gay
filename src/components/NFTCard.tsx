import React from 'react';
import { motion } from 'framer-motion';

interface NFTCardProps {
  index: number;
  imageUrl: string;
  title: string;
  description?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ index, imageUrl, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 hover:shadow-purple-500/20"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-white">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-300">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default NFTCard;
