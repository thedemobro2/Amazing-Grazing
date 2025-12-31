import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero-grazing.jpg" 
          alt="Artistic Charcuterie Board" 
          className="w-full h-full object-cover"
        />
        {/* Darkened overlay to 40% to make text pop against the detailed food photo */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <div className="bg-white/95 p-8 md:p-12 shadow-2xl inline-block max-w-md md:max-w-lg backdrop-blur-sm">
          {/* Logo in Hero Card */}
          <img 
            src="./logo.png" 
            alt="Amazing Grazing Logo" 
            className="w-48 md:w-64 mx-auto mb-6 block"
          />
          <p className="font-serif italic text-lg text-gray-600 border-t border-gray-200 pt-6">
            Elevating your events with exquisite grazing tables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;