'use client';

import React from 'react';
import { Download, ShieldCheck, Globe, Users, Smile, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Download and Sign Up',
    description:
      "Get the app from the App Store or Play Store and create your secure account in minutes. It's fast, simple, and free.",
    Icon: Download,
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Verify Your Details',
    description:
      'Complete a simple, secure verification (KYC) process to ensure full compliance and maximize your transfer limits.',
    Icon: ShieldCheck,
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Choose Destination',
    description:
      'Select the country and currency where you want to send your money. We offer competitive rates and transparent fees.',
    Icon: Globe,
    color: 'text-yellow-500',
  },
  {
    id: 4,
    title: 'Add Receiver Info',
    description:
      'Quickly add a new beneficiary or select one from your saved list. Input their correct payment details safely.',
    Icon: Users,
    color: 'text-indigo-500',
  },
  {
    id: 5,
    title: 'Pay and Chill',
    description:
      'Initiate the payment using your preferred method and track your transfer status live until it reaches your receiver.',
    Icon: Smile,
    color: 'text-red-500',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 md:mt-22 bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen relative z-10">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            How Payvel Works
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sending money across borders is easy, fast, and secure. Follow our simple 5-step process
            to connect with your loved ones instantly.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center w-full relative mb-16 md:mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Marker */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 rounded-full z-20">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <step.Icon
                    className={`w-5 h-5 ${step.color} dark:${step.color.replace('500', '400')}`}
                  />
                </div>
              </div>

              {/* Step Content Card */}
              <div
                className={`w-full md:w-5/12 bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <span
                  className={`text-2xl font-extrabold mb-2 inline-block ${step.color} dark:${step.color.replace(
                    '500',
                    '400'
                  )}`}
                >
                  Step {step.id}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Ready to start sending money the right way?
        </p>
        <a
          href="/download-app"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00B6DE] to-[#0066CC] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          Get Started Now
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
