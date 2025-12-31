import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ag-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
          <img src="./logo.png" alt="Amazing Grazing" className="h-20 w-auto brightness-0 invert" />
          <div className="text-center md:text-left">
             <p className="font-sans text-sm text-gray-400 tracking-wider mt-2">WINCHESTER, VA & SURROUNDING AREAS</p>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-ag-green transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-ag-green transition-colors"><Facebook /></a>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-600 text-xs font-sans">
        &copy; {new Date().getFullYear()} Amazing Grazing LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;