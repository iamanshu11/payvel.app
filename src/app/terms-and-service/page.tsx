import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Payvel - User Agreement",
  description:
    "Read Payvel's Terms of Service to understand the rules and guidelines for using our financial services, applications, and website.",
  alternates: { canonical: "/terms-and-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Payvel PTY LTD (Remittance Services) · Last Updated:  02 March 2026
          </p>
        </div>

        {/* Section 1: About These Terms */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">1. About These Terms</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">1.1 Agreement</h3>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of international money
              transfer and remittance services (&quot;Services&quot;) provided by Payvel PTY LTD
              (ABN 27 673 904 599) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;Remittance
              Provider&quot;).
            </p>
            <p>
              By using our Services, you agree to be bound by these Terms, our Privacy Policy, our
              AML/CTF Policy, and our Transaction Cancellation Policy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">1.2 Regulatory Information</h3>
            <p>
              We are a registered remittance service provider with the Australian Transaction
              Reports and Analysis Centre (AUSTRAC).
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>AUSTRAC Registration Number: 100866211</li>
              <li>Australian Business Number (ABN): 27 673 904 599</li>
            </ul>
            <p>We comply with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) (AML/CTF Act)</li>
              <li>Australian Consumer Law</li>
              <li>Privacy Act 1988 (Cth)</li>
              <li>Payments System Modernisation Act 2025</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">1.3 Definitions</h3>
            <p>In these Terms:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>&quot;You&quot;, &quot;your&quot;, &quot;Customer&quot; means the person or entity using our Services</li>
              <li>&quot;Sender&quot; means the person initiating the money transfer</li>
              <li>&quot;Recipient&quot; or &quot;Beneficiary&quot; means the person or entity receiving the transferred funds</li>
              <li>&quot;Transfer&quot; means an international money transfer transaction</li>
              <li>&quot;Exchange Rate&quot; means the rate at which we convert one currency to another</li>
              <li>&quot;Business Day&quot; means a day other than Saturday, Sunday, or a public holiday in Australia</li>
              <li>&quot;Designated Service&quot; means a remittance service as defined under the AML/CTF Act</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Eligibility and Account Registration */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">2. Eligibility and Account Registration</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.1 Eligibility Requirements</h3>
            <p>To use our Services, you must:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Be an Australian resident or have a valid Australian visa</li>
              <li>Have a valid form of identification acceptable under the AML/CTF Act</li>
              <li>Not be listed on any sanctions lists or prohibited from receiving financial services</li>
              <li>Provide accurate and complete information during registration</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.2 Account Registration</h3>
            <p>To create an account:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Complete our online registration form or in-person application</li>
              <li>Provide required identification documents (see Section 3)</li>
              <li>Verify your email address and/or mobile phone number</li>
              <li>Accept these Terms and our Privacy Policy</li>
              <li>Complete any additional verification steps we require</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.3 Account Security</h3>
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorised access or security breach</li>
              <li>Using strong passwords and enabling two-factor authentication where available</li>
              <li>Using your login codes at all times, and not sharing them with third persons</li>
              <li>Not sharing your account access with any other person</li>
            </ul>
            <p>
              We are not liable for losses resulting from unauthorised account access if you fail to
              maintain adequate security.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">2.4 Account Suspension or Closure</h3>
            <p>We may suspend or close your account immediately if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You breach these Terms</li>
              <li>We suspect fraudulent, illegal, or suspicious activity</li>
              <li>Required by law, court order, or regulatory authority</li>
              <li>You fail to provide required identification or information</li>
              <li>You provide false or misleading information</li>
              <li>Your account remains inactive for 12 months</li>
              <li>We cease offering Services in your location</li>
            </ul>
            <p>
              We will provide notice where legally permitted, but may act without notice where
              required for legal, regulatory, or security reasons.
            </p>
          </div>
        </section>

        {/* Section 3: Identity Verification and AML/CTF Compliance */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">3. Identity Verification and AML/CTF Compliance</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.1 Know Your Customer (KYC) Requirements</h3>
            <p>
              Under the AML/CTF Act, we must verify your identity before providing Services. You
              must provide:
            </p>
            <p className="font-medium mt-2">For Individuals:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full legal name (including any previous names)</li>
              <li>Date of birth</li>
              <li>Residential address (not a PO Box)</li>
              <li>At least one primary photographic identification document: Australian driver&apos;s licence, or Australian passport, or Foreign passport with Australian visa</li>
              <li>Secondary identification if required (e.g., Medicare card, birth certificate, utility bill)</li>
            </ul>
            <p className="font-medium mt-2">For Businesses:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Business name and trading name</li>
              <li>ABN or ACN</li>
              <li>Business address</li>
              <li>Beneficial owner information (individuals who own 25% or more)</li>
              <li>Company extract or trust deed</li>
              <li>Identification for all beneficial owners and authorised signatories</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.2 Verification Process</h3>
            <p>We will verify your identity by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Checking your documents against government databases</li>
              <li>Using electronic verification services</li>
              <li>Conducting manual document verification</li>
              <li>Requesting additional information or documents if needed</li>
            </ul>
            <p>Verification typically takes 1–24 hours but may take longer for complex cases.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.3 Enhanced Due Diligence</h3>
            <p>We may require enhanced due diligence if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You are a politically exposed person (PEP) or family member of a PEP</li>
              <li>You are sending large or frequent transfers</li>
              <li>The transfer involves a high-risk country</li>
              <li>We identify unusual transaction patterns</li>
              <li>Required by our risk assessment procedures</li>
            </ul>
            <p>Enhanced due diligence may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Additional identification documents</li>
              <li>Source of funds verification (payslips, bank statements, sale contracts)</li>
              <li>Source of wealth information</li>
              <li>Purpose of transfer documentation</li>
              <li>Relationship to recipient verification</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.4 Ongoing Monitoring</h3>
            <p>We continuously monitor transactions for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Unusual patterns or behaviour</li>
              <li>Compliance with sanctions and watch lists</li>
              <li>Consistency with your profile and stated purpose</li>
              <li>Money laundering or terrorism financing indicators</li>
            </ul>
            <p>
              We may request updated information or documentation at any time to maintain compliance.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.5 Suspicious Matter Reporting</h3>
            <p>
              If we suspect a transaction involves money laundering, terrorism financing, or other
              criminal activity:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We must report it to AUSTRAC</li>
              <li>We cannot inform you that we have made or will make a report (tipping off prohibition)</li>
              <li>We may delay, block, or refuse the transaction</li>
              <li>We may be required to freeze funds or close your account</li>
              <li>We will not be liable for any losses resulting from compliance with our legal obligations</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.6 Sanctions Screening</h3>
            <p>We screen all transactions against:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Australian sanctions lists (Department of Foreign Affairs and Trade)</li>
              <li>United Nations sanctions lists</li>
              <li>International sanctions lists (US OFAC, EU, UK)</li>
            </ul>
            <p>
              We will block transactions involving sanctioned individuals, entities, or countries.
              Blocked funds may be frozen or reported to authorities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.7 Countries we don&apos;t offer services to and from</h3>
            <p>
              DR Congo, Congo, Iran, Syria, Myanmar, South Sudan, Zimbabwe, Afghanistan, Belarus,
              Yemen, Venezuela, Sudan, North Korea, Iraq, Libya, Somalia, Lebanon, Russia/Ukraine
              (Crimea, Donetsk, Luhansk regions), Belarus, Guinea Bissau, Burkina Faso.
            </p>
            <p>
              We will block transactions to and from the above countries. This may be subject to
              review.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.8 Record Keeping</h3>
            <p>
              We retain your information and transaction records for at least 7 years as required by
              the AML/CTF Act. See our Privacy Policy for details on how we handle your information.
            </p>
          </div>
        </section>

        {/* Section 4: How Our Services Work */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">4. How Our Services Work</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Available Services</h3>
            <p>We offer the following remittance services:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bank deposit transfers – Funds deposited directly to recipient&apos;s bank account</li>
              <li>Mobile wallet transfers – Funds sent to recipient&apos;s mobile wallet (if available)</li>
            </ul>
            <p>Service availability varies by destination country.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.2 Transfer Process</h3>
            <p>To send a transfer:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Log in to your account or visit our location</li>
              <li>Enter transfer details: Recipient details as shown in the application, Recipient bank details, Amount to send (in AUD or destination currency), Purpose of transfer</li>
              <li>Review the quote: Exchange rate, Transfer fees, Amount recipient will receive, Estimated delivery time (Instant to 48 hours except technical delay)</li>
              <li>Provide payment: PayID</li>
              <li>Confirm and authorise the transfer</li>
              <li>Receive confirmation with transaction reference number</li>
              <li>Complete Payment: Enter the transaction reference number/ID as the reference in your bank app.</li>
              <li>Process completed</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.3 Payment Methods</h3>
            <p>We accept the following payment methods:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>PayID – Processing time: Instant to 1 business day</li>
            </ul>
            <p>
              Payment method availability and fees may vary. All fees will be disclosed before you
              authorise the transfer.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.4 Transfer Limits</h3>
            <p>The following limits apply:</p>
            <p className="font-medium mt-2">Transaction Limits:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Minimum transfer: $10 AUD</li>
              <li>Maximum transfer amount per transaction: $10,000, applicable only to customers who have successfully completed EDD verification.</li>
            </ul>
            <p className="font-medium mt-2">Daily/Monthly/Yearly Limits:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Monthly limit: $10,000 AUD</li>
              <li>Daily limit: $5,000 AUD (single or combined)</li>
              <li>Yearly Limit: $120,000</li>
            </ul>
            <p>
              We may increase limits for verified customers or reduce limits based on risk
              assessment. Higher limits may be available upon request and additional verification.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.5 Prohibited Transactions</h3>
            <p>You must not use our Services to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Send or receive funds for illegal purposes</li>
              <li>Purchase illegal goods or services</li>
              <li>Engage in money laundering or terrorism financing</li>
              <li>Violate sanctions or export control laws</li>
              <li>Send funds to or from sanctioned countries or individuals</li>
              <li>Conduct transactions involving: Illegal drugs or drug paraphernalia, Weapons, ammunition, or explosives, Counterfeit goods, Stolen property, Gambling or betting services (where prohibited), Adult content or services (where prohibited), Pyramid schemes or multi-level marketing, Cryptocurrency purchases (unless specifically permitted)</li>
            </ul>
            <p>
              We reserve the right to refuse any transaction we believe violates these Terms or
              applicable laws.
            </p>
          </div>
        </section>

        {/* Section 5: Pricing and Fees */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">5. Pricing and Fees</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 Fee Structure</h3>
            <p>Our fees consist of:</p>
            <p className="font-medium mt-2">Transfer Fees:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Transaction fee: $3 or 0.5% of transfer amount</li>
              <li>Fees are determined by us.</li>
            </ul>
            <p className="font-medium mt-2">Payment Method Fees:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bank transfer/PayID</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.2 Exchange Rates</h3>
            <p>Our exchange rates include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The live exchange rate we obtain from third party</li>
              <li>Our margin or markup</li>
            </ul>
            <p className="font-medium mt-2">Exchange Rate Types:</p>
            <p><strong>Locked Rate:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We guarantee the exchange rate for 15 minutes to 72 hours</li>
              <li>The rate is fixed when you authorise the transfer</li>
              <li>The rate lock expires if you don&apos;t complete payment within the specified time</li>
            </ul>
            <p><strong>Market Rate:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The rate applies at the time we process your transfer</li>
              <li>Rates fluctuate based on market conditions</li>
              <li>You accept the currency risk</li>
            </ul>
            <p>
              We display the exchange rate and total cost before you authorise the transfer. The
              rate shown is the rate that will apply to your transfer.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.3 Fee Disclosure</h3>
            <p>Before you authorise a transfer, we will clearly display:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The amount you are sending (in AUD)</li>
              <li>The exchange rate</li>
              <li>All fees charged by us</li>
              <li>The amount the recipient will receive (in destination currency)</li>
              <li>The total cost to you</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.4 Third-Party Fees</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Intermediary Bank Fees:</strong> Some transfers pass through intermediary
                banks that may deduct fees. Where this is possible, we will inform you before you
                authorise the transfer.
              </li>
              <li>
                <strong>Recipient Bank Fees:</strong> The recipient&apos;s bank may charge fees for
                receiving international transfers. These fees are set by the recipient&apos;s bank
                and are beyond our control. We will inform you if recipient bank fees commonly apply
                to your destination.
              </li>
              <li>
                <strong>Agent Fees:</strong> For cash pickup services, the agent location may charge
                additional fees. We will disclose these fees where known.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.5 Fee Changes</h3>
            <p>We may change our fees at any time. Changes will:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Be published on our website</li>
              <li>Apply to new transfers only (not transfers already authorised)</li>
              <li>Be displayed before you authorise any transfer</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Transfer Delivery and Timeframes */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">6. Transfer Delivery and Timeframes</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.1 Estimated Delivery Times</h3>
            <p>Delivery times vary by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Destination country</li>
              <li>Transfer method (bank deposit, mobile money payment)</li>
              <li>Payment method</li>
              <li>Time of day transfer is sent</li>
              <li>Compliance and verification requirements</li>
            </ul>
            <p className="font-medium mt-2">Typical Delivery Times:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bank deposit: Minutes – 5 business days</li>
              <li>Mobile wallet: Minutes to 24 hours (This feature is not in service at the moment)</li>
            </ul>
            <p>These are estimates only and not guarantees unless we specifically state otherwise.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.2 Guaranteed Delivery</h3>
            <p>Where we offer guaranteed delivery:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We commit to delivering funds by the specified date and time</li>
              <li>If we fail to meet the guarantee, you may be entitled to a refund</li>
              <li>Guarantees are subject to: You providing correct recipient details, No compliance holds or regulatory delays, Recipient bank accepting the transfer, No force majeure events</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.3 Factors Affecting Delivery</h3>
            <p>Delivery may be delayed by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Compliance checks – AML/CTF screening and verification</li>
              <li>Recipient bank processing – Some banks process transfers slower than others</li>
              <li>Intermediary banks – Transfers may pass through multiple banks</li>
              <li>Public holidays and weekends – Banks may not process on non-business days</li>
              <li>Time zones – Transfers sent late may not process until next business day</li>
              <li>Incorrect recipient details – Errors may cause delays or rejection</li>
              <li>High-risk destinations – Additional checks may be required</li>
              <li>Large transfer amounts – May require enhanced verification</li>
              <li>Technical issues – System outages or connectivity problems</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.4 Tracking Your Transfer</h3>
            <p>You can track your transfer by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Logging into your account</li>
              <li>Using the transaction reference number or checking the application timestamps</li>
              <li>Contacting customer support</li>
              <li>Receiving status update notifications (email/SMS)</li>
            </ul>
            <p className="font-medium mt-2">Transfer statuses include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pending payment – Awaiting your payment</li>
              <li>Processing – We are processing your transfer</li>
              <li>In transit – Funds have been sent to recipient&apos;s bank/agent</li>
              <li>Completed – Funds delivered to recipient</li>
              <li>On hold – Transfer delayed for compliance or verification</li>
              <li>Cancelled – Transfer cancelled</li>
              <li>Failed – Transfer unsuccessful (funds will be refunded)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.5 Delivery Confirmation</h3>
            <p>We will notify you when:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your transfer is successfully delivered</li>
              <li>Funds are available for recipient to collect</li>
              <li>There is a delay or issue with your transfer</li>
            </ul>
            <p>You can also contact the recipient to confirm they have received the funds.</p>
          </div>
        </section>

        {/* Section 7: Recipient Information Requirements */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">7. Recipient Information Requirements</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.1 Required Recipient Details</h3>
            <p>You must provide accurate recipient information:</p>
            <p className="font-medium mt-2">For Bank Deposits:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Recipient&apos;s full legal name (as it appears on their bank account)</li>
              <li>Bank name</li>
              <li>Bank account number</li>
              <li>Bank branch code / routing number / SWIFT code / IBAN (as required by destination country)</li>
              <li>Recipient&apos;s address</li>
              <li>Recipient&apos;s phone number (recommended)</li>
            </ul>
            <p className="font-medium mt-2">For Mobile Wallet (N/A):</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Recipient&apos;s full name</li>
              <li>Mobile wallet provider</li>
              <li>Mobile phone number</li>
              <li>Recipient&apos;s address</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.2 Name Matching</h3>
            <p>The recipient name you provide must match:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The name on the recipient&apos;s bank account (for bank deposits)</li>
              <li>The name on the recipient&apos;s government-issued ID (for cash pickup)</li>
              <li>The name registered to the mobile wallet (for mobile wallet transfers)</li>
            </ul>
            <p>Transfers may be delayed or rejected if names do not match.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.3 Verifying Recipient Details</h3>
            <p>You are responsible for ensuring recipient details are correct. We recommend:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Double-checking all details before submitting</li>
              <li>Confirming details directly with the recipient</li>
              <li>Sending a small test transfer for new recipients</li>
              <li>Saving verified recipient details for future use</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">7.4 Incorrect Recipient Details</h3>
            <p>If you provide incorrect recipient details:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The transfer may be delayed, rejected, or sent to the wrong person</li>
              <li>We are not liable if we process the transfer according to the details you provided</li>
              <li>You will be responsible for any fees to recall or correct the transfer</li>
              <li>Recovery of funds is not guaranteed</li>
            </ul>
            <p>If you realise you provided incorrect details, contact us immediately.</p>
          </div>
        </section>

        {/* Section 8: Your Obligations and Responsibilities */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">8. Your Obligations and Responsibilities</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.1 Accurate Information</h3>
            <p>You must:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide true, accurate, and complete information</li>
              <li>Update your information promptly if it changes</li>
              <li>Not impersonate another person or entity</li>
              <li>Not provide false or misleading information</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">8.2 Lawful Use</h3>
            <p>You must use our Services only for lawful purposes and in accordance with these Terms and applicable laws.</p>
          </div>
        </section>

        {/* Section 9: Contact */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <div className="space-y-3">
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:connect@payvel.com"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                connect@payvel.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
