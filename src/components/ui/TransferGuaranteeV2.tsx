'use client';

import React from 'react';
import { Shield, Clock, Headphones } from 'lucide-react';

const TransferGuaranteeV2 = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Monitor your transfer with complete transparency and real-time notifications for peace of mind.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We ensure your money reaches your recipient exactly when promised, or we refund your fees.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "Support Anytime",
      description:
        "Our customer support team is available 24/7 to help you with any transfer queries.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <div className="flex items-center justify-center p-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-7xl w-full text-gray-900 dark:text-gray-100">
        {/* Header */}
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl p-8 bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-md">
                  {/* Gradient Border Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  />

                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 dark:opacity-10">
                    <Icon className="w-full h-full text-gray-900 dark:text-white transform rotate-12" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Start Your Transfer</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TransferGuaranteeV2;
