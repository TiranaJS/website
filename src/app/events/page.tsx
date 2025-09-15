import React from 'react';
import Link from 'next/link';
import FloatingClouds from '@/components/FloatingClouds';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'React Server Components Deep Dive',
      date: '2024-02-15',
      time: '18:30',
      location: 'Innovation Hub Tirana',
      address: 'Rruga "Ibrahim Rugova", Tirana',
      speaker: {
        name: 'Sarah Johnson',
        bio: 'Senior Frontend Developer at Meta, React Core Team contributor',
        image: '/api/placeholder/100/100',
      },
      description: 'Join us for an in-depth exploration of React Server Components and learn how to build faster, more efficient applications. We\'ll cover the fundamentals, best practices, and real-world implementation strategies.',
      agenda: [
        'Introduction to Server Components',
        'Client vs Server Components',
        'Data Fetching Patterns',
        'Performance Optimizations',
        'Q&A Session',
      ],
      attendees: 45,
      maxAttendees: 60,
      tags: ['React', 'Next.js', 'Performance', 'Server Components'],
      difficulty: 'Intermediate',
      duration: '2 hours',
    },
    {
      id: 2,
      title: 'TypeScript Best Practices Workshop',
      date: '2024-02-28',
      time: '19:00',
      location: 'TechSpace Tirana',
      address: 'Bulevardi "Dëshmorët e Kombit", Tirana',
      speaker: {
        name: 'Mark Rodriguez',
        bio: 'Staff Engineer at GitHub, TypeScript enthusiast and open source contributor',
        image: '/api/placeholder/100/100',
      },
      description: 'A hands-on workshop covering advanced TypeScript patterns and best practices for large-scale applications. Bring your laptop and get ready to code!',
      agenda: [
        'Advanced Type System Features',
        'Generic Constraints and Utilities',
        'Conditional Types in Practice',
        'Module Augmentation',
        'Hands-on Coding Session',
      ],
      attendees: 32,
      maxAttendees: 40,
      tags: ['TypeScript', 'Workshop', 'Best Practices', 'Advanced'],
      difficulty: 'Advanced',
      duration: '3 hours',
    },
    {
      id: 3,
      title: 'Building Modern APIs with Node.js',
      date: '2024-03-12',
      time: '18:30',
      location: 'Digital Innovation Center',
      address: 'Rruga "Pjeter Bogdani", Tirana',
      speaker: {
        name: 'Alex Chen',
        bio: 'Backend Architect at Stripe, Node.js core contributor',
        image: '/api/placeholder/100/100',
      },
      description: 'Learn to build scalable, secure APIs using the latest Node.js features and industry standards. We\'ll cover authentication, rate limiting, testing, and deployment strategies.',
      agenda: [
        'Modern Node.js Features',
        'API Design Principles',
        'Authentication & Security',
        'Testing Strategies',
        'Deployment Best Practices',
      ],
      attendees: 28,
      maxAttendees: 50,
      tags: ['Node.js', 'API', 'Backend', 'Security'],
      difficulty: 'Intermediate',
      duration: '2.5 hours',
    },
  ];

  const pastEvents = [
    {
      id: 101,
      title: 'React 18 Features Workshop',
      date: '2024-01-15',
      attendees: 42,
      speaker: 'Arben Krasniqi',
      recording: '/recordings/react-18-workshop',
      slides: '/slides/react-18-features.pdf',
    },
    {
      id: 102,
      title: 'JavaScript Performance Optimization',
      date: '2023-12-20',
      attendees: 38,
      speaker: 'Maria Gonzalez',
      recording: '/recordings/js-performance',
      slides: '/slides/js-performance.pdf',
    },
    {
      id: 103,
      title: 'Vue.js 3 Composition API Deep Dive',
      date: '2023-11-25',
      attendees: 35,
      speaker: 'David Kim',
      recording: '/recordings/vue3-composition',
      slides: '/slides/vue3-composition.pdf',
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingClouds />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary mb-6">
            Community Events
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Join us for exciting talks, hands-on workshops, and networking opportunities. 
            Connect with fellow developers and stay ahead of the latest JavaScript trends.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary">Upcoming Events</h2>
            <Link href="/events/submit" className="btn-secondary">
              Propose a Talk
            </Link>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card lg:flex lg:space-x-8 hover:shadow-xl transition-all duration-300">
                {/* Event Details */}
                <div className="lg:flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="text-primary-600 font-semibold">
                      {formatDate(event.date)} • {event.time}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {event.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-dark-primary mb-3">
                    {event.title}
                  </h3>

                  <div className="flex items-center mb-4 text-dark-secondary">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div className="text-sm">{event.address}</div>
                    </div>
                  </div>

                  <p className="text-dark-secondary mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-primary-100">
                    <div className="text-sm text-dark-secondary">
                      <span className="font-medium">{event.attendees}</span> / {event.maxAttendees} attending
                    </div>
                    <div className="flex space-x-4">
                      <Link
                        href={`/events/${event.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/events/${event.id}/register`}
                        className="btn-primary text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="lg:w-80 mt-6 lg:mt-0">
                  <div className="bg-primary-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-dark-primary mb-4">Speaker</h4>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {event.speaker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-dark-primary mb-1">
                          {event.speaker.name}
                        </div>
                        <div className="text-sm text-dark-secondary leading-relaxed">
                          {event.speaker.bio}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold text-dark-primary mb-3">Agenda</h5>
                      <ul className="space-y-2">
                        {event.agenda.map((item, index) => (
                          <li key={index} className="text-sm text-dark-secondary flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-primary mb-12">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="card hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-dark-primary mb-2">
                    {event.title}
                  </h3>
                  <div className="text-sm text-dark-secondary mb-2">
                    {formatDate(event.date)} • {event.attendees} attendees
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    Speaker: {event.speaker}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-primary-100">
                  {event.recording && (
                    <Link
                      href={event.recording}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1M7 7l3 3m0 0l3-3M10 10v10" />
                      </svg>
                      Recording
                    </Link>
                  )}
                  {event.slides && (
                    <Link
                      href={event.slides}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Slides
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events/archive" className="btn-secondary">
              View All Past Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
