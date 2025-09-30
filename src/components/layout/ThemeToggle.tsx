"use client";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    if (!mounted) {
    return <div className="w-[180px] h-[80px]" />;
  }

  const isDark = theme === "dark";

  // Building skyline data
  const buildings = [
    { height: 20, width: 12, windows: 4 },
    { height: 30, width: 10, windows: 6 },
    { height: 26, width: 10, windows: 5 },
    { height: 32, width: 12, windows: 8 },
    { height: 34, width: 10, windows: 6 },
    { height: 38, width: 11, windows: 7 },
    { height: 26, width: 10, windows: 4 },
    { height: 32, width: 10, windows: 6 },
    { height: 28, width: 10, windows: 5 },
    { height: 20, width: 10, windows: 4 },
  ];

  // Star positions for night mode
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 50,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  // Cloud positions
  const clouds = [
    { id: 1, x: 15, y: 20, scale: 0.7 },
    { id: 2, x: 55, y: 25, scale: 0.6 },
    { id: 3, x: 75, y: 18, scale: 0.8 },
  ];

  return (
    <motion.button
      onClick={toggleTheme}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-lg hover:shadow-xl transition-shadow"
      style={{
        width: "140px",
        height: "50px",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background sky */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? "linear-gradient(to bottom, #0a1628 0%, #1e3a5f 50%, #2d5f8d 100%)"
            : "linear-gradient(to bottom, #87CEEB 0%, #98d8e8 50%, #b0e6ff 100%)",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Stars (dark mode only) */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute bg-white rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clouds */}
      <AnimatePresence>
        {!isDark ? (
          clouds.map((cloud) => (
            <motion.div
              key={cloud.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: cloud.scale, x: [0, 10, 0] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute"
              style={{ left: `${cloud.x}%`, top: `${cloud.y}%` }}
            >
              <div className="relative">
                <div className="w-6 h-3 bg-white/90 rounded-full" />
                <div className="absolute top-0 left-1.5 w-5 h-4 bg-white/90 rounded-full" />
                <div className="absolute top-0 left-3 w-5 h-3 bg-white/90 rounded-full" />
                <div className="absolute top-0.5 left-4.5 w-4 h-2 bg-white/90 rounded-full" />
              </div>
            </motion.div>
          ))
        ) : (
          clouds.map((cloud) => (
            <motion.div
              key={`dark-${cloud.id}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.6, scale: cloud.scale * 0.8, x: [0, 8, 0] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute"
              style={{ left: `${cloud.x}%`, top: `${cloud.y}%` }}
            >
              <div className="relative">
                <div className="w-5 h-2 bg-blue-900/40 rounded-full" />
                <div className="absolute top-0 left-1 w-4 h-3 bg-blue-900/40 rounded-full" />
                <div className="absolute top-0 left-2.5 w-5 h-2 bg-blue-900/40 rounded-full" />
                <div className="absolute top-0.5 left-3.5 w-3 h-1.5 bg-blue-900/40 rounded-full" />
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>

      {/* Rainbow (light mode only) */}
      <AnimatePresence>
        {!isDark && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-8 top-8"
          >
            <svg width="100" height="50" viewBox="0 0 100 50">
              <path
                d="M 10 50 Q 50 -10 90 50"
                fill="none"
                stroke="#FF6B6B"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M 10 50 Q 50 -5 90 50"
                fill="none"
                stroke="#FFD93D"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M 10 50 Q 50 0 90 50"
                fill="none"
                stroke="#6BCB77"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M 10 50 Q 50 5 90 50"
                fill="none"
                stroke="#4D96FF"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M 10 50 Q 50 10 90 50"
                fill="none"
                stroke="#9D5CFF"
                strokeWidth="2.5"
                opacity="0.8"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sun or Moon */}
      <motion.div
        className="absolute z-20"
        animate={{
          left: isDark ? "65%" : "15%",
          top: "20%",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          duration: 0.8,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            // Moon
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shadow-2xl"
              style={{
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.5), inset -5px -5px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Moon craters */}
              <div className="absolute top-2 right-3 w-2 h-2 bg-gray-300 rounded-full opacity-60" />
              <div className="absolute top-4 right-1.5 w-1 h-1 bg-gray-300 rounded-full opacity-50" />
              <div className="absolute bottom-3 left-2 w-2 h-2 bg-gray-300 rounded-full opacity-40" />
              <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-50" />
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-45" />
            </motion.div>
          ) : (
            // Sun
            <motion.div
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400"
                style={{
                  boxShadow: "0 0 30px rgba(255, 200, 0, 0.8), 0 0 60px rgba(255, 200, 0, 0.4)",
                }}
                animate={{
                  boxShadow: isHovered
                    ? [
                        "0 0 30px rgba(255, 200, 0, 0.8), 0 0 60px rgba(255, 200, 0, 0.4)",
                        "0 0 40px rgba(255, 200, 0, 1), 0 0 80px rgba(255, 200, 0, 0.6)",
                        "0 0 30px rgba(255, 200, 0, 0.8), 0 0 60px rgba(255, 200, 0, 0.4)",
                      ]
                    : "0 0 30px rgba(255, 200, 0, 0.8), 0 0 60px rgba(255, 200, 0, 0.4)",
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* City skyline */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-around px-4 pb-0">
        {buildings.map((building, index) => (
          <motion.div
            key={index}
            className="relative"
            style={{
              width: `${building.width}%`,
              height: `${building.height}px`,
            }}
          >
            {/* Building body */}
            <motion.div
              className="w-full h-full relative"
              animate={{
                background: isDark
                  ? "linear-gradient(to bottom, #1a2332 0%, #0f1419 100%)"
                  : "linear-gradient(to bottom, #8B4513 0%, #654321 100%)",
              }}
              transition={{ duration: 0.8 }}
            >
              {/* Windows */}
              <div className="absolute inset-0 p-1 grid grid-cols-2 gap-0.5">
                {Array.from({ length: building.windows }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-sm"
                    animate={{
                      backgroundColor: isDark
                        ? Math.random() > 0.3
                          ? "#FFD700"
                          : "#1a2332"
                        : "#87CEEB",
                      opacity: isDark ? (Math.random() > 0.3 ? 0.9 : 0.2) : 0.6,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: isDark ? Math.random() * 2 : 0,
                    }}
                  />
                ))}
              </div>

              {/* Building top details */}
              {index % 3 === 0 && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1/3 h-2 bg-gray-700/80 rounded-t" />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{
          scale: isHovered ? [1, 1.02, 1] : 1,
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.button>
  );
}