"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollStep {
  title: string;
  description: string;
  component: React.ReactNode;
  accent: string;
}

const DashboardView1 = () => (
  <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2 mt-2">
        <div className="w-8 h-8 bg-black/80 dark:bg-cyan-100 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white dark:text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="w-8 h-8 bg-black/80 dark:bg-cyan-100 backdrop-blur-sm rounded-full relative flex items-center justify-center">
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <svg
          className="w-5 h-5 text-white dark:text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
    </div>

    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 backdrop-blur-xl rounded-3xl p-5 mb-4 shadow-2xl">
      <div className="text-white-600 text-xs font-bold mb-3 tracking-wider">
        ✈️ FLIGHT SEARCH
      </div>
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 border-2 border-cyan-200">
          <div className="text-xs text-gray-500 mb-1">FROM</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-4">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-full h-full object-cover rounded-sm"
              />
            </span>
            <div>
              <div className="font-bold text-gray-900">New York</div>
              <div className="text-xs text-gray-500">JFK Airport</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-2 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-5 h-5 text-white "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 border-2 border-purple-200">
          <div className="text-xs text-gray-500 mb-1">TO</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-4">
              <img
                src="https://flagcdn.com/au.svg"
                alt="Australia Flag"
                className="w-full h-full object-cover rounded-sm"
              />
            </span>
            <div>
              <div className="font-bold text-gray-900">Sydney</div>
              <div className="text-xs text-gray-500">SYD Airport</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-2 border border-cyan-200">
          <div className="text-xs text-gray-500">Departure</div>
          <div className="text-sm font-semibold text-gray-900">Nov 15</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-2 border border-purple-200">
          <div className="text-xs text-gray-500">Return</div>
          <div className="text-sm font-semibold text-gray-900">Nov 30</div>
        </div>
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95">
        Search Flights 🔍
      </button>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="bg-white/90 dark:bg-cyan-100 dark:text-white backdrop-blur-sm rounded-2xl p-3 text-center shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-2xl mb-1">💰</div>
        <div className="text-xs font-semibold  text-gray-900">Best Price</div>
      </div>
      <div className="bg-white/90  dark:bg-cyan-100 backdrop-blur-sm rounded-2xl p-3 text-center shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-2xl mb-1">⚡</div>
        <div className="text-xs font-semibold text-gray-900">Fast Track</div>
      </div>
      <div className="bg-white/90 dark:bg-cyan-100 backdrop-blur-sm rounded-2xl p-3 text-center shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-2xl mb-1">🎫</div>
        <div className="text-xs font-semibold text-gray-900">My Trips</div>
      </div>
    </div>
  </div>
);

const DashboardView2 = () => (
  <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 mt-4 dark:bg-white/20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-sm font-bold  mt-4 text-black dark:text-white">
        🎓 Student Hub
      </h2>
      <div className="w-8"></div>
    </div>

    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 backdrop-blur-xl rounded-3xl p-5 mb-4 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-900 mb-1">TOTAL BALANCE</div>
          <div className="text-2xl font-bold text-gray-900">$15,350</div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
          💳
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-3 border-2 border-orange-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-orange-600">
            Available Credit
          </span>
          <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-bold">
            Active
          </span>
        </div>
        <div className="text-xl font-bold text-gray-900">$25,000</div>
      </div>
    </div>

    <div className="space-y-3">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-red-500">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold text-gray-900 mb-1">📚 Semester Fee</div>
            <div className="text-xs text-gray-500">Due: Nov 30, 2025</div>
          </div>
          <div className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
            Overdue
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-gray-900">$12,500</div>
          <button className="text-xs bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-xl font-bold hover:shadow-lg transition-shadow">
            Pay Now
          </button>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-yellow-500">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold text-gray-900 mb-1">
              📖 Books & Supplies
            </div>
            <div className="text-xs text-gray-500">Due: Dec 15, 2025</div>
          </div>
          <div className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold">
            Pending
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-gray-900">$850</div>
          <button className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-xl font-bold hover:shadow-lg transition-shadow">
            Schedule
          </button>
        </div>
      </div>
    </div>
  </div>
);

const DashboardView3 = () => (
  <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-black dark:text-white">
        📊 Dashboard
      </h2>
      <div className="flex gap-2 mt-4">
        <div className="w-8 h-8 bg-black/50 dark:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="w-8 h-8 bg-black/50 dark:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 backdrop-blur-xl rounded-3xl p-5 mb-4 shadow-2xl">
      <div className="text-xs text-gray-800 mb-1">THIS MONTH</div>
      <div className="text-3xl font-bold text-gray-900 mb-4">$45,820</div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-3 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
              ↑
            </div>
            <span className="text-xs text-gray-600 font-semibold">
              Received
            </span>
          </div>
          <div className="text-xl font-bold text-gray-900">$13,320</div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-3 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs">
              ↓
            </div>
            <span className="text-xs text-gray-600 font-semibold">Sent</span>
          </div>
          <div className="text-xl font-bold text-gray-900">$32,500</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-lg">
          💸
        </div>
        <div className="font-bold text-gray-900 text-sm">Send Money</div>
        <div className="text-xs text-gray-500">Instant transfer</div>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-lg">
          ✈️
        </div>
        <div className="font-bold text-gray-900 text-sm">Book Travel</div>
        <div className="text-xs text-gray-500">Flights & Hotels</div>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-lg">
          💰
        </div>
        <div className="font-bold text-gray-900 text-sm">Budget Plan</div>
        <div className="text-xs text-gray-500">Track expenses</div>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-xl mb-2 shadow-lg">
          📊
        </div>
        <div className="font-bold text-gray-900 text-sm">Analytics</div>
        <div className="text-xs text-gray-500">View insights</div>
      </div>
    </div>
  </div>
);

const ScrollytellingSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollSteps: ScrollStep[] = [
    {
      title: "Find the best flight deals",
      description:
        "Search thousands of routes with transparent pricing and real-time currency conversion. Your journey starts here.",
      component: <DashboardView1 />,
      accent: "from-cyan-500 to-blue-600",
    },
    {
      title: "Manage student finances",
      description:
        "Track tuition, accommodation, and expenses in one secure place with instant notifications and smart reminders.",
      component: <DashboardView2 />,
      accent: "from-orange-500 to-pink-600",
    },
    {
      title: "Everything in one dashboard",
      description:
        "Flights, hotels, and money transfers organized beautifully with real-time insights and powerful analytics.",
      component: <DashboardView3 />,
      accent: "from-cyan-500 to-cyan-600",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % scrollSteps.length);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, scrollSteps.length]);

  const handlePhoneMouseEnter = () => {
    setIsPaused(true);
  };

  const handlePhoneMouseLeave = () => {
    setIsPaused(false);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="relative flex flex-col justify-center order-2 lg:order-1">
            {/* Step Indicator */}
            <div
              className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${scrollSteps[activeIndex].accent} text-white text-xs font-bold mb-4 sm:mb-6 shadow-lg transition-all duration-500 w-fit`}
            >
              Step {activeIndex + 1} of {scrollSteps.length}
            </div>

            {/* Animated Title */}
            <div className="relative h-20 sm:h-20 lg:h-48  overflow-hidden">
              {scrollSteps.map((step, index) => (
                <h2
                  key={index}
                  className={`absolute top-0 left-0 w-full text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight bg-gradient-to-r ${
                    step.accent
                  } bg-clip-text text-transparent transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : activeIndex > index
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  {step.title}
                </h2>
              ))}
            </div>

            {/* Animated Description */}
            <div className="relative h-20 sm:h-20 lg:h-32 mb-6 sm:mb-8 overflow-hidden">
              {scrollSteps.map((step, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 w-full text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : activeIndex > index
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  {step.description}
                </p>
              ))}
            </div>

            {/* Navigation Dots - Desktop: between text and phone, Mobile: at bottom */}
            <div className="hidden lg:flex gap-3 mb-4">
              {scrollSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`group relative transition-all duration-300 ${
                    activeIndex === index
                      ? "scale-110"
                      : "scale-100 hover:scale-105"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? `bg-gradient-to-r ${step.accent} shadow-lg`
                        : "bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600"
                    }`}
                  ></div>
                  {activeIndex === index && (
                    <div
                      className={`absolute inset-0 rounded-full animate-ping bg-gradient-to-r ${step.accent}`}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Mockup - Right Side */}
          <div
            className="relative flex items-center justify-center order-1 lg:order-2"
            onMouseEnter={handlePhoneMouseEnter}
            onMouseLeave={handlePhoneMouseLeave}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[320px] lg:max-w-[340px] mx-auto">
              {/* Phone Frame */}
              <div
                className="relative bg-gray-950 rounded-[40px] sm:rounded-[48px] p-2 sm:p-3 shadow-2xl transition-all duration-700 ease-out"
                style={{
                  transform: `scale(${0.95 + activeIndex * 0.025}) rotateY(${
                    Math.sin(activeIndex) * 3
                  }deg)`,
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-6 sm:h-7 bg-gray-950 rounded-b-2xl sm:rounded-b-3xl z-10 flex items-center justify-center">
                  <div className="w-12 sm:w-16 h-1 bg-gray-800 rounded-full mt-2"></div>
                </div>

                {/* Screen Container */}
                <div
                  className="relative w-full bg-white rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-inner"
                  style={{ height: "600px" }}
                >
                  {/* Sliding Content */}
                  {scrollSteps.map((step, index) => (
                    <div
                      key={index}
                      className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-out"
                      style={{
                        transform: `translateY(${
                          (index - activeIndex) * 100
                        }%)`,
                      }}
                    >
                      {step.component}
                    </div>
                  ))}
                </div>

                {/* Volume Buttons */}
                <div className="absolute -left-1 top-28 sm:top-32 w-1 h-10 sm:h-12 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -left-1 top-40 sm:top-48 w-1 h-10 sm:h-12 bg-gray-800 rounded-l-lg"></div>

                {/* Power Button */}
                <div className="absolute -right-1 top-32 sm:top-40 w-1 h-12 sm:h-16 bg-gray-800 rounded-r-lg"></div>
              </div>

              {/* Dynamic Glow Effect */}
              <div
                className="absolute -inset-6 sm:-inset-8 rounded-full opacity-40 blur-3xl transition-all duration-1000 -z-10"
                style={{
                  background:
                    activeIndex === 0
                      ? "radial-gradient(circle at center, #06b6d4 0%, #3b82f6 50%, transparent 70%)"
                      : activeIndex === 1
                      ? "radial-gradient(circle at center, #f97316 0%, #ec4899 50%, transparent 70%)"
                      : "radial-gradient(circle at center, #a855f7 0%, #ec4899 50%, transparent 70%)",
                }}
              ></div>

              {/* Floating Particles */}
              <div className="absolute top-10 -right-4 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div
                className="absolute bottom-20 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots - Mobile: at bottom of section */}
        <div className="flex lg:hidden justify-center gap-3 mt-8">
          {scrollSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`group relative transition-all duration-300 ${
                activeIndex === index
                  ? "scale-110"
                  : "scale-100 hover:scale-105"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${step.accent} shadow-lg`
                    : "bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600"
                }`}
              ></div>
              {activeIndex === index && (
                <div
                  className={`absolute inset-0 rounded-full animate-ping bg-gradient-to-r ${step.accent}`}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;
