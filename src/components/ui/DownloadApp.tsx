'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, ScanLine, ArrowDownToLine, ChevronDown } from 'lucide-react'; 

// Define the URLs for the images
const LOGO_SRC = "/img/logo.png";
const QR_CODE_SRC = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=YourAppDownloadLink";
const APP_STORE_SRC = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"; 
const GOOGLE_PLAY_SRC = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"; 

// Country codes with flags
const countryCodes = [
  { code: '+61', country: 'Australia', flag: 'https://flagcdn.com/w40/au.png', iso: 'AU' },
  { code: '+1', country: 'United States', flag: 'https://flagcdn.com/w40/us.png', iso: 'US' },
  { code: '+44', country: 'United Kingdom', flag: 'https://flagcdn.com/w40/gb.png', iso: 'GB' },
  { code: '+91', country: 'India', flag: 'https://flagcdn.com/w40/in.png', iso: 'IN' },
  { code: '+86', country: 'China', flag: 'https://flagcdn.com/w40/cn.png', iso: 'CN' },
  { code: '+81', country: 'Japan', flag: 'https://flagcdn.com/w40/jp.png', iso: 'JP' },
  { code: '+49', country: 'Germany', flag: 'https://flagcdn.com/w40/de.png', iso: 'DE' },
  { code: '+33', country: 'France', flag: 'https://flagcdn.com/w40/fr.png', iso: 'FR' },
  { code: '+39', country: 'Italy', flag: 'https://flagcdn.com/w40/it.png', iso: 'IT' },
  { code: '+34', country: 'Spain', flag: 'https://flagcdn.com/w40/es.png', iso: 'ES' },
  { code: '+7', country: 'Russia', flag: 'https://flagcdn.com/w40/ru.png', iso: 'RU' },
  { code: '+55', country: 'Brazil', flag: 'https://flagcdn.com/w40/br.png', iso: 'BR' },
  { code: '+27', country: 'South Africa', flag: 'https://flagcdn.com/w40/za.png', iso: 'ZA' },
  { code: '+234', country: 'Nigeria', flag: 'https://flagcdn.com/w40/ng.png', iso: 'NG' },
  { code: '+254', country: 'Kenya', flag: 'https://flagcdn.com/w40/ke.png', iso: 'KE' },
];

const DownloadApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to Australia
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  return (
    <section className="min-h-screen pt-20 pb-16 md:mt-22 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-[#171717] relative overflow-hidden">
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00B6DE]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">

          {/* 1. Left Section - Input Form & CTA */}
          <div className={`flex-1 w-full lg:max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Title & Tagline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E0B4B] dark:text-white mb-4 leading-tight">
                Securely Send, <span className="bg-gradient-to-r from-[#00B6DE] to-[#0066CC] bg-clip-text text-transparent animate-gradient">Socially Connect.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join the Payvel movement. Get the link to download our app instantly via SMS.
            </p>

            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#273945] drop-shadow-lg rounded-full px-5 py-2.5 border border-[#00B6DE]/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-bounce-slow">
                <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                <span className="text-sm font-semibold text-[#1E0B4B] dark:text-white">
                    From Payvel
                </span>
            </div>
            
            <div className="mt-12 space-y-6">
                {/* Input Fields Group */}
                {['First Name', 'Last Name', 'Email'].map((label, i) => (
                    <div 
                      key={i} 
                      className={`relative w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                      style={{ transitionDelay: `${i * 100 + 300}ms` }}
                    >
                      <input
                          type={label === 'Email' ? 'email' : 'text'}
                          placeholder=" "
                          className="peer transition-all text-gray-800 dark:text-white px-5 py-4 w-full text-lg outline-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border-2 border-gray-300 dark:border-gray-700 focus:border-[#00B6DE] dark:focus:border-[#00B6DE] focus:ring-2 focus:ring-[#00B6DE]/20 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg"
                      />
                      <label className="absolute left-5 text-gray-500 dark:text-gray-400 inset-y-0 h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 bg-white dark:bg-gray-950 -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-1/2 peer-focus:text-[#00B6DE]">
                          {label}
                      </label>
                    </div>
                ))}
                
                {/* Mobile Input with Dropdown */}
                <div 
                  className={`relative w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${isDropdownOpen ? 'z-50' : 'z-10'}`}
                  style={{ transitionDelay: '600ms' }}
                >
                    <div className="flex gap-3">
                      {/* Country Code Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-800 dark:text-white bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-[#00B6DE] transition-all duration-300 hover:shadow-lg min-w-[140px] group"
                        >
                          <Image
                            src={selectedCountry.flag}
                            alt={selectedCountry.country}
                            width={24}
                            height={24}
                            className="object-contain rounded-sm transition-transform duration-300 group-hover:scale-110"
                            unoptimized
                          />
                          <span className='font-medium'>{selectedCountry.code}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <>
                            {/* Backdrop to close dropdown */}
                            <div 
                              className="fixed inset-0 z-40"
                              onClick={() => setIsDropdownOpen(false)}
                            ></div>
                            
                            <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 z-50 max-h-80 overflow-hidden animate-slide-down">
                              {/* Search Input */}
                              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#00B6DE] text-gray-800 dark:text-white text-sm"
                                />
                              </div>
                              
                              {/* Country List */}
                              <div className="overflow-y-auto max-h-64 custom-scrollbar">
                                {filteredCountries.map((country) => (
                                  <button
                                    key={country.iso}
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setIsDropdownOpen(false);
                                      setSearchQuery('');
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#00B6DE]/10 dark:hover:bg-[#00B6DE]/20 transition-colors text-left group"
                                  >
                                    <Image
                                      src={country.flag}
                                      alt={country.country}
                                      width={24}
                                      height={24}
                                      className="object-contain rounded-sm transition-transform duration-300 group-hover:scale-110"
                                      unoptimized
                                    />
                                    <span className="text-gray-800 dark:text-white font-medium flex-1">{country.country}</span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">{country.code}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <div className="relative w-full">
                        <input
                          type="tel"
                          placeholder=" "
                          className="peer transition-all text-gray-800 dark:text-white px-5 py-4 w-full text-lg outline-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border-2 border-gray-300 dark:border-gray-700 focus:border-[#00B6DE] dark:focus:border-[#00B6DE] focus:ring-2 focus:ring-[#00B6DE]/20 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg"
                        />
                        <label className="absolute left-5 text-gray-500 dark:text-gray-400 inset-y-0 h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 bg-white dark:bg-gray-950 -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-1/2 peer-focus:text-[#00B6DE]">
                            Enter mobile number
                        </label>
                      </div>
                    </div>
                </div>

                {/* Terms */}
                <p className={`mt-4 text-sm text-gray-500 dark:text-gray-400 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                    By proceeding, you confirm that you are above 18 years of age and agree to the{' '}
                    <Link href="/privacypolicy" className="text-[#00B6DE] hover:text-[#0092B3] font-medium hover:underline transition-colors">
                    Privacy Policy
                    </Link>{' '}
                    &{' '}
                    <Link href="/terms-and-service" className="text-[#00B6DE] hover:text-[#0092B3] font-medium hover:underline transition-colors">
                    Terms of Use
                    </Link>.
                </p>

                {/* Button */}
                <div className={`mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '800ms' }}>
                    <button
                      type="submit"
                      className="group relative w-full lg:w-auto flex items-center justify-center max-w-lg px-8 py-4 bg-gradient-to-r from-[#00B6DE] to-[#0066CC] text-white rounded-xl font-bold text-xl shadow-lg shadow-[#00B6DE]/30 hover:shadow-2xl hover:shadow-[#00B6DE]/50 duration-500 transform hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-20 flex items-center transition-transform group-hover:scale-105 duration-300">
                            Get Download Link
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        {/* Animated background layer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#00B6DE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30"></div>
                    </button>
                </div>
            </div>
          </div>

          {/* 2. Right Section - QR & App Store Links */}
          <div className={`flex-1 w-full lg:max-w-sm flex flex-col items-center justify-center pt-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Divider */}
            <div className="lg:hidden flex items-center justify-center w-full my-10">
                <hr className="w-full h-px bg-gray-300 dark:bg-gray-700" />
                <span className="absolute bg-white dark:bg-[#171717] text-gray-500 dark:text-gray-400 px-4 text-lg font-medium">
                    or
                </span>
            </div>

            {/* QR Code Box */}
            <div className="w-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-blue-900/40 border-2 border-gray-200 dark:border-gray-800 transition-all duration-700 transform hover:scale-105 hover:shadow-3xl hover:border-[#00B6DE]/50 group">
                <div className="flex justify-center mb-4 text-[#00B6DE]">
                    <ScanLine className="w-10 h-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <h3 className="text-2xl font-bold text-center text-[#1E0B4B] dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00B6DE] group-hover:to-[#0066CC] group-hover:bg-clip-text transition-all duration-300">
                    Scan & Download
                </h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
                    Use your phone camera to download the app instantly.
                </p>

                <div className="w-44 h-44 bg-gradient-to-br from-[#00B6DE]/10 to-[#0066CC]/10 flex items-center justify-center p-3 rounded-xl border-4 border-[#00B6DE] mx-auto transition-all duration-500 hover:rotate-6 hover:scale-105 relative overflow-hidden group">
                    <Image
                        src={QR_CODE_SRC}
                        alt="QR Code"
                        width={160}
                        height={160}
                        className="rounded-lg object-contain relative z-10"
                        unoptimized
                    />
                    {/* Scanning line animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B6DE]/30 to-transparent h-full animate-scan"></div>
                </div>
            </div>
            
            {/* App Store Links */}
            <div className="mt-8 w-full">
                <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center justify-center gap-2 animate-fade-in">
                    <ArrowDownToLine className="w-5 h-5 animate-bounce" />
                    Coming Soon on:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className='transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg transform hover:scale-105'>
                        <Image
                            src={APP_STORE_SRC}
                            alt="Download on App Store"
                            width={160}
                            height={50}
                            className="object-contain"
                            unoptimized
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg transform hover:scale-105'>
                        <Image
                            src={GOOGLE_PLAY_SRC}
                            alt="Get it on Google Play"
                            width={160}
                            height={50}
                            className="object-contain"
                            unoptimized
                        />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00B6DE;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0092B3;
        }
      `}</style>
    </section>
  );
};

export default DownloadApp;