'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '@/components/Logo';

const FullScreenLoader: React.FC = () => {
  const logoTextRef = useRef<HTMLDivElement>(null);
  const logoEmblemRef = useRef<HTMLDivElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup - hide normal logo, show TiranaJS logo
    gsap.set(logoTextRef.current, { 
      opacity: 0,
      x: 0, // Start at center position
      scale: 0.8
    });
    gsap.set(logoImageRef.current, { 
      opacity: 1,
      scale: 1
    });

    // Animation sequence over 2 seconds
    tl
    // First: Show TiranaJS logo for 0.8 seconds
    .to(logoImageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'easeOut'
    })
    // Then: Normal logo comes out from center and moves left, TiranaJS logo moves right
    .to(logoTextRef.current, {
      opacity: 1,
      x: -60, // Move left so text appears under TiranaJS logo (more centered)
      scale: 1,
      duration: 1.0,
      ease: 'easeOut'
    }, 0.8) // Start after 0.8 seconds
    .to(logoImageRef.current, {
      x: 120, // Move TiranaJS logo much more to the right
      opacity: 1, // Keep fully visible
      scale: 1, // Keep original size, no zoom
      duration: 1.0,
      ease: 'easeOut'
    }, 0.8); // Start at the same time as normal logo

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="relative w-full max-w-6xl h-40 flex items-center justify-center px-4 sm:px-6" aria-label="Loading TiranaJS" role="status">
        {/* Normal logo - starts at center, moves left (behind TiranaJS) */}
        <div
          ref={logoTextRef}
          className="text-logo-primary absolute flex items-center justify-center z-10"
        >
          <div className="scale-90 sm:scale-95 md:scale-100">
            <Logo size="lg" textSize="lg" showText={true} />
          </div>
        </div>

        {/* TiranaJS logo - starts at center, moves right (on top) */}
        <div
          ref={logoEmblemRef}
          className="absolute h-24 sm:h-28 md:h-32 lg:h-36 w-auto flex items-center justify-center z-20"
          style={{ willChange: 'transform' }}
        >
          <img
            ref={logoImageRef}
            src="/assets/svgs/tiranajs.png"
            alt="TiranaJS emblem"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;


