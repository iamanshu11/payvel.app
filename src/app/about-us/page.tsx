import { Metadata } from 'next';
import AboutUs from '@/components/ui/AboutUs';

export const metadata: Metadata = {
  title: 'About Us - Payvel | Building Bridges Across Borders',
  description: 'Learn about Payvel\'s mission to make international money transfers faster, safer, and more affordable. Discover our story, values, and commitment to connecting families worldwide.',
  keywords: [
    'about Payvel',
    'international money transfer',
    'global payments',
    'remittance company',
    'financial technology',
    'cross-border payments',
    'Payvel story',
    'money transfer service',
    'AUSTRAC regulated',
    'secure money transfer'
  ],
  openGraph: {
    title: 'About Us - Payvel | Building Bridges Across Borders',
    description: 'Discover how Payvel is revolutionizing international money transfers with faster, safer, and more affordable solutions for families worldwide.',
    type: 'website',
    url: 'https://payvel.com/about-us',
    siteName: 'Payvel',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Payvel - International Money Transfer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Payvel | Building Bridges Across Borders',
    description: 'Discover how Payvel is revolutionizing international money transfers with faster, safer, and more affordable solutions.',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://payvel.com/about-us',
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

export default function AboutUsPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Payvel',
            description: 'Learn about Payvel\'s mission to make international money transfers faster, safer, and more affordable',
            url: 'https://payvel.com/about-us',
            mainEntity: {
              '@type': 'Organization',
              name: 'Payvel PTY LTD',
              url: 'https://payvel.com',
              logo: 'https://payvel.com/logo.png',
              description: 'International money transfer service making cross-border payments faster, safer, and more affordable',
              foundingDate: '2020',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'South Ripley',
                addressRegion: 'QLD',
                postalCode: '4306',
                addressCountry: 'AU',
              },
              sameAs: [
                'https://twitter.com/payvel',
                'https://facebook.com/payvel',
                'https://linkedin.com/company/payvel',
              ],
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '0',
                  longitude: '0',
                },
                geoRadius: '20000000',
              },
              knowsAbout: [
                'International Money Transfer',
                'Remittance Services',
                'Cross-border Payments',
                'Financial Technology',
                'Global Payments',
              ],
              slogan: 'Building Bridges Across Borders',
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'Payvel',
            description: 'Fast, secure, and affordable international money transfers',
            url: 'https://payvel.com',
            serviceType: 'Money Transfer Service',
            provider: {
              '@type': 'Organization',
              name: 'Payvel PTY LTD',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Money Transfer Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'International Money Transfer',
                    description: 'Fast and secure international money transfers',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://payvel.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About Us',
                item: 'https://payvel.com/about-us',
              },
            ],
          }),
        }}
      />
      
      <AboutUs />
    </>
  );
}