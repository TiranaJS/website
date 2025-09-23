'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollScale, useScrollRotation } from '@/hooks/useScrollAnimation';

const AnimatedHero: React.FC = () => {
  // Add zoom in animation for the main logo
  const logoScale = useScrollScale(0.005, 1.3); // Start at 1.3x scale, zoom in much more dramatically as user scrolls
  const logoRotation = useScrollRotation(-0.1, 0); // Subtle anti-clockwise rotation while zooming

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background logo for small screens */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center pt-32 lg:hidden"
        style={{ 
          transform: `${logoScale.transform} ${logoRotation.transform} translateX(0px) translateY(200px)`,
          willChange: 'transform'
        }}
      >
        <div className="w-[22rem] h-[18rem] sm:w-[26rem] sm:h-[22rem] opacity-25">
          <Image 
            src="/assets/svgs/tiranajs.png" 
            alt="TiranaJS Logo Background"
            width={3580}
            height={3311}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-start pt-32 lg:block">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">
          {/* Metadata Section */}
          <div 
            className="flex-1 text-center lg:text-left space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-primary leading-tight">
                Connect. Learn. Code.{' '}
                <span className="text-gradient">Together.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-dark-secondary leading-relaxed">
                Join Tirana&apos;s most vibrant JavaScript community. Where developers come together 
                to share knowledge, build connections, and shape the future of web development.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/events" className="btn-primary text-lg px-8 py-4">
                Join Our Next Event
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>

          {/* TiranaJS Logo Section */}
          <div 
            className="hidden lg:block flex-shrink-0 relative z-50"
            style={{ 
              transform: `${logoScale.transform} ${logoRotation.transform} translateX(0px) translateY(0px)`,
              willChange: 'transform'
            }}
          >
            <div className="w-[30rem] h-[25rem] lg:w-[35rem] lg:h-[30rem] relative">
              <Image 
                src="/assets/svgs/tiranajs.png" 
                alt="TiranaJS Logo"
                width={3580}
                height={3311}
                className="w-full h-full object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce text-dark-secondary">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;


