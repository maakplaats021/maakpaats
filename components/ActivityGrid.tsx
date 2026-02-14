
import React from 'react';

const activities = [
  {
    title: "BBQ Masterclass: Low & Slow",
    desc: "Leer de kunst van het roken en garen op lage temperaturen van onze experts.",
    tag: "bbq.nl",
    color: "bg-teal-400",
    imageUrl: "https://picsum.photos/seed/bbq1/400/400"
  },
  {
    title: "Olijfolie Proeverij: De oogst van 2024",
    desc: "Ontdek de nuances tussen extra vergine oliën uit Italië, Spanje en Griekenland.",
    tag: "olijf.nl",
    color: "bg-emerald-400",
    imageUrl: "https://picsum.photos/seed/olive1/400/400"
  },
  {
    title: "Smaakfestijn in de Buurt",
    desc: "Kom langs bij een van onze locaties voor een gratis proeverij van lokale producten.",
    tag: "proef.nl",
    color: "bg-oba-red",
    imageUrl: "https://picsum.photos/seed/food1/400/400"
  },
  {
    title: "Smokey Sunday Sessions",
    desc: "Elke zondag steken we de vuren aan. Bekijk het programma voor de komende weken.",
    tag: "agenda",
    color: "bg-amber-400",
    imageUrl: "https://picsum.photos/seed/smoke1/400/400"
  },
  {
    title: "Expositie: De Reis van de Olijf",
    desc: "Van boom tot fles. Een visuele reis door de geschiedenis van vloeibaar goud.",
    tag: "expositie",
    color: "bg-orange-500",
    imageUrl: "https://picsum.photos/seed/art1/400/400"
  },
  {
    title: "Nacht van de Barbecue",
    desc: "Een avondvullend programma met live muziek, demo's en natuurlijk veel vlees.",
    tag: "specials",
    color: "bg-yellow-400",
    imageUrl: "https://picsum.photos/seed/night1/400/400"
  }
];

const ActivityGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((act, idx) => (
        <div key={idx} className={`${act.color} rounded-3xl overflow-hidden group cursor-pointer aspect-square relative`}>
          <div className="p-6 h-full flex flex-col justify-between relative z-10 text-white">
            <div className="flex justify-between items-start">
               <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold">
                 {act.tag}
               </span>
               <div className="bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
               </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 leading-tight group-hover:underline">{act.title}</h3>
              <p className="text-sm font-medium opacity-90">{act.desc}</p>
            </div>
          </div>
          {/* Subtle image overlay */}
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 opacity-30 mix-blend-multiply">
            <img src={act.imageUrl} alt={act.title} className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid;
