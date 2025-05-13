"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/hooks/useLenis";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Function to update button visibility
    const updateScrollPosition = ({ scroll }: { scroll: number }) => {
      // Show button when scrolled down more than 500px
      setIsVisible(scroll > 500);
    };

    // Add scroll event listener
    lenis.on("scroll", updateScrollPosition);

    return () => {
      // Clean up event listener
      lenis.off("scroll", updateScrollPosition);
    };
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-100 flex h-10 w-10 border-b items-center justify-center rounded-full bg-primary dark:text-white text-black shadow-lg transition-transform hover:bg-primary/90 hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
