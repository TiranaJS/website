'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedHero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const logoScale = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 3, 10]);
  const logoX = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, -200, -600]);
  const logoY = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, -100, -300]);

  const firstSvgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const secondSvgOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.5, 1]);
  const metadataOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
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
            className="flex-shrink-0 relative z-50"
            style={{ scale: logoScale, x: logoX, y: logoY }}
          >
            <div className="w-96 h-84 lg:w-[28rem] lg:h-96 relative">
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

              {/* Second SVG - Morphed TiranaJS Shape */}
              <motion.div className="absolute inset-0" style={{ opacity: secondSvgOpacity }}>
                <svg 
                  viewBox="0 0 3580 3311" 
                  className="w-full h-full"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <motion.path 
                    initial={{
                      d: "M3.41868 523.466C-45.5798 194.998 443.415 -19.0218 746.346 1.33621C1105.71 25.4864 1299.43 137.919 1484.41 245.282C1673 354.734 1852.5 458.917 2189.18 458.917C2434.02 458.917 2639.77 373.534 2821.64 298.063C3077.61 191.839 3286.26 105.251 3490.01 303.999C3692.83 501.837 3517.44 701.765 3312.76 935.064C3035.14 1251.52 2703.65 1629.38 3189.15 2146.7C4211.43 3235.96 1228.48 3904.28 1900.9 2568.95C2197.77 1979.41 1741.7 1177.56 993.033 992.523C647.383 907.092 56.4849 879.202 3.41868 523.466Z"
                    }}
                    animate={{
                      d: [
                        "M3.41868 523.466C-45.5798 194.998 443.415 -19.0218 746.346 1.33621C1105.71 25.4864 1299.43 137.919 1484.41 245.282C1673 354.734 1852.5 458.917 2189.18 458.917C2434.02 458.917 2639.77 373.534 2821.64 298.063C3077.61 191.839 3286.26 105.251 3490.01 303.999C3692.83 501.837 3517.44 701.765 3312.76 935.064C3035.14 1251.52 2703.65 1629.38 3189.15 2146.7C4211.43 3235.96 1228.48 3904.28 1900.9 2568.95C2197.77 1979.41 1741.7 1177.56 993.033 992.523C647.383 907.092 56.4849 879.202 3.41868 523.466Z",
                        "M1790 100C2200 100 2500 400 2800 800C3100 1200 3400 1600 3400 1655C3400 1700 3100 2000 2800 2300C2500 2600 2200 2900 1790 2900C1380 2900 1080 2600 780 2300C480 2000 180 1700 180 1655C180 1600 480 1200 780 800C1080 400 1380 100 1790 100Z",
                        "M1790 200C2400 200 3200 600 3200 1655C3200 2700 2400 3100 1790 3100C1180 3100 380 2700 380 1655C380 600 1180 200 1790 200Z",
                        "M3.41868 523.466C-45.5798 194.998 443.415 -19.0218 746.346 1.33621C1105.71 25.4864 1299.43 137.919 1484.41 245.282C1673 354.734 1852.5 458.917 2189.18 458.917C2434.02 458.917 2639.77 373.534 2821.64 298.063C3077.61 191.839 3286.26 105.251 3490.01 303.999C3692.83 501.837 3517.44 701.765 3312.76 935.064C3035.14 1251.52 2703.65 1629.38 3189.15 2146.7C4211.43 3235.96 1228.48 3904.28 1900.9 2568.95C2197.77 1979.41 1741.7 1177.56 993.033 992.523C647.383 907.092 56.4849 879.202 3.41868 523.466Z"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    fill="url(#morphGradient)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                  <defs>
                    <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#94A4F5" />
                      <stop offset="0.332622" stopColor="#EDB3F9" />
                    </linearGradient>
                  </defs>
                </svg>
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


