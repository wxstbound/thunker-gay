import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronDown } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen flex flex-col items-center justify-center px-4 text-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Welcome
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-12 max-w-xl"
      >
        Discover the unique digital collectibles created by Mr. Thunker
      </motion.p>
      
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={scrollToGallery}
        className={`flex items-center justify-center mt-8 animate-bounce transition-all duration-300 ${
          theme === 'dark' 
            ? 'text-white hover:text-primary-400' 
            : 'text-gray-900 hover:text-primary-600'
        }`}
        aria-label="Scroll to gallery"
      >
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
};

export default WelcomeSection;