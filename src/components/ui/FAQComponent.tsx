'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  country?: string;
}

const FAQComponent: React.FC<FAQComponentProps> = ({ country = 'Nigeria' }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const getFAQData = (countryName: string): FAQItem[] => [
    {
      id: 1,
      question: "Are there really no fees?",
      answer: "That's correct! Payvel does not charge any transfer fees. The amount you see in the calculator is the exact amount your recipient will get. We make money from a small margin on the exchange rate, which is how we keep our service free for you to use."
    },
    {
      id: 2,
      question: `How long does a transfer to ${countryName} take?`,
      answer: `Most transfers to ${countryName} are instant or arrive within minutes. In rare cases, some bank processing times may cause a slight delay, but you can track the status of your transfer in real-time right from the app.`
    },
    {
      id: 3,
      question: "Is my money and data secure with Payvel?",
      answer: `Absolutely. Security is our top priority. We use industry-standard 256-bit encryption, secure servers, and comply with all financial regulations in both Australia and ${countryName}. Your data is never shared with third parties.`
    },
    {
      id: 4,
      question: "What payment methods can I use?",
      answer: "You can fund your transfer using several convenient methods, including debit card, credit card, and direct bank transfer (PayID/Poli). We are continuously working to add more payment options to suit your needs."
    }
  ];

  const faqData = getFAQData(country);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 md:mt-22 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold p-4 text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </h2>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 pt-0 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;