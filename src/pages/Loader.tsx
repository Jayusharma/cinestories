"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Rive from "rive-react";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const riveContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if this is a reload or first visit
    const hasShownLoader = sessionStorage.getItem('loaderShown');
    
    if (hasShownLoader) {
      // Already shown loader in this session, hide immediately
      setShowLoader(false);
      if (onComplete) onComplete();
      return;
    }

    // First visit - show loader and run animation
    sessionStorage.setItem('loaderShown', 'true');

    // Initial setup for animation
    gsap.set(progressBarRef.current, { scaleX: 0 });
    gsap.set(overlayRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        setTimeout(() => {
          setShowLoader(false);
          if (onComplete) onComplete();
        }, 500);
      },
    });

    // Progress bar animation (during Rive animation)
    tl.to(progressBarRef.current, {
      scaleX: 1,
      duration: 2.6,
      ease: "power2.out",
    })
    // Fade overlay in
    .to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    }, "-=0.5")
    // Scale and fade Rive
    .to(riveContainerRef.current, {
      scale: 0.8,
      opacity: 0.3,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.3")
    // Curtain reveal with stagger
    .to(curtainRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 1.4,
      ease: "power4.inOut",
    })
    // Final fade
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.4");

  }, [onComplete]);

  // Don't render anything if loader shouldn't show
  if (!showLoader) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#F6F3EC] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8"
      style={{
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Main curtain */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-gradient-to-br from-[#F6F3EC] via-[#EDE8DC] to-[#E8E2D4] z-10"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      />

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-lg mx-auto">
        {/* Rive Animation */}
        <div
          ref={riveContainerRef}
          className="relative mb-4 sm:mb-6"
        >
          <Rive
            src="/final.riv"
            className="w-[280px] h-[220px] xs:w-[320px] xs:h-[250px] sm:w-[380px] sm:h-[300px] md:w-[450px] md:h-[350px]"
          />
          
          {/* Subtle glow behind Rive */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-gradient-radial from-black/5 via-transparent to-transparent blur-3xl scale-150" />
          </div>
        </div>

        {/* Progress section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-sm sm:max-w-md px-4 sm:px-8">
          {/* Progress bar container */}
          <div className="w-full h-[1.5px] bg-black/10 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/30 origin-left"
            />
          </div>

          {/* Loading text */}
          <div className="text-center">
            <p className="text-black/60 text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2">
              Loading Experience
            </p>
          </div>
        </div>
      </div>

      {/* Overlay that fades in */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent z-5"
      />

      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply z-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Loader;