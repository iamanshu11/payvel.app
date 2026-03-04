import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Onboarding Policy | Payvel - KYC & AML/CTF Compliance",
  description:
    "Read Payvel's Customer Onboarding Policy to understand our Know Your Customer (KYC) framework, identification procedures, and AML/CTF compliance for designated services.",
  alternates: { canonical: "/onboarding-policy" },
  openGraph: {
    title: "Customer Onboarding Policy | Payvel - KYC & AML/CTF Compliance",
    description:
      "Payvel's official framework for customer identification, verification, and risk-based due diligence in compliance with the AML/CTF Act.",
    url: "/onboarding-policy",
    type: "website",
  },
};

export default function OnboardingPolicyPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Customer Onboarding <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Payvel Pty Ltd · ACN: 27673904599</p>
          <p className="text-gray-500 dark:text-gray-400">Last Updated: 02 March 2026</p>
        </div>

        {/* Section 1: Policy Statement and Purpose */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">1. Policy Statement and Purpose</h2>
          <p>
            Payvel Pty Ltd is fully committed to the principle of &apos;Know Your Customer&apos;
            (KYC) as a fundamental and non-negotiable cornerstone of its AML/CTF Program. A
            thorough understanding of who our customers are, and the ML/TF risks they may pose, is
            essential to preventing the misuse of our services for criminal purposes.
          </p>
          <p>The purpose of this policy is to establish the official framework and procedures for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              Identifying and verifying the identity of all customers before providing any
              designated services.
            </li>
            <li>Identifying the ultimate beneficial owners of non-individual customers.</li>
            <li>
              Assessing the potential money laundering and terrorism financing (ML/TF) risk
              associated with each customer relationship.
            </li>
            <li>
              Applying appropriate levels of due diligence that are proportionate to the assessed
              risk.
            </li>
          </ul>
          <p>
            This policy is designed to ensure full compliance with the customer due diligence
            obligations stipulated in the AML/CTF Act 2006 and the detailed procedural requirements
            of the Anti-Money Laundering and Counter-Terrorism Financing Rules Instrument 2007 (No.
            1) (AML/CTF Rules).
          </p>
        </section>

        {/* Section 2: Scope and Application */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">2. Scope and Application</h2>
          <p>
            This policy applies to all prospective customers of Payvel Pty Ltd seeking to use any
            of its &apos;designated services&apos; as defined under the AML/CTF Act. It covers all
            methods and channels through which customers are onboarded, including but not limited to
            face-to-face interactions, online applications, and relationships initiated through
            third-party agents or intermediaries.
          </p>
        </section>

        {/* Section 3: The Risk-Based Approach to Customer Onboarding */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">3. The Risk-Based Approach to Customer Onboarding</h2>
          <p>
            The foundation of Payvel Pty Ltd&apos;s customer onboarding process is a risk-based
            approach. This means that the scope, intensity, and frequency of due diligence measures
            applied to a customer are directly proportional to the ML/TF risk that the customer is
            assessed to present. This approach allows compliance resources to be focused most
            effectively on areas of higher risk, in line with global best practice.
          </p>
          <p>
            Payvel Pty Ltd&apos;s enterprise-wide ML/TF Risk Assessment identifies and rates the
            inherent risks associated with various factors, including:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <strong>Customer Types:</strong> e.g., individuals, companies, trusts, non-residents.
            </li>
            <li>
              <strong>Jurisdictions:</strong> The countries customers are from or transact with.
            </li>
            <li>
              <strong>Products and Services:</strong> The specific designated services being used.
            </li>
            <li>
              <strong>Delivery Channels:</strong> How services are accessed (e.g., online vs.
              in-person).
            </li>
          </ul>
          <p>
            Based on these factors, each customer is assigned a Customer Risk Rating (e.g., Low,
            Medium, High) during the onboarding process. This rating is the primary determinant of
            the specific identification, verification, and ongoing monitoring procedures that will
            be applied throughout the customer relationship.
          </p>
        </section>

        {/* Section 4: Governance and Responsibilities */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">4. Governance and Responsibilities</h2>
          <p>
            Clear roles and responsibilities are essential for the consistent and effective
            execution of this policy.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.1 Senior Management</h3>
            <p>Senior Management is responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Formally approving the risk-based approach and the overall framework of this policy.</li>
              <li>
                Ensuring the customer onboarding function is adequately resourced with skilled
                personnel and appropriate technology.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.2 AML/CTF Compliance Officer</h3>
            <p>The AML/CTF Compliance Officer is responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                The design, implementation, and ongoing maintenance of the procedures detailed in
                this policy.
              </li>
              <li>Providing expert guidance and training to staff on KYC requirements.</li>
              <li>
                Acting as the final escalation point for high-risk or complex customer onboarding
                cases.
              </li>
              <li>Reviewing and approving the onboarding of all high-risk customers.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">4.3 Front-line Staff / Onboarding Team</h3>
            <p>All staff involved in the customer onboarding process are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Diligently executing the procedures outlined in this policy.</li>
              <li>Accurately collecting and verifying customer information and documentation.</li>
              <li>
                Correctly assessing the initial customer risk rating based on established criteria.
              </li>
              <li>
                Promptly escalating any red flags, discrepancies, or potentially high-risk
                customers to the AML/CTF Compliance Officer.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Customer Identification Program (CIP) */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">5. Customer Identification Program (CIP)</h2>
          <p>
            The Customer Identification Program (CIP) details the mandatory procedures for
            identifying and verifying all customers.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.1 Prohibition Before Identification</h3>
            <p>
              It is the strict policy of Payvel Pty Ltd that no designated service will be provided
              to a customer if the applicable customer identification procedure, as detailed in this
              section, cannot be satisfactorily completed. This is a direct requirement of the
              AML/CTF Act.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.2 Minimum Information Collection Requirements</h3>
            <p>
              The baseline information that MUST be collected for different customer types is
              specified in the AML/CTF Rules. This information forms the basis of the KYC record.
              The specific requirements are detailed in the subsequent sections.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.3 Verification Standards: Reliable and Independent Sources</h3>
            <p>
              All verification of customer information must be conducted using &quot;reliable and
              independent&quot; documentation, electronic data, or a combination of both.
            </p>
            <p>
              <strong>Reliable and Independent Documentation:</strong> Includes current, original
              government-issued identification documents or certified copies thereof. Passports that
              have expired within the last two years are also acceptable.
            </p>
            <p>
              <strong>Reliable and Independent Electronic Data:</strong> Includes data from
              reputable sources that are accurate, secure, and comprehensive. The Australian
              Government&apos;s Document Verification Service (DVS) is an approved electronic source
              for verifying certain identity documents. Any third-party digital identity provider
              used must be subject to a formal due diligence process to ensure their methods are
              robust, secure, and appropriate for the ML/TF risk, thereby mitigating risks such as
              synthetic identity fraud or deepfakes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.4 Identification Procedures for Individuals & Sole Traders</h3>
            <p>
              <strong>Collect:</strong> For an individual customer, the following must be
              collected:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name (including all given names and family name).</li>
              <li>Full residential address.</li>
              <li>Date of birth.</li>
            </ul>
            <p>
              <strong>Verify:</strong> The following must be verified using reliable and
              independent sources:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The customer&apos;s full name, AND</li>
              <li>EITHER their date of birth OR their residential address.</li>
            </ul>
            <p>(Refer to Appendix B for a detailed matrix of acceptable documents).</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.5 Identification Procedures for Companies (Domestic & Foreign)</h3>
            <p>
              <strong>Collect:</strong> For a corporate customer, the following must be collected:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name of the company as registered.</li>
              <li>
                Australian Company Number (ACN) for domestic companies or Australian Registered
                Body Number (ARBN) for registered foreign companies.
              </li>
              <li>Full address of the registered office and principal place of business.</li>
              <li>Registration status (e.g., public or proprietary).</li>
              <li>For proprietary companies, the full names of all directors.</li>
            </ul>
            <p>
              <strong>Verify:</strong> The collected information must be verified against a reliable
              and independent source, such as a search of the Australian Securities &amp;
              Investments Commission (ASIC) database or an equivalent foreign corporate registry.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.6 Identification Procedures for Trusts</h3>
            <p>
              <strong>Collect:</strong> For a trust, the following must be collected:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name of the trust.</li>
              <li>Full name of every trustee.</li>
              <li>The Australian Business Number (ABN) of the trust, if one has been issued.</li>
            </ul>
            <p>
              <strong>Verify:</strong> The existence, type, and controlling structure of the trust
              must be verified by obtaining and reviewing a certified copy or certified extract of
              the governing trust deed.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.7 Identification of Beneficial Owners</h3>
            <p>
              For all non-individual customers (e.g., companies, trusts, partnerships), it is
              mandatory to look through the legal structure to identify the natural persons who
              ultimately own or control it.
            </p>
            <p>
              <strong>Definition:</strong> A &apos;beneficial owner&apos; is defined as any
              individual who ultimately owns or controls, directly or indirectly, 25% or more of
              the customer, or who otherwise exercises effective control over the customer.
            </p>
            <p>
              <strong>Procedure:</strong> Payvel Pty Ltd must take reasonable measures to identify
              all individuals who meet this definition. This involves obtaining and reviewing
              ownership charts, trust deeds, partnership agreements, or other relevant
              constitutional documents.
            </p>
            <p>
              <strong>Collection and Verification:</strong> Once identified, the following
              information must be collected for each beneficial owner:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name.</li>
              <li>EITHER their full residential address OR their date of birth.</li>
            </ul>
            <p>
              This information must then be verified using the same standards as for an individual
              customer.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">5.8 Identification of Politically Exposed Persons (PEPs)</h3>
            <p>
              Individuals who hold prominent public positions can pose a higher risk of being
              involved in corruption or money laundering.
            </p>
            <p>
              <strong>Definition:</strong> A Politically Exposed Person (PEP) is an individual who
              holds a prominent public position in a government body or international organization,
              in Australia or overseas. Immediate family members and close associates of such
              individuals are also considered PEPs.
            </p>
            <p>
              <strong>Procedure:</strong> As part of the onboarding process, Payvel Pty Ltd must
              take reasonable steps to determine whether a customer or any of their beneficial
              owners is a PEP. This will be achieved through a combination of:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Direct questioning of the customer (e.g., via a declaration on the application form).</li>
              <li>Screening names against reputable third-party PEP databases.</li>
              <li>Reviewing publicly available information where appropriate.</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Due Diligence Procedures */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">6. Due Diligence Procedures</h2>
          <p>
            The Customer Risk Rating assigned during onboarding dictates the level of due diligence
            to be performed.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.1 Simplified Due Diligence (&apos;Safe Harbour&apos;) for Low-Risk Customers</h3>
            <p>
              For individual customers who have been assessed as presenting a low or medium ML/TF
              risk, streamlined &apos;safe harbour&apos; verification procedures may be applied as
              permitted by the AML/CTF Rules. These procedures allow for verification based on a
              reduced set of documentation. The specific combinations of documents are detailed in
              Appendix B.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.2 Standard Due Diligence for Medium-Risk Customers</h3>
            <p>
              This is the default level of due diligence applied to the majority of customers. It
              requires the full and satisfactory completion of all procedures outlined in the
              Customer Identification Program (Section 5.0).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">6.3 Enhanced Customer Due Diligence (ECDD) for High-Risk Customers</h3>
            <p>
              ECDD involves a higher level of scrutiny and must be applied in all high-risk
              situations. The quality of information gathered during this process is paramount, as
              it establishes the baseline for the intensive ongoing monitoring that high-risk
              customers require. An incomplete or inaccurate profile at this stage will severely
              compromise the effectiveness of downstream transaction monitoring systems, potentially
              leading to a failure to detect genuinely suspicious activity.
            </p>
            <p className="font-medium mt-2">Triggers for ECDD</p>
            <p>ECDD is mandatory when:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A customer is assessed as high-risk based on the initial risk assessment.</li>
              <li>The customer or a beneficial owner is identified as a foreign PEP.</li>
              <li>
                A transaction involves a party from a prescribed foreign country as designated by
                Australian law.
              </li>
              <li>
                A suspicion is formed about the customer in relation to money laundering or
                terrorism financing at any stage.
              </li>
            </ul>
            <p className="font-medium mt-2">ECDD Measures</p>
            <p>
              When ECDD is triggered, in addition to standard due diligence, one or more of the
              following measures must be undertaken:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Obtain Additional Information:</strong> Collect and verify additional
                information about the customer&apos;s identity or business.
              </li>
              <li>
                <strong>Establish Source of Wealth and Funds:</strong> Take reasonable measures to
                understand and, where appropriate, corroborate the customer&apos;s and/or
                beneficial owner&apos;s source of wealth (the origin of their total net worth) and
                the source of funds for the proposed transactions.
              </li>
              <li>
                <strong>Clarify Purpose of Relationship:</strong> Obtain more detailed information
                regarding the intended nature and purpose of the business relationship.
              </li>
              <li>
                <strong>Senior Management Approval:</strong> Obtain approval from a senior managing
                official (e.g., the AML/CTF Compliance Officer or CEO) before establishing or
                continuing the business relationship.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7: Handling of Discrepancies and Refusal of Service */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">7. Handling of Discrepancies and Refusal of Service</h2>
          <div className="space-y-3">
            <p>
              <strong>Discrepancies:</strong> Any discrepancy identified during the verification
              process (e.g., a difference in name or address between an application form and an
              identity document) must be investigated and satisfactorily resolved before the
              onboarding can proceed.
            </p>
            <p>
              <strong>Refusal of Service:</strong> If a customer is unable or unwilling to provide
              the required KYC information and documentation, or if discrepancies cannot be
              resolved to the satisfaction of Payvel Pty Ltd, the onboarding process must be
              terminated. No services will be provided to the customer.
            </p>
            <p>
              <strong>Suspicious Matter Reporting:</strong> The circumstances surrounding a refusal
              to provide information or the provision of potentially fraudulent documents must be
              assessed to determine if they give rise to a suspicion of ML/TF. If so, a Suspicious
              Matter Report (SMR) must be submitted to AUSTRAC.
            </p>
          </div>
        </section>

        {/* Section 8: Record Keeping */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">8. Record Keeping</h2>
          <p>Compliance with record-keeping obligations is mandatory.</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              All information, data, and documents collected and verified as part of the customer
              onboarding process must be retained.
            </li>
            <li>
              Records of the customer risk assessment, any ECDD measures undertaken, and senior
              management approvals must also be kept.
            </li>
            <li>
              All records must be retained for a period of seven years following the date the
              business relationship with the customer is terminated.
            </li>
          </ul>
        </section>

        {/* Section 9: Policy Review and Assurance */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">9. Policy Review and Assurance</h2>
          <p>To ensure ongoing effectiveness and compliance, this policy will be subject to regular review.</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              The AML/CTF Compliance Officer will review this Customer Onboarding Policy at least
              annually, or more frequently if required by changes to legislation, regulation, or the
              business&apos;s risk profile.
            </li>
            <li>
              The operational effectiveness of the procedures and controls outlined in this policy
              will be assessed as part of the regular independent review of Payvel Pty Ltd&apos;s
              overall AML/CTF Program, as required by Part A of the program.
            </li>
          </ul>
        </section>

        {/* Section 10: Appendix B */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">10. Appendix B: Customer Identification &amp; Verification Document Matrix</h2>
          <p>
            See Part A of the AML/CTF program, annexure A. This matrix is a practical guide for
            staff to ensure consistent application of identification and verification procedures. It
            is not exhaustive and any queries should be directed to the AML/CTF Compliance Officer.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">Acceptable Document Lists</h3>
            <p className="font-medium">Primary Photographic Identification:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Australian Driver&apos;s Licence (current)</li>
              <li>Australian Passport (current or expired within the last 2 years)</li>
              <li>Australian Proof of Age Card (current)</li>
              <li>Foreign Passport (current)</li>
              <li>Foreign National Identity Card (current)</li>
            </ul>
            <p className="font-medium mt-2">Primary Non-Photographic Identification:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Australian Birth Certificate or Birth Extract</li>
              <li>Australian Citizenship Certificate</li>
              <li>
                Centrelink Pensioner Concession Card, Health Care Card, or Seniors Health Card
                (current)
              </li>
              <li>Foreign Birth Certificate</li>
            </ul>
            <p className="font-medium mt-2">Secondary Identification:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Notice issued by the Australian Taxation Office (ATO) within the last 12 months
                showing name and residential address.
              </li>
              <li>
                Notice issued by a local government body or utilities provider (e.g., council rates,
                electricity, water bill) within the last 3 months showing name and residential
                address.
              </li>
              <li>
                Notice from the Commonwealth or a State/Territory government showing provision of
                financial benefits within the last 12 months.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
