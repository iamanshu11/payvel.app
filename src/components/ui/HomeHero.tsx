"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
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
        setCurrentSlide((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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

  return (
    <section
      ref={heroRef}
      className="relative py-16 lg:py-24 mt-10 flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Floating Gradient Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20 floating-shape"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-3xl opacity-20 floating-shape"></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="relative">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-teal-500 to-cyan-400 opacity-40 -z-10"></span>
                Your Bridge to <span className="text-teal-500">Home</span>
              </span>
            </h1>
            <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Send money from Australia to Africa with love. Fast, secure, and low-cost transfers right from your phone. Because family is everything.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/send-money" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                Send Money
              </a>
              <a href="" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
                Learn More
              </a>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="w-full lg:w-1/2 hidden  lg:flex justify-center relative">
            {/* Floating Cards */}
            <div className="floating-card z-10 absolute top-20 left-0 lg:left-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-48 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/img/person/img-4.webp"
                    alt="The Old Way - Complex Multi-Vendor Setup"
                    width={20}
                    height={20}
                    className="w-full h-auto object-contain "
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Send Money</p>
                  <p className="font-bold text-gray-900 dark:text-gray-100">1,000.00 AUD</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇦🇺</span>
                <span className="text-gray-400">→</span>
                <span className="text-2xl">🇳🇬</span>
              </div>
            </div>

            <div className="floating-card z-10 absolute top-16 right-0 lg:right-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-40 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">✓</div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">KYC Status</p>
                  <p className="font-bold text-green-500 text-sm">Verified</p>
                </div>
              </div>
            </div>

            <div className="floating-card z-10 absolute bottom-20 left-0 lg:left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-44 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/img/person/img-1.webp"
                    alt="The Old Way - Complex Multi-Vendor Setup"
                    width={20}
                    height={20}
                    className="w-full h-auto object-contain "
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/img/person/img-2.webp"
                    alt="The Old Way - Complex Multi-Vendor Setup"
                    width={20}
                    height={20}
                    className="w-full h-auto object-contain "
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/img/person/img-3.webp"
                    alt="The Old Way - Complex Multi-Vendor Setup"
                    width={20}
                    height={20}
                    className="w-full h-auto object-contain "
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/img/person/img-6.webp"
                    alt="The Old Way - Complex Multi-Vendor Setup"
                    width={20}
                    height={20}
                    className="w-full h-auto object-contain "
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Recipients</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">Manage</p>
            </div>

            <div className="floating-card z-10 absolute bottom-0 right-0 lg:right-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-48 border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Recent Transaction</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/img/person/img-4.webp"
                      alt="The Old Way - Complex Multi-Vendor Setup"
                      width={20}
                      height={20}
                      className="w-full h-auto object-contain "
                    />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-gray-900 dark:text-gray-100">Family Support</p>
                    <p className="text-xs mt-1 text-gray-500">2 mins ago</p>
                  </div>
                </div>
                <p className="font-bold text-teal-500">$250</p>
              </div>
            </div>

            {/* Phone Mockup Section */}
            <div className="w-full lg:w-1/2 hidden  lg:flex justify-center relative">

              {/* Phone Mockup */}
              <div
                className="phone-mockup relative w-80 h-[600px] cursor-pointer"
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
                <div className="absolute inset-0 bg-white dark:bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20">
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
                                  animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                                  animationDelay: `${Math.random() * 5}s`
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

                          <h3 className="relative text-3xl font-black mb-2 z-10 animate-pulse">{slide.title}</h3>
                          <p className="relative text-lg opacity-90 z-10">{slide.subtitle}</p>

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

                    {/* Swipe indicators */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/30 animate-pulse">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 animate-pulse">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Text with Animation */}
                  <p className="text-center text-xs text-gray-400 mt-4 px-6 animate-pulse">
                    Made with <span className="text-red-500 animate-ping inline-block">❤️</span> by Payvel
                  </p>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}