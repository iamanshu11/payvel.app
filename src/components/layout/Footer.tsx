"use client";
import { useState } from "react";
import { Linkedin, Mail, MapPin, ArrowUp, Send, CheckCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const sections = [
    {
      title: "Product",
      color: "cyan",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about-us" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Company",
      color: "cyan",
      links: [
        { name: "Careers", url: "/careers" },
        { name: "Blog", url: "/blog" },
        { name: "Faq", url: "/faq" },
        { name: "Help Center", url: "/help-center" },
        { name: "Press and  Media", url: "/press-and-media" },
      ],
    },
    {
      title: "Legal",
      color: "cyan",
      links: [
        { name: "Privacy Policy", url: "/privacypolicy" },
        { name: "Terms of Service", url: "/terms-and-service" },
        { name: "Cookie Policy", url: "/cookiepolicy" },
        { name: "Compliance", url: "/compliance-security" },
      ],
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "connect@payvel.com" },
    { icon: MapPin, text: "123 Innovation Street, Tech Valley" },
    { icon: MapPin, text: "456 Global Plaza, Business District" },
  ];

  return (
    <footer className="relative w-full bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-gridMove"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-12 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <img src="/img/web-logo.png" alt="Payvel Logo" />

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm transform transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
              Building bridges to connect you with what matters most. Experience the
              future of seamless communication.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group/contact flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <item.icon className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover/contact:text-blue-400 dark:group-hover/contact:text-blue-300 transition-colors" />
                    <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity"></div>
                  </div>
                  <span className="text-sm group-hover/contact:translate-x-1 transition-transform">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 transition-all duration-300 hover:border-blue-500 hover:scale-110 hover:bg-blue-500/10"
              >
                <Linkedin className="w-5 h-5 text-gray-800 dark:text-gray-200 transition-all group-hover:text-blue-400 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="group/section">
              <div className="relative mb-6">
                <h3
                  className={`font-bold text-xl text-gray-900 dark:text-white transition-colors group-hover/section:text-${section.color}-500`}
                >
                  {section.title}
                </h3>
                <div
                  className={`absolute -bottom-2 left-0 h-0.5 w-0 bg-${section.color}-500 group-hover/section:w-full transition-all duration-500`}
                ></div>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="group/link text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2"
                      onMouseEnter={() => setHoveredLink(`${section.title}-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span
                        className={`h-0.5 bg-${section.color}-500 transition-all duration-300 ${
                          hoveredLink === `${section.title}-${index}` ? "w-2" : "w-0"
                        }`}
                      ></span>
                      <span
                        className={`transition-transform duration-300 ${
                          hoveredLink === `${section.title}-${index}` ? "translate-x-1" : ""
                        }`}
                      >
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="relative mb-12 p-8 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden group/newsletter">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover/newsletter:opacity-100 transition-opacity"></div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-teal-500 bg-clip-text">
              Stay in the Loop
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and exclusive offers
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1 group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                disabled={isSubmitted}
                className="group px-6 py-3 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} |{" "}
            <a
              href="#"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors font-semibold"
            >
              payvel.com
            </a>{" "}
            | All rights reserved
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl hover:border-blue-500 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowUp className="relative w-4 h-4 group-hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-400 group-hover:text-blue-500" />
            <span className="relative text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              Back to top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
