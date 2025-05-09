"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LenisContextProvider } from "@/hooks/useLenis";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Create a function to handle the animation frame updates
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the requestAnimationFrame loop
    requestAnimationFrame(raf);

    // Store the instance
    setLenis(lenisInstance);

    // Set up scroll restoration on navigation
    const handleRouteChangeStart = () => {
      if (lenisInstance) {
        const currentScroll = lenisInstance.scroll;
        sessionStorage.setItem('scrollPosition', currentScroll.toString());
      }
    };

    // For a Next.js app, you would typically use router events here
    // This is a simplified version that will work for most cases
    window.addEventListener('beforeunload', handleRouteChangeStart);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      // Clean up the Lenis instance when the component unmounts
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContextProvider lenis={lenis}>
      {children}
    </LenisContextProvider>
  );
}
