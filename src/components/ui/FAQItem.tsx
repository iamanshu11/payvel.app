'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I get started with Payvel?',
    answer: "Getting started is simple! Just download the Payvel app from the App Store or Google Play, create an account in a few minutes by following the on-screen instructions, and you can start your first transfer right away.",
    category: 'Getting Started'
  },
  {
    id: '2',
    question: 'What are the fees for sending money?',
    answer: "Payvel is proud to offer transfers with zero hidden fees. The exchange rate you see in the app is the rate you get, and any small transaction fee will be clearly displayed before you confirm your transfer. We believe in full transparency.",
    category: 'Pricing'
  },
  {
    id: '3',
    question: 'How long does a transfer take?',
    answer: "Most transfers with Payvel are instant or arrive within minutes. However, some transfers may take longer depending on the recipient's country and their bank's processing times. You can always track the status of your transfer in real-time within the app.",
    category: 'Transfers'
  },
  {
    id: '4',
    question: 'Is my money and data secure?',
    answer: "Absolutely. Security is our top priority. We use bank-level encryption (256-bit) and secure protocols to protect your money and personal information. We are also regulated by AUSTRAC in Australia and work with licensed partners in other countries to ensure the highest security standards.",
    category: 'Security'
  },
  {
    id: '5',
    question: 'Where can I send money FROM?',
    answer: "Currently, you can send money from Australia, the United States, and Canada. We are continuously working to expand our services to more countries. For services in the US and Canada, we operate in partnership with the licensed entity, Cybrid.",
    category: 'Coverage'
  },
  {
    id: '6',
    question: 'What payment methods can I use?',
    answer: "You can fund your transfers using a variety of methods, including bank transfer, debit card, and credit card. The available options may vary slightly depending on your country of residence.",
    category: 'Payment'
  },
  {
    id: '7',
    question: 'How can I track my transfer?',
    answer: "You can track the status of your transfer in real-time directly from the Payvel app. We provide live updates from the moment you send your money until it is received by your recipient, giving you complete peace of mind.",
    category: 'Transfers'
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFAQs(faqData);
    } else {
      const filtered = faqData.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFAQs(filtered);
    }
  }, [searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen py-16 md:mt-10 bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Page Header */}
      <section className={`text-center container mx-auto px-6 pt-16 pb-12 lg:pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Frequently Asked <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Questions</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions? We've got answers. Here are some of the most common things our users ask.
        </p>
      </section>

      {/* Search Bar */}
      <section className={`container mx-auto px-6 mb-8 max-w-4xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative">
          <input
            type="search"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-teal-500 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-8 max-w-4xl mb-16">
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-teal-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${openItems.has(faq.id) ? 'ring-2 ring-teal-500/20' : ''}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors duration-300 text-left"
                aria-expanded={openItems.has(faq.id)}
              >
                <h3 className="text-lg font-semibold pr-4 text-gray-900 dark:text-white">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 text-teal-400 transform transition-transform duration-300 ${
                    openItems.has(faq.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <div
                    className={`transform transition-all duration-500 ${
                      openItems.has(faq.id) ? 'translate-y-0' : '-translate-y-4'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16 bg-gray-100 dark:bg-gray-900 rounded-xl">
            <MessageCircle className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">No FAQs found matching your search.</p>
            <p className="text-gray-500 text-sm mt-2">Try a different search term or contact support.</p>
          </div>
        )}

        {/* Contact Support Section */}
        <div className={`text-center mt-16 p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <MessageCircle className="w-12 h-12 mx-auto text-teal-400 mb-4" />
          <p className="text-lg text-gray-900 dark:text-gray-300 mb-2">Can't find the answer you're looking for?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Our support team is here to help you 24/7</p>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className={`grid md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="#"
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">How It Works</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learn about our simple transfer process</p>
          </Link>
          <Link
            href="#"
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Pricing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">View our transparent fee structure</p>
          </Link>
          <Link
            href="#"
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Security</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learn how we protect your money</p>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}