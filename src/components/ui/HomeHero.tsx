"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(970);
  const [fromDate, setFromDate] = useState('2024-10-11');
  const [toDate, setToDate] = useState('2024-10-12');

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
        setCurrentSlide((prev) => (prev + 1) % 6);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // GSAP Animations
  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, delay: 0.3, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
          ".phone-mockup",
          { y: 100, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, delay: 0.5, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(
          ".floating-card",
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            delay: 0.8,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        );

        gsap.to(".floating-shape", {
          y: -20,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        });

        gsap.to(".floating-card", {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 2.5,
          ease: "power1.inOut",
          stagger: 0.3,
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  const slides = [
    {
      title: "See Your Spending",
      subtitle: "Track every dollar, automatically.",
      gradient: "from-green-400 to-blue-500",
      icon: "📊",
    },
    {
      title: "Set Your Target",
      subtitle: "You decide the perfect rate to send.",
      gradient: "from-yellow-400 to-orange-500",
      icon: "🎯",
    },
    {
      title: "Lightning Fast",
      subtitle: "Transfers in minutes",
      gradient: "from-teal-500 to-cyan-500",
      icon: "⚡",
    },
    {
      title: "Super Secure",
      subtitle: "Bank-level encryption",
      gradient: "from-purple-500 to-pink-500",
      icon: "🔒",
    },
    {
      title: "Low Fees",
      subtitle: "Save more, send more",
      gradient: "from-orange-500 to-red-500",
      icon: "💰",
    },
    {
      title: "24/7 Support",
      subtitle: "We're always here",
      gradient: "from-blue-500 to-indigo-500",
      icon: "💬",
    },
  ];

  // Persistent random positions for slide backgrounds
  const slideBubbles = useMemo(
    () =>
      slides.map(() =>
        Array.from({ length: 20 }, () => ({
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 10 + 8}s`,
          delay: `${Math.random() * 8}s`,
        }))
      ),
    []
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen py-16 lg:py-24 mt-10 flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Floating Gradient Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20 floating-shape"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-3xl opacity-20 floating-shape"></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="bg-green-300 max-w-fit text-center lg:text-left lg:mx-0 mx-auto p-2 rounded-full px-6 text-green-600 mb-4">
              AUSTRAC Registered
            </p>

            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="relative">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-teal-500 to-cyan-400 opacity-40 -z-10"></span>
                Your Bridge to <span className="text-teal-500">Home</span>
              </span>
            </h1>
            <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Send money from Australia, US and Canada, to Africa with love. Fast, secure, and low-cost transfers right from your phone. Because family is everything.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/send-money" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                Send Money
              </a>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Floating Cards */}
            <div className="floating-card z-10 absolute top-20 left-0 lg:left-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-56 border border-gray-200 dark:border-gray-700 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/person/img-1.webp"
                    alt="Avatar"
                    width={32}  // match your Tailwind w-8
                    height={24} // match your Tailwind h-6
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-gray-100">$250 to Kel</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Arrived safely</p>
                </div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Just a moment ago
              </p>
            </div>

            <div
              className="floating-card z-10 absolute top-16 right-0 lg:right-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-52 border border-gray-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/person/img-6.webp"
                    alt="Avatar"
                    width={32}  // match your Tailwind w-8
                    height={24} // match your Tailwind h-6
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-gray-100">$500 to Mom</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">With love</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
              </div>
            </div>


            <div className="floating-card z-10 w-76 absolute bottom-6  lg:-right-15 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 hidden lg:block">
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
                  Set rate alert
                </h3>
                <div className="flex items-center gap-2">
                  <button className="text-blue-500 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-red-500 hover:text-red-600 transition-colors hover:scale-110 transform duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Input Row */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 px-3 py-2 mb-3 hover:shadow-md transition-shadow">
                <input
                  type=""
                  value={amount}
                  className="w-10 bg-transparent text-gray-800 dark:text-gray-100 text-sm outline-none font-medium"
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">AUD</span>
                <div className="mx-2 text-blue-500 dark:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <input
                  type=""
                  value={rate}
                  className="w-12 bg-transparent text-gray-800 dark:text-gray-100 text-sm outline-none font-medium"
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">NGN</span>
              </div>

              {/* Date Range */}
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <div className="flex flex-col group">
                  <div className="flex items-center gap-1 mb-1">
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] text-gray-500">From</span>
                  </div>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 px-2 py-1 text-gray-700 dark:text-gray-200 text-xs hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                  />
                </div>
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="flex flex-col group">
                  <div className="flex items-center gap-1 mb-1">
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] text-gray-500">To</span>
                  </div>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 px-2 py-1 text-gray-700 dark:text-gray-200 text-xs hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>


            <div
              className="floating-card z-10 absolute bottom-5 left-0 lg:left-6  bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-52 border border-gray-200 dark:border-gray-700 hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="font-bold text-gray-900 dark:text-gray-100">Your Loved Ones</p>
              </div>
              <div className="flex -space-x-2 mb-3">
                <Image
                  src="/img/person/img-1.webp"
                  alt="Avatar"
                  width={32}  // match your Tailwind w-8
                  height={24} // match your Tailwind h-6
                  className="object-cover rounded"
                />
                <Image
                  src="/img/person/img-2.webp"
                  alt="Avatar"
                  width={32}  // match your Tailwind w-8
                  height={24} // match your Tailwind h-6
                  className="object-cover rounded"
                />
                <Image
                  src="/img/person/img-3.webp"
                  alt="Avatar"
                  width={32}  // match your Tailwind w-8
                  height={24} // match your Tailwind h-6
                  className="object-cover rounded"
                />
                <Image
                  src="/img/person/img-4.webp"
                  alt="Avatar"
                  width={32}  // match your Tailwind w-8
                  height={24} // match your Tailwind h-6
                  className="object-cover rounded"
                />

              </div>
              <button className="w-full text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline text-left">
                Send again or add someone new →
              </button>
            </div>

            {/* Phone Mockup Section */}
            <div className="w-full md:w-[320px] flex justify-center relative">

              {/* Phone Mockup */}
              <div
                className="phone-mockup relative w-full h-[600px] cursor-pointer"
                style={{
                  transform: 'perspective(1000px) rotateY(0deg)',
                  transition: 'transform 0.3s ease-out'
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
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                }}
              >

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
                <div className="absolute inset-4 bg-white dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-1 
                ">
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


                  {/* App Logo with Pulse */}
                  <div className="flex flex-col items-center mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                      <div
                        className="relative w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 hover:rotate-6 cursor-pointer"
                        onClick={() => {
                          const logo = document.querySelector('.app-logo');
                          logo?.classList.add('animate-spin');
                          setTimeout(() => logo?.classList.remove('animate-spin'), 1000);
                        }}
                      >
                        <img src="/img/logo.png" alt="Payvel Logo" width={50} height={40} className="app-logo" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Carousel */}
                  <div
                    className="relative mx-6 mt-6 h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                          ? "opacity-100 translate-x-0 scale-100"
                          : index < currentSlide
                            ? "opacity-0 -translate-x-full scale-95"
                            : "opacity-0 translate-x-full scale-95"
                          }`}
                      >
                        <div className={`relative w-full h-full bg-gradient-to-br ${slide.gradient} p-6 flex flex-col items-center justify-center text-white overflow-hidden`}>
                          {/* Animated Background */}
                          <div className="absolute inset-0 opacity-20">
                            {[...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute rounded-full bg-white"
                                style={{
                                  width: Math.random() * 100 + 50 + 'px',
                                  height: Math.random() * 100 + 50 + 'px',
                                  top: Math.random() * 100 + '%',
                                  left: Math.random() * 100 + '%',
                                  animation: `float ${Math.random() * 10 + 8}s infinite ease-in-out`,
                                  animationDelay: `${Math.random() * 8}s`
                                }}
                              />
                            ))}
                          </div>

                          {/* Icon with interaction */}
                          <div
                            className="relative text-7xl mb-4 transform transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer z-10"
                            onClick={() => {
                              const icon = document.querySelector(`#icon-${index}`);
                              icon?.classList.add('animate-bounce');
                              setTimeout(() => icon?.classList.remove('animate-bounce'), 1000);
                            }}
                            id={`icon-${index}`}
                          >
                            {slide.icon}
                          </div>

                          <h3 className="relative text-2xl text-center font-black mb-2 z-10 animate-pulse">{slide.title}</h3>
                          <p className="relative text-center text-lg opacity-90 z-10">{slide.subtitle}</p>

                          {/* Particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(15)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                                style={{
                                  top: Math.random() * 100 + '%',
                                  left: Math.random() * 100 + '%',
                                  animationDelay: `${Math.random() * 2}s`,
                                  animationDuration: `${Math.random() * 2 + 1}s`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Interactive Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${index === currentSlide
                            ? "bg-white w-8 shadow-lg shadow-white/50"
                            : "bg-white/50 w-2 hover:bg-white/75"
                            }`}
                        />
                      ))}
                    </div>

                  </div>

                  {/* Bottom Text with Animation */}
                  <p className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full text-center text-xs text-gray-400 mt-4 px-6 animate-pulse">
                    Made with <span className="text-red-500 animate-ping inline-block">❤️</span> by Payvel
                  </p>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}