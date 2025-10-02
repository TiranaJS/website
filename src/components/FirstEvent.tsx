import React from 'react';

const FirstEvent: React.FC = () => {
  const eventDetails = {
    title: "TiranaJS Community Launch Event",
    date: "15 October 2025",
    time: "18:30",
    location: "One Connect Hub",
    description: "Join us for the inaugural event of TiranaJS! We're launching Tirana's newest JavaScript community with an evening of networking, lightning talks, and exciting discussions about the future of web development in our city.",
    schedule: [
      { time: "18:30", activity: "Doors Open, Drinks" },
      { time: "19:00", activity: "Zero to One: Introducing TiranaJS" },
      { time: "19:15", activity: "Meet Undici: Your New HTTP Friend - Renato Selenica" },
      { time: "19:45", activity: "Networking, Food & Drinks 🌍🍕🍺" }
    ],
    highlights: [
      "Meet fellow JavaScript enthusiasts",
      "Lightning talks from local developers", 
      "Community roadmap discussion",
      "Networking and refreshments"
    ],
    lumaLink: "https://luma.com/v4jj6yzq"
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
            Be part of history! Join us for the very first TiranaJS community event and help us 
            build something amazing together.
          </p>
        </div>

        {/* Event Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glassmorphism Card */}
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              {/* Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/30 to-accent-lavender/30 pointer-events-none"></div>
              
              {/* Event Header */}
              <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-8 md:p-10 text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        {eventDetails.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-white/90">
                        <div className="flex items-center group/item">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3 group-hover/item:bg-white/30 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-9 4h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/70">Date & Time</div>
                            <div className="font-semibold">{eventDetails.date} • {eventDetails.time}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center group/item">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3 group-hover/item:bg-white/30 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/70">Location</div>
                            <a 
                              href="https://maps.app.goo.gl/WD7tLMf8wYkZuYbm8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-white transition-colors duration-200 flex items-center group/link"
                            >
                              {eventDetails.location}
                              <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center group/item">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3 group-hover/item:bg-white/30 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/70">Admission</div>
                            <div className="font-semibold">Free Event</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Description */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-dark-primary mb-4 flex items-center">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        About This Event
                      </h4>
                      <p className="text-dark-secondary leading-relaxed text-lg mb-6">
                        {eventDetails.description}
                      </p>
                      
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <a 
                        href={eventDetails.lumaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <span className="relative z-10">Register Now</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-sm text-dark-secondary mt-2">
                        Click to register on Luma
                      </p>
                    </div>
                  </div>

                  {/* Event Schedule */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-dark-primary mb-4 flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Event Schedule
                    </h4>
                    
                    <div className="space-y-3">
                      {eventDetails.schedule.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-16 text-sm font-semibold text-primary-600 mr-4 mt-1">
                            {item.time}
                          </div>
                          <div className="flex-1 text-dark-secondary text-lg leading-relaxed">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Community Note */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-lavender/30 rounded-2xl border border-primary-100/50">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-dark-primary mb-2 text-lg">New Community</h5>
                          <p className="text-dark-secondary leading-relaxed">
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
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-dark-secondary">
            Can't make it to our first event? Follow us to stay updated on future events!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstEvent;
