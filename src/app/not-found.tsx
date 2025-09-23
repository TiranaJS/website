'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-hero">

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number with Animation */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-gradient animate-pulse">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-pink mx-auto rounded-full mt-4"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary">
            Oops! Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed">
            Looks like this page took a wrong turn in the JavaScript maze. 
            Don&apos;t worry, even the best developers encounter 404s!
          </p>
        </div>

        {/* TiranaJS Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative animate-bounce">
            <Image 
              src="/assets/svgs/tiranajs.png"
              alt="TiranaJS Logo"
              width={3580}
              height={3311}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/" 
            className="btn-primary text-lg px-8 py-4 group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </span>
          </Link>
          
          <Link 
            href="/events" 
            className="btn-secondary text-lg px-8 py-4 group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Events
            </span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="space-y-6">
          <p className="text-dark-secondary text-sm sm:text-base">
            Maybe you were looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/about" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 hover:underline"
            >
              About Us
            </Link>
            <span className="text-primary-300">•</span>
            <Link 
              href="/contact" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
            <span className="text-primary-300">•</span>
            <Link 
              href="/events" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 hover:underline"
            >
              Events
            </Link>
          </div>
        </div>

        {/* Fun Developer Quote */}
        <div className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary-50/50 max-w-2xl mx-auto">
          <blockquote className="text-dark-secondary italic text-sm sm:text-base">
            &quot;The best error message is the one that never shows up.&quot;
          </blockquote>
          <cite className="text-primary-600 text-xs sm:text-sm mt-2 block">
            — Every Developer Ever
          </cite>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-accent-pink rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-accent-purple rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-accent-pink rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default NotFoundPage;
