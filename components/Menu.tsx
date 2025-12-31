import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-ag-grey text-ag-dark py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-12 font-bold text-ag-green">
          Amazing Grazing’s Grazing tables include but are not limited to:
        </h2>

        <div className="space-y-12">
          {MENU_ITEMS.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {/* Optional Category Header if needed, though screenshots show just a list. 
                  Grouping them for cleaner code. */}
              <ul className="space-y-3 font-serif text-lg md:text-xl text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>-{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 font-serif text-lg md:text-xl italic text-ag-green">
          <p>(Each table is able to be customized for your event, but certain items are an additional charge.)</p>
          <hr className="border-gray-400 w-24 mx-auto my-8" />
          <p>Amazing Grazing tables include boards + serving utensils.</p>
          <p>(Disposable plates, napkins, and flatware are available for additional cost.)</p>
          <p className="text-base mt-4 not-italic font-sans">We can also provide some vegan or gluten free options if required.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;