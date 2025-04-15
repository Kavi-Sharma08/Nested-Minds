import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
