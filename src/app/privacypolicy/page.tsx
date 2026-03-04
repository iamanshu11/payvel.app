import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Payvel - Data Protection & User Privacy",
  description:
    "Read Payvel's Privacy Policy to understand how we collect, use, and protect your personal data with transparency and security.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400">Last Updated: 02 March 2026</p>
        </div>

        {/* Section 1: Introduction */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Payvel PTY LTD (ABN 27 673 904 599) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
            committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and
            the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) (AML/CTF Act).
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, store, and protect your
            personal information, including information collected to meet our obligations under the
            AML/CTF Act.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.1 Personal Information</h3>
            <p>
              We collect personal information necessary to provide our services and comply with
              legal obligations, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name (including any previous names)</li>
              <li>Date of birth</li>
              <li>Residential address and previous addresses</li>
              <li>Contact details (phone number, email address)</li>
              <li>Government-issued identification details (driver&apos;s licence, passport, Medicare card)</li>
              <li>Occupation and employment details</li>
              <li>Financial information and transaction history</li>
              <li>Source of funds and wealth information</li>
              <li>Business activities and purpose of transactions</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.2 AML/CTF Specific Information</h3>
            <p>To comply with the AML/CTF Act, we collect additional information including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Beneficial ownership information for companies, trusts, and other entities</li>
              <li>Details of politically exposed persons (PEPs) status</li>
              <li>Information about the nature and purpose of the business relationship</li>
              <li>Transaction patterns and account activity</li>
              <li>Information to verify your identity and assess money laundering and terrorism financing risks</li>
              <li>Details of authorised signatories and controllers</li>
            </ul>
          </div>
        </section>

        {/* Section 3: How We Collect Information */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">3. How We Collect Information</h2>
          <p>We collect information:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Directly from you through application forms, identification documents, and communications</li>
            <li>From third-party verification services and databases</li>
            <li>Through electronic verification systems</li>
            <li>From publicly available sources</li>
            <li>From credit reporting agencies</li>
            <li>Through monitoring of transactions and account activity</li>
            <li>From other entities within our corporate group</li>
          </ul>
        </section>

        {/* Section 4: Why We Collect Your Information */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">4. Why We Collect Your Information</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Primary Purposes</h3>
            <p>We collect and use your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide you with our products and services</li>
              <li>Verify your identity and assess your application</li>
              <li>Manage your account and process transactions</li>
              <li>Communicate with you about your account</li>
              <li>Improve our products and services</li>
              <li>Conduct market research and analysis</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.2 AML/CTF Compliance Purposes</h3>
            <p>We are required by law to collect and use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Verify your identity as required under the AML/CTF Act</li>
              <li>Conduct initial and ongoing customer due diligence (CDD)</li>
              <li>Assess and manage money laundering, terrorism financing, and proliferation financing risks</li>
              <li>Monitor transactions for suspicious activity</li>
              <li>Report to the Australian Transaction Reports and Analysis Centre (AUSTRAC)</li>
              <li>Comply with sanctions and counter-terrorism financing obligations</li>
              <li>Maintain records as required by law</li>
              <li>Respond to requests from law enforcement and regulatory authorities</li>
            </ul>
            <p>
              <strong>Important:</strong> Our collection and use of information for AML/CTF
              compliance is a legal requirement. We cannot provide services to you if you do not
              provide the required information.
            </p>
          </div>
        </section>

        {/* Section 5: Disclosure of Your Information */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">5. Disclosure of Your Information</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 General Disclosures</h3>
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Service providers and contractors who assist us in operating our business</li>
              <li>Payment processors and financial institutions</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
              <li>Related entities within our corporate group</li>
              <li>Third parties with your consent</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.2 AML/CTF and Regulatory Disclosures</h3>
            <p>We may disclose your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>AUSTRAC – for reporting suspicious matters, threshold transactions, and other regulatory reports</li>
              <li>Australian Federal Police and state/territory police – for investigation of suspected criminal activity</li>
              <li>Australian Securities and Investments Commission (ASIC) and other regulatory bodies</li>
              <li>Foreign government agencies – under international information-sharing agreements</li>
              <li>Identity verification service providers – to verify your identity and assess risk</li>
              <li>Law enforcement agencies – when required by law or court order</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.3 Tipping Off Prohibition</h3>
            <p>
              We are prohibited by law from disclosing that we have submitted, or may submit, a
              suspicious matter report to AUSTRAC. We cannot inform you if your information has
              been reported to authorities where doing so could prejudice an investigation.
            </p>
          </div>
        </section>

        {/* Section 6: Data Quality and Security */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">6. Data Quality and Security</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.1 Accuracy</h3>
            <p>
              We take reasonable steps to ensure the personal information we collect and use is
              accurate, complete, and up to date. You can help us by notifying us of any changes to
              your information.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.2 Security Measures</h3>
            <p>
              We implement physical, technical, and administrative security measures to protect your
              information from:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Unauthorised access, use, or disclosure</li>
              <li>Misuse, interference, and loss</li>
              <li>Modification or destruction</li>
            </ul>
            <p>Our security measures include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Secure storage systems with restricted access</li>
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on privacy and security obligations</li>
              <li>Secure disposal of information when no longer required</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.3 Third-Party Security</h3>
            <p>
              When we engage third-party service providers, we require them to maintain appropriate
              security measures and comply with privacy and AML/CTF obligations.
            </p>
          </div>
        </section>

        {/* Section 7: Record Retention */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">7. Record Retention</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.1 AML/CTF Retention Requirements</h3>
            <p>
              Under the AML/CTF Act, we are required to retain records for at least 7 years after:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The end of our relationship with you, or</li>
              <li>The completion of a transaction</li>
            </ul>
            <p>This includes records of:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Customer identification and verification procedures</li>
              <li>Transaction details and account activity</li>
              <li>Risk assessments and due diligence measures</li>
              <li>Reports submitted to AUSTRAC</li>
              <li>Communications and correspondence</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.2 Extended Retention</h3>
            <p>We may retain information for longer than 7 years if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Required by other laws or regulations</li>
              <li>Necessary for ongoing investigations or legal proceedings</li>
              <li>Required to establish, exercise, or defend legal claims</li>
              <li>You have consented to longer retention</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.3 Secure Destruction</h3>
            <p>
              When information is no longer required, we securely destroy or de-identify it in
              accordance with our data retention and destruction policies.
            </p>
          </div>
        </section>

        {/* Section 8: Your Rights and Choices */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">8. Your Rights and Choices</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.1 Access to Your Information</h3>
            <p>
              You have the right to request access to the personal information we hold about you. To
              make an access request, contact us using the details in Section 12.
            </p>
            <p>We will respond to your request within a reasonable timeframe, usually within 30 days.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.2 Limitations on Access</h3>
            <p>We may deny or limit access to your information if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Providing access would be unlawful</li>
              <li>Disclosure would prejudice an investigation or enforcement activity</li>
              <li>Disclosure would reveal information about a suspicious matter report</li>
              <li>Providing access would pose a serious threat to life, health, or safety</li>
              <li>The request is frivolous or vexatious</li>
              <li>Denying access is required or authorised by law</li>
            </ul>
            <p>
              If we deny access, we will provide you with written reasons (unless doing so would be
              unlawful).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.3 Correction of Information</h3>
            <p>
              If you believe information we hold about you is inaccurate, incomplete, or out of
              date, you can request correction. We will take reasonable steps to correct the
              information or, if we disagree, attach a statement to the record noting your view.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.4 Consequences of Not Providing Information</h3>
            <p>
              If you do not provide the information we request, particularly information required
              for AML/CTF compliance:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We may be unable to provide services to you</li>
              <li>We may be required to close your account</li>
              <li>We may be unable to process transactions</li>
              <li>We may be required to report the matter to AUSTRAC</li>
            </ul>
          </div>
        </section>

        {/* Section 9: Cross-Border Disclosure */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">9. Cross-Border Disclosure</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">9.1 Overseas Transfers</h3>
            <p>We may disclose your personal information to recipients located overseas, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Third party service providers in Africa, Asia, Europe and America</li>
              <li>Related entities in our corporate group</li>
              <li>Foreign regulatory authorities under information-sharing agreements</li>
            </ul>
            <p>
              When we disclose information overseas, we take reasonable steps to ensure recipients
              comply with privacy obligations equivalent to those under Australian law. Recipients
              are individuals you&apos;ve engaged in financial transaction using our platforms, and/or
              third party partners in different jurisdictions where Payvel provides services.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">9.2 International Transactions</h3>
            <p>
              If you send or receive international funds transfers, we are required to collect and
              report information about these transactions to AUSTRAC, including details of the
              sender, recipient, and intermediary institutions.
            </p>
          </div>
        </section>

        {/* Section 10: Technology and Digital Identity */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">10. Technology and Digital Identity</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">10.1 Electronic Verification</h3>
            <p>
              We may use electronic verification systems and third-party digital identity service
              providers to verify your identity. These systems may access government databases and
              other information sources.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">10.2 Automated Decision-Making</h3>
            <p>We may use automated systems to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Assess transaction risk</li>
              <li>Detect suspicious activity</li>
              <li>Screen against sanctions lists</li>
              <li>Monitor account behaviour</li>
            </ul>
            <p>
              If an automated system makes a decision that significantly affects you, you can
              request human review of that decision.
            </p>
          </div>
        </section>

        {/* Section 11: Changes to This Policy */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Our business practices</li>
            <li>Legal and regulatory requirements</li>
            <li>Technology and security measures</li>
          </ul>
          <p>We will notify you of significant changes by:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Posting the updated policy on our website</li>
            <li>Sending you an email notification</li>
            <li>Displaying a notice when you next access our services</li>
          </ul>
          <p>The current version will always be available on our website with the date of last update.</p>
        </section>

        {/* Section 12: Complaints and Contact */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">12. Complaints and Contact</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">12.1 Privacy Complaints</h3>
            <p>
              If you have a complaint about how we have handled your personal information, please
              contact our Privacy Officer:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email: <a href="mailto:privacy@payvel.com.au" className="text-blue-500 dark:text-blue-400 hover:underline">privacy@payvel.com.au</a></li>
              <li>Phone: 0734961581</li>
            </ul>
            <p>We will:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Acknowledge your complaint within 7 days</li>
              <li>Investigate the matter thoroughly</li>
              <li>Respond to you within 30 days with our decision</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">12.2 External Complaints</h3>
            <p>If you are not satisfied with our response, you can lodge a complaint with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Office of the Australian Information Commissioner (OAIC)</li>
              <li>Phone Number: 1300 363 992</li>
              <li>Email: <a href="mailto:enquiries@oaic.gov.au" className="text-blue-500 dark:text-blue-400 hover:underline">enquiries@oaic.gov.au</a></li>
              <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">www.oaic.gov.au</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">12.3 General Enquiries</h3>
            <p>For general enquiries about this Privacy Policy or how we handle your information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Email: <a href="mailto:Enquiries@payvel.com.au" className="text-blue-500 dark:text-blue-400 hover:underline">Enquiries@payvel.com.au</a></li>
              <li>Phone: 0734961581</li>
            </ul>
          </div>
        </section>

        {/* Section 13: Consent and Acknowledgement */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">13. Consent and Acknowledgement</h2>
          <p>
            By providing your personal information and using our services, you acknowledge that you
            have read and understood this Privacy Policy, including how we collect, use, and
            disclose your information for AML/CTF compliance purposes.
          </p>
          <p>You understand that:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>We are required by law to collect and verify your identity</li>
            <li>We may disclose your information to AUSTRAC and other authorities</li>
            <li>We cannot always inform you if we have reported suspicious activity</li>
            <li>Failure to provide required information may result in us being unable to provide services to you</li>
          </ul>
          <p className="pt-4">
            <strong>Payvel PTY LTD</strong>
            <br />
            ABN: 27 673 904 599
            <br />
            Last Updated: 02 March 2026
          </p>
        </section>
      </div>
    </main>
  );
}
