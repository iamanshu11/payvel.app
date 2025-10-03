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

  return (
    <div className=" bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-12 px-4">
      <div className="max-w-6xl container mx-auto px-4 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slideDown">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Direct Line to Home
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From Melbourne to Mombasa, Sydney to Soweto, we're building bridges to the places and people you love.
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
            >
              <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/7 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
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

        {/* Footer Message */}
        <div className="text-center mt-16 animate-fadeIn">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            And our family is always growing. More countries coming soon!
          </p>
        </div>
      </div>

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
      `}</style>
    </div>
  );
}