"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(10, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // ADD THIS LINE - Make Lenis accessible globally
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value?: number) {
        if (arguments.length) {
          lenis.scrollTo(value!, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
      // ADD THIS LINE - Clean up global reference
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
}