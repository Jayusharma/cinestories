"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  
  // Touch handling refs
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "Sanchez",
      subtitle: "2025\nWedding Photography",
      imageSrc: "/h1.jpg",
      slug: "sanchez-brand-identity"
    },
    {
      id: 2,
      title: "Martinez",
      subtitle: "2024\nEngagement Session",
      imageSrc: "/h2.jpg",
      slug: "martinez-engagement-session"
    },
    {
      id: 3,
      title: "Rodriguez",
      subtitle: "2024\nCouple Photoshoot",
      imageSrc: "/h3.jpg",
      slug: "rodriguez-couple-photoshoot"
    },
    {
      id: 4,
      title: "Johnson",
      subtitle: "2023\nPre-Wedding",
      imageSrc: "/h4.jpg",
      slug: "johnson-pre-wedding"
    },
    {
      id: 5,
      title: "Williams",
      subtitle: "2023\nMaternity Session",
      imageSrc: "/h5.jpg",
      slug: "williams-maternity-session"
    },
  ];

  // Prevent scrolling on mobile
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (e.touches.length > 1) return; // Allow multi-touch gestures
      e.preventDefault();
    };

    const preventResize = () => {
      // Force viewport height calculation
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial viewport height
    preventResize();

    // Update on resize/orientation change
    window.addEventListener('resize', preventResize);
    window.addEventListener('orientationchange', preventResize);

    // Prevent default touch behavior on the container
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchmove', preventDefault, { passive: false });
    }

    return () => {
      window.removeEventListener('resize', preventResize);
      window.removeEventListener('orientationchange', preventResize);
      if (container) {
        container.removeEventListener('touchmove', preventDefault);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isTransitioning) return;
    
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Minimum swipe distance
    const minSwipeDistance = 50;
    
    // Check if it's more of a horizontal swipe than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swiped left - go to next slide
        nextSlide();
      } else {
        // Swiped right - go to previous slide
        prevSlide();
      }
    }
  };

  const handleExplore = () => {
    const currentProject = slides[currentSlide];
    router.push(`/wedding-films/${currentProject.slug}`);
  };

  return (
    <div className="w-full overflow-hidden relative" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Gallery Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100' 
                : index < currentSlide 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.imageSrc}
                alt={`${slide.title} - ${slide.subtitle.replace('\n', ' ')}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Text Content */}
            <div className="absolute left-10 md:left-[50%] top-[40%] z-30">
              <div className={`transition-all duration-1000 delay-300 ${
                index === currentSlide 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                <h1 className="text-4xl sm:text-6xl md:text-[150px] font-medium font-dream text-white mb-4 leading-none tracking-wide drop-shadow-2xl">
                  {slide.title}
                </h1>
                <div className="text-white text-base sm:text-lg md:text-xl opacity-90 whitespace-pre-line drop-shadow-lg">
                  {slide.subtitle}
                </div>
                
                {/* Explore Button */}
                <button
                  onClick={handleExplore}
                  className={`group absolute left-0 md:left-[40%] top-[15vh] sm:top-[23vh] px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-white border-opacity-40 hover:border-opacity-80 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 hover:bg-white/20 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {/* Text */}
                    <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-white group-hover:text-white transition-colors duration-300">
                      Explore
                    </span>
                
                    {/* Line */}
                    <div className="w-6 sm:w-8 h-[1px] bg-white transition-all duration-300 group-hover:w-8 sm:group-hover:w-10"></div>
                
                    {/* Icon */}
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4 text-white group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Left Navigation - Numbered Buttons (Desktop Only) */}
      <div className="hidden md:flex absolute bottom-[5vh] left-[5vw] z-40 space-x-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`text-white transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed drop-shadow-lg ${
              index === currentSlide 
                ? 'opacity-100 font-bold text-xl' 
                : 'opacity-50 hover:opacity-75'
            }`}
          >
            {String(index + 1).padStart(2, '0')}.
          </button>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      

      {/* Bottom Right Navigation - Arrow Controls */}
      <div className="absolute bottom-6 md:bottom-[5vh] left-2 md:left-[50vw] z-40 flex items-center space-x-4 text-white">
        <div className="flex items-center space-x-[30vw] md:space-x-5">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-300 drop-shadow-lg ${
              isTransitioning
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:opacity-100 hover:scale-110 cursor-pointer'
            }`}
          >
            <span className="text-lg">←</span>
          </button>
          <span className="text-sm sm:text-lg font-bold tracking-widest drop-shadow-lg">Navigate</span>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-300 drop-shadow-lg ${
              isTransitioning
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:opacity-100 hover:scale-110 cursor-pointer'
            }`}
          >
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Scroll/Swipe Hint */}
      <div className="hidden sm:block md:block absolute bottom-[5vh] right-4 sm:right-10 z-40 text-white drop-shadow-lg">
        <span className="text-sm sm:text-base">
          <span className="hidden md:inline">Scroll or Click</span>
          <span className="md:hidden">Swipe or Tap</span>
        </span>
      </div>
    </div>
  );
};

export default page;