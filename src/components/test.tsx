"use client"
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


// Define Splide types
interface SplideInstance {
  go(destination: string | number): void;
  on(event: string, callback: (index: number) => void): void;
  off(event: string, callback: (index: number) => void): void;
}

interface SplideRef {
  splide?: SplideInstance;
}

const projects = [
  {
    image: "/h1.jpg",
    title: "Sanchez & Maria",
    subtitle: "A cinestories Film",
    badge: "410K+ VIEWS",
    src : "/wedding-films/sanchez-brand-identity"
  },
  {
     image: "/h2.jpg",
    title: "Martinez Couple",
    subtitle: "A cinestories Film",
    badge: "520K+ VIEWS",
     src : "/wedding-films/sanchez-brand-identity"
  },
  {
     image: "/h3.jpg",
    title: "Rodriguez",
    subtitle: "A cinestories Film",
    badge: "380K+ VIEWS",
     src : "/wedding-films/sanchez-brand-identity"
  },
  {
     image: "/h4.jpg",
    title: "Johnson",
    subtitle: "A cinestories Film",
    badge: "650K+ VIEWS",
     src : "/wedding-films/sanchez-brand-identity"
  },
  {
     image: "/h5.jpg",
    title: "Williams",
    subtitle: "A cinestories Film",
    badge: "290K+ VIEWS",
    src : "/wedding-films/sanchez-brand-identity"
  }
];

const Stories = () => {
  const splideRef = useRef<SplideRef | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWatchFilm = (src: string ) => {
    router.push(src);
    
    // Add your watch film logic here
  };

  const goToNext = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('+1');
    }
  };

  const goToPrev = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('-1');
    }
  };

  // Splide options
  const splideOptions = {
    type: 'loop',
    perPage: isMobile ? 1 : 3.5, // Show 2.5 cards on desktop to see partial cards
    perMove: 1,
    gap: isMobile ? 0 : '0.75rem', // Reduced gap from 1.5rem to 0.75rem
    padding: isMobile ? 0 : '1rem', // Reduced padding to show more cards
    arrows: false,
    pagination: false,
    wheel: false,
    wheelSleep: 0,
    drag: true,
    snap: true,
    speed: 600,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    autoWidth: false,
    focus: isMobile ? 'center' : 0,
    trimSpace: false,
    breakpoints: {
      1200: {
        perPage: 3.2, // Show more cards on larger screens
        gap: '0.75rem',
        padding: '1.5rem'
      },
      1024: {
        perPage: 2.8, // Show 2.8 cards on medium large screens
        gap: '0.75rem',
        padding: '1rem'
      },
      768: {
        perPage: 1,
        gap: 0,
        padding: 0,
        focus: 'center'
      }
    }
  };

  // Prevent hydration issues by only rendering after client mount
  if (!isClient) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-[#F6F3EC]">
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F6F3EC]">
      {/* Triangle SVG Background */}
      <div className="relative" style={{ minHeight: isMobile ? '110vh' : '100vh' }}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 750"
          preserveAspectRatio="xMidYMid slice"
          style={{ minHeight: isMobile ? '100vh' : '100vh' }}
        >
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5a0" />
              <stop offset="30%" stopColor="#b8a692" />
              <stop offset="70%" stopColor="#a39585" />
              <stop offset="100%" stopColor="#8f7f6b" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,50 L600,0 L1200,50 L1200,800 L0,800 Z"
            fill="url(#triangleGradient)"
          />
        </svg>

        {/* Content Overlay */}
        <div className="absolute inset-0">
          {/* Header */}
          <div className="text-center pt-8 md:pt-16 pb-4 md:pb-8 px-4 mb-4 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-3 md:mb-6 tracking-wide leading-tight" 
                style={{ fontFamily: 'serif' }}>
              Breathtaking Films
            </h1>
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="w-6 md:w-8 h-0.5 bg-white mx-2"></div>
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            <p className="text-white/80 text-base md:text-lg lg:text-xl font-light tracking-wider">
              Capturing Love Stories in Cinematic Excellence
            </p>
          </div>

          {/* Gallery Container */}
          <div className="relative px-4">
            <div className="relative">
              <Splide options={splideOptions} ref={splideRef}>
                {projects.map((project, index) => (
                  <SplideSlide key={index}>
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Card */}
                        <div 
                          className="relative group cursor-pointer bg-black overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 rounded-lg"
                          style={{ 
                            width: isMobile ? 'min(320px, 90vw)' : 'clamp(320px, 28vw, 380px)',
                            height: isMobile ? 'min(85vh, 480px)' : 'clamp(480px, 32vh, 480px)'
                          }}
                        >
                          <div className="relative w-full h-full">
                            <Image 
                              src={project.image} 
                              alt={project.title}
                              fill
                              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                              draggable={false}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            
                            {/* Badge */}
                            {project.badge && (
                              <div className={`absolute top-${isMobile ? '4' : '6'} right-${isMobile ? '4' : '6'} bg-white/90 rounded-full px-${isMobile ? '3' : '4'} py-${isMobile ? '1' : '2'}`}>
                                <div className={`flex items-center gap-${isMobile ? '1' : '2'} text-black text-${isMobile ? 'xs' : 'sm'} font-medium`}>
                                  <Eye className={`w-${isMobile ? '3' : '4'} h-${isMobile ? '3' : '4'}`} />
                                  {project.badge}
                                </div>
                              </div>
                            )}
                            
                            {/* Content */}
                            <div className={`absolute bottom-0 left-0 right-0 p-${isMobile ? '3 sm:p-4' : '6'} text-white`}>
                              <p className={`text-${isMobile ? 'xs sm:text-sm' : 'sm'} text-white/80 mb-${isMobile ? '1' : '2'} tracking-${isMobile ? 'wide' : 'wider'}`}>
                                {project.subtitle}
                              </p>
                              <h3 className={`text-${isMobile ? 'lg sm:text-xl' : '2xl'} font-light tracking-wide`} style={{ fontFamily: 'serif' }}>
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Watch Film Button */}
                        <div className={`mt-${isMobile ? '3 sm:mt-4' : '6'} flex justify-center`}>
                          <button
                            onClick={() => handleWatchFilm(project.src)}
                            className={`  ${!isMobile ? 'backdrop-blur-md' : ''} text-white bg-[#36302A] px-6 ${isMobile ? 'sm:px-8' : ''} py-${isMobile ? '2.5 sm:py-3' : '3'} rounded-full font-medium tracking-wide shadow-${isMobile ? 'lg' : 'xl'} hover:bg-black ${!isMobile ? 'hover:scale-105' : ''} transition-all duration-300 text-${isMobile ? 'sm sm:text-base' : 'base'}`}
                          >
                            Watch Film
                          </button>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>

              {/* Navigation Buttons */}
              {!isMobile ? (
                <>
                  {/* Desktop Navigation Buttons */}
                  <button 
                    onClick={goToPrev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-500 shadow-2xl"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                  </button>

                  <button 
                    onClick={goToNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-500 shadow-2xl"
                  >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                  </button>
                </>
              ) : (
                /* Mobile Navigation Buttons */
                <div className="flex justify-center mt-3 sm:mt-4 gap-3 sm:gap-4">
                  <button
                    onClick={goToPrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
        
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Custom Splide styles */
        .splide__track {
          overflow: visible;
        }
        
        .splide__slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Disable wheel scrolling */
        .splide__track {
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
};

export default Stories;