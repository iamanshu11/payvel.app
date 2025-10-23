"use client";
import { useEffect, useRef, useState, useMemo } from "react";

export default function BudgetHome() {
  const heroRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const slides = [
    {
      title: "Dashboard",
      component: (
        <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
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
            <div className="w-6 h-6 relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              <svg
                className="w-5 h-5"
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

          {/* Student Hub Highlight Card */}
          <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-5 mb-6 shadow-xl text-white">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold tracking-wide">
                Manage student finances
              </h2>
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-inner">
                🎓
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Track tuition, accommodation, and expenses in one secure place
              with instant notifications and smart reminders.
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 font-semibold rounded-full text-sm hover:bg-orange-50 transition">
              Go to Student Hub →
            </button>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Tuition */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                🎓
              </div>
              <p className="text-xs text-gray-800 dark:text-gray-100 text-center font-semibold">
                Track <br></br> Tuition
              </p>
            </div>

            {/* Accommodation */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                🏠
              </div>
              <p className="text-xs text-gray-800 dark:text-gray-100 text-center font-semibold">
                Track <br></br>Accommodation
              </p>
            </div>

            {/* Expenses */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                💳
              </div>
              <p className="text-xs text-gray-800 dark:text-gray-100 text-center font-semibold">
                Track <br></br>Expenses
              </p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                🎯
              </div>
              <p className="text-xs text-gray-800 dark:text-gray-100 text-center font-semibold">
                Track <br></br> Scholarships
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Agent & Insurance",
      component: (
        <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto scrollbar-hide">
          {/* Header */}
          <div className="flex items-center mb-4">
            <button className="mr-3">
              <svg
                className="w-5 h-5"
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
            </button>
            <h2 className="text-base font-bold">Agent & Insurance</h2>
          </div>

          {/* Hero Card */}
          <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-5 mb-6 shadow-xl text-white">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold tracking-wide">
                Pay Agents & Insurance Easily
              </h2>
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-inner">
                🤝
              </div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              One place to handle agent and insurance payments—securely and
              smartly.
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 font-semibold rounded-full text-sm hover:bg-orange-50 transition">
              Get Started →
            </button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">💼</div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                Pay Education Agent
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                Manage Insurance
              </p>
            </div>
          </div>

          {/* Small Info Banner */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-4 text-white flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Smart & Secure Transfers</p>
              <p className="text-xs text-white/80">
                No more complicated bank forms or waiting days.
              </p>
            </div>
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      ),
    },

{
  title: "Send Money Home",
  component: (
    <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto scrollbar-hide">
      
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="mr-3">
          <svg
            className="w-5 h-5"
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
        </button>
        <h2 className="text-base font-bold">Send Money Home</h2>
      </div>

      {/* Hero Card */}
      <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-5 mb-6 shadow-xl text-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold tracking-wide">
            Hassle-Free Money Transfers
          </h2>
          <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-inner">
            💸
          </div>
        </div>
        <p className="text-sm text-white/90 leading-relaxed">
          Send money back home instantly with great rates.
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-teal-600 font-semibold rounded-full text-sm hover:bg-teal-100 transition">
          Send Now →
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-2">⚡</div>
          <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">
            Instant Transfer
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-2">📄</div>
          <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">
            History & Receipts
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-4 text-white flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Safe & Reliable</p>
          <p className="text-xs text-white/80">
            Send money home without delays or hidden fees.
          </p>
        </div>
        <span className="text-2xl">🏠</span>
      </div>
    </div>
  ),
},

  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      ref={heroRef}
      className="relative py-10 lg:py-16  bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Floating Gradient Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section - Dynamic based on current slide */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="transition-all duration-700 ease-in-out">
              {currentSlide === 0 && (
                <>
                  <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="relative">
                      <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-teal-500 to-cyan-400 opacity-40 -z-10"></span>
                      Manage student{" "}
                      <span className="text-teal-500">finances.</span>
                    </span>
                  </h1>
                  <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                    Track tuition, accommodation, and expenses in one secure
                    place with instant notifications and smart reminders.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                    {/* CTA moved to single centralized button below so it's consistent across slides */}
                  </div>
                </>
              )}

              {currentSlide === 1 && (
                <>
                  <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="relative">
                      <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 to-blue-400 opacity-40 -z-10"></span>
                      Pay agents &{" "}
                      <span className="text-cyan-500">insurance easily.</span>
                    </span>
                  </h1>
                  <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                    Handle payments for education agents and student insurance
                    providers directly from the app. No more complicated bank
                    transfers.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                    {/* CTA moved to single centralized button below so it's consistent across slides */}
                    {/* <a href="/how-it-works" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            How It Works
                                        </a> */}
                  </div>
                </>
              )}

              {currentSlide === 2 && (
                <>
                  <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="relative">
                      <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-40 -z-10"></span>
                      Send money home,{" "}
                      <span className="text-blue-500">hassle-free.</span>
                    </span>
                  </h1>
                  <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                    Need to send money back to your family? Do it instantly with
                    the great rates you already love from Payvel.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                    {/* CTA moved to single centralized button below so it's consistent across slides */}
                    {/* <a href="/how-it-works" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            How It Works
                                        </a> */}
                  </div>
                </>
              )}
            </div>
            {/* Single centralized CTA that changes text/href with the active slide */}
            {/* Keep presentation identical to previous per-slide CTAs */}
            {(() => {
              const ctas = [
                { label: "Download App", href: "/download-app" },
                { label: "Download App", href: "/download-app" },
                { label: "Download App", href: "/download-app" },
                { label: "Explore Travel & Remit", href: "/travel" },
              ];
              const active = ctas[currentSlide] || ctas[0];
              return (
                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href={active.href}
                    className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                  >
                    {active.label}
                  </a>
                </div>
              );
            })()}
          </div>

          {/* Phone Mockup Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Phone Mockup Section */}
            <div className="w-full md:w-[320px] flex justify-center relative">
              {/* Phone Mockup */}
              <div
                className="phone-mockup relative w-full h-[600px] cursor-pointer"
                style={{
                  transform: "perspective(1000px) rotateY(0deg)",
                  transition: "transform 0.3s ease-out",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -10;
                  const rotateY = ((x - centerX) / centerX) * 10;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                }}
              >
                {/* overlay buttons removed per request; slide controls moved below the section */}
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-black dark:bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                </div>

                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-35 h-7 bg-gray-900 rounded-b-3xl z-20">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Screen */}
                <div className="absolute inset-4 bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div
                    className="flex items-center justify-between px-6 pt-4 
                "
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {currentTime}
                    </span>

                    <div className="flex items-center gap-1">
                      {/* Bar chart icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-900 dark:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2 22h2v-4H2v4zm4 0h2v-7H6v7zm4 0h2v-10h-2v10zm4 0h2V8h-2v14zm4 0h2V4h-2v18zm4-18v18h2V4h-2z" />
                      </svg>

                      {/* Monitor icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-4 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4 6h-1v4h1v-4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Interactive Carousel */}
                  {/* Interactive Carousel */}
                  <div
                    className="relative h-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === currentSlide
                            ? "opacity-100 translate-x-0 scale-100"
                            : index < currentSlide
                            ? "opacity-0 -translate-x-full scale-95"
                            : "opacity-0 translate-x-full scale-95"
                        }`}
                      >
                        {slide.component}
                      </div>
                    ))}

                    {/* Interactive Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                            index === currentSlide
                              ? "bg-teal-500 w-8 shadow-lg shadow-teal-500/50"
                              : "bg-gray-400 w-2 hover:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Centered slide controls below the section (responsive) */}
      <div className="mt-6 flex justify-center w-full">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevSlide}
            aria-label="previous slide"
            className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Prev
          </button>

          <div className="hidden sm:flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 transform ${
                  index === currentSlide
                    ? "bg-teal-500 w-8 shadow-lg shadow-teal-500/50"
                    : "bg-gray-400 w-2 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextSlide}
            aria-label="next slide"
            className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
