import type { Metadata } from 'next';
import HelpCenterPage from '@/components/ui/HelpCenterPage';

export const metadata: Metadata = {
  title: 'Help Center - Get Support & Answers | Payvel',
  description: 'Find answers to your questions about Payvel money transfers, account setup, security, fees, and more. Get help from our comprehensive support center.',
  keywords: [
    'Payvel help',
    'money transfer support',
    'Payvel FAQ',
    'transfer help',
    'account help',
    'payment support',
    'Payvel support center',
    'customer service',
    'transfer questions',
    'remittance help'
  ],
  authors: [{ name: 'Payvel Support Team' }],
  creator: 'Payvel',
  publisher: 'Payvel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payvel.com/help-center',
    title: 'Help Center - Get Support & Answers | Payvel',
    description: 'Find answers to your questions about Payvel money transfers, account setup, security, fees, and more.',
    siteName: 'Payvel',
    images: [
      {
        url: 'https://payvel.com/og-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Payvel Help Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Center - Get Support & Answers | Payvel',
    description: 'Find answers to your questions about Payvel money transfers, account setup, security, and more.',
    images: ['https://payvel.com/twitter-help.jpg'],
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
    canonical: 'https://payvel.com/help-center'
  }
};

export default function HelpCenterPageWrapper() {
  // FAQPage Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I create a Payvel account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It's simple! Download the Payvel app from the App Store or Google Play Store. Open the app and follow the on-screen instructions to sign up. We'll guide you through a quick identity verification process to secure your account and comply with financial regulations."
        }
      },
      {
        '@type': 'Question',
        name: 'How long does a transfer take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most Payvel transfers are lightning-fast and arrive within minutes. In some cases, processing times can vary depending on the recipient's bank or payment partner. You can always track the status of your transfer in the app."
        }
      },
      {
        '@type': 'Question',
        name: 'Which countries can I send money to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are constantly expanding our global network. Currently, our services focus on transfers originating from Australia to various countries across Africa. For the most up-to-date list of supported destination countries, please check within the Payvel app.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is my money and personal information secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Your security is our top priority. We use bank-level 256-bit encryption to protect all your data and transactions. As an AUSTRAC regulated entity in Australia, we adhere to the strictest security and compliance standards to ensure your money is safe.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are transfers really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we proudly offer transfers with a $0 transaction fee. We believe in transparency, so there are no hidden costs. Our revenue is generated from a small margin on the foreign exchange rate, which is always clearly displayed to you before you confirm any transfer.'
        }
      }
    ]
  };

  // WebSite Schema with Search Action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Payvel Help Center',
    url: 'https://payvel.com/help-center',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://payvel.com/help-center?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Payvel',
    url: 'https://payvel.com',
    logo: 'https://payvel.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      availableLanguage: ['English'],
      areaServed: ['AU', 'US', 'CA']
    }
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
        name: 'Help Center',
        item: 'https://payvel.com/help-center'
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data for FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      {/* JSON-LD Structured Data for Website with Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      {/* JSON-LD Structured Data for Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <HelpCenterPage />
    </>
  );
}