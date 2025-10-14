'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Heart, ArrowRight, ScanLine, ArrowDownToLine } from 'lucide-react'; 

// Define the URLs for the images (UPDATED: Using reliable SVG badges)
const LOGO_SRC = "/img/logo.png"; // Local public path
const FLAG_SRC = "https://flagpedia.net/data/flags/w1600/in.png"; // Example external flag image
const QR_CODE_SRC = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=YourAppDownloadLink"; // Example QR code generator

// --- NEW, RELIABLE IMAGE SOURCES ---
// Source: Wikimedia Commons (for App Store)
const APP_STORE_SRC = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"; 
// Source: Wikimedia Commons (for Google Play)
const GOOGLE_PLAY_SRC = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"; 


const DownloadApp: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 md:mt-22 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-[#171717] relative overflow-hidden">
      
      {/* Background shape for visual interest (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-5 dark:opacity-10" 
           style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">

          {/* 1. Left Section - Input Form & CTA (Animated) */}
          <div className="flex-1 w-full lg:max-w-xl animate-fadeIn">

            {/* Title & Tagline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E0B4B] dark:text-white mb-4 leading-tight">
                Securely Send, Socially Connect.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join the Payvel movement. Get the link to download our app instantly via SMS.
            </p>

            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#273945] drop-shadow-lg rounded-full px-5 py-2.5 border border-[#00B6DE]/20 transform transition-transform duration-500 hover:scale-[1.02]">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <span className="text-sm font-semibold text-[#1E0B4B] dark:text-white">
                    From Payvel
                </span>
            </div>
            
            <div className="mt-12 space-y-6">
                {/* Input Fields Group */}
                {['First Name', 'Last Name', 'Email', 'Address'].map((label, i) => (
                    <div key={i} className="relative w-full">
                    <input
                        type={label === 'Email' ? 'email' : 'text'}
                        placeholder=" "
                        className="peer transition-all text-gray-800 dark:text-white px-5 py-4 w-full text-lg outline-none bg-transparent rounded-xl border border-gray-300 dark:border-gray-700 focus:border-[#00B6DE] dark:focus:border-[#00B6DE] focus:ring-1 focus:ring-[#00B6DE]"
                    />
                    <label className="absolute left-5 text-gray-500 dark:text-gray-400 inset-y-0 h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 bg-white dark:bg-gray-950 -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-1/2">
                        {label}
                    </label>
                    </div>
                ))}
                
                {/* Mobile Input */}
                <div className="relative w-full">
                    <div className="flex gap-3">
                    <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-800 dark:text-white">
                        <Image
                        src={FLAG_SRC}
                        alt="India Flag"
                        width={30}
                        height={30}
                        className="object-contain rounded-sm"
                        unoptimized
                        />
                        <span className='font-medium'>+91</span>
                    </div>
                    <div className="relative w-full">
                        <input
                        type="tel"
                        placeholder=" "
                        className="peer transition-all text-gray-800 dark:text-white px-5 py-4 w-full text-lg outline-none bg-transparent rounded-xl border border-gray-300 dark:border-gray-700 focus:border-[#00B6DE] dark:focus:border-[#00B6DE] focus:ring-1 focus:ring-[#00B6DE]"
                        />
                        <label className="absolute left-5 text-gray-500 dark:text-gray-400 inset-y-0 h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 bg-white dark:bg-gray-950 -translate-y-1/2 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-1/2">
                            Enter mobile number
                        </label>
                    </div>
                    </div>
                </div>

                {/* Terms */}
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    By proceeding, you confirm that you are above 18 years of age and agree to the{' '}
                    <Link href="/privacypolicy" className="text-[#00B6DE] hover:text-[#0092B3] font-medium hover:underline transition-colors">
                    Privacy Policy
                    </Link>{' '}
                    &{' '}
                    <Link href="/terms-and-service" className="text-[#00B6DE] hover:text-[#0092B3] font-medium hover:underline transition-colors">
                    Terms of Use
                    </Link>.
                </p>

                {/* Button (with gradient hover animation) */}
                <div className="mt-8">
                    <button
                    type="submit"
                    className="group relative w-full lg:w-auto flex items-center justify-center max-w-lg px-8 py-4 bg-gradient-to-r from-[#00B6DE] to-[#0066CC] text-white rounded-xl font-bold text-xl shadow-lg shadow-[#00B6DE]/30 hover:shadow-xl hover:shadow-[#00B6DE]/50 duration-500 transform hover:-translate-y-0.5 overflow-hidden"
                    >
                        <span className="relative z-20 flex items-center transition-transform group-hover:scale-105 duration-300">
                            Get Download Link
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Animated background layer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#00B6DE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    </button>
                </div>
            </div>
          </div>

          {/* 2. Right Section - QR & App Store Links (Visual Focus) */}
          <div className="flex-1 w-full lg:max-w-sm flex flex-col items-center justify-center pt-10 animate-slideInRight">
            
            {/* Divider (Optional, kept for clarity) */}
            <div className="lg:hidden flex items-center justify-center w-full my-10">
                <hr className="w-full h-px bg-gray-300 dark:bg-gray-700" />
                <span className="absolute bg-white dark:bg-[#171717] text-gray-500 dark:text-gray-400 px-4 text-lg font-medium">
                    or
                </span>
            </div>

            {/* QR Code Box */}
            <div className="w-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-blue-900/40 border border-gray-200 dark:border-gray-800 transition-all duration-700 transform hover:scale-[1.03]">
                <div className="flex justify-center mb-4 text-[#00B6DE]">
                    <ScanLine className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-center text-[#1E0B4B] dark:text-white mb-2">
                    Scan & Download
                </h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
                    Use your phone camera to download the app instantly.
                </p>

                <div className="w-44 h-44 bg-transparent flex items-center justify-center p-3 rounded-xl border-4 border-[#00B6DE] mx-auto transition-transform duration-500 hover:rotate-2">
                    <Image
                        src={QR_CODE_SRC}
                        alt="QR Code"
                        width={160}
                        height={160}
                        className="rounded-lg object-contain"
                        unoptimized // Use unoptimized for external or placeholder images
                    />
                </div>
            </div>
            
            {/* App Store Links */}
            <div className="mt-8 w-full">
                <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center justify-center gap-2">
                    <ArrowDownToLine className="w-5 h-5" />
                    Coming Soon on:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg'>
                        <Image
                            src={APP_STORE_SRC}
                            alt="Download on App Store"
                            width={160}
                            height={50}
                            className="object-contain"
                            unoptimized
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg'>
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
    </section>
  );
};

export default DownloadApp;