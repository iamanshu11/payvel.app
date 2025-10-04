"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollingMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768; // md breakpoint
        gsap.to(".marquee-track", {
          xPercent: -50,
          repeat: -1,
          duration: isMobile ? 40 : 20, // slower on mobile
          ease: "linear",
        });
      }, marqueeRef);

      return () => ctx.revert();
    }
  }, []);

  const companies = [
    "Payouts",
    "Payouts",
    "Payouts",
    "Payouts",
    "Payouts",
    "Payouts",
  ];

  return (
    <section className="relative w-full bg-white dark:bg-black py-12 overflow-hidden">
      {/* header text wrapped in container */}
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm  font-bold tracking-widest text-gray-600 dark:text-white">
           Send Directly To
        </p>
      </div>

      {/* marquee */}
      <div ref={marqueeRef} className="overflow-hidden relative">
        <div className="marquee-track flex gap-16 whitespace-nowrap">
          {companies.concat(companies).map((name, idx) => (
            <p
              key={idx}
              className="text-2xl font-semibold text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-default"
            >
              {name}
            </p>
          ))}
        </div>
      </div>

      {/* gradient fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent"></div>
    </section>
  );
}
