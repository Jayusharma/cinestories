"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use Lenis instead of window.scrollTo
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}