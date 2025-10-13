'use client';

import React from 'react';

export default function SendApp() {
  return (
    <section className="relative  flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/dash-3.jpg')" }}
      />
      
      {/* Overlay - Dark mode: darker overlay, Light mode: lighter overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xs rounded-3xl shadow-2xl p-8 md:p-12">
          {/* App Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1">
                ⭐ <span className="font-semibold">4.8</span>
              </span>
              <span>on App Store</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1">
                ⭐ <span className="font-semibold">4.9</span>
              </span>
              <span>on Google Play</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 leading-tight">
            Payvel is how the world moves money now
          </h1>

          {/* QR Code Card */}
          <div className="bg-gray-50/05 dark:bg-gray-800/05 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                {/* QR Code Placeholder */}
                <svg className="w-full h-full p-2" viewBox="0 0 100 100" fill="currentColor">
                  <rect className="text-gray-900 dark:text-white" x="0" y="0" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="25" y="0" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="75" y="0" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="0" y="25" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="50" y="25" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="75" y="25" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="0" y="75" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="25" y="75" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="50" y="50" width="20" height="20"/>
                  <rect className="text-gray-900 dark:text-white" x="75" y="75" width="20" height="20"/>
                </svg>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Scan to download
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                for iPhone and Android
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}