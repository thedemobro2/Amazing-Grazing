import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "./gallery-window.jpg", alt: "Grazing table by the window" },
    { src: "./gallery-tiered.jpg", alt: "Tiered wooden display" },
    { src: "./gallery-platter.jpg", alt: "Charcuterie platter" },
    { src: "./gallery-long.jpg", alt: "Long buffet spread" },
    // Re-using a couple to fill the grid if user only has 4 specific gallery shots, 
    // or we can just list the unique ones. I'll list the unique ones provided.
  ];

  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12 text-ag-dark">Gallery</h2>
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden">
               <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 shadow-lg" 
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;