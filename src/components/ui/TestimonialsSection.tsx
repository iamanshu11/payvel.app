"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      quote:
        "Truco isn't just a vendor; they're a strategic partner. Their unified platform replaced three of our legacy systems, cut our fraud rate by 60%, and reduced manual review workloads by over 75%. The integration was seamless.",
      name: "Jane Doe",
      role: "CEO, Global Crypto Exchange",
      stats: [
        { value: "-60%", label: "Fraud Rate" },
        { value: "-75%", label: "Manual Reviews" },
        { value: "+40%", label: "Conversion Rate" },
      ],
    },
    {
      quote:
        "Working with Truco transformed our business. We achieved faster scaling, improved compliance, and boosted customer trust with their secure solutions.",
      name: "John Smith",
      role: "CTO, FinTech Innovations",
      stats: [
        { value: "-50%", label: "Operational Costs" },
        { value: "+30%", label: "Customer Retention" },
        { value: "+70%", label: "System Efficiency" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto " data-aos="fade-up">
        <h2 className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight"
        data-aos="fade-up">
                         Testimonial
                    </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          className="rounded-2xl overflow-hidden"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-gray-800  border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-10 transition-all duration-300">
                {/* Quote */}
                <p className="text-lg text-gray-900 dark:text-gray-100 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 text-center gap-4">
                  {t.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
