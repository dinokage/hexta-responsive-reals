'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HextaLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or nothing during SSR/initial render
    return (
      <div className="h-14 w-32 relative">
        {/* You can use a skeleton loader here if you want */}
      </div>
    );
  }

  const logoSrc = resolvedTheme === 'dark' 
    ? '/images/logo-dark.svg' 
    : '/images/logo-light.svg';

  return (
    <div className="h-14 w-32 relative">
      <Image
        src={logoSrc}
        alt="HextaSphere Logo"
        fill
        className="object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );
}