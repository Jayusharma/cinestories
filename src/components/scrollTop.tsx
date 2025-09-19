"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Use the existing Lenis type from your global.d.ts
// No need to redeclare the global Window interface

export default function ScrollToTop() {
  const pathname = usePathname();
  
  useEffect(() => {
    if (window.lenis) {
      // Properly typed lenis instance
      const lenis = window.lenis;
      
      // Force immediate scroll to top - using single argument as expected by Lenis
      lenis.scrollTo(0);
      
      // Alternative approaches if above doesn't work:
      // You can uncomment these if needed:
      // lenis.scrollTo(0);
    }
  }, [pathname]);

  return null;
}