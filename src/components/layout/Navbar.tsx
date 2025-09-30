"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import RequestDemoPopup from "@/components/ui/RequestDemoPopup";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-blue-500 font-bold"
      : "hover:text-blue-400 transition";

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors z-50">
      <nav className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4  text-3xl font-bold">
          <img src="/img/web-logo.png" alt="Payvel Logo" />
        </Link>

        {/* Desktop Nav */}
        {/* <div className="hidden md:flex gap-8 items-center font-bold text-black dark:text-gray-200">
          <Link href="/products" className={getLinkClass("/products")}>
            Products
          </Link>
          <Link href="/solutions" className={getLinkClass("/solutions")}>
            Solutions
          </Link>
          <Link href="/platform" className={getLinkClass("/platform")}>
            Platform
          </Link>
          <Link href="/pricing" className={getLinkClass("/pricing")}>
            Pricing
          </Link>
        </div> */}

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-3 rounded-md bg-teal-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Send Money
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex">
          <div className="bg-gray-100 dark:bg-gray-900 w-3/4 max-w-xs h-full p-6 flex flex-col gap-6 shadow-lg animate-slideIn text-black dark:text-white">
            {/* Close Button */}
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* <Link
              href="/products"
              className={getLinkClass("/products")}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            <Link
              href="/solutions"
              className={getLinkClass("/solutions")}
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>

            <Link
              href="/platform"
              className={getLinkClass("/platform")}
              onClick={() => setIsOpen(false)}
            >
              Platform
            </Link>

            <Link
              href="/pricing"
              className={getLinkClass("/pricing")}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link> */}

            {/* Button */}
            <button
              className="px-4 py-2 rounded-md bg-teal-500 text-whit font-medium shadow-md hover:opacity-90 transition"
            >
              Send Money
            </button>

            {/* Theme Toggle */}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}

    </header>
  );
}
