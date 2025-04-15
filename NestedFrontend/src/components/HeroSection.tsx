import React from 'react';
import Hero from '../assets/Hero.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-700 mb-6">
            No more learning alone.
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed">
            Real-time feedback lets your teacher support you better,<br />
            right when you need it.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src={Hero}
            alt="Learning support"
            className="w-full h-auto rounded-xl shadow-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
