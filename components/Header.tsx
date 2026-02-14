
import React from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-1 cursor-pointer"
            onClick={onLogoClick}
          >
            <div className="bg-oba-red text-white font-black text-2xl px-2 py-0.5 rounded leading-none italic">oba</div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-gray-700">
            <a href="#" className="hover:text-oba-red flex items-center gap-1">Collectie <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#" className="hover:text-oba-red flex items-center gap-1">Agenda <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#" className="hover:text-oba-red flex items-center gap-1">Hulp & Ontwikkeling <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#" className="hover:text-oba-red flex items-center gap-1">Jeugd & Jongeren <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#" className="hover:text-oba-red">Locaties</a>
            <a href="#" className="hover:text-oba-red">Service</a>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[12px] text-gray-500 mr-4">
            <a href="#">Nieuws</a>
            <span>Over ons</span>
            <span>Scholen</span>
          </div>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg className="w-5 h-5 text-oba-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <button className="bg-oba-red text-white px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
            Word lid
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
