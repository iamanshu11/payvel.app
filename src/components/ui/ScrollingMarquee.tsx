"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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

  const logos = [
    "/img/payouts-logo/img-1.png",
    "/img/payouts-logo/img-2.png",
    "/img/payouts-logo/img-3.png",
    "/img/payouts-logo/img-4.png",
     "/img/payouts-logo/img-1.png",
    "/img/payouts-logo/img-2.png",
    "/img/payouts-logo/img-3.png",
    "/img/payouts-logo/img-4.png",
  ];

  return (
    <section className="relative w-full bg-white dark:bg-black py-12 overflow-hidden">
      {/* Header text */}
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-lg font-bold tracking-widest text-gray-600 dark:text-white">
          Partners
        </p>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="overflow-hidden relative">
        <div className="marquee-track flex gap-16 whitespace-nowrap items-center">
          {logos.concat(logos).map((src, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Payouts Logo ${idx + 1}`}
                width={150}
                height={60}
                className="object-contain rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent"></div>
    </section>
  );
}
