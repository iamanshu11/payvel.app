'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        id: 'gs1',
        question: 'How do I create a Payvel account?',
        answer: "It's simple! Download the Payvel app from the App Store or Google Play Store. Open the app and follow the on-screen instructions to sign up. We'll guide you through a quick identity verification process to secure your account and comply with financial regulations."
      }
    ]
  },
  {
    id: 'sending-money',
    title: 'Sending Money',
    items: [
      {
        id: 'sm1',
        question: 'How long does a transfer take?',
        answer: "Most Payvel transfers are lightning-fast and arrive within minutes. In some cases, processing times can vary depending on the recipient's bank or payment partner. You can always track the status of your transfer in the app."
      },
      {
        id: 'sm2',
        question: 'Which countries can I send money to?',
        answer: 'We are constantly expanding our global network. Currently, our services focus on transfers originating from Australia to various countries across Africa. For the most up-to-date list of supported destination countries, please check within the Payvel app.'
      }
    ]
  },
  {
    id: 'account-security',
    title: 'Account & Security',
    items: [
      {
        id: 'as1',
        question: 'Is my money and personal information secure?',
        answer: 'Absolutely. Your security is our top priority. We use bank-level 256-bit encryption to protect all your data and transactions. As an AUSTRAC regulated entity in Australia, we adhere to the strictest security and compliance standards to ensure your money is safe.'
      }
    ]
  },
  {
    id: 'fees-rates',
    title: 'Fees & Rates',
    items: [
      {
        id: 'fr1',
        question: 'Are transfers really free?',
        answer: 'Yes, we proudly offer transfers with a $0 transaction fee. We believe in transparency, so there are no hidden costs. Our revenue is generated from a small margin on the foreign exchange rate, which is always clearly displayed to you before you confirm any transfer.'
      }
    ]
  }
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [filteredCategories, setFilteredCategories] = useState(faqCategories);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(faqCategories);
    } else {
      const filtered = faqCategories.map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0);
      setFilteredCategories(filtered);
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
      <section className={`text-center container mx-auto px-6 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center mb-6">
          <HelpCircle className="w-12 h-12 text-teal-400 mr-4" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
          How can we <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">help?</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Find answers to your questions about sending money, managing your account, and more.
        </p>
        <div className={`mt-8 max-w-xl mx-auto relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <input
            type="search"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-300"
          />
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          {filteredCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + catIndex * 150}ms` }}
            >
              {/* Category Title */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mr-4"></span>
                {category.title}
              </h2>
              
              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className={`bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-500 ${
                      openItems.has(item.id) ? 'ring-2 ring-teal-500/20' : ''
                    }`}
                    style={{ transitionDelay: `${400 + catIndex * 150 + itemIndex * 50}ms` }}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors duration-300 text-left group"
                      aria-expanded={openItems.has(item.id)}
                    >
                      <h3 className="text-xl font-semibold pr-4 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 flex-shrink-0 text-teal-400 transform transition-transform duration-300 ${
                          openItems.has(item.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                        <div
                          className={`transform transition-all duration-500 ${
                            openItems.has(item.id) ? 'translate-y-0' : '-translate-y-4'
                          }`}
                        >
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16 bg-gray-100 dark:bg-gray-900/50 rounded-xl border border-gray-300 dark:border-gray-800">
              <Search className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 text-sm mt-2">Try a different search term or browse our categories above.</p>
            </div>
          )}

          {/* Still Need Help Section */}
          <div className={`mt-20 text-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-300 dark:border-gray-800 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <MessageCircle className="w-16 h-16 mx-auto text-teal-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Still have questions?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Our support team is ready to assist you.</p>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
            >
              Contact Support
            </Link>
          </div>

          {/* Popular Topics */}
          <div className={`mt-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Popular Topics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="#"
                className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Account Setup</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Getting started with Payvel</p>
              </Link>
              <Link
                href="#"
                className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Transfer Status</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Track your money</p>
              </Link>
              <Link
                href="#"
                className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Payment Methods</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">How to fund transfers</p>
              </Link>
            </div>
          </div>
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