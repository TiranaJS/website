import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TiranaJS Community - Connect. Learn. Code. Together.',
  description: 'TiranaJS Community brings together JavaScript developers in Tirana and beyond. Join us for talks, workshops, networking, and building the future of web development together.',
  keywords: ['JavaScript', 'TiranaJS', 'Community', 'Tirana', 'Programming', 'Web Development'],
  authors: [{ name: 'TiranaJS Community' }],
  openGraph: {
    title: 'TiranaJS Community',
    description: 'Connect. Learn. Code. Together.',
    url: 'https://tiranajs.org',
    siteName: 'TiranaJS Community',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TiranaJS Community',
    description: 'Connect. Learn. Code. Together.',
    creator: '@tiranajs',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-primary-50">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
