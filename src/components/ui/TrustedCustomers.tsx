'use client';

import React, { useEffect } from 'react';

export default function TrustedCustomers() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      require('aos/dist/aos.css');
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  const flagPositions = [
    { flag: 'https://flagcdn.com/w80/au.png', position: 'top-20 left-[15%]', aos: 'fade-down-right' },
    { flag: 'https://flagcdn.com/w80/au.png', position: 'bottom-48 left-[12%]', aos: 'fade-right' },
    { flag: 'https://flagcdn.com/w80/ng.png', position: 'bottom-32 left-[10%]', aos: 'fade-up-right' },
    { flag: 'https://flagcdn.com/w80/ng.png', position: 'bottom-48 right-[18%]', aos: 'fade-left' },
    { flag: 'https://flagcdn.com/w80/ca.png', position: 'bottom-20 right-[12%]', aos: 'fade-up-left' },
  ];

  const peopleImages = [
    { 
      src: '/img/ngn-person/img-1.webp',
      position: 'top-24 left-[8%]',
      flags: ['https://flagcdn.com/w40/ng.png'],
      aos: 'zoom-in'
    },
    {
      src: '/img/ngn-person/img-2.webp',
      position: 'bottom-24 left-[10%]',
      flags: ['https://flagcdn.com/w40/ng.png'],
      aos: 'zoom-in'
    },
    {
      src: '/img/ngn-person/img-3.webp',
      position: 'top-24 right-[8%]',
      flags: ['https://flagcdn.com/w40/ng.png', 'https://flagcdn.com/w40/ca.png'],
      aos: 'zoom-in'
    },
    {
      src: '/img/ngn-person/img-4.webp',
      position: 'bottom-24 right-[10%]',
      flags: ['https://flagcdn.com/w40/us.png'],
      aos: 'zoom-in'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-black py-20 px-4 overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/map.webp')" }}
      />
      
      {/* Overlay - Dark mode: darker overlay, Light mode: lighter overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      {/* Floating Flags */}
      {flagPositions.map((item, index) => (
        <div
          key={index}
          data-aos={item.aos}
          data-aos-delay={index * 100}
          className={`absolute ${item.position} hidden lg:block`}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg ring-4 ring-white dark:ring-gray-800 hover:scale-110 transition-transform duration-300">
            <img
              src={item.flag}
              alt="Flag"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* People Images with Flags */}
      {peopleImages.map((person, index) => (
        <div
          key={index}
          data-aos={person.aos}
          data-aos-delay={200 + index * 150}
          className={`absolute ${person.position} hidden md:block`}
        >
          <div className="relative group">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 hover:scale-105 transition-transform duration-300">
              <img
                src={person.src}
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small flag badges */}
            <div className="absolute -bottom-2 -right-2 flex gap-1">
              {person.flags.map((flag, flagIndex) => (
                <div
                  key={flagIndex}
                  className="w-8 h-8 rounded-full overflow-hidden shadow-md ring-2 ring-white dark:ring-gray-800"
                >
                  <img src={flag} alt="Country flag" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Trusted by{' '}
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">500,000+</span>
          <br />
          Customers Globally
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Send money home instantly, affordably, and securely across
          <br className="hidden sm:block" />
          the US, UK, EU, Africa & Asia.
        </p>

        {/* Download Button */}
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        {/* Store Rating */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-8 ml-2 inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg"
        >
          <span className="text-2xl font-bold text-gray-900 dark:text-white">4.8</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Store Rating</span>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-500 dark:fill-blue-600"></path>
        </svg>
      </div>

      {/* AOS Library Script */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    </section>
  );
}