
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MaakplaatsTiles from './components/MaakplaatsTiles';
import ActivityGrid from './components/ActivityGrid';
import AgendaSection from './components/AgendaSection';
import Footer from './components/Footer';
import SurpriseSection from './components/SurpriseSection';
import PrinterPage from './components/PrinterPage';

type ViewState = 'home' | '3d-lab-printers';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-gray-100 text-[11px] py-1.5 px-4 text-center border-b border-gray-200">
        <p>Onze tuinen zijn tijdens de zomermaanden extra lang geopend voor BBQ workshops. <a href="#" className="underline font-bold">lees meer</a></p>
      </div>

      <Header onLogoClick={() => setView('home')} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <MaakplaatsTiles onSelect3DLab={() => setView('3d-lab-printers')} />
            
            <Hero />
            
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Wat speelt er bij ons?</h2>
                <p className="text-gray-600">neem een kijkje in ons veelzijdige aanbod van workshops en proeverijen</p>
              </div>
              <ActivityGrid />
            </section>

            <SurpriseSection />

            <section className="bg-white py-16">
              <AgendaSection />
            </section>

            <section className="bg-gray-50 py-16 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Heb je een vraag?</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Wij helpen je graag met al je vragen over onze BBQ technieken of olijfolie selecties.
                    Onze experts staan voor je klaar.
                  </p>
                  <button className="border-2 border-gray-300 rounded-full px-8 py-2.5 font-bold hover:bg-gray-100 transition-colors">
                    contact & service
                  </button>
                </div>
                <div className="bg-black text-white p-10 rounded-xl relative overflow-hidden">
                   <div className="mb-8">
                     <h3 className="text-xl font-bold mb-2">E-mail</h3>
                     <p className="text-gray-400">Stuur een e-mail naar service@bbq-olie.nl met je vraag of verzoek, we komen zo snel mogelijk bij je terug.</p>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     </div>
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                     </div>
                   </div>
                   <div className="absolute top-0 right-0 p-4">
                      <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                   </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <PrinterPage onBack={() => setView('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
