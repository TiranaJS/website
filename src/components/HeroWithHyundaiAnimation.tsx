'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HyundaiStyleAnimation from './HyundaiStyleAnimation';

const HeroWithHyundaiAnimation: React.FC = () => {
  return (
    <section className="relative min-h-[200vh] flex items-center justify-center overflow-hidden">
      {/* Hyundai-Style Background Animation */}
      <HyundaiStyleAnimation />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          
          {/* Main Tagline */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-primary leading-tight">
              Connect. Learn. Code.{' '}
              <span className="text-gradient">Together.</span>
            </h2>
            <p className="text-xl sm:text-2xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              Join Tirana&apos;s most vibrant JavaScript community. Where developers come together 
              to share knowledge, build connections, and shape the future of web development.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/events" className="btn-primary text-lg px-8 py-4">
              Join Our Next Meetup
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
          
          {/* Community Status */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-dark-secondary">Active Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">24+</div>
                <div className="text-dark-secondary">Monthly Events</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-dark-secondary">Years Strong</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <div className="animate-bounce text-dark-secondary">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-sm mt-2">Scroll to see the magic ✨</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dark-primary mb-4">
            Experience Premium Animation
          </h3>
          <p className="text-dark-secondary">
            This animation style is inspired by premium automotive websites like Hyundai's AZERA page. 
            Keep scrolling to see the dramatic scaling and rotation effects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroWithHyundaiAnimation;
