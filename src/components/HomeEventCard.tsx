import React from 'react';
import { getEvents } from '@/utils/getEvents';
import { EventsData } from '@/types/event';

const HomeEventCard: React.FC = async () => {
  let eventData: EventsData;
  
  try {
    eventData = await getEvents();
  } catch (error) {
    console.error('Error fetching events:', error);
    return (
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dark-secondary">Unable to load events. Please try again later.</p>
        </div>
      </section>
    );
  }

  // Get the first event or the most recent event
  const eventDetails = eventData.events[0];
  
  if (!eventDetails) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dark-secondary">No events available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            eventDetails.status === 'upcoming' 
              ? 'bg-green-500 text-white' 
              : eventDetails.status === 'ongoing'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-500 text-white'
          }`}>
            📅 {eventDetails.status === 'upcoming' ? 'Upcoming Event' : eventDetails.status === 'ongoing' ? 'Live Event' : 'Past Event'}
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
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-16.5 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-16.5 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/70">Date & Time</div>
                            <div className="font-semibold">{eventDetails.dateFormatted} • {eventDetails.time}</div>
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
                              href={eventDetails.location.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-white transition-colors duration-200 flex items-center group/link"
                            >
                              {eventDetails.location.name}
                              <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
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
                          <div className="flex-shrink-0 w-12 text-sm font-semibold text-primary-600 mt-1">
                            {item.time}
                          </div>
                          <div className="flex-1 text-dark-secondary text-lg leading-relaxed">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Registration CTA - Bottom Center */}
                <div className="px-8 md:px-10 pb-8 pt-6 text-center border-t border-primary-100/30">
                  {eventDetails.registrationOpen ? (
                    <>
                      <a 
                        href={eventDetails.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center px-8 sm:px-12 py-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                      >
                        <span className="relative z-10">Register Now</span>
                        <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      <p className="text-sm text-dark-secondary mt-4">
                        Secure your spot today! Limited seats available.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="group relative inline-flex items-center px-8 sm:px-12 py-6 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-lg cursor-not-allowed opacity-75">
                        <span className="relative z-10">Registration Closed</span>
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-dark-secondary mt-4">
                        {eventDetails.status === 'past' 
                          ? 'This event has concluded. Our next meetup will be announced soon!'
                          : 'Registration is currently closed.'}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Community Card */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-8 bg-gradient-to-br from-primary-50 to-accent-lavender/30 rounded-2xl border border-primary-100/50">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-dark-primary mb-3 text-2xl">New Community</h5>
                <p className="text-dark-secondary leading-relaxed text-lg">
                  As a brand new community, this is our chance to shape TiranaJS together. 
                  Your ideas and feedback will help define our future events!
                </p>
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

export default HomeEventCard;

