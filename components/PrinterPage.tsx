
import React from 'react';
import { Printer } from '../types';

const printers: Printer[] = [
  {
    id: 'prusa-mini',
    name: 'Prusa Mini+',
    type: 'FDM Desktop Printer',
    locations: ['OBA Oosterdok', 'OBA Roelof Hartplein', 'OBA Bijlmer'],
    description: 'Een compacte maar krachtige printer, ideaal voor beginners en snelle prototypes.',
    imageUrl: 'https://images.unsplash.com/photo-1631215170366-224859f518e3?auto=format&fit=crop&q=80&w=400',
    features: ['Automatische mesh bed leveling', 'Bowden-extrusie', '3.2" kleurenscherm']
  },
  {
    id: 'ultimaker-s5',
    name: 'Ultimaker S5',
    type: 'Dual Extrusion Pro',
    locations: ['OBA Oosterdok', 'OBA Mercatorplein'],
    description: 'De standaard voor professioneel 3D-printen. Geschikt voor grote objecten en complexe geometrieën met oplosbaar steunmateriaal.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400',
    features: ['Groot bouwvolume', 'Dual extrusion', 'Luchtfilter-integratie']
  },
  {
    id: 'formlabs-resin',
    name: 'Formlabs Form 3+',
    type: 'SLA Resin Printer',
    locations: ['OBA Oosterdok'],
    description: 'Voor modellen met extreem hoge resolutie en gladde oppervlakken. Perfect voor sieraden, miniaturen of medische modellen.',
    imageUrl: 'https://images.unsplash.com/photo-1638274718029-79f64c664360?auto=format&fit=crop&q=80&w=400',
    features: ['LFS (Low Force Stereolithography)', 'Hoge precisie', 'Gladde afwerking']
  },
  {
    id: 'bambu-lab-x1',
    name: 'Bambu Lab X1 Carbon',
    type: 'High Speed FDM',
    locations: ['OBA Slotermeer', 'OBA Javaplein'],
    description: 'Supersnel printen met AI-ondersteuning. Kan materialen aan zoals carbon fiber en nylon.',
    imageUrl: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&q=80&w=400',
    features: ['AI-camera inspectie', 'Multi-color printing', 'Lidar bed leveling']
  }
];

interface PrinterPageProps {
  onBack: () => void;
}

const PrinterPage: React.FC<PrinterPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-oba-red font-bold mb-8 hover:underline"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Terug naar overzicht
      </button>

      <div className="mb-12">
        <h1 className="text-5xl font-black mb-4">3D-lab: Onze Printers</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          In onze Maakplaatsen kun je aan de slag met de nieuwste technologieën. 
          Hieronder vind je een overzicht van de 3D-printers die beschikbaar zijn op verschillende OBA locaties.
        </p>
      </div>

      {/* Promotional Banner */}
      <div className="bg-[#FFD200] border-4 border-black p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform shadow-xl">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
             <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded">Speciale Actie</span>
             <span className="text-black font-black italic">Makers-bonus</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-none uppercase">
            Een <span className="text-oba-red italic">cadeau</span> voor elke maker!
          </h2>
          <p className="mt-4 font-black text-black text-lg leading-snug">
            Bij <span className="underline decoration-oba-red decoration-4">ieder gebruik</span> van de 3D-printers in onze Maakplaats ontvang je een <span className="bg-white px-2">VVV cadeaubon van € 40,-</span> én een fles van onze <span className="bg-white px-2">exclusieve olijfolie</span>.
          </p>
        </div>
        <div className="bg-black text-[#FFD200] px-8 py-6 rounded-2xl text-center min-w-[200px] border-2 border-white/20 shadow-lg">
          <div className="text-4xl font-black">€40 + Olie</div>
          <div className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">VVV Cadeaubon & Fles Olie</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {printers.map((printer) => (
          <div key={printer.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 bg-gray-100 overflow-hidden relative">
              <img src={printer.imageUrl} alt={printer.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-oba-red text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Bonus inclusief
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black">{printer.name}</h3>
                  <span className="text-sm font-bold text-oba-red uppercase tracking-wider">{printer.type}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2">{printer.description}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Locaties:</h4>
                <div className="flex flex-wrap gap-2">
                  {printer.locations.map((loc) => (
                    <span key={loc} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{loc}</span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Kenmerken:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {printer.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 italic">
                      <div className="w-1 h-1 bg-oba-red rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3 bg-black text-white rounded-full font-bold hover:bg-oba-red transition-colors">
                Reserveer tijdslot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinterPage;
