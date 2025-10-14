import type { Metadata } from 'next';
import BlogHomePage from '@/components/ui/BlogPost';

export const metadata: Metadata = {
  title: 'Payvel Blog - International Finance Tips & News',
  description: 'Stay updated with the latest news, insights, and tips on managing your international finances, money transfers, and staying connected with Payvel.',
  keywords: [
    'international money transfer',
    'finance tips',
    'currency exchange',
    'remittance',
    'financial news',
    'money transfer blog',
    'Payvel news'
  ],
  authors: [{ name: 'Payvel Team' }],
  creator: 'Payvel',
  publisher: 'Payvel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payvel.com/blog',
    title: 'Payvel Blog - International Finance Tips & News',
    description: 'Stay updated with the latest news, insights, and tips on managing your international finances and money transfers.',
    siteName: 'Payvel',
    images: [
      {
        url: 'https://payvel.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Payvel Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payvel Blog - International Finance Tips & News',
    description: 'Stay updated with the latest news, insights, and tips on managing your international finances.',
    images: ['https://payvel.com/twitter-blog.jpg'],
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
    canonical: 'https://payvel.com/blog'
  }
};

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Payvel Blog',
            description: 'News, insights, and tips on managing international finances',
            url: 'https://payvel.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Payvel',
              logo: {
                '@type': 'ImageObject',
                url: 'https://payvel.com/logo.png'
              }
            },
            blogPost: [
              {
                '@type': 'BlogPosting',
                headline: 'Payvel Expands Service to New Countries',
                description: 'Our seamless money transfer service is now available in three new corridors',
                url: 'https://payvel.com/blog/payvel-expands-service',
                datePublished: '2024-10-01',
                author: {
                  '@type': 'Organization',
                  name: 'Payvel Team'
                }
              }
            ]
          })
        }}
      />
      <BlogHomePage />
    </>
  );
}