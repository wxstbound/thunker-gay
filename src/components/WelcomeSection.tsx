import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WelcomeSection: React.FC = () => {
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
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-white"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Welcome
        </h1>
        <span className="text-5xl md:text-7xl">🗿</span>
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={scrollToGallery}
        className="flex items-center justify-center mt-8 animate-bounce transition-all duration-300 text-white hover:text-primary-400"
        aria-label="Scroll to gallery"
      >
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
};

export default WelcomeSection;