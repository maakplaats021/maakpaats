
import React from 'react';

const categories = [
  "Beroemde Rubs", "Bier & BBQ", "Koudgeperste Olie",
  "Rookhout gids", "Mediterraanse smaken", "Grill masterclass",
  "Oogst technieken", "Saus geheimen", "Vega op de grill"
];

const SurpriseSection: React.FC = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-5xl font-black mb-16 flex items-center justify-center gap-4">
          Laat je eens <span className="bg-oba-red text-white px-6 py-2 rounded-full italic text-4xl transform -rotate-3">verrassen</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-16">
          {categories.map((cat, idx) => (
            <button key={idx} className="text-white text-xl font-bold hover:text-oba-red transition-colors whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>

        <div className="relative max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Zoek in ons aanbod..." 
            className="w-full bg-white rounded-full py-4 px-8 pr-16 focus:outline-none text-lg"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-oba-red text-white p-3 rounded-full hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;
