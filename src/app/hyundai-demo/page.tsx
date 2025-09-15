'use client';

import React, { useState } from 'react';
import HyundaiStyleAnimation from '@/components/HyundaiStyleAnimation';
import GSAPHyundaiAnimation from '@/components/GSAPHyundaiAnimation';

export default function HyundaiDemoPage() {
  const [activeAnimation, setActiveAnimation] = useState<'framer' | 'gsap'>('framer');

  return (
    <div className="min-h-[300vh] bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Animation Layer */}
      <div className="fixed inset-0 z-0">
        {activeAnimation === 'framer' ? (
          <HyundaiStyleAnimation />
        ) : (
          <GSAPHyundaiAnimation />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-primary mb-6">
              Hyundai-Style
              <span className="block text-gradient">SVG Animation</span>
            </h1>
            
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed">
              Experience the same dramatic scroll animation style as seen on{' '}
              <a 
                href="https://www.hyundai.com/worldwide/en/cars/azera-2023/highlights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 underline"
              >
                Hyundai's AZERA page
              </a>
              . Watch the TiranaJS logo scale up dramatically and disappear while smaller logos rotate around.
            </p>

            {/* Animation Selector */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveAnimation('framer')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeAnimation === 'framer'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Framer Motion
              </button>
              <button
                onClick={() => setActiveAnimation('gsap')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeAnimation === 'gsap'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                GSAP + ScrollTrigger
              </button>
            </div>

            <div className="text-sm text-dark-secondary">
              <p className="font-medium mb-2">Currently showing: {activeAnimation === 'framer' ? 'Framer Motion' : 'GSAP'} animation</p>
              <p>Scroll down to see the dramatic scaling and rotation effects!</p>
            </div>
          </div>
        </section>

        {/* Animation Description */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">🎯 Animation Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary-600">Main Logo Animation</h3>
                  <ul className="space-y-2 text-dark-secondary">
                    <li>• Starts at 2x, scales to 15x size</li>
                    <li>• Starts at 100°, rotates to 520° (1+ full spins!)</li>
                    <li>• Fades out dramatically</li>
                    <li>• Smooth scroll-triggered</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary-600">Background Elements</h3>
                  <ul className="space-y-2 text-dark-secondary">
                    <li>• Multiple rotating logos</li>
                    <li>• Independent movement paths</li>
                    <li>• Varying opacity changes</li>
                    <li>• Organic floating motion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">⚡ Library Comparison</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary-600">Framer Motion</h3>
                  <div className="space-y-2 text-dark-secondary">
                    <p className="font-medium text-green-600">✅ Pros:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Declarative API</li>
                      <li>• React-first design</li>
                      <li>• Built-in scroll hooks</li>
                      <li>• Easy to learn</li>
                    </ul>
                    <p className="font-medium text-orange-600 mt-3">⚠️ Cons:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Larger bundle size</li>
                      <li>• Less fine control</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary-600">GSAP + ScrollTrigger</h3>
                  <div className="space-y-2 text-dark-secondary">
                    <p className="font-medium text-green-600">✅ Pros:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Industry standard</li>
                      <li>• Maximum performance</li>
                      <li>• Fine-grained control</li>
                      <li>• Complex timelines</li>
                    </ul>
                    <p className="font-medium text-orange-600 mt-3">⚠️ Cons:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Steeper learning curve</li>
                      <li>• Imperative API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">🚀 How to Implement</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">1. Install Dependencies</h3>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <code className="text-sm">
                      npm install framer-motion gsap
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">2. Import Components</h3>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <code className="text-sm">
                      import HyundaiStyleAnimation from '@/components/HyundaiStyleAnimation'
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">3. Add to Your Page</h3>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <code className="text-sm">
                      {'<div className="fixed inset-0 z-0">'}
                      <br />
                      {'  <HyundaiStyleAnimation />'}
                      <br />
                      {'</div>'}
                    </code>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
                <p className="text-dark-secondary">
                  <strong>💡 Pro Tip:</strong> The animation is designed to work with long-scrolling pages. 
                  Make sure your page has enough height (like this demo with 300vh) to see the full effect!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-dark-primary mb-6">
                Ready to Implement?
              </h2>
              <p className="text-lg text-dark-secondary mb-6">
                Choose the animation library that best fits your project needs and start creating 
                stunning scroll-based animations like the ones you see on premium automotive websites.
              </p>
              <p className="text-sm text-dark-secondary">
                Scroll back to the top to see the reverse animation effect!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
