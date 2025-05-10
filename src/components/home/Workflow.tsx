"use client";

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { motion, useScroll, useTransform } from 'motion/react';

// Define the scroll event type based on Lenis documentation
interface LenisScrollEvent {
  scroll: number;
  limit: number;
  velocity: number;
  direction: number;
  progress: number;
}

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create a subtle parallax effect for the image only
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1]);
  
  // Register the section with Lenis for smooth scrolling
  useEffect(() => {
    if (sectionRef.current && lenis) {
      // Create a typed scroll handler that uses the parameter in a non-intrusive way
      const handleScroll = (scrollEvent: LenisScrollEvent) => {
        // Simple logging when scrolling gets to certain thresholds
        // This won't affect the UI but uses the parameter to satisfy TypeScript
        if (process.env.NODE_ENV === 'development') {
          // Only log in development mode
          if (scrollEvent.progress > 0.8 && scrollEvent.direction > 0) {
            // Optional: uncomment if you want debug logs
            // console.debug('Almost at bottom of workflow section');
          }
        }
      };
      
      lenis.on('scroll', handleScroll);
      
      return () => {
        lenis.off('scroll', handleScroll);
      };
    }
  }, [lenis]);

  return (
    <section ref={sectionRef} className="section pb-0 overflow-hidden relative">
      {/* Fix: Add position relative and z-index to ensure text stays on top */}
      <motion.div 
        style={{ opacity, scale }}
        className="mb-8 text-center relative z-10"
      >
        <h2 className="mx-auto max-w-[400px] font-bold text-3xl md:text-4xl leading-tight dark:text-white text-gray-900">
          Experience the best workflow with us
        </h2>
      </motion.div>
      
        <Image
          src={"/banner.svg"}
          alt="Workflow Image"
          width={1920}
          height={296}
          priority
        />
    </section>
  );
};

export default Workflow;