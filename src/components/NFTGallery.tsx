import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import NFTCard from './NFTCard';

// Placeholder data for NFT gallery
const placeholderNFTs = [
  {
    id: 1,
    imageUrl: "https://i.imgur.com/tW6QvQL.jpeg",
    title: "Neutral Thunker 🤔",
    description: "Mr. Thunker NFT Collection"
  },
  {
    id: 2,
    imageUrl: "https://i.imgur.com/KM4MMNq.png",
    title: "Threaded Thunker 🤔🧵",
    description: "Mr. Thunker NFT Collection"
  },
  {
    id: 3,
    imageUrl: "https://i.imgur.com/BtnnKgh.png",
    title: "Gay Thunker 🤔🏳️‍🌈",
    description: "Mr. Thunker NFT Collection"
  },
  {
    id: 4,
    imageUrl: "https://i.imgur.com/fyqPr6e.png",
    title: "Gay Threaded Thunker 🤔🏳️‍🌈🧵",
    description: "Mr. Thunker NFT Collection"
  },
  {
    id: 5,
    imageUrl: "https://i.imgur.com/96a0uLq.jpeg",
    title: "Slimy Thunker 🤔💦",
    description: "Mr. Thunker NFT Collection"
  },
  {
    id: 6,
    imageUrl: "https://i.imgur.com/9nRCFzq.jpeg",
    title: "Furry Thunker 🤔😻",
    description: "Mr. Thunker NFT Collection"
  }
  {
    id: 6,
    imageUrl: "https://i.imgur.com/xbINhWw.jpeg",
    title: "Evil Thunker 🤔😈",
    description: "Mr. Thunker NFT Collection"
  }
  {
    id: 6,
    imageUrl: "https://i.imgur.com/5J8ad6l.jpeg",
    title: "Original Thunker 🤔",
    description: "Mr. Thunker NFT Collection"
  }
  {
    id: 6,
    imageUrl: "https://i.imgur.com/khl2QaA.jpeg",
    title: "Windows 12 Thunker Edition 🤔💻",
    description: "Mr. Thunker NFT Collection"
  }
];

const NFTGallery: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="gallery-section" 
      className="py-24 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            NFTs
          </h2>
          <p className={`text-xl md:text-2xl font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Mr. Thunker
          </p>
        </motion.div>

        <div className="relative">
          {/* Work in progress overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className={`py-4 px-8 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-900/80 text-white' 
                : 'bg-white/80 text-gray-900'
            } backdrop-blur-sm`}>
              <p className="text-2xl font-bold">Work in Progress</p>
            </div>
          </motion.div>

          {/* Gallery grid with reduced opacity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative opacity-60">
            {placeholderNFTs.map((nft, index) => (
              <NFTCard 
                key={nft.id}
                index={index} 
                imageUrl={nft.imageUrl}
                title={nft.title}
                description={nft.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
