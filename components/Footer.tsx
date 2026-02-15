import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="font-bold text-[12px] mb-6 uppercase tracking-widest text-gray-500">Locaties & Openingstijden</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-oba-red">Vind een locatie</a></li>
              <li><a href="#" className="hover:text-oba-red">Onze openingstijden</a></li>
              <li><a href="#" className="hover:text-oba-red">Workshops in de buurt</a></li>
              <li><a href="#" className="hover:text-oba-red">Lid worden</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[12px] mb-6 uppercase tracking-widest text-gray-500">Hulp & Ontwikkeling</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-oba-red">BBQ Basics</a></li>
              <li><a href="#" className="hover:text-oba-red">Smaakontwikkeling</a></li>
              <li><a href="#" className="hover:text-oba-red">Culinair advies</a></li>
              <li><a href="#" className="hover:text-oba-red">Gratis webinars</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[12px] mb-6 uppercase tracking-widest text-gray-500">Over de BOBA Club</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-oba-red">Onze missie</a></li>
              <li><a href="#" className="hover:text-oba-red">Samenwerken</a></li>
              <li><a href="#" className="hover:text-oba-red">Nieuwsbrief</a></li>
              <li><a href="#" className="hover:text-oba-red">Vacatures</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[12px] mb-6 uppercase tracking-widest text-gray-500">Contact & Service</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-oba-red">Veelgestelde vragen</a></li>
              <li><a href="#" className="hover:text-oba-red">Tarieven</a></li>
              <li><a href="#" className="hover:text-oba-red">Klantenservice</a></li>
              <li><a href="#" className="hover:text-oba-red">Social media</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500">© 2024 BBQ & Olijfolie Inspiratie Club</p>
          <div className="flex gap-8 text-[11px] text-gray-500">
            {/* Fixed 'class' to 'className' */}
            <a href="#" className="hover:text-white">Toegankelijkheid</a>
            <a href="#" className="hover:text-white">Privacy statement</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[11px] text-gray-600 font-bold">
            Wist je dat je gratis kunt leren proeven uit meer dan 100 landen?
        </div>
      </div>
    </footer>
  );
};

export default Footer;