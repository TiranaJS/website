'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedHero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const logoScale = useTransform(scrollYProgress, [0, 0.1, 0.3], [1.25, 3.75, 12.5]);
  const logoX = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, -200, -600]);
  const logoY = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, -100, -300]);

  const firstSvgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const secondSvgOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.5, 1]);
  const metadataOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background animated logo for small screens */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden"
        style={{ scale: logoScale, x: logoX, y: logoY }}
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
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Metadata Section */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8 relative z-10"
            style={{ opacity: metadataOpacity }}
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
                Join Our Next Meetup
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* TiranaJS Logo Section with Morphing Animation */}
          <motion.div 
            className="hidden lg:block flex-shrink-0 relative z-50"
            style={{ scale: logoScale, x: logoX, y: logoY }}
          >
            <div className="w-[30rem] h-[25rem] lg:w-[35rem] lg:h-[30rem] relative">
              {/* First SVG - TiranaJS Logo */}
              <motion.div className="absolute inset-0" style={{ opacity: firstSvgOpacity }}>
                <Image 
                  src="/assets/svgs/tiranajs.svg" 
                  alt="TiranaJS Logo"
                  width={3580}
                  height={3311}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 text-center">
          <div className="animate-bounce text-dark-secondary">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm mt-2">Scroll to see the magic ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;


