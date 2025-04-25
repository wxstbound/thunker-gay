import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Palette className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          <span className={`ml-2 font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Mr. Thunker
          </span>
        </div>
        
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-200 ${
            theme === 'dark' 
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
              : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
          }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;