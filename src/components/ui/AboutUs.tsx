'use client';

import { Shield, Users, Globe, TrendingUp, Heart, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideRight 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-delay-1 {
          animation-delay: 0.1s;
        }

        .animate-delay-2 {
          animation-delay: 0.2s;
        }

        .animate-delay-3 {
          animation-delay: 0.3s;
        }

        .animate-delay-4 {
          animation-delay: 0.4s;
        }

        .animate-delay-5 {
          animation-delay: 0.5s;
        }

        .animate-delay-6 {
          animation-delay: 0.6s;
        }
      `}} />

      <div className="min-h-screen bg-white md:mt-22 dark:bg-gray-950">
        {/* Hero Section */}
        <section className="text-center container mx-auto px-6 py-16 lg:py-24">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white">
              We're Building{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-teal-600 bg-clip-text text-transparent">
                Bridges
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-up animate-delay-2">
              Payvel was founded on a simple idea: distance should never prevent you from supporting the ones you love. 
              We're dedicated to making international money transfers faster, safer, and more affordable for everyone.
            </p>
          </div>

          {/* Value Props */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="opacity-0 animate-scale-in animate-delay-3 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-teal-100 dark:border-teal-800/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-teal-500 dark:bg-teal-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Fast Transfers</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lightning-quick global payments</p>
            </div>

            <div className="opacity-0 animate-scale-in animate-delay-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Secure & Safe</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Bank-level security guaranteed</p>
            </div>

            <div className="opacity-0 animate-scale-in animate-delay-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Low Fees</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">More money for your loved ones</p>
            </div>

            <div className="opacity-0 animate-scale-in animate-delay-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">Global Reach</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">18+ countries supported</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-6 py-16 lg:py-24">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 lg:p-16 border border-gray-200 dark:border-gray-800">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first opacity-0 animate-slide-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Story</h2>
                <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Founded by a team with roots across continents, we know firsthand the challenges of sending money back home. 
                  High fees, slow transfers, and a lack of transparency were barriers we were determined to break down.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Payvel was born from this personal experience, with a mission to leverage technology to connect families 
                  and empower communities through seamless financial support.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">50K+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Active Users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">18+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Countries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">$50M+</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Transferred</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity-0 animate-slide-right relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur-2xl opacity-20 animate-float"></div>
                <img 
                  src="https://placehold.co/600x400/1a1a1a/FFFFFF?text=Our+Team" 
                  alt="The Payvel Team" 
                  className="relative rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Trust Section */}
        <section className="container mx-auto px-6 py-16 lg:py-24 text-center">
          <div className="opacity-0 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Built on Trust & Security
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your peace of mind is our highest priority. We operate with the utmost commitment to security and regulatory compliance.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="opacity-0 animate-scale-in animate-delay-2 bg-gradient-to-br from-green-50 to-orange-50 dark:from-green-900/20 dark:to-yellow-900/20 p-8 rounded-2xl border border-green-100 dark:border-green-800/50 text-left hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  🇦🇺
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Australian Operations</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Payvel PTY LTD is a registered entity based in Australia and is regulated by the Australian Transaction 
                Reports and Analysis Centre (AUSTRAC). This ensures our operations meet the highest standards of financial oversight.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
                <Shield className="w-4 h-4" />
                AUSTRAC Regulated
              </div>
            </div>

            <div className="opacity-0 animate-scale-in animate-delay-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-left hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    🇨🇦
                  </div>
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg -ml-2">
                    🇺🇸
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">North American Transfers</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                For money transfers in the USA and Canada, we operate in a strategic arrangement with Cybrid, a fully licensed 
                and regulated entity in North America. This partnership allows us to provide a secure and compliant service across the region.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <Shield className="w-4 h-4" />
                Cybrid Partnership
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="container mx-auto px-6 py-16 lg:py-24">
          <div className="opacity-0 animate-scale-in bg-gradient-to-br from-teal-500 via-teal-500 to-teal-600 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Join Our Mission</h2>
              <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
                Want to help us build the future of global finance? We're always looking for passionate people to join our team.
              </p>
              <a 
                href="/careers" 
                className="mt-8 inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold 
                         hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="w-5 h-5" />
                View Open Positions
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </section>
      </div>
    </>
  );
}