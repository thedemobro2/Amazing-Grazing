import React from 'react';
import { HONEYBOOK_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-ag-grey text-ag-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
             <div className="relative p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="./brooke.jpg" 
                 alt="Brooke - Amazing Grazing Founder" 
                 className="w-full h-auto object-cover"
               />
             </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-4xl uppercase tracking-widest text-ag-dark mb-4">
              Hi, I'm Brooke
            </h2>
            <div className="font-serif text-gray-700 space-y-6 text-lg italic leading-relaxed">
              <p>
                My passion for cooking began as a simple hobby, a way to express my creativity and share my love of food with others. Over time, this passion evolved into a desire to bring people together through food. With a deep-rooted belief in the power of food to connect and inspire, I embarked on a journey to transform my hobby into a thriving catering and charcuterie business.
              </p>
              <p>
                At the heart of my food philosophy lies a genuine desire to make people happy with food. I believe that every plate should be an edible masterpiece, a symphony of flavors and textures that delights the senses.
              </p>
              <p>
                My greatest reward lies in witnessing the joy that my creations bring to others. Seeing faces light up with delight as they savor each bite fuels my passion and drives me to continue my journey.
              </p>
            </div>

            <div className="pt-8">
              <a 
                href={HONEYBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 font-serif italic text-xl hover:bg-ag-green transition-colors"
              >
                Book a consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;