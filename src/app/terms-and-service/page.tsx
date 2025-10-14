import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Payvel - User Agreement",
  description:
    "Read Payvel’s Terms of Service to understand the rules and guidelines for using our financial services, applications, and website.",
  alternates: { canonical: "/terms-and-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Last Updated: October 12, 2025</p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p>
              Please read these Terms of Service ("Terms") carefully before using the Payvel mobile application or website (collectively, the "Services") operated by Payvel PTY LTD ("Payvel", "we", "us", "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Description of Services</h2>
            <p>
              Payvel provides a digital money transfer service that allows users to send money from Australia to designated countries. Our services include currency exchange, payment processing, and financial management tools such as budgeting and rate alerts.
            </p>
            <p>
              For transfers to the United States and Canada, Payvel operates in arrangement with Cybrid, a licensed financial services provider in those jurisdictions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. User Accounts and Obligations</h2>
            <p>
              To use our Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your password and for any activities or actions under your account. You must be at least 18 years old to use our Services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Fees and Exchange Rates</h2>
            <p>
              Payvel offers transfers with a $0 transaction fee. We generate revenue from the foreign exchange spread, which is the difference between the rate we receive and the rate provided to you. The exchange rate for your transaction will be clearly displayed to you before you confirm the transfer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Prohibited Activities</h2>
            <p>
              You agree not to use the Services for any unlawful purpose or in any way that could harm our service, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Engaging in fraudulent activities.</li>
              <li>Activities related to money laundering or terrorist financing.</li>
              <li>Violating any applicable laws or regulations.</li>
            </ul>
            <p>We reserve the right to suspend or terminate your account if we suspect any prohibited activity.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Payvel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:connect@payvel.com"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                connect@payvel.com
              </a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
