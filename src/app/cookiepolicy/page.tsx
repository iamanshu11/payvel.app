import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Payvel - Data Privacy & Tracking",
  description:
    "Learn how Payvel uses cookies and similar technologies to enhance your experience, improve functionality, and provide personalized services.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <main className="w-full mx-auto md:mt-16 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 transition-colors py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Last Updated: October 12, 2025</p>
        </div>

        {/* Sections */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p>
              This Cookie Policy explains how Payvel PTY LTD ("Payvel", "we", "us", "our") uses cookies and similar technologies to recognize you when you visit our website at payvel.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Services to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Services. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential to provide you with services available through our website and to use some of its features, such as access to secure areas.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            <p>
              Most web browsers provide settings to manage cookies. To find out more about cookies, including how to see what cookies have been set, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                www.aboutcookies.org
              </a>{" "}
              or{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                www.allaboutcookies.org
              </a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at{" "}
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
