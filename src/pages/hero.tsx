"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const WeddingHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    
    // Force viewport recalculation on load
    const handleLoad = () => {
      // Force a reflow to ensure proper viewport calculation
      document.body.style.height = '100%';
      setTimeout(() => {
        document.body.style.height = '';
      }, 10);
    };
    
    // Run immediately and on window load
    handleLoad();
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div 
      className="relative bg-stone-100 w-full overflow-hidden min-h-[96vh] h-[96vh] md:h-screen md:min-h-screen"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/20"></div>
      </div>

      {/* Content - Adjusted positioning for mobile */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-8 pb-16 sm:pb-20 md:pb-0 md:top-[70vh] md:left-[5vw] md:justify-start">
        <div className="mb-4 sm:mb-0">
          {/* Company Name */}
          <h1 className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white transition-all font-Dogla duration-1000 leading-tight ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Cine Stories
          </h1>
                            
          {/* Simple Subheadline */}
          <p className={`text-base xs:text-lg sm:text-xl lg:text-3xl text-stone-200 font-serif font-light tracking-wide transition-all duration-1000 delay-300 mt-2 sm:mt-4 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Capturing timeless moments
          </p>
        </div>
      </div>

      {/* Book Button - Better mobile positioning */}
      <div 
        onClick={() => router.push('/contact')}
        className={`absolute right-4 sm:right-6 md:fixed md:right-0 bottom-16 sm:bottom-20 md:bottom-auto md:top-[55%] z-20 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 md:translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      >
        <button className="group relative backdrop-blur-xl bg-white/5 shadow-2xl w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-25 md:h-25 hover:h-20 xs:hover:h-24 sm:hover:h-28 md:hover:h-30 transition-all duration-500 ease-out overflow-hidden">
          <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2">
            <Image src="/arrow.svg" alt="" className='w-12 h-12 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20'/>
          </div>
          <span className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold tracking-widest text-black translate-y-4 xs:translate-y-6 sm:translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 whitespace-nowrap">
            BOOK NOW
          </span>
        </button>
      </div>
    </div>
  );
};

export default WeddingHero;