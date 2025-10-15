'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';


interface Testimonial {
  name: string;
  initials: string;
  location: string;
  text: string;
  color: string;
}

const topRowTestimonials: Testimonial[] = [
  {
    name: "Amina S.",
    initials: "AS",
    location: "Melbourne, VIC",
    text: "I was tired of hidden fees from other services. Payvel is completely transparent and the app is so easy to use. The rate alert feature is a game-changer!",
    color: "7c3aed"
  },
  {
    name: "Ken C.",
    initials: "KC",
    location: "Brisbane, QLD",
    text: "Finally, a modern solution for sending money home. The security gives me peace of mind, and their customer support is genuinely helpful. 5 stars!",
    color: "db2777"
  },
  {
    name: "Tunde O.",
    initials: "TO",
    location: "Perth, WA",
    text: "The real-time tracking is brilliant. I get notifications at every step, so I always know exactly where my money is. That peace of mind is priceless.",
    color: "ea580c"
  },
  {
    name: "John D.",
    initials: "JD",
    location: "Sydney, NSW",
    text: "The best rate I've found for sending money to Nigeria. And so fast! The money was in my family's account in minutes. Highly recommend Payvel.",
    color: "0891b2"
  }
];

const bottomRowTestimonials: Testimonial[] = [
  {
    name: "Bisi E.",
    initials: "BE",
    location: "Adelaide, SA",
    text: "I had a question about my verification and the customer support was incredible. Fast, friendly, and solved my issue in no time. So impressed.",
    color: "65a30d"
  },
  {
    name: "Sarah M.",
    initials: "SM",
    location: "Canberra, ACT",
    text: "Switched from my old service to Payvel and I'm saving so much money on fees. It's a no-brainer.",
    color: "be123c"
  },
  {
    name: "Chidi I.",
    initials: "CI",
    location: "Hobart, TAS",
    text: "The interface is so clean and simple. I sent money for the first time without any confusion. Great for someone who isn't tech-savvy!",
    color: "ca8a04"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 w-96 flex-shrink-0 border border-gray-200 dark:border-gray-700 shadow-lg">
    <div className="flex items-center mb-4">
      <img 
        src={`https://placehold.co/48x48/${testimonial.color}/ffffff?text=${testimonial.initials}`}
        alt="User Avatar" 
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
  </div>
);

const AudNgnSlider: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Loved by people across Australia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 70s linear infinite;
        }

        .slider-container:hover .animate-scroll-left,
        .slider-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mt-16 space-y-4 overflow-hidden">
        {/* Top Row - Moving Left */}
        <div className="slider-container" data-aos="fade-right" data-aos-delay="200">
          <div className="flex gap-4 animate-scroll-left">
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="slider-container" data-aos="fade-left" data-aos-delay="400">
          <div className="flex gap-4 animate-scroll-right">
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudNgnSlider;