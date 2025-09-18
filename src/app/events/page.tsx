import React from 'react';
import FirstEvent from '@/components/FirstEvent';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary mb-6">
            Community Events
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Be part of our very first event and help shape TiranaJS.
          </p>
        </div>
      </section>

      {/* First Event */}
      <FirstEvent />
    </div>
  );
}
