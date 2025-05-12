'use client'

import Aurora from '@/components/ui/Aurora'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface AuroraBackgroundProps {
  colorStops: string[]
  isDarkTheme: boolean
}

export default function AuroraBackground({ colorStops, isDarkTheme }: AuroraBackgroundProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use client-side theme if available, fallback to server-side
  const isClientDarkTheme = mounted ? resolvedTheme === 'dark' : isDarkTheme
  
  // Choose colors based on actual client theme
  const clientColorStops = isClientDarkTheme 
    ? ["#217496", "#3A29FF", "#6B46C1"] // Dark theme colors
    : ["#0066cc", "#1e40af", "#7c3aed"] // Light theme colors

  return (
    <div className="absolute inset-0 z-0">
      <Aurora 
        colorStops={mounted ? clientColorStops : colorStops}
        blend={0.2} 
        amplitude={0.5} 
        speed={0.2}
        darkTheme={isClientDarkTheme}
        brightness={isClientDarkTheme ? 1.0 : 1.2}
      />
    </div>
  )
}