"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
  location: string;
}

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Booking my flight and sending money ahead was unbelievably easy. Payvel is a game-changer for anyone living abroad!",
      author: "Fatima S.",
      role: "Frequent Traveller",
      rating: 5,
      location: "Dubai, UAE",
    },
    {
      id: 2,
      text: "I found a fantastic hotel deal and the exchange rate for my transfer was the best I've seen. Highly recommended.",
      author: "David L.",
      role: "Business Traveller",
      rating: 5,
      location: "London, UK",
    },
    {
      id: 3,
      text: "Finally, an app that understands what migrants need. Travel and remittance in one place. Brilliant!",
      author: "Ken C.",
      role: "Digital Nomad",
      rating: 5,
      location: "Sydney, Australia",
    },
    {
      id: 4,
      text: "The customer support is exceptional and the rates are transparent. No hidden fees, just honest service.",
      author: "Maria G.",
      role: "Expat Worker",
      rating: 5,
      location: "Toronto, Canada",
    },
    {
      id: 5,
      text: "Sending money home while booking my vacation has never been easier. This app saves me so much time!",
      author: "Ahmed K.",
      role: "Software Engineer",
      rating: 5,
      location: "Berlin, Germany",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 rounded-full px-4 py-2 border border-teal-200 dark:border-teal-800">
              <Star className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-current" />
              <span className="text-teal-700 dark:text-teal-300 text-sm font-medium">
                Testimonials
              </span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Loved by Travellers{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their travel
            and money transfer needs
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-500 ${
                idx === 1 ? "scale-105" : "scale-95 opacity-75"
              }`}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-teal-500 dark:text-teal-400 opacity-50" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Single Card */}
        <div className="lg:hidden mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="mb-6">
              <Quote className="w-12 h-12 text-teal-500 dark:text-teal-400 opacity-50" />
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="font-semibold text-gray-900 dark:text-white text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goToPrevious}
            className="group p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-teal-600 to-cyan-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="group p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
