"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Shield, Zap, Globe, ArrowRight, Star } from "lucide-react";

// Import the Calculator component (in your actual project, import from the separate file)
import Calculator from "./Calculator";

const SendMoney = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroOpacity = 1 - scrollProgress;
  const heroScale = 1 - scrollProgress * 0.2;

  const features = [
    { icon: Zap, title: "Instant Transfers", desc: "Money arrives in seconds" },
    {
      icon: Shield,
      title: "Bank-Level Security",
      desc: "Your data is protected",
    },
    { icon: Globe, title: "Global Reach", desc: "190+ countries supported" },
  ];

  return (
    <div className="min-h-[160vh] bg-white dark:bg-black text-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <img
          src="/img/ngn-hero.webp"
          alt="ChipperCash Community"
          className="w-full h-full object-cover object-top"
        />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-white/70 dark:bg-transparent"></div>
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-transparent dark:bg-black/70"></div>
      </div>

      {/* Hero Section */}
      <div
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 pointer-events-none"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          transition: "opacity 0.1s, transform 0.1s",
        }}
      >
        {/* Floating Badge */}
        <div className="mb-2 mt-8 animate-bounce">
          <div className="hidden lg:flex  items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-900/7 border border-gray-200/50 dark:border-gray-700/50  backdrop-blur-xl rounded-full ">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm dark:text-white text-gray-900font-medium">
              Trusted by 1M+ users worldwide
            </span>
          </div>
        </div>

        <h1 className="text-3xl mt-6 md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white text-center mb-6 leading-tight">
          Send Money from <br />{" "}
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Australia
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Nigeria
          </span>
          <br />
          with{" "}
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Payvel
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl ">
          The platform you love. Zero fees. Instant transfers. Global reach. Experience the fast, secure, and simple way to support your loved ones back home.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-6 py-3  backdrop-blur-xl rounded-full bg-white/70 dark:bg-gray-900/7  hover:bg-white/10 dark:hover:bg-white/5 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon size={20} className="text-teal-400" />
                <span className="dark:text-white text-gray-900 font-medium">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex  flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400/60">
              Scroll to Send Money
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-400/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-300 dark:bg-gray-400/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="relative w-full px-6 pb-12 pointer-events-auto pt-[100vh]">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl"></div>
          <Calculator />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SendMoney;
