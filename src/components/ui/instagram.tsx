'use client';

import { motion, useAnimation } from 'motion/react';
import type { Variants } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface InstagramIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface InstagramIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const rectVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const pathVariants = rectVariants;
const lineVariants = rectVariants;

const InstagramIcon = forwardRef<InstagramIconHandle, InstagramIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const rectControls = useAnimation();
    const pathControls = useAnimation();
    const lineControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          rectControls.start('animate');
          pathControls.start('animate');
          lineControls.start('animate');
        },
        stopAnimation: () => {
          rectControls.start('normal');
          pathControls.start('normal');
          lineControls.start('normal');
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          rectControls.start('animate');
          pathControls.start('animate');
          lineControls.start('animate');
        } else {
          onMouseEnter?.(e);
        }
      },
      [lineControls, onMouseEnter, pathControls, rectControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          rectControls.start('normal');
          pathControls.start('normal');
          lineControls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [rectControls, pathControls, lineControls, onMouseLeave]
    );

    return (
      <div
        className={cn(
          `cursor-pointer select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-center`,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#instaGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f58529" />
              <stop offset="30%" stopColor="#dd2a7b" />
              <stop offset="70%" stopColor="#8134af" />
              <stop offset="100%" stopColor="#515bd4" />
            </linearGradient>
          </defs>
          <motion.rect
            variants={rectVariants}
            initial="normal"
            animate={rectControls}
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
          />
          <motion.path
            variants={pathVariants}
            initial="normal"
            animate={pathControls}
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
          />
          <motion.line
            variants={lineVariants}
            initial="normal"
            animate={lineControls}
            x1="17.5"
            y1="6.5"
            x2="17.51"
            y2="6.5"
          />
        </svg>
      </div>
    );
  }
);

InstagramIcon.displayName = 'InstagramIcon';

export { InstagramIcon };
