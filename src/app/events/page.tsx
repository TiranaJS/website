import React from 'react';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/utils/getEvents';
import { Event } from '@/types/event';

export default async function EventsPage() {
  let events: Event[] = [];
  let error = false;
  
  try {
    const eventData = await getEvents();
    events = eventData.events;
    
    // Sort events: upcoming first, then ongoing, then past
    events = [...events].sort((a, b) => {
      const statusOrder = { upcoming: 0, ongoing: 1, past: 2 };
      const statusDiff = statusOrder[a.status] - statusOrder[b.status];
      if (statusDiff !== 0) return statusDiff;
      
      // Within same status, sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (err) {
    console.error('Error fetching events:', err);
    error = true;
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary mb-6">
            Community Events
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            {events.length > 0 
              ? "Join us for exciting JavaScript events and help shape TiranaJS."
              : "Be part of our very first event and help shape TiranaJS."
            }
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error ? (
            <div className="text-center">
              <p className="text-dark-secondary">Unable to load events. Please try again later.</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center">
              <p className="text-dark-secondary text-lg">No events available at this time. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
