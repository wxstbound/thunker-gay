import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      } animate-gradientMove bg-[length:400%_400%]`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;