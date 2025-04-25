import React from 'react';

const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Purple grid overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;