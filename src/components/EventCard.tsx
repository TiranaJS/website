import React from 'react';
import { Event } from '@/types/event';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const getStatusBadge = () => {
    switch (event.status) {
      case 'upcoming':
        return 'bg-green-500 text-white';
      case 'ongoing':
        return 'bg-blue-500 text-white';
      case 'past':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = () => {
    switch (event.status) {
      case 'upcoming':
        return '🎯 Upcoming';
      case 'ongoing':
        return '🔴 Live Now';
      case 'past':
        return '📅 Past Event';
      default:
        return '📅 Event';
    }
  };

  return (
    <div className="relative group">
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${getStatusBadge()}`}>
            {getStatusText()}
          </div>
        </div>

        {/* Event Header */}
        <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-6 md:p-8 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight pr-24">
              {event.title}
            </h3>
            
            <div className="flex flex-col gap-3 text-white/90">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">{event.dateFormatted} • {event.time}</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href={event.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-white transition-colors flex items-center"
                >
                  {event.location.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="p-6 md:p-8">
          <p className="text-dark-secondary leading-relaxed mb-6">
            {event.description}
          </p>

          {/* Schedule Preview */}
          {event.schedule && event.schedule.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-bold text-dark-primary mb-3 flex items-center">
                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Schedule
              </h4>
              <div className="space-y-2">
                {event.schedule.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start text-sm">
                    <span className="font-semibold text-primary-600 mr-3 min-w-[60px]">{item.time}</span>
                    <span className="text-dark-secondary">{item.activity}</span>
                  </div>
                ))}
                {event.schedule.length > 3 && (
                  <p className="text-sm text-dark-secondary italic">+ {event.schedule.length - 3} more...</p>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {event.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-4 border-t border-primary-100">
            {event.registrationOpen ? (
              <a 
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Register Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            ) : (
              <button 
                disabled
                className="inline-flex items-center px-6 py-3 bg-gray-400 text-white font-bold rounded-xl shadow-md cursor-not-allowed opacity-75"
              >
                Registration Closed
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

