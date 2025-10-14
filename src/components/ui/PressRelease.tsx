'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Mail, FileText, Calendar, ArrowRight } from 'lucide-react';

interface PressRelease {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const pressReleases: PressRelease[] = [
  {
    id: '1',
    date: 'October 10, 2025',
    title: 'Payvel Launches to Simplify International Money Transfers from Australia to Africa',
    excerpt: 'Payvel PTY LTD officially launches its innovative mobile app, offering zero-fee, high-speed money transfers and powerful financial management tools.',
    link: '#'
  },
  {
    id: '2',
    date: 'September 25, 2025',
    title: 'Payvel Secures Strategic Partnership with Cybrid to Power North American Transfers',
    excerpt: 'The collaboration ensures fully compliant and secure money transfers for users in the United States and Canada, expanding Payvel\'s global reach.',
    link: '#'
  }
];

export default function PressMediaPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen py-16 md:mt-10 bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Page Header */}
      <section className={`text-center container mx-auto px-6 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
          Press & <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Media</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Welcome to the Payvel newsroom. Here you'll find our latest announcements, media assets, and contact information for press inquiries.
        </p>
      </section>

      {/* Latest News Section */}
      <section className={`container mx-auto px-6 pb-16 lg:pb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center mb-12">
          <FileText className="w-8 h-8 text-teal-400 mr-3" />
          <h2 className="text-4xl font-extrabold text-center">Latest News</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {pressReleases.map((release, index) => (
            <div
              key={release.id}
              className={`bg-gray-100 dark:bg-gray-900/50 p-6 md:p-8 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-500 group hover:shadow-xl hover:shadow-teal-500/10 transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {release.date}
              </div>
              <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors duration-300">
                {release.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                {release.excerpt}
              </p>
              <Link 
                href={release.link}
                className="text-teal-400 hover:text-teal-500 font-semibold mt-4 inline-flex items-center group/link"
              >
                Read More 
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit & Contact Section */}
      <section className={`container mx-auto px-6 pb-16 lg:pb-24 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Media Kit */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8 md:p-10 rounded-2xl text-center border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/20 transform hover:scale-105 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/20 transition-colors duration-300">
                <Download className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Media Kit</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                Download our official logos, brand guidelines, and other media assets for your publication.
              </p>
            </div>
            <Link 
              href="#"
              className="mt-6 inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
            >
              Download Kit (.zip)
            </Link>
          </div>

          {/* Media Contact */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8 md:p-10 rounded-2xl text-center border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/20 transform hover:scale-105 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Media Inquiries</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                For all press and media-related inquiries, please contact our communications team.
              </p>
            </div>
            <a 
              href="mailto:press@payvel.com"
              className="mt-6 inline-block text-xl font-semibold text-teal-400 hover:text-teal-500 transition-colors duration-300 group-hover:scale-110 transform"
            >
              press@payvel.com
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className={`container mx-auto px-6 pb-16 lg:pb-24 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="#"
              className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">About Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn about our mission and values</p>
            </Link>
            <Link
              href="#"
              className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Company Facts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Key information about Payvel</p>
            </Link>
            <Link
              href="#"
              className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group text-center"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">Leadership</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Meet our executive team</p>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}