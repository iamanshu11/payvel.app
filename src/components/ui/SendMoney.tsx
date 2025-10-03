'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Zap, Globe, ArrowRight, Star } from 'lucide-react';

// Import the Calculator component (in your actual project, import from the separate file)
import Calculator from './Calculator';



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
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const heroOpacity = 1 - scrollProgress;
  const heroScale = 1 - (scrollProgress * 0.2);
  const calculatorTransform = 100 - (scrollProgress * 100);

  const features = [
    { icon: Zap, title: 'Instant Transfers', desc: 'Money arrives in seconds' },
    { icon: Shield, title: 'Bank-Level Security', desc: 'Your data is protected' },
    { icon: Globe, title: 'Global Reach', desc: '190+ countries supported' }
  ];

  return (
    <div className="min-h-[200vh] bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ 
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div 
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 pointer-events-none"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          transition: 'opacity 0.1s, transform 0.1s'
        }}
      >
        {/* Floating Badge */}
        <div className="mb-8 animate-bounce">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm text-white font-medium">Trusted by 1M+ users worldwide</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center mb-6 leading-tight">
          Send Money with
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Payvel
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-3xl font-light">
          The platform you love. Zero fees. Instant transfers. Global reach.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon size={20} className="text-teal-400" />
                <span className="text-white font-medium">{feature.title}</span>
              </div>
            );
          })}
        </div>

        {/* Floating Currency Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { emoji: '💰', pos: 'top-[20%] left-[15%]', delay: '0s', size: 'w-16 h-16' },
            { emoji: '💸', pos: 'top-[30%] right-[20%]', delay: '1s', size: 'w-20 h-20' },
            { emoji: '💵', pos: 'bottom-[30%] left-[25%]', delay: '2s', size: 'w-18 h-18' },
            { emoji: '💳', pos: 'bottom-[25%] right-[15%]', delay: '1.5s', size: 'w-16 h-16' },
            { emoji: '🌍', pos: 'top-[15%] right-[10%]', delay: '0.5s', size: 'w-24 h-24' }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`absolute ${item.pos} ${item.size} flex items-center justify-center text-4xl opacity-30`}
              style={{ 
                animation: 'float 6s ease-in-out infinite',
                animationDelay: item.delay,
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {item.emoji}
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/60">Scroll to Send Money</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div 
        className="fixed bottom-0 left-0 w-full px-6 pb-12 pointer-events-auto"
        style={{
          transform: `translateY(${calculatorTransform}%)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl"></div>
          <Calculator />
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-screen"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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