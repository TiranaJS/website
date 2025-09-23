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

    // Initial setup - hide elements
    gsap.set([logoTextRef.current, logoEmblemRef.current, logoImageRef.current], {
      opacity: 0
    });
    gsap.set(logoTextRef.current, { x: 40, scale: 0.8 });
    gsap.set(logoEmblemRef.current, { scale: 0.8 });

    // Animation sequence - both logos appear together
    tl.to(logoImageRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2
    })
    .to(logoEmblemRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'easeOut'
    }, 0.2)
    .to(logoTextRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.0,
      ease: 'easeOut'
    }, 0.4)
    .to(logoEmblemRef.current, {
      scale: 1.05,
      duration: 1.2,
      ease: 'easeInOut',
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.3
    }, 1.0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="relative w-full max-w-3xl h-40 flex items-center justify-center px-6" aria-label="Loading TiranaJS" role="status">
        <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-8">
          {/* Stage 2 target position (left): Full logo with text */}
          <div
            ref={logoTextRef}
            className="text-logo-primary"
          >
            <div className="scale-95 md:scale-100">
              <Logo size="lg" textSize="lg" showText={true} />
            </div>
          </div>

          {/* Stage 1: TiranaJS emblem (right) using original glossy SVG with subtle pulse */}
          <div
            ref={logoEmblemRef}
            className="h-20 sm:h-24 md:h-28 w-auto"
            style={{ willChange: 'transform' }}
          >
            <img
              ref={logoImageRef}
              src="/assets/svgs/tiranajs.svg"
              alt="TiranaJS emblem"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;


