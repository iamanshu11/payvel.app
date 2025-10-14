import type { Metadata } from 'next';
import DownloadApp from '@/components/ui/DownloadApp';

export const metadata: Metadata = {
  title: 'Download Our App - Social Remit',
  description:
    'Get the Social Remit app for secure, fast, and affordable money transfers worldwide. Available on iOS and Android.',
  openGraph: {
    title: 'Download Social Remit App',
    description:
      'Send and receive money instantly with Social Remit. Scan QR or get the download link directly to your phone.',
    url: 'https://yourdomain.com/download-app',
    siteName: 'Social Remit',
    images: [
      {
        url: '/images/og-download-app.png',
        width: 1200,
        height: 630,
        alt: 'Social Remit App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function DownloadAppPage() {
  return <DownloadApp />;
}
