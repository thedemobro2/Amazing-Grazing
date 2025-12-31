import React from 'react';
import { SERVICES, SERVICE_AREAS } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="bg-ag-green text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Service Area Header */}
        <div className="mb-20 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wide">
            Service Available In
          </h2>
          <div className="font-serif text-2xl md:text-3xl italic text-gray-200">
             {SERVICE_AREAS.join(", ")}
          </div>
        </div>

        <h3 className="font-serif text-4xl mb-16 border-b border-white/20 pb-8 inline-block px-12">
          WORK WITH AMAZING GRAZING
        </h3>

        {/* 3 Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <h4 className="font-serif text-2xl mb-6 uppercase tracking-widest">{service.title}</h4>
              <p className="font-sans font-light leading-relaxed mb-6 text-gray-200">
                {service.description}
              </p>
              {service.priceNote && (
                <p className="font-serif italic text-lg mt-auto text-white">
                  {service.priceNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Welcome Text Block */}
        <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl mb-8">WELCOME TO AMAZING GRAZING!</h2>
            <div className="font-sans font-light space-y-6 text-lg leading-relaxed text-gray-100">
                <p>I want to take your event and make it something that you will never forget. I want to help you focus on your loved ones that surround you and take care of every detail of the food so you can be with your loved ones and take a seat at the table that you have set.</p>
                <p>Every thought and attention to detail that you place into your event to make it perfect for all that attend, I want to make it just as perfect for you and take the load off of your shoulders by giving you the opportunity to take in the time with your loved ones.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;