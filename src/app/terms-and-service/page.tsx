import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Truoco - Data Protection & User Privacy",
    description:
        "Read Truoco’s Terms of Service to understand the rules and guidelines for using our services.",
    alternates: { canonical: "/terms-of-service" },
};

export default function TermsAndServicePage() {
    return (
        <main className="w-full mx-auto text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
                <p className="mb-2"><strong>Last Updated:</strong> August 28, 2025</p>

                {/* Intro */}
                <section className="space-y-4 mb-10">
                    <p className="font-semibold">
                        Please read this Terms of Service Agreement ("Agreement") carefully. This is a binding contract.
                    </p>

                    <p>
                        This Agreement is entered into by and between you or the company or entity you
                        represent ("Client," "you," "your") and Prymera Consulting Pvt. Ltd. ("Truoco,"
                        "we," "us," "our"). This Agreement governs your access to and use of the Truoco
                        identity verification services, including any associated software, APIs, and
                        documentation (collectively, the "Services").
                    </p>
                    <p>
                        By creating an account, accessing the Services, or clicking "I Agree," you
                        acknowledge that you have read, understood, and agree to be bound by this Agreement.
                    </p>
                </section>

                {/* Sections */}
                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">1. Scope of Services</h2>
                    <p>
                        Truoco provides an automated identity verification platform designed to help
                        businesses confirm user identities and mitigate fraud. The Services may include,
                        but are not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Document Verification:</strong> Automated analysis of government-issued identity documents.</li>
                        <li><strong>Biometric Analysis:</strong> Liveness detection and facial similarity matching.</li>
                        <li><strong>Screening:</strong> Checking against official Anti-Money Laundering (AML), sanctions, and other watchlists.</li>
                        <li><strong>Dashboard and API Access:</strong> Tools for initiating verifications and retrieving results.</li>
                    </ul>
                    <p>
                        We reserve the right to modify or discontinue the Services at any time, with
                        reasonable notice provided to you.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">2. Client Accounts</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate, current, and complete information during registration.</li>
                        <li>Maintain the security and confidentiality of your account credentials, including API keys.</li>
                        <li>
                            Be fully responsible for all activities that occur under your account. You must
                            notify us immediately of any unauthorized use of your account.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">3. Client Obligations and Responsibilities</h2>

                    <h3 className="text-xl font-semibold mt-4">3.1 Lawful Basis and End-User Consent</h3>
                    <p>
                        You are solely responsible for the data you submit to the Services ("Client Data").
                        You represent and warrant that you have a clear and sufficient legal basis (such as
                        explicit consent or a legal obligation) to collect, process, and share the personal
                        data of your End-Users with us for the purposes of identity verification.
                    </p>

                    <h3 className="text-xl font-semibold mt-4">3.2 Data Controller Role</h3>
                    <p>
                        As between you and Truoco, you are the Data Controller of the End-User personal
                        data. Truoco acts as the Data Processor. Your use of the Services must comply with
                        all applicable data protection laws, including but not limited to the GDPR and the
                        Indian Digital Personal Data Protection (DPDP) Act, 2023.
                    </p>

                    <h3 className="text-xl font-semibold mt-4">3.3 Acceptable Use</h3>
                    <p>You agree not to use the Services for any unlawful, discriminatory, or fraudulent purpose. You will not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Submit data that you do not have the legal right to process.</li>
                        <li>Interfere with the security or integrity of the Services.</li>
                        <li>Use the Services to harass, abuse, or harm another person.</li>
                        <li>Reverse engineer or attempt to extract the source code of our software.</li>
                    </ul>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">4. Fees and Payment</h2>
                    <p>
                        You agree to pay all fees associated with your use of the Services as described on
                        our Pricing page or in your specific service order. All fees are non-refundable,
                        except as required by law. Payments are due within thirty (30) days of the invoice
                        date. Late payments may be subject to interest charges. We reserve the right to
                        suspend your access to the Services for non-payment.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
                    <p>
                        Truoco and its licensors retain all rights, title, and interest in and to the
                        Services, including all underlying software, technology, and documentation. We grant
                        you a limited, non-exclusive, non-transferable, revocable license to access and use
                        the Services for your internal business purposes during the term of this Agreement.
                        You retain all rights to your Client Data.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">6. Data Processing</h2>
                    <p>
                        The processing of personal data in connection with the Services is governed by our
                        Privacy Policy and our Data Processing Agreement (DPA), which are hereby
                        incorporated by reference into this Agreement. You agree to the terms of the DPA
                        upon entering into this Agreement.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">7. Confidentiality</h2>
                    <p>
                        Both parties agree not to disclose the other party's Confidential Information,
                        except as required by law. Confidential Information includes all non-public
                        information related to a party's business, technology, or customers. This
                        obligation will survive the termination of this Agreement.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">8. Warranties and Disclaimer</h2>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                        The services are provided <span className="italic">"as is."</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Truoco makes no warranties, express or implied, including but not limited to the
                        implied warranties of merchantability and fitness for a particular purpose. While
                        we strive for the highest degree of accuracy, Truoco does not warrant that the
                        services will be error-free, uninterrupted, or that verification results will be
                        100% accurate or complete. You are responsible for your own compliance and risk
                        decisions.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        To the fullest extent permitted by law, in no event will Truoco or its affiliates
                        be liable for any indirect, incidental, special, or consequential damages
                        (including loss of profits, data, or goodwill) arising out of or in connection with
                        this agreement or the use of the services.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Truoco&apos;s total cumulative liability arising from or related to this agreement
                        shall not exceed the total amount of fees paid by you to Truoco in the twelve (12)
                        months immediately preceding the event giving rise to the claim.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">10. Indemnification</h2>
                    <p>
                        You agree to indemnify, defend, and hold harmless Truoco and its officers,
                        directors, employees, and agents from and against any and all claims, damages,
                        losses, and expenses (including reasonable attorneys' fees) arising out of or
                        related to your breach of this Agreement, your violation of applicable law, or your
                        violation of any third-party rights, including the data protection rights of your
                        End-Users.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">11. Term and Termination</h2>
                    <p>
                        This Agreement commences on the date you first accept it and continues until
                        terminated. Either party may terminate this Agreement with thirty (30) days'
                        written notice. We may suspend or terminate your access to the Services immediately
                        if you are in material breach of this Agreement. Upon termination, your right to
                        use the Services will cease, and we will delete your Client Data in accordance with
                        our Data Retention policies.
                    </p>
                </section>

                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-semibold">12. General Provisions</h2>
                    <h3 className="text-xl font-semibold mt-4">12.1 Governing Law</h3>
                    <p>
                        This Agreement shall be governed by and construed in accordance with the laws of
                        the Republic of India. The courts of Bengaluru, Karnataka shall have exclusive
                        jurisdiction over any disputes arising from this Agreement.
                    </p>

                    <h3 className="text-xl font-semibold mt-4">12.2 Entire Agreement</h3>
                    <p>
                        This Agreement, along with the Privacy Policy and DPA, constitutes the entire
                        agreement between the parties and supersedes all prior agreements and
                        communications.
                    </p>

                    <h3 className="text-xl font-semibold mt-4">12.3 Contact Information</h3>
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
