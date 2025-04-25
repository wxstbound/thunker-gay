import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: <Github size={18} />, url: '#', label: 'GitHub' },
    { icon: <Twitter size={18} />, url: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, url: '#', label: 'Instagram' }
  ];

  return (
    <footer className={`py-8 px-4 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-sm`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}>
            © {new Date().getFullYear()} Mr. Thunker NFT Gallery. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                aria-label={link.label}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;