import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Payvel - Data Protection & User Privacy",
  description:
    "Read Payvel’s Privacy Policy to understand how we collect, use, and protect your personal data with transparency and security.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> October 12, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> October 12, 2025
          </p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p>
              To provide our financial services and comply with legal obligations, we may collect personal information from you, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Personal Identification Information:</strong> Name, date of birth, address, email address, phone number, and government-issued identification.
              </li>
              <li>
                <strong>Financial Information:</strong> Bank account details, transaction history, and information related to the source of funds.
              </li>
              <li>
                <strong>Transaction Details:</strong> Information about your transfers, including recipient details, transfer amount, and currency.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, device type, operating system, and app usage data.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, operate, and maintain our Services.</li>
              <li>Process your transactions and send related information.</li>
              <li>
                Verify your identity in compliance with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) laws.
              </li>
              <li>Improve, personalize, and expand our Services.</li>
              <li>Communicate with you for customer support and marketing purposes.</li>
              <li>Prevent fraud and enhance the security of our platform.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information with third parties in the following situations:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>With Service Providers:</strong> To facilitate our service, such as identity verification services and banking partners.
              </li>
              <li>
                <strong>With Financial Partners:</strong> For transfers to the USA and Canada, we work in arrangement with Cybrid, a licensed entity. We will share necessary transaction information with them to process your transfers in compliance with local regulations.
              </li>
              <li>
                <strong>For Legal Compliance:</strong> We may disclose your information to law enforcement or regulatory bodies, such as AUSTRAC in Australia, when required by law.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p>
              We implement a variety of security measures, including 256-bit encryption, to maintain the safety of your personal information and protect it from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. International Data Transfers</h2>
            <p>
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. As an Australian-based company facilitating transfers to North America and Africa, your data may be processed in these regions through our trusted partners.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To make a request, please contact us.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:connect@payvel.com"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                connect@payvel.com
              </a>{" "}
              or by mail at our registered office in SOUTH RIPLEY QLD 4306, Australia.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
