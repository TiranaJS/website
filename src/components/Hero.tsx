import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import FloatingClouds from './FloatingClouds';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Background Clouds */}
      <FloatingClouds />
      
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
              <div className="text-center">
                <div className="text-2xl mb-3">🚀</div>
                <div className="text-lg font-semibold text-dark-primary mb-2">New Community Launching</div>
                <div className="text-dark-secondary">
                  Join us as we build Tirana's newest JavaScript community from the ground up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-400"
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
      </div>
    </section>
  );
};

export default Hero;
