import React from 'react';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'New Community',
      description: 'Be among the founding members of Tirana\'s newest JavaScript community and connect with like-minded professionals.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Learning Focused',
      description: 'From beginner workshops to advanced talks, we provide learning opportunities for all skill levels.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation Driven',
      description: 'Stay ahead with the latest JavaScript trends, frameworks, and best practices in web development.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: 'Open & Inclusive',
      description: 'We welcome developers of all backgrounds and experience levels to join our inclusive community.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-lavender-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            About TiranaJS Community
          </h2>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            We&apos;re building Tirana&apos;s newest JavaScript community from the ground up. Join us as we create 
            a space for developers to learn, grow, and collaborate in our city&apos;s emerging tech scene.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-lavender text-center group hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-50 rounded-2xl group-hover:bg-accent-lavender transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-dark-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
