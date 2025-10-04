'use client';

import React from 'react';

export default function TrustedEverywhere() {
    const topFlags = [
        'https://flagcdn.com/w160/nl.png',
        'https://flagcdn.com/w160/eg.png',
        'https://flagcdn.com/w160/rw.png',
        'https://flagcdn.com/w160/za.png',
        'https://flagcdn.com/w160/jm.png',
        'https://flagcdn.com/w160/nl.png',
        'https://flagcdn.com/w160/eg.png',
        'https://flagcdn.com/w160/rw.png',
    ];

    const bottomFlags = [
        'https://flagcdn.com/w160/rw.png',
        'https://flagcdn.com/w160/za.png',
        'https://flagcdn.com/w160/be.png',
        'https://flagcdn.com/w160/cn.png',
        'https://flagcdn.com/w160/rw.png',
        'https://flagcdn.com/w160/za.png',
        'https://flagcdn.com/w160/be.png',
        'https://flagcdn.com/w160/cn.png',
    ];

    return (
        <div className="py-16 flex items-center justify-center  transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                {/* Main Content */}
                <div className="relative">
                    {/* Social Proof */}
                    <div className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">★</div>
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">★</div>
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">★</div>
                        </div>
                        <span className="text-sm font-medium">4.9/5 on Trustpilot</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 text-gray-900 dark:text-white transition-colors">
                        Trusted
                        <br />
                        Everywhere
                    </h1>

                </div>

                {/* Flag Sliders */}
                <div className=" space-y-6 overflow-hidden">
                    {/* Top Row - Slides Right */}
                    <div className="relative">
                        <div className="flex gap-4 animate-slide-right">
                            {topFlags.map((flag, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white dark:ring-gray-700"
                                >
                                    <img src={flag} alt="Flag" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Slides Left */}
                    <div className="relative">
                        <div className="flex gap-4 animate-slide-left">
                            {bottomFlags.map((flag, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white dark:ring-gray-700"
                                >
                                    <img src={flag} alt="Flag" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-right {
          animation: slide-right 20s linear infinite;
          width: max-content;
        }

        .animate-slide-left {
          animation: slide-left 20s linear infinite;
          width: max-content;
        }
      `}</style>
        </div>
    );
}
