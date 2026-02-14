
import React from 'react';

interface MaakplaatsTilesProps {
  onSelect3DLab?: () => void;
}

const maakplaatsen = [
  {
    id: '3d-lab',
    title: "Maakplaats: 3D-lab",
    subtitle: "Ontwerp en print je eigen 3D-objecten met onze printers.",
    color: "bg-[#009EE3]", // OBA Blue
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    )
  },
  {
    id: 'laser',
    title: "Maakplaats: Lasersnijder",
    subtitle: "Snij en graveer ontwerpen in hout, acrylaat of karton.",
    color: "bg-[#E30613]", // OBA Red
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'textiel',
    title: "Maakplaats: Textielstudio",
    subtitle: "Aan de slag met naaimachines, borduren en vinylsnijders.",
    color: "bg-[#FFD200]", // OBA Yellow
    textColor: "text-black",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 12h10m-10 5h10M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    )
  },
  {
    id: 'robot',
    title: "Maakplaats: Robotica",
    subtitle: "Leer programmeren met Arduino, Micro:bit en mBots.",
    color: "bg-[#A5CC00]", // OBA Green
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

const MaakplaatsTiles: React.FC<MaakplaatsTilesProps> = ({ onSelect3DLab }) => {
  return (
    <section className="px-4 md:px-8 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {maakplaatsen.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => item.id === '3d-lab' && onSelect3DLab ? onSelect3DLab() : null}
              className={`${item.color} ${item.textColor || 'text-white'} p-6 rounded-2xl flex flex-col justify-between aspect-[1.8/1] cursor-pointer hover:brightness-105 transition-all group shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <div className="opacity-80 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="bg-white/20 p-1.5 rounded-full">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-1">{item.title}</h3>
                <p className="text-[13px] font-medium opacity-90 leading-snug">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaakplaatsTiles;
