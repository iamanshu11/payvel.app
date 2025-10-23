"use client";
import { useEffect, useRef, useState } from "react";

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState("");

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

  const hubItems = [
    { icon: "🎓", title: "Tuition Payment", color: "from-blue-500 to-cyan-500" },
    { icon: "🏥", title: "Student Insurance", color: "from-green-500 to-emerald-500" },
    { icon: "👨‍💼", title: "Agent Fees", color: "from-purple-500 to-pink-500" },
    { icon: "📚", title: "Course Materials", color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen py-16 lg:py-24 mt-10 flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Floating Gradient Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="relative">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-teal-500 to-cyan-400 opacity-40 -z-10"></span>
                Focus on your studies, <span className="text-teal-500">we'll handle the fees.</span>
              </span>
            </h1>
            <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              The all-in-one financial hub for international students. Pay tuition, manage expenses, and send money home, all from a single, secure app.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/download-app" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                Download App
              </a>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="w-full md:w-[320px] flex justify-center relative">
              {/* Phone Mockup */}
              <div
                className="phone-mockup relative w-full h-[600px] overflow-hidden cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                </div>

                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-35 h-7 bg-gray-900 rounded-b-3xl z-20">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Screen */}
                <div className="absolute inset-4 bg-white dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-1">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {currentTime}
                    </span>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 22h2v-4H2v4zm4 0h2v-7H6v7zm4 0h2v-10h-2v10zm4 0h2V8h-2v14zm4 0h2V4h-2v18zm4-18v18h2V4h-2z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4 6h-1v4h1v-4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Student Hub Header */}
                  <div className="px-6 mt-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Student Hub</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Everything you need in one place</p>
                  </div>

                  {/* Student Hub Grid */}
                  <div className="px-6 mt-6  overflow-y-hidden max-h-[420px]">
                    <div className="grid grid-cols-2 gap-4">
                      {hubItems.map((item, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer"
                          style={{
                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <div className={`relative bg-gradient-to-br ${item.color} rounded-2xl p-4 h-32 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                            {/* Animated Background */}
                            <div className="absolute inset-0 opacity-20">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute rounded-full bg-white"
                                  style={{
                                    width: Math.random() * 30 + 20 + 'px',
                                    height: Math.random() * 30 + 20 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                    animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
                                    animationDelay: `${Math.random() * 2}s`
                                  }}
                                />
                              ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                              <div className="text-4xl mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                                {item.icon}
                              </div>
                              <h3 className="text-white text-sm font-bold text-center leading-tight">
                                {item.title}
                              </h3>
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions Section */}
                    <div className="mt-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                      <div className="space-y-3">
                        
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                              📊
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">Track Expenses</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">View your spending</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(-10px, -5px); }
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
      `}</style>
    </section>
  );
}