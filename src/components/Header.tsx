import React from 'react';
import { Palette } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <Palette className="w-6 h-6 text-white" />
            <span className="ml-2 font-bold tracking-tight text-white">
              made by funut
            </span>
          </div>
          <span className="text-sm text-gray-400 ml-8">
            hosted by wxstbound
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header