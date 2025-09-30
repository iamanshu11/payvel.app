"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function GlobalReachSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight"
          data-aos="fade-up">
          Truly Global Reach.
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Local Precision.
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150">
          Verify users from over <span className="font-semibold">220+ countries and territories</span>.
          We support <span className="font-semibold">10,000+ document types</span> to help you scale
          internationally with confidence.
        </p>

        {/* World Map */}
        <div
          className="relative rounded-2xl overflow-hidden "
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Image
            src="/img/world-map.webp" // 👉 Replace with your world map image path
            alt="World Map of Coverage"
            width={1200}
            height={600}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
