import type { Metadata } from 'next';
import PressMediaPage from '@/components/ui/PressRelease';

export const metadata: Metadata = {
  title: 'Press & Media - Payvel Newsroom | Media Kit & Press Releases',
  description: 'Welcome to the Payvel newsroom. Access our latest press releases, announcements, media kit, brand assets, and contact information for media inquiries.',
  keywords: [
    'Payvel press',
    'Payvel news',
    'media kit',
    'press releases',
    'Payvel newsroom',
    'brand assets',
    'media inquiries',
    'Payvel announcements',
    'fintech news',
    'money transfer news'
  ],
  authors: [{ name: 'Payvel Communications Team' }],
  creator: 'Payvel',
  publisher: 'Payvel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payvel.com/press',
    title: 'Press & Media - Payvel Newsroom',
    description: 'Access Payvel press releases, media kit, brand assets, and contact information for media inquiries.',
    siteName: 'Payvel',
    images: [
      {
        url: 'https://payvel.com/og-press.jpg',
        width: 1200,
        height: 630,
        alt: 'Payvel Press & Media'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media - Payvel Newsroom',
    description: 'Access Payvel press releases, media kit, and contact information for media inquiries.',
    images: ['https://payvel.com/twitter-press.jpg'],
    creator: '@payvel'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://payvel.com/press'
  }
};

export default function PressPageWrapper() {
  // Organization Schema for press/newsroom
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Payvel',
    url: 'https://payvel.com',
    logo: 'https://payvel.com/logo.png',
    description: 'International money transfer service offering zero-fee, high-speed transfers',
    foundingDate: '2024',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media Relations',
        email: 'press@payvel.com',
        availableLanguage: ['English']
      }
    ],
    sameAs: [
      'https://twitter.com/payvel',
      'https://facebook.com/payvel',
      'https://linkedin.com/company/payvel'
    ]
  };

  // NewsArticle Schema for press releases
  const newsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'NewsArticle',
        position: 1,
        headline: 'Payvel Launches to Simplify International Money Transfers from Australia to Africa',
        datePublished: '2025-10-10',
        description: 'Payvel PTY LTD officially launches its innovative mobile app, offering zero-fee, high-speed money transfers and powerful financial management tools.',
        author: {
          '@type': 'Organization',
          name: 'Payvel'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Payvel',
          logo: {
            '@type': 'ImageObject',
            url: 'https://payvel.com/logo.png'
          }
        }
      },
      {
        '@type': 'NewsArticle',
        position: 2,
        headline: 'Payvel Secures Strategic Partnership with Cybrid to Power North American Transfers',
        datePublished: '2025-09-25',
        description: 'The collaboration ensures fully compliant and secure money transfers for users in the United States and Canada, expanding Payvel\'s global reach.',
        author: {
          '@type': 'Organization',
          name: 'Payvel'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Payvel',
          logo: {
            '@type': 'ImageObject',
            url: 'https://payvel.com/logo.png'
          }
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://payvel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Press & Media',
        item: 'https://payvel.com/press'
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      {/* JSON-LD Structured Data for News Articles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsSchema)
        }}
      />
      {/* JSON-LD Structured Data for Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <PressMediaPage />
    </>
  );
}