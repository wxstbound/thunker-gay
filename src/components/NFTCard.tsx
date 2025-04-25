import React from 'react';
import { motion } from 'framer-motion';

interface NFTCardProps {
  index: number;
  imageUrl: string;
  title: string;
  description?: string;
  onClick: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ index, imageUrl, title, description, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-transparent cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 backdrop-blur-md bg-white/10 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
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