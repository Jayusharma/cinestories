"use client"
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
// @ts-ignore - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const projects = [
  {
    image: "/image1.webp",
    title: "Dhruv & Pippa",
    subtitle: "What began with a spontaneous airport pickup unfolded into a love both grounding and electric. A story of timing, trust, and choosing each other - over and over ... ",
    date: "410K+ VIEWS",
    src:"/couple-shoot/saba-usman-dubai-nikah"
  },
  {
    image: "/image2.webp",
    title: "Indu & Sahil",
    subtitle: "What began with a spontaneous airport pickup unfolded into a love both grounding and electric. A story of timing, trust, and choosing each other - over and over ...",
    date: "520K+ VIEWS",
    src:"/couple-shoot/saba-usman-dubai-nikah"
  },
  {
    image: "/img4.webp",
    title: "Maitri & Aneesh",
    subtitle: "What began with a spontaneous airport pickup unfolded into a love both grounding and electric. A story of timing, trust, and choosing each other - over and over ...",
    date: "380K+ VIEWS",
    src:"/couple-shoot/saba-usman-dubai-nikah"
  },
  {
    image: "/img5.webp",
    title: "Arya & Vaibhav",
    subtitle: "What began with a spontaneous airport pickup unfolded into a love both grounding and electric. A story of timing, trust, and choosing each other - over and over ...",
    date: "650K+ VIEWS",
    src:"/couple-shoot/saba-usman-dubai-nikah"
  },
  {
    image: "/img7.webp",
    title: "Maya & Dev",
    subtitle: "What began with a spontaneous airport pickup unfolded into a love both grounding and electric. A story of timing, trust, and choosing each other - over and over ...",
    date: "290K+ VIEWS",
    src:"/couple-shoot/saba-usman-dubai-nikah"
  }
];

const Stories = () => {
  const splideRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Save scroll position before navigation
    const handleBeforeUnload = () => {
      if (containerRef.current) {
        sessionStorage.setItem('storiesScrollPosition', window.scrollY.toString());
        sessionStorage.setItem('storiesSlideIndex', currentSlide.toString());
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentSlide]);

  // Restore scroll position and slide position on component mount
  useEffect(() => {
    if (isClient && containerRef.current) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const savedScrollPosition = sessionStorage.getItem('storiesScrollPosition');
        const savedSlideIndex = sessionStorage.getItem('storiesSlideIndex');
        
        if (savedScrollPosition) {
          window.scrollTo({
            top: parseInt(savedScrollPosition),
            behavior: 'instant'
          });
          // Clean up after restoring
          sessionStorage.removeItem('storiesScrollPosition');
        }
        
        if (savedSlideIndex && splideRef.current && splideRef.current.splide) {
          const slideIndex = parseInt(savedSlideIndex);
          splideRef.current.splide.go(slideIndex);
          setCurrentSlide(slideIndex);
          // Clean up after restoring
          sessionStorage.removeItem('storiesSlideIndex');
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isClient]);

  // Track current slide index
  useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      const splide = splideRef.current.splide;
      
      const handleSlideMove = (index: number) => {
        setCurrentSlide(index);
      };
      
      splide.on('moved', handleSlideMove);
      
      return () => {
        splide.off('moved', handleSlideMove);
      };
    }
  }, [isClient]);

  const handleWatchFilm = (src: string) => {
    // Save current state before navigation
    if (containerRef.current) {
      sessionStorage.setItem('storiesScrollPosition', window.scrollY.toString());
      sessionStorage.setItem('storiesSlideIndex', currentSlide.toString());
    }
    
    router.push(src);
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
    perPage: isMobile ? 1 : 3.5,
    perMove: 1,
    gap: isMobile ? 0 : '5rem',
    padding: isMobile ? 0 : '1rem',
    arrows: false,
    pagination: false,
    wheel: false,
    wheelSleep: 0,
    drag: true,
    snap: true,
    speed: 600,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    autoWidth: false,
    focus: 'center',
    trimSpace: false,
    start: currentSlide, // Start from saved position
    breakpoints: {
      1200: {
        perPage: 3.2,
        gap: '0.75rem',
        padding: '1.5rem'
      },
      1024: {
        perPage: 2.8,
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
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-[#ECE4DA]">
      {/* Triangle SVG Background */}
      <div className="relative" style={{ minHeight: isMobile ? '100vh' : '120vh' }}>
        {/* Content Overlay */}
        <div className="absolute inset-0">
          {/* Header */}
          <div className="text-center pt-8 md:pt-16 pb-4 md:pb-8 px-4 mb-4 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-stone-700 font-dream mb-3 md:mb-6 tracking-wide leading-tight" 
                style={{ fontFamily: 'serif' }}>
              Breathtaking Films
            </h1>
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-black/60"></div>
              <div className="w-6 md:w-8 h-0.5 bg-black mx-2"></div>
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-black/60"></div>
            </div>
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
                          className="relative group cursor-pointer bg-[#F6F3EC] overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2"
                          style={{ 
                            width: isMobile ? 'min(340px, 94vw)' : 'clamp(350px, 30vw, 420px)',
                            height: isMobile ? 'min(90vh, 520px)' : 'clamp(500px, 34vh, 500px)'
                          }}
                        >
                          <div className="relative w-full h-full grid grid-rows-2">
                            <div className='relative p-3'>
                              <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                draggable={false}
                                sizes="(max-width: 768px) 94vw, 420px"
                              />
                            </div>
                            <div>
                              <div className='px-3 py-6'>
                                <h1 className='text-xl md:text-2xl font-bold text-stone-800 font-serif mb-4'>{project.title}</h1>
                                <h1 className='text-md md:text-lg font-light text-stone-600 font-serif mb-2'>{project.subtitle}</h1>
                                <button onClick={() => handleWatchFilm(project.src)}>
                                  <h1 className='text-stone-500 underline underline-offset-2 decoration-stone-400'>Read more</h1>
                                </button>
                              </div>
                            </div>
                          </div>
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
                <div className="flex justify-center mt-8 sm:mt-4 gap-3 sm:gap-4">
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