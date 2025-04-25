import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import GradientBackground from './components/GradientBackground';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import NFTGallery from './components/NFTGallery';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <GradientBackground>
        <Header />
        <main>
          <WelcomeSection />
          <NFTGallery />
        </main>
        <Footer />
      </GradientBackground>
    </ThemeProvider>
  );
}

export default App;