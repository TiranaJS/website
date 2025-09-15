import React from 'react';
import Link from 'next/link';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'React Server Components Deep Dive',
      date: '2024-02-15',
      time: '18:30',
      location: 'Innovation Hub Tirana',
      speaker: 'Sarah Johnson',
      description: 'Explore the latest React Server Components and learn how to build faster, more efficient applications.',
      attendees: 45,
      maxAttendees: 60,
      tags: ['React', 'Next.js', 'Performance'],
    },
    {
      id: 2,
      title: 'TypeScript Best Practices Workshop',
      date: '2024-02-28',
      time: '19:00',
      location: 'TechSpace Tirana',
      speaker: 'Mark Rodriguez',
      description: 'Hands-on workshop covering advanced TypeScript patterns and best practices for large-scale applications.',
      attendees: 32,
      maxAttendees: 40,
      tags: ['TypeScript', 'Workshop', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Building Modern APIs with Node.js',
      date: '2024-03-12',
      time: '18:30',
      location: 'Digital Innovation Center',
      speaker: 'Alex Chen',
      description: 'Learn to build scalable, secure APIs using the latest Node.js features and industry standards.',
      attendees: 28,
      maxAttendees: 50,
      tags: ['Node.js', 'API', 'Backend'],
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-20 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed">
            Join us for exciting talks, workshops, and networking opportunities. 
            Don&apos;t miss out on the latest in JavaScript development!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.id} className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Event Header */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-sm text-primary-600 font-medium">
                    {formatDate(event.date)} • {event.time}
                  </div>
                  <div className="flex items-center text-sm text-dark-secondary">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-primary mb-2 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="text-sm text-primary-700 font-medium mb-3">
                  Speaker: {event.speaker}
                </div>
              </div>

              {/* Event Description */}
              <p className="text-dark-secondary text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Attendees and CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-primary-100">
                <div className="text-sm text-dark-secondary">
                  {event.attendees}/{event.maxAttendees} attending
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center">
          <Link href="/events" className="btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
