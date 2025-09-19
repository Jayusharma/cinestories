interface Lenis {
  scrollTo: (target: number | string) => void;
  // add other methods or properties you use
}

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export {};
