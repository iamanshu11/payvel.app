'use client';

import React from 'react';
import { Shield, Clock, Headphones } from 'lucide-react';

const TransferGuarantee = () => {
  const features = [
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Track your transfer every step of the way with real-time updates for you and your loved one.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Delivery Time Guaranteed",
      description: "We guarantee your money will be delivered on time, or we'll refund your fees.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Our friendly support team is always available to help you and your recipient, day or night.",
      gradient: "from-pink-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Your Worry-Free Transfer{' '}
            <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Guarantee
            </span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                       style={{
                         background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                       }}
                  />
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
            <span className="relative z-10">Get Started Now</span>
            
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

export default TransferGuarantee;