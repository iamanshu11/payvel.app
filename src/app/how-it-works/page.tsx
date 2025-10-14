// how-it-works/page.tsx

import HowItWorks from '@/components/ui/HowItWorks'; // Adjust path as needed
import { Metadata } from 'next';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'How Social Remit Works - Simple 5 Step Process',
  description: 'Learn how to easily send money overseas in 5 simple, secure steps: Download, Verify, Choose Destination, Add Receiver, and Pay and Chill.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorks />
    </main>
  );
}

