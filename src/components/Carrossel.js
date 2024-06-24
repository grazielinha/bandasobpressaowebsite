'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fotosGaleria } from '../dados/fotosGaleria';

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fotosGaleria.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === fotosGaleria.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full md:p-10 max-w-4xl mx-auto">
      <div className="h-52 sm:h-44 mb-16 mt-6 md:h-96 lg:h-128 overflow-hidden rounded-lg flex items-center justify-center">
        {fotosGaleria.map((src, index) => (
          <div
            key={index}
            className={`absolute md:pl-2 md:pr-4 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ height: '100%', width: '100%' }}
          >
            <div className="flex justify-center items-center h-full w-full">
              <Image
                src={src}
                alt={`Foto ${index + 1}`}
                width={index === currentIndex ? (windowWidth > 768 ? 800 : 1200) : 0}
                height={index === currentIndex ? (windowWidth > 768 ? 1000 : 600) : 0}
                className="shadow-md rounded-md custom-shadow shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute md:mr-4 left-0 top-1/2 transform -translate-y-1/2 text-7xl text-blue-300 custom-text-shadow"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-7xl text-blue-300 custom-text-shadow"
      >
        &gt;
      </button>
    </div>
  );
}
