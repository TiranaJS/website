import React from 'react';
import Link from 'next/link';

const LatestNews: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'TiranaJS Community Reaches 500 Members!',
      excerpt: 'We\'re thrilled to announce that our community has grown to over 500 active members, making us one of the largest tech communities in Tirana.',
      date: '2024-01-25',
      author: 'TiranaJS Team',
      category: 'Community',
      readTime: '3 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'New Partnership with Innovation Hub Tirana',
      excerpt: 'We\'re excited to partner with Innovation Hub Tirana to bring you even better venues and resources for our monthly meetups.',
      date: '2024-01-20',
      author: 'Elena Marku',
      category: 'Partnership',
      readTime: '2 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Recap: React 18 Features Workshop Success',
      excerpt: 'Our recent workshop on React 18 features was a huge success with over 40 attendees learning about concurrent features and Suspense.',
      date: '2024-01-15',
      author: 'Arben Krasniqi',
      category: 'Event Recap',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
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
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-primary mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest happenings in our community, event recaps, 
            and exciting announcements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <article key={article.id} className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden p-0">
              {/* Article Image */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {article.category.charAt(0)}
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-dark-secondary text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Article Meta */}
                <div className="flex justify-between items-center pt-4 border-t border-primary-100 text-xs text-dark-secondary">
                  <div className="flex items-center space-x-4">
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="font-medium">{article.author}</span>
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News CTA */}
        <div className="text-center">
          <Link href="/news" className="btn-secondary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
