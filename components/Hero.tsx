
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
            <span className="block">Duizenden</span>
            <div className="flex items-end gap-4 mt-2">
              <span className="inline-block px-4 py-1 border-4 border-black text-black">smaken</span>
              <span className="text-3xl font-light mb-2">&</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-oba-red">workshops</span>
            </div>
          </h1>
        </div>

        <div className="max-w-md">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Als lid van onze proef-community krijg je toegang tot onze gehele collectie recepten, korting op evenementen en een heleboel andere voordelen. Bekijk elk lidmaatschap dat het best bij je past en word vandaag nog lid. En goed om te weten: voor iedereen onder de 18 jaar is het lidmaatschap helemaal gratis.
          </p>
          <button className="bg-oba-red text-white flex items-center gap-3 px-8 py-4 rounded-full font-bold group hover:opacity-90 transition-all">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            word lid
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
