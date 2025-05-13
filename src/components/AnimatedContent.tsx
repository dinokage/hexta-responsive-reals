'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, useAnimation, AnimatePresence } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Home, Search } from 'lucide-react'

// Simple search suggestions component
const SearchSuggestions = () => {
  const suggestions = [
    'Our Services', 'About Us', 'Recent Projects', 'Contact Information', 'Team Members'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg mt-2">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={suggestion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300">{suggestion}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AnimatedContent() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const mainAnimation = useAnimation()
  
  const errorQuotes = [
    "Every great website has a few hidden pages.",
    "Not all who wander are lost, but this page is.",
    "This page is taking a well-deserved vacation."
  ]

  useEffect(() => {
    mainAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    })

    // Cycling quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % errorQuotes.length)
    }, 4000)

    return () => clearInterval(quoteInterval)
  }, [mainAnimation, errorQuotes.length])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={mainAnimation}
      className="relative z-10 container mx-auto px-4 text-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Simple 404 without excessive effects */}
        <motion.div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-500 via-purple-600 to-indigo-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            404
          </h1>
        </motion.div>

        {/* Simplified quote rotation */}
        <motion.div className="mb-12 h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 font-light"
            >
              {errorQuotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Simplified search feature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 max-w-md mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for what you're looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearch(true)}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:border-primary dark:focus:border-primary-light outline-none transition-all duration-300 font-medium"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary dark:bg-primary-light text-black dark:text-white rounded-full hover:bg-primary/90 dark:hover:bg-primary-light/90 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          <AnimatePresence>
            {showSearch && searchQuery && (
              <SearchSuggestions />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Main error message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            The adventure ends here, but your journey with us doesn&apos;t have to.
          </p>
        </motion.div>

        {/* Simplified CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/">
            <Button 
              size="lg" 
              className="min-w-[200px] group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-black dark:text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Take Me Home
            </Button>
          </Link>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="min-w-[200px] group border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </motion.div>

        {/* Simple footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-gray-200/20 dark:border-gray-700/20"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Don&apos;t worry, even the best explorers get lost sometimes. Let&apos;s get you back on track.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}