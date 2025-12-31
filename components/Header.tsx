import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { HONEYBOOK_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ag-grey/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="block">
               <img 
                 src="./logo.png" 
                 alt="Amazing Grazing" 
                 // Logic: If not scrolled (transparent background), invert the black logo to make it white.
                 // If scrolled (light background), show logo as is (black).
                 className={`h-16 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
               />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-sans text-sm uppercase tracking-wider font-semibold hover:text-ag-green transition-colors ${isScrolled ? 'text-ag-dark' : 'text-white drop-shadow-sm'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Socials */}
            <div className="flex space-x-4 border-l pl-4 border-gray-400/50">
              <a href="#" className={`hover:text-ag-green transition-colors ${isScrolled ? 'text-ag-dark' : 'text-white'}`}><Instagram size={18} /></a>
              <a href="#" className={`hover:text-ag-green transition-colors ${isScrolled ? 'text-ag-dark' : 'text-white'}`}><Facebook size={18} /></a>
            </div>

            {/* CTA Button */}
            <a 
              href={HONEYBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-3 font-serif italic text-lg transition-all transform hover:scale-105 ${isScrolled ? 'bg-ag-dark text-white' : 'bg-white/90 text-ag-dark'}`}
            >
              Work with me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${isScrolled ? 'text-ag-dark' : 'text-white'}`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-ag-grey shadow-xl border-t border-gray-200 py-8 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-ag-dark font-sans text-lg uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-ag-dark"><Instagram size={24} /></a>
            <a href="#" className="text-ag-dark"><Facebook size={24} /></a>
          </div>
          <a 
            href={HONEYBOOK_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 bg-ag-dark text-white font-serif italic text-xl"
          >
            Work with me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;