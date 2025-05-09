"use client";

import { createContext, useContext } from "react";
import Lenis from "lenis";

// Create a context to hold the Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Hook to use the Lenis instance throughout the app
export function useLenis() {
  const lenis = useContext(LenisContext);
  return lenis;
}

// Provider component that will wrap our app
interface LenisProviderProps {
  lenis: Lenis | null;
  children: React.ReactNode;
}

export function LenisContextProvider({ lenis, children }: LenisProviderProps) {
  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
