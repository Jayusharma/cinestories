"use client";
import { useEffect, useRef, useState } from "react";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Start with null
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Safe check for window
    if (typeof window !== "undefined") {
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mobileQuery.matches);

      const handleResize = () => setIsMobile(mobileQuery.matches);
      mobileQuery.addEventListener("change", handleResize);

      return () => mobileQuery.removeEventListener("change", handleResize);
    }
  }, []);

  useEffect(() => {
    // Only add scroll listener when isMobile is determined and it's desktop
    if (isMobile === null || isMobile) return;

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const windowHeight = window.innerHeight;

        if (containerTop < windowHeight && containerTop > -containerHeight) {
          const scrollProgress =
            (windowHeight - containerTop) / (windowHeight + containerHeight);
          setScrollY(scrollProgress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]); // Keep dependency but handle null case

  // Dynamic parallax movement (only for desktop)
  const backgroundPositionY = isMobile !== false ? 50 : (scrollY * 200) + 20;

  return (
    <div
      ref={containerRef}
      className="h-[35vh] md:h-[50vh] w-[100vw] relative z-[-1] bg-amber-100 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('/ff.jpg')`,
        // Only use fixed attachment on desktop
        backgroundAttachment: isMobile !== false ? "scroll" : "fixed",
        backgroundPosition: `center ${backgroundPositionY}%`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="max-w-2xl text-white text-lg lg:text-3xl text-center font-love z-10 leading-12">
        I'm here to capture the once-in-a-lifetime
      </h1>
      <h1 className="max-w-2xl text-white text-lg lg:text-3xl text-center font-love z-10 leading-12">
        connection between you, but who says it can't be
      </h1>
      <h1 className="max-w-2xl text-white text-lg lg:text-3xl text-center font-love z-10 leading-12">
        a kick-ass experience, too?
      </h1>
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
  );
};

export default ParallaxSection;