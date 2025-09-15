import React from 'react';
import Link from 'next/link';
import FloatingClouds from '@/components/FloatingClouds';
import Logo from '@/components/Logo';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Elena Marku',
      role: 'Community Lead & Organizer',
      bio: 'Full-stack developer with 8+ years of experience. Passionate about building inclusive tech communities and mentoring new developers.',
      expertise: ['React', 'Node.js', 'Community Building'],
      linkedin: 'https://linkedin.com/in/elena-marku',
      twitter: 'https://twitter.com/elenamarku',
      github: 'https://github.com/elenamarku',
    },
    {
      name: 'Arben Krasniqi',
      role: 'Technical Program Manager',
      bio: 'Frontend architect and React expert. Loves sharing knowledge about modern web development and performance optimization.',
      expertise: ['React', 'TypeScript', 'Performance'],
      linkedin: 'https://linkedin.com/in/arben-krasniqi',
      twitter: 'https://twitter.com/arbenkrasniqi',
      github: 'https://github.com/arbenkrasniqi',
    },
    {
      name: 'Fatmir Hoxha',
      role: 'Event Coordinator',
      bio: 'Backend developer and DevOps enthusiast. Ensures our events run smoothly and our community has the best experience.',
      expertise: ['Node.js', 'DevOps', 'Event Planning'],
      linkedin: 'https://linkedin.com/in/fatmir-hoxha',
      github: 'https://github.com/fatmirhoxha',
    },
    {
      name: 'Ilda Nallbani',
      role: 'Content & Social Media Manager',
      bio: 'UX/UI designer and frontend developer. Creates engaging content and manages our online presence across platforms.',
      expertise: ['UI/UX Design', 'Vue.js', 'Content Strategy'],
      linkedin: 'https://linkedin.com/in/ilda-nallbani',
      twitter: 'https://twitter.com/ildanallbani',
      dribbble: 'https://dribbble.com/ildanallbani',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Community Founded',
      description: 'Started with 15 passionate developers meeting monthly at local cafes.',
    },
    {
      year: '2021',
      title: 'First Workshop',
      description: 'Hosted our first hands-on React workshop with 25 attendees.',
    },
    {
      year: '2022',
      title: '100 Members',
      description: 'Reached our first major milestone of 100 active community members.',
    },
    {
      year: '2023',
      title: 'Partnership Program',
      description: 'Established partnerships with local tech companies and innovation hubs.',
    },
    {
      year: '2024',
      title: '500+ Strong',
      description: 'Now the largest JavaScript community in Albania with 500+ members.',
    },
  ];

  const values = [
    {
      title: 'Inclusive & Welcoming',
      description: 'We believe diversity drives innovation. Our community welcomes developers of all backgrounds, experience levels, and perspectives.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Knowledge Sharing',
      description: 'We foster a culture of continuous learning where everyone is both a teacher and a student, sharing experiences and growing together.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Innovation Focus',
      description: 'We stay at the forefront of JavaScript development, exploring new technologies and pushing the boundaries of what\'s possible.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Community First',
      description: 'Every decision we make prioritizes the benefit and growth of our community members and the broader tech ecosystem in Albania.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingClouds />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" showText={true} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary mb-6">
            About Our Community
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            We&apos;re passionate developers, designers, and tech enthusiasts united by our love for JavaScript 
            and commitment to growing Albania&apos;s tech ecosystem.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-primary mb-6">Our Mission</h2>
              <p className="text-dark-secondary leading-relaxed mb-6">
                TiranaJS Community exists to foster growth, innovation, and collaboration among JavaScript 
                developers in Albania. We believe that by bringing together passionate individuals, we can 
                create a thriving ecosystem that benefits everyone.
              </p>
              <p className="text-dark-secondary leading-relaxed mb-6">
                Our mission is to provide a platform where developers can learn from each other, share 
                their experiences, and build meaningful connections that last beyond our monthly meetups.
              </p>
              <Link href="/events" className="btn-primary">
                Join Our Next Event
              </Link>
            </div>
            <div className="bg-gradient-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly meetups with expert speakers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on workshops and coding sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentorship programs for new developers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Job opportunities and career guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">Our Values</h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              These core values guide everything we do and help create a positive environment for all members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-2xl group-hover:bg-primary-200 transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">Our Journey</h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              From a small group of developers to Albania&apos;s largest JavaScript community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden lg:block"></div>

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card hover:shadow-lg transition-all duration-300">
                      <div className="text-primary-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-dark-primary mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-dark-secondary leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              The passionate individuals who make TiranaJS Community possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-lg font-semibold text-dark-primary mb-1">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium text-sm mb-3">
                  {member.role}
                </div>
                <p className="text-dark-secondary text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {member.dribbble && (
                    <a
                      href={member.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-1.542-.278-2.764-.278-.21 0-.33.018-.33.018-.114-2.154-.725-4.115-1.91-5.658 1.12-.35 2.37-.5 2.73-.78zm-1.544 1.04c1.06 1.34 1.648 3.022 1.783 4.776-.24-.05-.48-.095-.734-.14-.43-.08-.87-.15-1.332-.21-.114-1.79-.38-3.53-.717-4.426zM12 2.184c2.17 0 4.125.84 5.59 2.212-.24.18-1.458.537-2.914.537-.525 0-1.009-.062-1.44-.14-.114-.018-.228-.035-.342-.053-1.428-.21-2.553-.315-2.894-.556zm-2.726.77c.342.24 1.466.345 2.894.556.114.018.228.035.342.053.43.078.915.14 1.44.14 1.456 0 2.674-.357 2.914-.537C17.875 2.84 19.83 4.184 22 6.184c-.36.28-1.61.43-2.73.78-1.185-1.543-1.796-3.504-1.91-5.658 0 0-.12-.018-.33-.018-1.222 0-2.111.152-2.764.278C13.613 2.866 12.87 2.434 12 2.184z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-primary mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-dark-secondary mb-8 leading-relaxed">
            Whether you&apos;re a seasoned developer or just starting your JavaScript journey, 
            there&apos;s a place for you in TiranaJS Community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary">
              Attend Next Event
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
