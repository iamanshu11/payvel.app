"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ComparisonSectionProps {
  className?: string;
}

export default function ComparisonSection({ className = "" }: ComparisonSectionProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <section className={className}>
      <div className="relative  flex items-center justify-center py-20 px-6 transition-all duration-700 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight"
            data-aos="fade-up"
          >
            Stop Juggling Vendors.
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Unify Your Stack.
            </span>
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Managing multiple providers for KYC, AML, and fraud is complex, costly, and creates
            data silos. Consolidate everything onto one powerful platform.
          </p>

          {/* Enhanced Comparison Section */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative">
              {/* Left - Old Way */}
              <div className="w-full lg:w-5/12 group" data-aos="fade-right" data-aos-delay="400">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                  {/* Card */}
                  <div className="relative border-2 border-red-400/50 dark:border-red-500/60 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:border-red-400 dark:group-hover:border-red-500 bg-white/80 dark:bg-slate-800/90 shadow-xl shadow-red-900/20 dark:shadow-red-500/30">
                    <div className="mb-4">
                      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700">
                        ❌ The Old Way
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/img/vs-1.webp"
                        alt="The Old Way - Complex Multi-Vendor Setup"
                        width={500}
                        height={350}
                        className="w-full h-auto object-contain "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent dark:from-red-900/40"></div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {["Multiple Vendors", "Data Silos", "Complex Integration", "Higher Costs"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="flex items-center text-sm text-red-600 dark:text-red-400"
                            data-aos="fade-up"
                            data-aos-delay={500 + index * 100}
                          >
                            <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* VS Circle */}
              <div className="relative z-20 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-20 scale-150"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-cyan-400 to-purple-500 rounded-full animate-pulse opacity-30 scale-125"></div>
                  <div className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white font-bold rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 shadow-purple-500/25 dark:shadow-purple-500/50">
                    <span className="text-xl tracking-wider">VS</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -left-32 w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400 hidden lg:block"></div>
                <div className="absolute top-1/2 -right-32 w-24 h-0.5 bg-gradient-to-l from-transparent to-purple-400 hidden lg:block"></div>
              </div>

              {/* Right - Truco Way */}
              <div className="w-full lg:w-5/12 group" data-aos="fade-left" data-aos-delay="400">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative border-2 border-green-400/50 dark:border-green-500/60 rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:border-green-400 dark:group-hover:border-green-500 bg-white/80 dark:bg-slate-800/90 shadow-xl shadow-green-900/20 dark:shadow-green-500/30">
                    <div className="mb-4">
                      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
                        ✅ The Truco Way
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/img/vs-2.webp"
                        alt="The Truco Way - Unified Platform Solution"
                        width={500}
                        height={350}
                        className="w-full h-auto object-contain "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent dark:from-green-900/40"></div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {["Single Platform", "Unified Data", "Easy Integration", "Cost Effective"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="flex items-center text-sm text-green-600 dark:text-green-400"
                            data-aos="fade-up"
                            data-aos-delay={500 + index * 100}
                          >
                            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div data-aos="fade-up" data-aos-delay="800" className="mt-16">
            <button className="group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-xl hover:shadow-purple-500/25 dark:from-purple-600 dark:to-blue-600 dark:hover:shadow-purple-600/50">
              <span className="relative z-10">Experience the Difference</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div> */}
        </div>
      </div>

      

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}