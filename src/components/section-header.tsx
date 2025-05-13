import React from 'react';

interface SectionHeaderProps {
  title: string;
  slogan: string;
  isWhite?: boolean;
}

export default function SectionHeader({ title, slogan, isWhite = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p
        className={`
          text-sm md:text-base font-medium leading-relaxed mb-2 uppercase tracking-wider
          ${isWhite 
            ? 'text-black dark:text-white opacity-70' 
            : 'text-blue-600 dark:text-blue-400'
          }
        `}
      >
        {slogan}
      </p>
      <h2
        className={`
          text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
          ${isWhite 
            ? 'text-black dark:text-white' 
            : 'text-gray-900 dark:text-black dark:text-white'
          }
        `}
      >
        {title}
      </h2>
    </div>
  );
}