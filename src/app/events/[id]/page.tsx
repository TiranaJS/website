import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventById, getEvents } from "@/utils/getEvents";

type EventDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const statusConfig = {
  upcoming: {
    label: "🎯 Upcoming",
    badgeClass: "bg-green-500 text-white",
  },
  ongoing: {
    label: "🔴 Live Now",
    badgeClass: "bg-blue-500 text-white",
  },
  past: {
    label: "📅 Past Event",
    badgeClass: "bg-gray-500 text-white",
  },
} as const;

export async function generateStaticParams() {
  const data = await getEvents();
  return data.events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: "Event Not Found | TiranaJS",
      description: "The event you are looking for could not be found.",
    };
  }

  return {
    title: `${event.title} | TiranaJS`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website",
    },
  };
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  const status = statusConfig[event.status];

  return (
    <div className="min-h-screen bg-primary-50">
      <section className="relative pt-28 md:pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to events
          </Link>

          <div className="mt-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-8 md:p-10 lg:p-12 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-16 -translate-x-12" />

              <div className="relative z-10 space-y-6">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${status.badgeClass}`}
                >
                  {status.label}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {event.title}
                </h1>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Date & Time</p>
                      <p className="font-semibold">
                        {event.dateFormatted} • {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Location</p>
                      <div className="flex items-center">
                        <a
                          href={event.location.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-white transition-colors flex items-center"
                        >
                          {event.location.name}
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-dark-primary mb-4">
                  About this event
                </h2>
                <p className="text-lg text-dark-secondary leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                {event.schedule && event.schedule.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-dark-primary mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Event schedule
                    </h3>
                    <div className="space-y-3">
                      {event.schedule.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-semibold text-primary-600 mr-4 min-w-[70px]">
                            {item.time}
                          </span>
                          <span className="text-dark-secondary flex-1">
                            {item.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(event.highlights && event.highlights.length > 0) ||
                (event.speakers && event.speakers.length > 0) ? (
                  <div className="space-y-8">
                    {event.highlights && event.highlights.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-dark-primary mb-4">
                          Highlights
                        </h3>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-start text-dark-secondary"
                            >
                              <span className="text-primary-600 mr-3 mt-1">
                                •
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.speakers && event.speakers.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-dark-primary mb-4">
                          Speakers
                        </h3>
                        <ul className="space-y-3">
                          {event.speakers.map((speaker, index) => (
                            <li
                              key={index}
                              className="p-4 bg-primary-50 rounded-2xl border border-primary-100 text-dark-secondary"
                            >
                              <p className="font-semibold text-dark-primary">
                                {speaker.name}
                              </p>
                              <p className="text-sm mt-1">{speaker.topic}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>

              {event.tags && event.tags.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-dark-primary mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 border-t border-primary-100 text-center space-y-3">
                {event.registrationOpen ? (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Register now
                    <svg
                      className="w-6 h-6 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center px-8 py-4 bg-gray-400 text-white font-bold rounded-2xl shadow-md cursor-not-allowed opacity-80">
                    Registration closed
                    <svg
                      className="w-6 h-6 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
                <p className="text-sm text-dark-secondary">
                  Have questions? Reach out to the TiranaJS team or meet us at
                  the venue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
