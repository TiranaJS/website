import React from 'react';
import Link from 'next/link';
import FloatingClouds from '@/components/FloatingClouds';

export default function ResourcesPage() {
  const learningResources = [
    {
      category: 'JavaScript Fundamentals',
      resources: [
        {
          title: 'MDN JavaScript Guide',
          description: 'Comprehensive guide to JavaScript from basics to advanced topics.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
          type: 'Documentation',
          difficulty: 'Beginner to Advanced',
        },
        {
          title: 'JavaScript.info',
          description: 'Modern JavaScript tutorial with clear explanations and examples.',
          url: 'https://javascript.info/',
          type: 'Tutorial',
          difficulty: 'Beginner to Intermediate',
        },
        {
          title: 'Eloquent JavaScript',
          description: 'A modern introduction to programming with JavaScript.',
          url: 'https://eloquentjavascript.net/',
          type: 'Book',
          difficulty: 'Beginner to Intermediate',
        },
      ],
    },
    {
      category: 'React & Frontend Frameworks',
      resources: [
        {
          title: 'React Official Documentation',
          description: 'The official React docs with hooks, server components, and more.',
          url: 'https://react.dev/',
          type: 'Documentation',
          difficulty: 'Beginner to Advanced',
        },
        {
          title: 'Next.js Documentation',
          description: 'Full-stack React framework with server-side rendering and more.',
          url: 'https://nextjs.org/docs',
          type: 'Documentation',
          difficulty: 'Intermediate',
        },
        {
          title: 'Vue.js Guide',
          description: 'Progressive framework for building user interfaces.',
          url: 'https://vuejs.org/guide/',
          type: 'Documentation',
          difficulty: 'Beginner to Advanced',
        },
      ],
    },
    {
      category: 'Node.js & Backend',
      resources: [
        {
          title: 'Node.js Official Docs',
          description: 'Complete Node.js documentation and API reference.',
          url: 'https://nodejs.org/en/docs/',
          type: 'Documentation',
          difficulty: 'Intermediate',
        },
        {
          title: 'Express.js Guide',
          description: 'Fast, unopinionated web framework for Node.js.',
          url: 'https://expressjs.com/',
          type: 'Documentation',
          difficulty: 'Beginner to Intermediate',
        },
        {
          title: 'NestJS Documentation',
          description: 'Progressive Node.js framework for scalable server-side applications.',
          url: 'https://nestjs.com/',
          type: 'Documentation',
          difficulty: 'Intermediate to Advanced',
        },
      ],
    },
    {
      category: 'TypeScript',
      resources: [
        {
          title: 'TypeScript Handbook',
          description: 'Official TypeScript handbook covering all language features.',
          url: 'https://www.typescriptlang.org/docs/',
          type: 'Documentation',
          difficulty: 'Beginner to Advanced',
        },
        {
          title: 'TypeScript Deep Dive',
          description: 'Free online book covering TypeScript in depth.',
          url: 'https://basarat.gitbook.io/typescript/',
          type: 'Book',
          difficulty: 'Intermediate to Advanced',
        },
        {
          title: 'Type Challenges',
          description: 'Collection of TypeScript type challenges to improve your skills.',
          url: 'https://github.com/type-challenges/type-challenges',
          type: 'Practice',
          difficulty: 'Intermediate to Advanced',
        },
      ],
    },
  ];

  const tools = [
    {
      category: 'Code Editors & IDEs',
      items: [
        {
          name: 'Visual Studio Code',
          description: 'Free, powerful code editor with excellent JavaScript support.',
          url: 'https://code.visualstudio.com/',
          logo: '🔵',
        },
        {
          name: 'WebStorm',
          description: 'Professional IDE for JavaScript development by JetBrains.',
          url: 'https://www.jetbrains.com/webstorm/',
          logo: '🌊',
        },
      ],
    },
    {
      category: 'Package Managers',
      items: [
        {
          name: 'npm',
          description: 'Default package manager for Node.js.',
          url: 'https://www.npmjs.com/',
          logo: '📦',
        },
        {
          name: 'Yarn',
          description: 'Fast, reliable, and secure dependency management.',
          url: 'https://yarnpkg.com/',
          logo: '🧶',
        },
        {
          name: 'pnpm',
          description: 'Fast, disk space efficient package manager.',
          url: 'https://pnpm.io/',
          logo: '⚡',
        },
      ],
    },
    {
      category: 'Build Tools & Bundlers',
      items: [
        {
          name: 'Vite',
          description: 'Next generation frontend tooling.',
          url: 'https://vitejs.dev/',
          logo: '⚡',
        },
        {
          name: 'Webpack',
          description: 'Static module bundler for modern JavaScript applications.',
          url: 'https://webpack.js.org/',
          logo: '📦',
        },
        {
          name: 'Parcel',
          description: 'Zero configuration build tool for web apps.',
          url: 'https://parceljs.org/',
          logo: '📦',
        },
      ],
    },
    {
      category: 'Testing',
      items: [
        {
          name: 'Jest',
          description: 'JavaScript testing framework with a focus on simplicity.',
          url: 'https://jestjs.io/',
          logo: '🃏',
        },
        {
          name: 'Vitest',
          description: 'Blazing fast unit test framework powered by Vite.',
          url: 'https://vitest.dev/',
          logo: '⚡',
        },
        {
          name: 'Cypress',
          description: 'End-to-end testing framework for web applications.',
          url: 'https://www.cypress.io/',
          logo: '🌲',
        },
      ],
    },
  ];

  const communityProjects = [
    {
      title: 'TiranaJS Starter Templates',
      description: 'Collection of starter templates for different JavaScript frameworks and tools.',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
      github: 'https://github.com/tiranajs/starter-templates',
      status: 'Active',
    },
    {
      title: 'Albanian Tech Companies Directory',
      description: 'Comprehensive directory of tech companies in Albania.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/tiranajs/tech-companies-albania',
      status: 'Active',
    },
    {
      title: 'JavaScript Learning Path',
      description: 'Curated learning path for JavaScript developers in Albanian.',
      technologies: ['Markdown', 'Documentation'],
      github: 'https://github.com/tiranajs/js-learning-path',
      status: 'In Progress',
    },
    {
      title: 'Event Management System',
      description: 'Open source event management system for tech communities.',
      technologies: ['Next.js', 'Prisma', 'tRPC'],
      github: 'https://github.com/tiranajs/event-management',
      status: 'Planning',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Beginner')) return 'bg-green-100 text-green-700';
    if (difficulty.includes('Intermediate')) return 'bg-yellow-100 text-yellow-700';
    if (difficulty.includes('Advanced')) return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'planning':
        return 'bg-blue-100 text-blue-700';
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
            Developer Resources
          </h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Curated collection of learning materials, tools, and community projects to help you 
            grow as a JavaScript developer.
          </p>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              Essential resources to master JavaScript and related technologies.
            </p>
          </div>

          <div className="space-y-12">
            {learningResources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-dark-primary mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="card hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-dark-primary">
                          {resource.title}
                        </h4>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      
                      <p className="text-dark-secondary text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors inline-flex items-center"
                        >
                          Visit Resource
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">
              Essential Tools
            </h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              Must-have tools and technologies for modern JavaScript development.
            </p>
          </div>

          <div className="space-y-12">
            {tools.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-dark-primary mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((tool, toolIndex) => (
                    <div key={toolIndex} className="card hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">
                          {tool.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-dark-primary mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-dark-secondary text-sm leading-relaxed mb-3">
                            {tool.description}
                          </p>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors inline-flex items-center"
                          >
                            Learn More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">
              Community Projects
            </h2>
            <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
              Open source projects created and maintained by our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-dark-primary">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-dark-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-primary-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {project.status === 'Active' && (
                    <Link
                      href="/contact"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                    >
                      Contribute
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-secondary mb-6">
              Have an idea for a community project? We&apos;d love to hear about it!
            </p>
            <Link href="/contact" className="btn-primary">
              Propose a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-dark-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-primary-200 text-xl mb-8 leading-relaxed">
            Subscribe to our newsletter to get the latest resources, event updates, 
            and community news delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl text-dark-primary focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Subscribe
              </button>
            </div>
            <p className="text-primary-300 text-sm mt-3">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
