import React from 'react';

const FirstEvent: React.FC = () => {
  const eventDetails = {
    title: "TiranaJS Community Launch Event",
    date: "March 15, 2024",
    time: "18:30",
    location: "Innovation Hub Tirana",
    description: "Join us for the inaugural meetup of TiranaJS! We're launching Tirana's newest JavaScript community with an evening of networking, lightning talks, and exciting discussions about the future of web development in our city.",
    highlights: [
      "Meet fellow JavaScript enthusiasts",
      "Lightning talks from local developers", 
      "Community roadmap discussion",
      "Networking and refreshments"
    ],
    lumaLink: "https://luma.com/event/evt-abc123" // Placeholder hardcoded link
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium mb-4">
            🚀 Launching Soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            Our First Event
          </h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed">
            Be part of history! Join us for the very first TiranaJS community meetup and help us 
            build something amazing together.
          </p>
        </div>

        {/* Event Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden shadow-2xl">
            {/* Event Header */}
            <div className="bg-primary-600 p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {eventDetails.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-9 4h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                      </svg>
                      {eventDetails.date} • {eventDetails.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {eventDetails.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-sm mb-1">Free Event</div>
                  <div className="text-2xl font-bold">🎉</div>
                </div>
              </div>
            </div>

            {/* Event Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-primary mb-4">About This Event</h4>
                  <p className="text-dark-secondary leading-relaxed mb-6">
                    {eventDetails.description}
                  </p>
                  
                  {/* CTA Button */}
                  <a
                    href={eventDetails.lumaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Reserve Your Spot
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Event Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-primary mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    {eventDetails.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-dark-secondary">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Community Note */}
                  <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">💭</div>
                      <div>
                        <h5 className="font-medium text-dark-primary mb-1">New Community</h5>
                        <p className="text-sm text-dark-secondary">
                          As a brand new community, this is our chance to shape TiranaJS together. 
                          Your ideas and feedback will help define our future events!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-dark-secondary">
            Can't make it to our first event? Follow us to stay updated on future meetups!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstEvent;
