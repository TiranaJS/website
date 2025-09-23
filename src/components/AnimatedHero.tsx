'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedHero: React.FC = () => {
  const backgroundLogoRef = useRef<HTMLDivElement>(null);
  const firstSvgRef = useRef<HTMLDivElement>(null);
  const secondSvgRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Background logo animation
    if (backgroundLogoRef.current) {
      gsap.fromTo(backgroundLogoRef.current, 
        { scale: 1.25, x: 0, y: 0 },
        {
          scale: 12.5,
          x: -600,
          y: -300,
          ease: 'none',
          scrollTrigger: {
            trigger: backgroundLogoRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    }

    // First SVG opacity animation
    if (firstSvgRef.current) {
      gsap.fromTo(firstSvgRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: firstSvgRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      );
    }

    // Second SVG opacity animation
    if (secondSvgRef.current) {
      gsap.fromTo(secondSvgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: secondSvgRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      );
    }

    // Metadata opacity animation
    if (metadataRef.current) {
      gsap.fromTo(metadataRef.current,
        { opacity: 1 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: metadataRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background animated logo for small screens */}
      <div
        ref={backgroundLogoRef}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden"
        style={{ transform: 'scale(1.25) translateX(0px) translateY(0px)' }}
      >
        <div className="w-[22rem] h-[18rem] sm:w-[26rem] sm:h-[22rem] opacity-25">
          <Image 
            src="/assets/svgs/tiranajs.svg" 
            alt="TiranaJS Logo Background"
            width={3580}
            height={3311}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Metadata Section */}
          <div 
            ref={metadataRef}
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

          {/* TiranaJS Logo Section with Morphing Animation */}
          <div 
            className="hidden lg:block flex-shrink-0 relative z-50"
            style={{ transform: 'scale(1.25) translateX(0px) translateY(0px)' }}
          >
            <div className="w-[30rem] h-[25rem] lg:w-[35rem] lg:h-[30rem] relative">
              {/* First SVG - TiranaJS Logo */}
              <div ref={firstSvgRef} className="absolute inset-0">
                <Image 
                  src="/assets/svgs/tiranajs.svg" 
                  alt="TiranaJS Logo"
                  width={3580}
                  height={3311}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 text-center">
          <div className="animate-bounce text-dark-secondary">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;


