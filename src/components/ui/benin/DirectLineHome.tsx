'use client';

import React, { useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';

const countries = [
  { name: 'Benin', code: 'bj', url: '/send-money-to-benin' },
  { name: 'Botswana', code: 'bw', url: '/send-money-to-botswana' },
  { name: 'Burkina Faso', code: 'bf', url: '/send-money-to-burkina-faso' },
  { name: 'Cameroon', code: 'cm', url: '/send-money-to-cameroon' },
  { name: 'Cote d\'Ivoire', code: 'ci', url: '/send-money-to-cote-d-ivoire' },
  { name: 'DR Congo', code: 'cd', url: '/send-money-to-dr-congo' },
  { name: 'Gabon', code: 'ga', url: '/send-money-to-gabon' },
  { name: 'Kenya', code: 'ke', url: '/send-money-to-kenya' },
  { name: 'Malawi', code: 'mw', url: '/send-money-to-malawi' },
  { name: 'Mali', code: 'ml', url: '/send-money-to-mali' },
  { name: 'Nigeria', code: 'ng', url: '/send-money-to-nigeria' },
  { name: 'Republic of Congo', code: 'cg', url: '/send-money-to-republic-of-congo' },
  { name: 'Rwanda', code: 'rw', url: '/send-money-to-rwanda' },
  { name: 'Senegal', code: 'sn', url: '/send-money-to-senegal' },
  { name: 'South Africa', code: 'za', url: '/send-money-to-south-africa' },
  { name: 'Tanzania', code: 'tz', url: '/send-money-to-tanzania' },
  { name: 'Togo', code: 'tg', url: '/send-money-to-togo' },
  { name: 'Uganda', code: 'ug', url: '/send-money-to-uganda' },
  { name: 'Zambia', code: 'zm', url: '/send-money-to-zambia' },
];

export default function DirectLineHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCountries = countries.slice(0, 6);
  const remainingCount = countries.length - 6;

  const handleCountryClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-12 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-500 to-yellow-400 rounded-full blur-3xl opacity-20 floating-shape"></div>
      
      <div className="w-full container mx-auto px-4 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slideDown">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Closer to Home
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Send fast, low-cost transfers to family and friends across Africa.
          </p>
        </div>

        {/* Countries Grid - Show only 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          {displayedCountries.map((country, index) => (
            <div
              key={country.code}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => handleCountryClick(country.url)}
            >
              {/* Gradient Border Wrapper */}
              <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transition-all duration-300 hover:from-teal-500 hover:to-teal-400">
                <div className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-full w-full flex items-center justify-center p-3 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold dark:text-white text-gray-800 group-hover:text-teal-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center animate-fadeIn">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>+{remainingCount} More Countries</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal Popup for All Countries */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl animate-popupBounce max-w-4xl w-full max-h-[80vh] overflow-hidden z-10">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-5 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold">All Countries</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar in Modal */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-teal-500 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-200px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCountries.map((country, index) => (
                  <div
                    key={country.code}
                    className="animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    onClick={() => handleCountryClick(country.url)}
                  >
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 transition-all duration-300 hover:from-teal-500 hover:to-teal-400">
                      <div className="backdrop-blur-xl bg-white dark:bg-gray-800 rounded-xl w-full flex items-center p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <img
                              src={`https://flagcdn.com/w80/${country.code}.png`}
                              alt={`${country.name} flag`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                              {country.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Click to send money</p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCountries.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">No countries found</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try adjusting your search</p>
                </div>
              )}
            </div>
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

        .animate-popupBounce {
          animation: popupBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}