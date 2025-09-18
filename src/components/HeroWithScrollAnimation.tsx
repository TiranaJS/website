"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Create a client-only animated version
const AnimatedHero = dynamic(() => import("./AnimatedHero"), {
  ssr: false,
  loading: () => <StaticHero />,
});

// Static fallback component
const StaticHero: React.FC = () => {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Static content for SSR */}
          <div className="flex-1 text-center lg:text-left space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-primary leading-tight">
                Connect. Learn. Code.{" "}
                <span className="text-gradient">Together.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-dark-secondary leading-relaxed">
                Join Tirana&apos;s most vibrant JavaScript community. Where
                developers come together to share knowledge, build connections,
                and shape the future of web development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/events" className="btn-primary text-lg px-8 py-4">
                Join Our Next Meetup
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 relative z-50" style={{ transform: 'scale(1.25)' }}>
            <div className="w-[30rem] h-[25rem] lg:w-[35rem] lg:h-[30rem] relative">
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

        {/* Scroll Indicator */}
        <div className="pt-16 text-center">
          <div className="animate-bounce text-dark-secondary">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <p className="text-sm mt-2">Scroll to see the magic ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroWithScrollAnimation: React.FC = () => {
  const [showAnimated, setShowAnimated] = useState(true);

  useEffect(() => {
    // Small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setShowAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Render the client-only animated hero to avoid SSR issues entirely
  return <AnimatedHero />;
};

export default HeroWithScrollAnimation;
