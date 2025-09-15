'use client';

import React from 'react';
import FloatingClouds from '@/components/FloatingClouds';
import EnhancedFloatingClouds from '@/components/EnhancedFloatingClouds';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ScrollDemoPage() {
  const { scrollY, scrollProgress, scrollDirection } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Scroll-based animated background */}
      <div className="fixed inset-0 z-0">
        <FloatingClouds />
      </div>
      
      {/* Enhanced animations overlay */}
      <div className="fixed inset-0 z-0">
        <EnhancedFloatingClouds />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-dark-primary">
              Scroll Animation
              <span className="block text-gradient">Demo</span>
            </h1>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              Experience dynamic SVG animations that respond to your scroll position. 
              Watch the TiranaJS logos move with parallax effects, rotation, and opacity changes.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Scroll Position:</span>
                  <span className="text-primary-600">{Math.round(scrollY)}px</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Scroll Progress:</span>
                  <span className="text-primary-600">{Math.round(scrollProgress * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Direction:</span>
                  <span className="text-primary-600 capitalize">{scrollDirection}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Parallax Effects</h2>
              <p className="text-lg text-dark-secondary">
                Different SVG elements move at varying speeds as you scroll, creating a sense of depth. 
                Larger background elements move slower, while smaller foreground elements move faster.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Rotation Animation</h2>
              <p className="text-lg text-dark-secondary">
                SVG logos rotate subtly based on scroll position, with some rotating clockwise and others 
                counterclockwise for visual variety and organic movement.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Opacity Variation</h2>
              <p className="text-lg text-dark-secondary">
                Elements fade in and out dynamically as you scroll, creating a breathing effect that 
                adds life to the background without being distracting.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Wave Motion</h2>
              <p className="text-lg text-dark-secondary">
                Some elements follow wave patterns, creating smooth horizontal movement that mimics 
                natural floating motion in the digital space.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Performance Optimized</h2>
              <p className="text-lg text-dark-secondary">
                All animations use requestAnimationFrame and throttling to ensure smooth performance 
                across different devices and screen sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark-primary mb-6">
              Scroll Back to the Top
            </h2>
            <p className="text-lg text-dark-secondary">
              Notice how the animations reverse as you scroll up, creating a seamless 
              bidirectional experience that feels natural and responsive.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
