import React from 'react';
import { Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.youtube.com/watch?v=-CdhZPK-wkI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded-full transition-colors duration-200 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer