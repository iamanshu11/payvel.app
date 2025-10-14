'use client';

import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck, Globe, Users, Smile, ChevronRight, Sparkles } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  color: string;
  gradient: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Download and Sign Up',
    description:
      "Get the app from the App Store or Play Store and create your secure account in minutes. It's fast, simple, and free.",
    Icon: Download,
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Verify Your Details',
    description:
      'Complete a simple, secure verification (KYC) process to ensure full compliance and maximize your transfer limits.',
    Icon: ShieldCheck,
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Choose Destination',
    description:
      'Select the country and currency where you want to send your money. We offer competitive rates and transparent fees.',
    Icon: Globe,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 4,
    title: 'Add Receiver Info',
    description:
      'Quickly add a new beneficiary or select one from your saved list. Input their correct payment details safely.',
    Icon: Users,
    color: 'text-indigo-500',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 5,
    title: 'Pay and Chill',
    description:
      'Initiate the payment using your preferred method and track your transfer status live until it reaches your receiver.',
    Icon: Smile,
    color: 'text-red-500',
    gradient: 'from-red-500 to-pink-500',
  },
];

const HowItWorks: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate steps appearing one by one
    steps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, step.id]);
      }, index * 200 + 500);
    });
  }, []);

  return (
    <section className="py-16 md:py-24 md:mt-22 bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Title Section */}
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full border border-teal-500/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
            <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Simple & Secure Process</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            How <span className="bg-gradient-to-r from-[#00B6DE] to-[#0066CC] bg-clip-text text-transparent animate-gradient">Payvel</span> Works
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sending money across borders is easy, fast, and secure. Follow our simple 5-step process
            to connect with your loved ones instantly.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line - Animated */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-gray-200 via-teal-300 to-gray-200 dark:from-gray-700 dark:via-teal-600 dark:to-gray-700 transform -translate-x-1/2 animate-pulse-slow"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center w-full relative mb-16 md:mb-20 transition-all duration-1000 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } ${visibleSteps.includes(step.id) ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Timeline Marker - Animated */}
              <div className={`hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 rounded-full z-20 transition-all duration-500 transform ${
                hoveredStep === step.id 
                  ? `border-transparent bg-gradient-to-br ${step.gradient} scale-125 shadow-2xl rotate-180` 
                  : 'border-gray-300 dark:border-gray-700 hover:scale-110'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredStep === step.id 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}>
                  <step.Icon
                    className={`w-6 h-6 transition-all duration-500 transform ${
                      hoveredStep === step.id 
                        ? 'text-white scale-110 rotate-12 animate-bounce' 
                        : `${step.color} dark:${step.color.replace('500', '400')}`
                    }`}
                  />
                </div>
                
                {/* Ripple Effect on Hover */}
                {hoveredStep === step.id && (
                  <>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} animate-ping opacity-75`}></div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} animate-pulse`}></div>
                  </>
                )}
              </div>

              {/* Step Content Card - Enhanced Animation */}
              <div
                className={`w-full md:w-5/12 bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-700 transform border-2 relative overflow-hidden group ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                } ${
                  hoveredStep === step.id
                    ? 'scale-105 -translate-y-2 shadow-2xl border-transparent'
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}>
                  <div className="w-full h-full bg-gray-50 dark:bg-gray-800 rounded-2xl"></div>
                </div>

                {/* Floating Particles Effect */}
                {hoveredStep === step.id && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-float-particle-1"></div>
                    <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle-2"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-float-particle-3"></div>
                  </>
                )}

                <div className="relative z-10">
                  <span
                    className={`text-2xl font-extrabold mb-2 inline-block bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent transition-all duration-500 ${
                      hoveredStep === step.id ? 'scale-110 animate-pulse' : ''
                    }`}
                  >
                    Step {step.id}
                  </span>
                  <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-all duration-300 ${
                    hoveredStep === step.id ? 'text-transparent bg-gradient-to-r bg-clip-text ' + step.gradient : ''
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1`}>
                  <ChevronRight className={`w-6 h-6 ${step.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA - Animated */}
      <div className={`mt-20 text-center px-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 animate-fade-in-up">
          Ready to start sending money the right way?
        </p>
        <div className="relative inline-block group">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00B6DE] to-[#0066CC] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <a
            href="/download-app"
            className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-[#00B6DE] text-white rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform group-hover:scale-105"
          >
            <span className="relative z-10">Get Started Now</span>
            <ChevronRight className="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-20px, -30px); opacity: 1; }
        }
        .animate-float-particle-1 {
          animation: float-particle-1 2s ease-in-out infinite;
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(15px, -25px); opacity: 1; }
        }
        .animate-float-particle-2 {
          animation: float-particle-2 2.5s ease-in-out infinite 0.3s;
        }
        @keyframes float-particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-10px, 20px); opacity: 1; }
        }
        .animate-float-particle-3 {
          animation: float-particle-3 3s ease-in-out infinite 0.6s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;