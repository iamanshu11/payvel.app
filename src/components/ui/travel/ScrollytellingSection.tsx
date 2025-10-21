"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollStep {
  title: string;
  description: string;
  component: React.ReactNode;
}

const DashboardView1 = () => (
  <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-black p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
      <div className="w-6 h-6 relative">
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
    </div>

    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-4 mb-4 shadow-lg">
      <div className="text-white text-xs font-semibold mb-3">TODAY RATE</div>
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg px-2 py-2 flex items-center gap-1 text-xs">
          🇺🇸 <span className="font-semibold text-gray-900 dark:text-gray-100">USD</span>
        </div>
        <input
          type="text"
          placeholder="Enter amount"
          className="w-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500"
        />
      </div>
      <div className="flex items-center justify-center my-2">
        <div className="text-white dark:text-gray-900 text-2xl">⇅</div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-2 py-2 flex items-center gap-1 text-xs">
          🇦🇺 <span className="font-semibold">AUD</span>
        </div>
        <input
          type="text"
          placeholder="Enter amount"
          className="w-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500"
        />
      </div>
      <div className="text-white dark:text-gray-900 text-xs mt-3">Conversion Rate: 1.8</div>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">🎓</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">Student Hub</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">💸</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">Remittance Hub</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">✈️</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">Travel Hub</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-3">
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">💰</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">Budget</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">💲</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">Rate alert</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">👤</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 text-center font-medium">My Profile</p>
      </div>
    </div>

    <div className="flex justify-center mt-3">
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">🎟️</div>
        <p className="text-xs text-blue-600 dark:text-blue-300 font-medium">Vouchers</p>
      </div>
    </div>
  </div>
);

const DashboardView2 = () => (
  <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-950 dark:via-orange-950 dark:to-black p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Student Hub</h2>
      <button className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">View All</button>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">🎓</div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">University Payments</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Secure & Fast</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2 text-sm font-medium transition-colors">Tuition Fee</button>
        <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg py-2 text-sm font-medium transition-colors">Accommodation</button>
      </div>
    </div>

    <div className="space-y-3">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Semester Fee</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Due: Nov 30, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-gray-900 dark:text-white">$12,500</p>
            <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full">Pending</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Housing Deposit</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Due: Dec 15, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-gray-900 dark:text-white">$2,000</p>
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Paid</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Books & Supplies</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Due: Oct 25, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-gray-900 dark:text-white">$850</p>
            <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded-full">Overdue</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardView3 = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-950 dark:via-emerald-950 dark:to-black p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Services</h2>
      <div className="w-6 h-6 relative">
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 mb-4 shadow-lg text-white">
      <p className="text-xs font-semibold mb-2 opacity-90">TOTAL TRANSACTIONS</p>
      <p className="text-3xl font-bold mb-1">$45,820</p>
      <p className="text-xs opacity-80">This month • Oct 2025</p>
      <div className="mt-3 flex gap-2">
        <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
          <p className="text-xs opacity-75">Sent</p>
          <p className="text-sm font-semibold">$32,500</p>
        </div>
        <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
          <p className="text-xs opacity-75">Received</p>
          <p className="text-sm font-semibold">$13,320</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-3">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow">
        <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center text-xl mb-2">💸</div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Send Money</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Quick transfer</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-xl mb-2">✈️</div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Book Travel</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Flights & Hotels</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow">
        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-xl mb-2">💰</div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Budget Plan</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Track expenses</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xl mb-2">📊</div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Analytics</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">View insights</p>
      </div>
    </div>
  </div>
);

const ScrollytellingSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollSteps: ScrollStep[] = [
    {
      title: "Find the best flight deals.",
      description: "Search thousands of routes from top airlines to find the perfect flight for your journey, all with transparent pricing and real-time currency conversion.",
      component: <DashboardView1 />
    },
    {
      title: "Manage your student finances.",
      description: "From tuition fees to accommodation costs, keep track of all your educational expenses in one secure place with instant notifications and payment reminders.",
      component: <DashboardView2 />
    },
    {
      title: "Manage it all in one place.",
      description: "Your flight itinerary, hotel bookings, and money transfers are all organized in one simple, secure dashboard with real-time insights and analytics.",
      component: <DashboardView3 />
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-transparent to-purple-50/50 dark:from-cyan-950/20 dark:via-transparent dark:to-purple-950/20 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1">
            {scrollSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center py-12 transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-30 translate-y-8'
                }`}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {step.title}
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sticky Phone Mockup - Right Side */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:h-screen flex items-center justify-center">
            <div className="relative w-full max-w-[320px] mx-auto" style={{ height: '640px' }}>
              {/* Phone Frame */}
              <div 
                className="absolute inset-0 bg-gray-900 dark:bg-gray-800 rounded-[40px] p-3 shadow-2xl transition-all duration-700 ease-out"
                style={{
                  transform: `scale(${0.98 + activeIndex * 0.01}) rotateY(${activeIndex === 1 ? 2 : 0}deg)`,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 dark:bg-gray-800 rounded-b-2xl z-10"></div>
                
                {/* Screen Container */}
                <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[32px] overflow-hidden shadow-inner">
                  {/* Animated Content */}
                  {scrollSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        activeIndex === index
                          ? 'opacity-100 scale-100 translate-x-0'
                          : activeIndex > index
                          ? 'opacity-0 scale-95 -translate-x-full'
                          : 'opacity-0 scale-95 translate-x-full'
                      }`}
                    >
                      {step.component}
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Glow Effect */}
              <div 
                className="absolute -inset-4 rounded-[48px] opacity-30 blur-3xl transition-all duration-1000 -z-10"
                style={{
                  background: activeIndex === 0 
                    ? 'radial-gradient(circle at center, #06b6d4 0%, #0891b2 50%, transparent 70%)'
                    : activeIndex === 1
                    ? 'radial-gradient(circle at center, #f59e0b 0%, #f97316 50%, transparent 70%)'
                    : 'radial-gradient(circle at center, #a855f7 0%, #ec4899 50%, transparent 70%)'
                }}
              ></div>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2">
              {scrollSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === index
                      ? 'w-8 bg-cyan-500 dark:bg-cyan-400'
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;