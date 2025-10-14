import { Metadata } from 'next';
import Contact from '@/components/ui/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Payvel | Get in Touch with Our Support Team',
  description: 'Have questions about Payvel? Contact our support team for help with money transfers, account inquiries, or general questions. We\'re here to help you 24/7.',
  keywords: [
    'contact Payvel',
    'Payvel support',
    'customer service',
    'money transfer help',
    'Payvel contact email',
    'customer support',
    'general inquiries',
    'press inquiries'
  ],
  openGraph: {
    title: 'Contact Us - Payvel',
    description: 'Get in touch with Payvel support team for help with transfers, account questions, or general inquiries.',
    type: 'website',
    url: 'https://payvel.com/contact',
    siteName: 'Payvel',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Payvel Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Payvel',
    description: 'Get in touch with Payvel support team for help with transfers, account questions, or general inquiries.',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://payvel.com/contact',
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
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Payvel',
            description: 'Contact page for Payvel - reach out for support, inquiries, or press information',
            url: 'https://payvel.com/contact',
            mainEntity: {
              '@type': 'Organization',
              name: 'Payvel PTY LTD',
              url: 'https://payvel.com',
              logo: 'https://payvel.com/logo.png',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Service',
                  email: 'support@payvel.com',
                  availableLanguage: ['English'],
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'General Inquiries',
                  email: 'connect@payvel.com',
                  availableLanguage: ['English'],
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'Press',
                  email: 'press@payvel.com',
                  availableLanguage: ['English'],
                },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'South Ripley',
                addressRegion: 'QLD',
                postalCode: '4306',
                addressCountry: 'AU',
              },
            },
          }),
        }}
      />
      
      <Contact />
    </>
  );
}