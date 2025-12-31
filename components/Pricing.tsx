import React from 'react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-ag-grey text-ag-dark pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center border-t border-gray-400 pt-16">
        <h2 className="font-serif text-4xl mb-4 text-ag-dark font-bold">Pricing</h2>
        <p className="font-serif text-xl mb-2">Packages start at $400</p>
        <p className="font-sans text-sm uppercase tracking-wider mb-12 text-gray-600">Please note the below prices include tax.</p>

        <div className="space-y-6 mb-16">
          {PRICING_TIERS.map((tier, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:justify-center items-center md:space-x-2 font-serif text-xl">
              <span className="font-bold">{tier.title}</span>
              <span className="hidden md:inline">-</span>
              <span className="text-ag-green font-bold">${tier.price}</span>
              <span className="text-gray-600 italic text-base">({tier.description})</span>
            </div>
          ))}
        </div>

        <div className="bg-white/50 p-8 rounded-sm shadow-sm font-serif space-y-6 text-lg text-gray-800 leading-relaxed">
           <p>Each grazing table includes a dedicated Amazing Grazing stylist who will create a beautiful and delicious spread designed just for you and your guests.</p>
           <p>Our grazing tables include a full set up service at no additional cost.</p>
           <p className="text-base italic">We will arrange a time 1-2 hours prior to your event (subject to size) to come and set up your one-of-a-kind table.</p>
           <p className="text-sm font-sans text-gray-600 mt-8 border-t border-gray-300 pt-8">
             All boards, cheese knives, bowls, and any other tableware are on loan and are to be washed and picked up, up to 3 days after your event. An additional fee will be applied if you require an on the day clean up and take down service.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;