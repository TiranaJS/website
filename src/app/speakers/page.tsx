import React from 'react';
import Link from 'next/link';
import FloatingClouds from '@/components/FloatingClouds';

export default function SpeakersPage() {
  const featuredSpeakers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      company: 'Meta',
      bio: 'Sarah is a React Core Team contributor with over 10 years of experience in frontend development. She specializes in React Server Components and modern web performance optimization.',
      expertise: ['React', 'Next.js', 'Performance', 'Server Components'],
      image: '/api/placeholder/300/300',
      social: {
        twitter: 'https://twitter.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        github: 'https://github.com/sarahjohnson',
      },
      upcomingTalk: {
        title: 'React Server Components Deep Dive',
        date: '2024-02-15',
        description: 'Explore the latest React Server Components and learn how to build faster, more efficient applications.',
      },
    },
    {
      id: 2,
      name: 'Mark Rodriguez',
      title: 'Staff Engineer',
      company: 'GitHub',
      bio: 'Mark is a TypeScript enthusiast and open source contributor who has been working with JavaScript for over 12 years. He\'s passionate about developer tooling and type safety.',
      expertise: ['TypeScript', 'Node.js', 'Developer Tools', 'Open Source'],
      image: '/api/placeholder/300/300',
      social: {
        twitter: 'https://twitter.com/markrodriguez',
        linkedin: 'https://linkedin.com/in/mark-rodriguez',
        github: 'https://github.com/markrodriguez',
      },
      upcomingTalk: {
        title: 'TypeScript Best Practices Workshop',
        date: '2024-02-28',
        description: 'Hands-on workshop covering advanced TypeScript patterns and best practices for large-scale applications.',
      },
    },
    {
      id: 3,
      name: 'Alex Chen',
      title: 'Backend Architect',
      company: 'Stripe',
      bio: 'Alex is a Node.js core contributor and backend architecture expert. He has designed and built scalable systems that handle millions of requests per day.',
      expertise: ['Node.js', 'API Design', 'Microservices', 'Scalability'],
      image: '/api/placeholder/300/300',
      social: {
        linkedin: 'https://linkedin.com/in/alex-chen',
        github: 'https://github.com/alexchen',
      },
      upcomingTalk: {
        title: 'Building Modern APIs with Node.js',
        date: '2024-03-12',
        description: 'Learn to build scalable, secure APIs using the latest Node.js features and industry standards.',
      },
    },
  ];

  const pastSpeakers = [
    {
      name: 'Elena Petrov',
      title: 'Vue.js Core Team',
      company: 'Vue.js',
      talk: 'Vue 3 Composition API Deep Dive',
      date: '2023-11-25',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'David Kim',
      title: 'Principal Engineer',
      company: 'Shopify',
      talk: 'JavaScript Performance Optimization',
      date: '2023-12-20',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Maria Gonzalez',
      title: 'Tech Lead',
      company: 'Netflix',
      talk: 'Micro-frontends Architecture',
      date: '2023-10-18',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'James Wilson',
      title: 'Senior Developer',
      company: 'Vercel',
      talk: 'Next.js 13 App Router',
      date: '2023-09-15',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Lisa Zhang',
      title: 'Frontend Architect',
      company: 'Airbnb',
      talk: 'State Management Patterns',
      date: '2023-08-22',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Robert Taylor',
      title: 'DevOps Engineer',
      company: 'GitHub',
      talk: 'CI/CD for JavaScript Projects',
      date: '2023-07-19',
      image: '/api/placeholder/200/200',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingClouds />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark-primary mb-6">
            Our Speakers
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Meet the amazing developers, architects, and thought leaders who share their knowledge 
            and experience with our community.
          </p>
          <Link href="/speakers/apply" className="btn-primary">
            Apply to Speak
          </Link>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-primary mb-12 text-center">
            Upcoming Speakers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker) => (
              <div key={speaker.id} className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Speaker Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-4xl">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2">
                    {speaker.name}
                  </h3>
                  <div className="text-primary-600 font-medium mb-1">
                    {speaker.title}
                  </div>
                  <div className="text-dark-secondary text-sm mb-4">
                    {speaker.company}
                  </div>
                  <p className="text-dark-secondary text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {speaker.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Upcoming Talk */}
                <div className="bg-primary-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-semibold text-dark-primary mb-2 text-sm">
                    Upcoming Talk
                  </h4>
                  <div className="text-primary-600 font-medium text-sm mb-1">
                    {speaker.upcomingTalk.title}
                  </div>
                  <div className="text-dark-secondary text-xs mb-2">
                    {formatDate(speaker.upcomingTalk.date)}
                  </div>
                  <p className="text-dark-secondary text-xs leading-relaxed">
                    {speaker.upcomingTalk.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {speaker.social.github && (
                    <a
                      href={speaker.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Speakers */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">
              Past Speakers
            </h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              We&apos;ve been honored to host these amazing speakers who have shared their expertise with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastSpeakers.map((speaker, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-lg font-semibold text-dark-primary mb-1">
                  {speaker.name}
                </h3>
                <div className="text-primary-600 font-medium text-sm mb-1">
                  {speaker.title}
                </div>
                <div className="text-dark-secondary text-xs mb-3">
                  {speaker.company}
                </div>
                
                <div className="bg-primary-50 rounded-xl p-3">
                  <div className="font-medium text-dark-primary text-sm mb-1">
                    {speaker.talk}
                  </div>
                  <div className="text-dark-secondary text-xs">
                    {formatDate(speaker.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Application CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-primary mb-6">
            Want to Share Your Knowledge?
          </h2>
          <p className="text-xl text-dark-secondary mb-8 leading-relaxed">
            We&apos;re always looking for passionate developers to share their expertise with our community. 
            Whether you&apos;re a seasoned expert or have an interesting project to showcase, we&apos;d love to hear from you.
          </p>
          
          <div className="bg-primary-50 rounded-3xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-dark-primary mb-4">
              What We&apos;re Looking For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-dark-primary mb-2">Technical Topics</h4>
                <ul className="text-dark-secondary text-sm space-y-1">
                  <li>• Modern JavaScript frameworks</li>
                  <li>• Backend development with Node.js</li>
                  <li>• Performance optimization</li>
                  <li>• Developer tools and workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-dark-primary mb-2">Soft Skills</h4>
                <ul className="text-dark-secondary text-sm space-y-1">
                  <li>• Career development</li>
                  <li>• Team collaboration</li>
                  <li>• Open source contribution</li>
                  <li>• Building inclusive teams</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/speakers/apply" className="btn-primary">
              Apply to Speak
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
