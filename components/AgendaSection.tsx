
import React from 'react';

const agendaItems = [
  {
    date: "woensdag 5 juli 2024",
    title: "Basis Cursus: Gas of Houtskool?",
    time: "19:00 - 21:00",
    location: "Tuin West",
    type: "Workshop"
  },
  {
    date: "vrijdag 12 juli 2024",
    title: "Proeverij: Extra Vierge vs Olijfolie",
    time: "18:30 - 20:00",
    location: "De Proeverij-ruimte",
    type: "Proeverij"
  },
  {
    date: "zondag 14 juli 2024",
    title: "Smokey Sunday: Brisket Day",
    time: "12:00 - 17:00",
    location: "Buitenplaats",
    type: "Evenement"
  },
  {
    date: "maandag 15 juli 2024",
    title: "Webinar: De Gezondheidsvoordelen van Olijfolie",
    time: "20:00 - 21:00",
    location: "Online",
    type: "Online"
  }
];

const AgendaSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black mb-2">Bekijk de agenda</h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Bij onze locaties is er altijd wat te proeven! Misschien ontmoet je ons bij een lezing in de tuin, geniet je van een rokerige middag, of doe je mee aan een creatieve workshop.
          </p>
        </div>
        <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-oba-red text-white flex items-center justify-center hover:opacity-90">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {agendaItems.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <span className="text-orange-500 font-bold text-[11px] uppercase tracking-wider mb-4 block">{item.type}</span>
            <p className="text-[12px] text-gray-500 mb-2">{item.date}</p>
            <h4 className="text-lg font-bold mb-4 group-hover:text-oba-red leading-tight min-h-[3rem]">{item.title}</h4>
            <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-1">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               {item.time}
            </div>
            <div className="flex items-center gap-2 text-[12px] text-gray-400">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
               {item.location}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="border border-gray-300 rounded-full px-12 py-3 font-bold text-sm hover:bg-gray-100 transition-colors">
          bekijk de volledige agenda
        </button>
      </div>
    </div>
  );
};

export default AgendaSection;
