import type { Metadata } from 'next';
import FAQPage from '@/components/ui/FAQItem';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Payvel',
  description: 'Find answers to common questions about Payvel money transfers, fees, security, payment methods, and more. Get help with international money transfers.',
  keywords: [
    'Payvel FAQ',
    'money transfer questions',
    'international transfer help',
    'remittance FAQ',
    'transfer fees',
    'payment methods',
    'money transfer security',
    'Payvel support'
  ],
  authors: [{ name: 'Payvel Team' }],
  creator: 'Payvel',
  publisher: 'Payvel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payvel.com/faq',
    title: 'FAQ - Frequently Asked Questions | Payvel',
    description: 'Get answers to your questions about Payvel money transfers, fees, security, and more.',
    siteName: 'Payvel',
    images: [
      {
        url: 'https://payvel.com/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Payvel FAQ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Frequently Asked Questions | Payvel',
    description: 'Get answers to your questions about Payvel money transfers, fees, security, and more.',
    images: ['https://payvel.com/twitter-faq.jpg'],
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
    canonical: 'https://payvel.com/faq'
  }
};

export default function FAQPageWrapper() {
  // FAQ Schema for rich snippets in search results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I get started with Payvel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Getting started is simple! Just download the Payvel app from the App Store or Google Play, create an account in a few minutes by following the on-screen instructions, and you can start your first transfer right away.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the fees for sending money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Payvel is proud to offer transfers with zero hidden fees. The exchange rate you see in the app is the rate you get, and any small transaction fee will be clearly displayed before you confirm your transfer. We believe in full transparency.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does a transfer take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most transfers with Payvel are instant or arrive within minutes. However, some transfers may take longer depending on the recipient's country and their bank's processing times. You can always track the status of your transfer in real-time within the app."
        }
      },
      {
        '@type': 'Question',
        name: 'Is my money and data secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Security is our top priority. We use bank-level encryption (256-bit) and secure protocols to protect your money and personal information. We are also regulated by AUSTRAC in Australia and work with licensed partners in other countries to ensure the highest security standards.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where can I send money FROM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, you can send money from Australia, the United States, and Canada. We are continuously working to expand our services to more countries. For services in the US and Canada, we operate in partnership with the licensed entity, Cybrid.'
        }
      },
      {
        '@type': 'Question',
        name: 'What payment methods can I use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can fund your transfers using a variety of methods, including bank transfer, debit card, and credit card. The available options may vary slightly depending on your country of residence.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I track my transfer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can track the status of your transfer in real-time directly from the Payvel app. We provide live updates from the moment you send your money until it is received by your recipient, giving you complete peace of mind.'
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
        name: 'FAQ',
        item: 'https://payvel.com/faq'
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
      {/* JSON-LD Structured Data for Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <FAQPage />
    </>
  );
}