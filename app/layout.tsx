import './../styles/globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Christebob - The Magnificently Scatterbrained Bear | ADHD Children\'s Books',
  description:
    'Meet Christebob, the magnificently scatterbrained teddy bear teaching kids that ADHD is a superpower. Picture book coming 2026, 52-episode animated series launching January 2026.',
  keywords: ['ADHD', 'children\'s books', 'neurodiversity', 'picture books', 'ADHD kids', 'animated series', 'ADHD awareness', 'special needs', 'learning differences', 'ADHD education', 'neurodivergent', 'ADHD parenting'],
  authors: [{ name: 'Chris Coyne', url: 'https://www.christebob.com' }],
  creator: 'Chris Coyne',
  publisher: 'Christebob Creative LLC',
  metadataBase: new URL('https://www.christebob.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Christebob - Celebrating ADHD as a Superpower',
    description: 'Meet Christebob, the magnificently scatterbrained teddy bear who teaches kids that ADHD is a gift, not a problem. Picture book & 52-episode animated series.',
    url: 'https://www.christebob.com',
    siteName: 'Christebob',
    images: [
      {
        url: '/images/christebob-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Christebob the magnificently scatterbrained bear',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christebob - Celebrating ADHD as a Superpower',
    description: 'Meet Christebob, the magnificently scatterbrained teddy bear teaching kids that ADHD is a superpower.',
    images: ['/images/christebob-hero.jpg'],
    creator: '@ChristebobBear',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
