import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Payvel - Cancellations, Refunds & User Rights",
  description:
    "Read Payvel’s Refund Policy to learn how we handle cancellations, process refunds, and protect your rights with transparency and compliance.",
  alternates: { canonical: "/refund-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Refund Policy</h1>
          <p>
            <strong>Effective Date:</strong> October 12, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> October 12, 2025
          </p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
  {/* Existing Sections Above (1–8)... */}

  <div className="space-y-3">
    <p className="text-lg text-gray-700 dark:text-gray-300">
      At Payvel, we are committed to a fair, transparent, and straightforward refund process. This policy outlines when you can request a refund and how we handle it.
    </p>

    <h3 className="text-xl font-semibold mt-4">1. Cancelling Your Transfer</h3>
    <p>
      You can cancel your transfer for a full refund of the principal amount and any fees you paid to us, provided the transfer has not yet been completed. A transfer is considered 'completed' once the funds have been delivered to the recipient's account or collected by them.
    </p>
    <h4 className="font-semibold">How to Cancel</h4>
    <p>
      The easiest way to cancel is to log in to your Payvel account, go to your transaction history, and select the option to cancel the relevant transfer. We will make every reasonable effort to stop the transaction once we receive your request.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. When Refunds Are Issued</h3>
    <p>We will process a refund in the following situations:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>
        <strong>Successful Cancellation:</strong> If you request a cancellation and we successfully stop the transfer before it is completed.
      </li>
      <li>
        <strong>User Error:</strong> If you provide incorrect recipient details and the transfer is rejected and the funds are returned to us, we will automatically refund the principal amount to you. Please be aware that you are responsible for any fees deducted by intermediary banks or any financial loss incurred due to currency exchange rate fluctuations during this process.
      </li>
      <li>
        <strong>Service Failure:</strong> If we are unable to complete your transfer due to an error on our part, you may be entitled to a refund of our transfer fee. In the event of a major service failure as defined by the Australian Consumer Law, you are entitled to a full refund of both the principal and our fees.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Important Information About Your Refund</h3>
    <h4 className="font-semibold">Currency Fluctuations</h4>
    <p>
      For transactions that involve a currency exchange, all refunds are processed at the prevailing market exchange rate at the time of the refund. Due to market volatility, this rate may be different from the rate at the time of your original transaction. This means the amount you receive back could be more or less than what you originally sent. Payvel is not liable for any loss or gain resulting from these currency fluctuations.
    </p>
    <h4 className="font-semibold">Refund Timelines</h4>
    <p>
      Once a refund is approved, it typically takes 3–10 business days to appear in your account, depending on your original payment method (bank transfer or card).
    </p>
    <h4 className="font-semibold">Non-Refundable Scenarios</h4>
    <p>We cannot provide a refund if:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>The transaction has been completed.</li>
      <li>Processing a refund would violate our legal obligations under Australian laws, including Anti-Money Laundering and Counter-Terrorism Financing regulations.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. The Refund Process</h3>
    <p>A structured workflow is essential for efficiency and consistency. The process is as follows:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>
        <strong>Customer Request:</strong> The customer initiates a cancellation or refund request through a dedicated, easy-to-find function within the Payvel app or website.
      </li>
      <li>
        <strong>Automated Triage:</strong> The system performs an immediate, automated check on the transaction status. If it is already marked 'Completed', the request is automatically denied with a clear explanation provided to the user.
      </li>
      <li>
        <strong>Compliance Screening:</strong> The request triggers an immediate compliance check. This involves screening all transaction parties against updated sanctions lists and checking against internal risk indicators.
      </li>
      <li>
        <strong>Action and Escalation:</strong> If the compliance check is clear, the system proceeds with the cancellation and initiates the refund. If the check raises a flag, the transaction is automatically paused, and the case is escalated to a designated Compliance Officer for manual review.
      </li>
      <li>
        <strong>Resolution and Payout:</strong> Once approved, funds are returned to the customer's original payment method.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">5. Unauthorised Transactions</h3>
    <p>
      If you notice a transaction on your account that you did not authorise, please contact us immediately. We will investigate promptly. You will not be liable for losses from an unauthorised transaction as long as you did not contribute to the loss (for example, by sharing your password) and you notified us as soon as you became aware of it.
    </p>

    <h3 className="text-xl font-semibold mt-4">6. Questions and Disputes</h3>
    <p>
      If you have a question about a refund or are not satisfied with the outcome, please contact our customer support team first. If we are unable to resolve your issue, you have the right to lodge a complaint with the Australian Financial Complaints Authority (AFCA), a free and independent dispute resolution service for consumers.
    </p>
  </div>
</section>
      </div>
    </main>
  );
}
