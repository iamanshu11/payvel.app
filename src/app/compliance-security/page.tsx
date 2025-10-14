import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Security | Payvel - Regulatory & Data Protection",
  description:
    "Learn about Payvel’s commitment to compliance, Anti-Money Laundering (AML), and robust security measures to protect your data and money.",
  alternates: { canonical: "/compliance-security" },
};

export default function ComplianceSecurityPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Compliance & <span className="gradient-text">Security</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Our Commitment to Your Safety</p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p>
              At Payvel, the security of your money and your data is our highest priority. We have built our platform on a foundation of robust security measures and strict adherence to regulatory standards. This page provides an overview of our compliance framework.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Regulatory Oversight</h2>

            <h3 className="text-xl font-semibold mt-2">Australia</h3>
            <p>
              Payvel PTY LTD is a registered entity in Australia and operates as a money services business. We are regulated by the Australian Transaction Reports and Analysis Centre (AUSTRAC), the Australian government financial intelligence agency responsible for monitoring financial transactions to detect and prevent money laundering, organised crime, tax evasion, welfare fraud, and terrorism financing.
            </p>

            <h3 className="text-xl font-semibold mt-2">USA & Canada</h3>
            <p>
              To facilitate secure and compliant money transfers to the United States and Canada, Payvel operates in a formal arrangement with Cybrid, a licensed financial services provider in North America. This partnership ensures that all transactions are processed in full compliance with local laws and regulations, including those set by FinCEN in the USA and FINTRAC in Canada.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Anti-Money Laundering (AML) Program</h2>
            <p>We have a comprehensive Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) program. This includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Customer Identification Program (CIP):</strong> We are required by law to verify the identity of our users. This involves collecting and verifying personal information to ensure our platform is not used for illicit activities.
              </li>
              <li>
                <strong>Transaction Monitoring:</strong> We utilize sophisticated systems to monitor transactions for suspicious activity.
              </li>
              <li>
                <strong>Reporting:</strong> We comply with all legal obligations to report suspicious transactions to the relevant authorities, such as AUSTRAC.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Data Security and Privacy</h2>
            <p>Protecting your personal information is paramount. We employ bank-level security measures to safeguard your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Encryption:</strong> All data, both in transit and at rest, is protected with 256-bit AES encryption.
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Our systems are built on a secure infrastructure with regular security audits and vulnerability assessments.
              </li>
              <li>
                <strong>Privacy by Design:</strong> We adhere to the principles outlined in our{" "}
                <a
                  href="/privacypolicy"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                to ensure your data is handled responsibly.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Questions or Concerns</h2>
            <p>
              If you have any questions about our compliance program or security practices, please do not hesitate to{" "}
              <a
                href="/contact"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                contact our support team
              </a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
