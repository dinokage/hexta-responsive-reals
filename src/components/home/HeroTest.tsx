"use client";
import { ShinyText } from "@/components/magicui/ShinyText";
import Aurora from "@/components/ui/Aurora";
import { motion } from "motion/react";
import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Cabinet Grotesk for headings and accent text
const cabinetGrotesk = localFont({
  src: [
    {
      path: '../../app/fonts/CabinetGrotesk-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../app/fonts/CabinetGrotesk-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../app/fonts/CabinetGrotesk-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cabinet-grotesk',
});

// Plus Jakarta Sans for body text
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta-sans',
});

export function HeroSectionOne() {
  // Note: In a real implementation, you would typically add these font variables 
  // to your root layout.js instead of component level
  return (
    <div className={`relative w-full min-h-screen ${cabinetGrotesk.variable} ${jakartaSans.variable}`}>
      {/* Position the Aurora absolutely with a fixed height from the top */}
      <div className="absolute inset-x-0 top-0 h-full z-0 overflow-hidden">
        <Aurora 
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} 
          blend={1.0} 
          amplitude={1.0} 
          speed={0.5}
        />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center min-h-screen">
        <div className="px-4">
          {/* Animate ShinyText with a gentle fade-in and scale effect after text animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.2, // Start after the text animation (which has 0.8 delay + ~0.4s for animation)
              ease: "easeInOut"
            }}
          >
            <ShinyText />
          </motion.div>
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300 font-cabinet-grotesk">
            {"Launch your website in hours, not days"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 font-jakarta-sans"
          >
            With AI, you can launch your website in hours, not days. Try our best
            in class, state of the art, cutting edge AI tools to get your website
            up.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-cabinet-grotesk">
              Explore Now
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 font-cabinet-grotesk">
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}