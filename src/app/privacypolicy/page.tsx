import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Truoco - Data Protection & User Privacy",
  description:
    "Read Truoco’s Privacy Policy to understand how we collect, use, and protect your personal data with transparency and security.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mx-auto  text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
             {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-2"><strong>Effective Date:</strong> August 28, 2025</p>
      <p className="mb-8"><strong>Last Updated:</strong> August 28, 2025</p>

      {/* Sections */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          Welcome to Truoco. This Privacy Policy outlines how Prymera Consulting Pvt. Ltd.
          ("Truoco," "we," "us," or "our") collects, uses, protects, and discloses
          information in connection with our identity verification services (the "Services").
        </p>
        <p>
          Our mission is to create a more trusted and secure digital world. We are committed
          to handling personal data responsibly and transparently. This policy is designed to
          help you understand our privacy practices.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">1. Our Role: Data Processor</h2>
        <p>
          In the context of providing identity verification, Truoco acts as a Data Processor
          on behalf of our business clients (the "Clients"). Our Clients are the Data
          Controllers who determine the purpose and means of processing personal data.
        </p>
        <p>
          This policy primarily explains how we process the data of our Clients' end-users
          ("End-Users") upon the instruction of our Clients. It also covers the data we
          collect from visitors to our website and our Clients' use of our dashboard.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">2. Information We Process</h2>

        <h3 className="text-xl font-semibold mt-6">2.1 Business Client Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Account Information:</strong> Full name, business email, and phone number.</li>
          <li><strong>Company Information:</strong> Company name, address, and industry.</li>
          <li><strong>Billing Information:</strong> Billing address, payment details, and transaction history.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and usage data on the Truoco dashboard.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">2.2 End-User Data</h3>
        <p>To perform identity verification, our Clients submit End-Users' data to our platform:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Document Data:</strong> High-resolution ID images (Passport, Aadhaar, PAN, etc.).</li>
          <li><strong>Biometric Data:</strong> Facial geometry data, liveness detection, video selfies.</li>
          <li><strong>Personal Details:</strong> Full name, date of birth, address, nationality.</li>
          <li><strong>Device Data:</strong> IP address, device type, browser info.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">3. How We Use Information</h2>

        <h3 className="text-xl font-semibold mt-6">3.1 Business Client Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create and manage your Truoco account.</li>
          <li>Process payments and provide customer support.</li>
          <li>Communicate about updates, security alerts, and new features.</li>
          <li>Improve our website and services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">3.2 End-User Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Verify authenticity of identity documents.</li>
          <li>Match selfie with ID photo using biometrics.</li>
          <li>Screen against AML, sanctions, and PEP lists.</li>
          <li>Detect and prevent fraud.</li>
          <li>Generate verification results for Clients.</li>
        </ul>
        <p className="font-medium text-red-500 dark:text-red-400">
          We never use End-User Personal Data for marketing, advertising, or selling.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Encryption:</strong> TLS 1.2+ in transit, AES-256 at rest.</li>
          <li><strong>Access Control:</strong> Strict least-privilege access.</li>
          <li><strong>Auditing:</strong> Logs, monitoring, audits, penetration tests.</li>
          <li><strong>Infrastructure:</strong> Hosted with SOC 2 / ISO 27001 providers.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">5. Data Retention</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Business Client Data:</strong> Retained during business relationship & legal needs.</li>
          <li><strong>End-User Data:</strong> Retained per Client instructions & laws. Securely deleted after expiry.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">6. Data Sharing</h2>
        <p>We don’t sell personal data. We only share with trusted sub-processors:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cloud Infrastructure Providers</li>
          <li>Sanctions List Providers</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">7. International Transfers</h2>
        <p>
          Data may cross borders. For EU data, we use Adequacy Decisions or
          Standard Contractual Clauses (SCCs).
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">8. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to Access</li>
          <li>Right to Rectification</li>
          <li>Right to Erasure (Forgotten)</li>
          <li>Right to Restrict Processing</li>
        </ul>
        <p>
          For End-Users: Please contact the Client (Data Controller) that asked
          you to verify your identity. We support Clients in fulfilling rights.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">9. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Clients will be
          notified of material changes, and the “Last Updated” date will be updated.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p>
          <strong>Email:</strong> connect@truoco.com <br />
          <strong>Address:</strong> GN34/1, Aurora Water Front, Unit 10, Floor 16th,  
          Sector V, Salt Lake, Kolkata 700091 India
        </p>
      </section>
        </div>
    </main>
  );
}
