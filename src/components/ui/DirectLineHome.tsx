'use client';

import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const countries = [
  { name: 'Nigeria', code: 'ng' },
  { name: 'Ghana', code: 'gh' },
  { name: 'Kenya', code: 'ke' },
  { name: 'Ethiopia', code: 'et' },
  { name: 'South Africa', code: 'za' },
  { name: 'Zimbabwe', code: 'zw' },
  { name: 'Uganda', code: 'ug' },
  { name: 'Cameroon', code: 'cm' },
];

export default function DirectLineHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCountries = isMobile && !showAll 
    ? filteredCountries.slice(0, 4) 
    : filteredCountries;

  const hasMore = isMobile && filteredCountries.length > 4 && !showAll;

  const handleCountryClick = (countryName) => {
    if (countryName === 'Nigeria') {
      // Redirect to sendmoney page
      window.location.href = '/send-money';
    } else {
      // Show coming soon popup for other countries
      setShowComingSoon(true);
      setTimeout(() => {
        setShowComingSoon(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-12 px-4">
      <div className="max-w-6xl container mx-auto px-4 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slideDown">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Closer to Home
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Send fast, low-cost transfers to family and friends across Africa.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fadeIn">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedCountries.map((country, index) => (
            <div
              key={country.code}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleCountryClick(country.name)}
            >
              <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={`https://flagcdn.com/w80/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white text-gray-800 group-hover:text-blue-600 transition-colors">
                    {country.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center animate-fadeIn">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Show All Countries</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        )}
      </div>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn pointer-events-none"></div>
          <div className="relative bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-white px-6 py-8 md:px-10 md:py-10 rounded-3xl shadow-2xl animate-popupBounce max-w-md w-full">
            <div className="text-center">
              <div className="mb-4 animate-bounce">
                <span className="text-6xl md:text-7xl">🚀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Coming Soon!</h3>
              <p className="text-sm md:text-base opacity-90">
                We're working hard to bring this service to you
              </p>
              <div className="mt-4 flex justify-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-pink-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '500ms' }}></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popupFade {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          10% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          90% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
        }

        @keyframes popupBounce {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            transform: scale(1.05) rotate(2deg);
          }
          70% {
            transform: scale(0.95) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-popupFade {
          animation: popupFade 2s ease-in-out;
        }

        .animate-popupBounce {
          animation: popupBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}