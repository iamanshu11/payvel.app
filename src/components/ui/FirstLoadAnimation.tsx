'use client';

import { useState, useEffect } from 'react';

export default function FirstLoadAnimation() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [typedText, setTypedText] = useState('');
  const brandName = 'Payvel';

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      setIsFirstLoad(true);

      // Typing animation
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= brandName.length) {
          setTypedText(brandName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150);

      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(() => {
                setIsFirstLoad(false);
              }, 800);
            }, 500);
            return 100;
          }
          return prev + 1.5;
        });
      }, 40);

      return () => {
        clearInterval(progressInterval);
        clearInterval(typingInterval);
      };
    }
  }, []);

  if (!isFirstLoad) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
          isComplete ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
        } bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 dark:from-slate-900 dark:via-black dark:to-slate-900`}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />

        <div className="relative flex flex-col items-center gap-12 px-4">
          {/* Logo Container with 3D effect */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" 
                 style={{
                   animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                 }} />
            
            {/* Rotating rings */}
            <div className="absolute inset-0 w-40 h-40">
              <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 border-t-teal-500"
                   style={{ animation: 'spin 3s linear infinite' }} />
              <div className="absolute inset-2 rounded-full border-2 border-blue-500/30 border-b-blue-500"
                   style={{ animation: 'spin 2s linear infinite reverse' }} />
            </div>

            {/* Main logo */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 dark:from-slate-900 dark:via-black dark:to-slate-900 flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                <div className="relative">
                  <img 
                    src="/img/web-logo.png" 
                    alt="Payvel Logo" 
                    width={80} 
                    height={80}
                    className="transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
                     style={{
                       animation: 'shine 3s ease-in-out infinite',
                       transform: 'translateX(-100%)'
                     }} />
              </div>
            </div>
          </div>

          {/* Brand Name with typing effect */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-teal-400 via-teal-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
                      style={{
                        animation: 'gradient 3s ease infinite',
                        backgroundSize: '200% auto'
                      }}>
                  {typedText}
                </span>
                <span className="animate-pulse text-teal-400">
                  {typedText.length < brandName.length ? '|' : ''}
                </span>
              </h1>
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
                   style={{ width: `${(typedText.length / brandName.length) * 100}%`, transition: 'width 0.15s' }} />
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-light tracking-wide opacity-0"
               style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}>
              Crafting your payment experience
            </p>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="w-80 md:w-96 space-y-3">
            <div className="relative h-3 bg-gray-200 dark:bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-300 dark:border-slate-700/50 shadow-inner">
              {/* Progress fill */}
              <div
                className="h-full bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 rounded-full relative overflow-hidden transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  backgroundSize: '200% auto',
                  animation: 'gradient 2s linear infinite'
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                     style={{ animation: 'shimmer 1.5s infinite' }} />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-30 blur-md"
                   style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }} />
            </div>

            {/* Progress info */}
            <div className="flex justify-between items-center px-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {progress < 30 ? 'Initializing...' : 
                 progress < 60 ? 'Loading assets...' : 
                 progress < 90 ? 'Almost there...' : 
                 'Ready!'}
              </span>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  background: i % 2 === 0 ? 'rgb(20, 184, 166)' : 'rgb(59, 130, 246)',
                  animation: `float ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.4,
                  boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgb(20, 184, 166)' : 'rgb(59, 130, 246)'}`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </>
  );
}