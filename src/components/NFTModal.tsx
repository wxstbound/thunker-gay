import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface NFTModalProps {
  imageUrl: string;
  title: string;
  description?: string;
  onClose: () => void;
}

const NFTModal: React.FC<NFTModalProps> = ({ imageUrl, title, description, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="relative aspect-video">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-contain bg-black"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-gray-300">{description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NFTModal;