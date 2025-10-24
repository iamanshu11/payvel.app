"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/layout/ThemeToggle";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  CreditCard,
  Users,
  BarChart,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

const countries = [
  { name: "Benin", flag: "/img/flags/benin.png", code: "BJ", href: "/send-money-to-benin" },
  { name: "Botswana", flag: "/img/flags/botswana.png", code: "BW", href: "/send-money-to-botswana" },
  { name: "Burkina Faso", flag: "/img/flags/burkina-faso.png", code: "BF", href: "/send-money-to-burkina-faso" },
  { name: "Cameroon", flag: "/img/flags/cameroon.png", code: "CM", href: "/send-money-to-cameroon" },
  { name: "Cote d'Ivoire", flag: "/img/flags/cote.png", code: "CI", href: "/send-money-to-cote-d-ivoire" },
  { name: "DR Congo", flag: "/img/flags/dr-congo.png", code: "CD", href: "/send-money-to-dr-congo" },
  { name: "Gabon", flag: "/img/flags/gabon.png", code: "GA", href: "/send-money-to-gabon" },
  { name: "Kenya", flag: "/img/flags/kenya.png", code: "KE", href: "/send-money-to-kenya" },
  { name: "Malawi", flag: "/img/flags/malawi.png", code: "MW", href: "/send-money-to-malawi" },
  { name: "Mali", flag: "/img/flags/mali.png", code: "ML", href: "/send-money-to-mali" },
  { name: "Nigeria", flag: "/img/flags/nigeria.png", code: "NG", href: "/send-money-to-nigeria" },
  { name: "Republic of Congo", flag: "/img/flags/republic.png", code: "CG", href: "/send-money-to-republic-of-congo" },
  { name: "Rwanda", flag: "/img/flags/rwanda.png", code: "RW", href: "/send-money-to-rwanda" },
  { name: "Senegal", flag: "/img/flags/senegal.png", code: "SN", href: "/send-money-to-senegal" },
  { name: "South Africa", flag: "/img/flags/south-africa.png", code: "ZA", href: "/send-money-to-south-africa" },
  { name: "Tanzania", flag: "/img/flags/tanzania.png", code: "TZ", href: "/send-money-to-tanzania" },
  { name: "Togo", flag: "/img/flags/togo.png", code: "TG", href: "/send-money-to-togo" },
  { name: "Uganda", flag: "/img/flags/uganda.png", code: "UG", href: "/send-money-to-uganda" },
  { name: "Zambia", flag: "/img/flags/zambia.png", code: "ZM", href: "/send-money-to-zambia" },
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const getLinkClass = (path) =>
    pathname === path
      ? "text-teal-500 font-bold"
      : "hover:text-teal-400 transition-colors duration-200";

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const CountriesDropdown = ({ isActive }) => (
    <div
      className="relative"
      onMouseEnter={() => handleDropdownEnter("Send to")}
      onMouseLeave={handleDropdownLeave}
    >
      <button className="flex items-center gap-1 hover:text-teal-400 transition-colors duration-200 font-medium">
        Send to
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <div
          className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-fadeIn"
          onMouseEnter={() => handleDropdownEnter("Send to")}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Send Money to
            </h3>
            <div className="space-y-2">
              {countries.slice(0, 5).map((country, idx) => (
                <Link
                  key={idx}
                  href={country.href}
                  className="flex items-center gap-3 p-2 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors duration-200 group"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {country.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setShowAllCountries(true);
              setActiveDropdown(null);
            }}
            className="w-full p-4 flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200 group"
          >
            <Globe
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            Show All Countries
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      )}
    </div>
  );

  const DropdownMenu = ({ title, items, isActive }) => (
    <div
      className="relative"
      onMouseEnter={() => handleDropdownEnter(title)}
      onMouseLeave={handleDropdownLeave}
    >
      <button className="flex items-center gap-1 hover:text-teal-400 transition-colors duration-200 font-medium">
        {title}
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <div
          className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-fadeIn"
          onMouseEnter={() => handleDropdownEnter(title)}
          onMouseLeave={handleDropdownLeave}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={`/${title.toLowerCase()}/${item.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-start gap-4 p-4 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200 group"
              >
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <Icon
                    size={20}
                    className="text-teal-600 dark:text-teal-400"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  const handleMobileMenuClick = (menu) => {
    setMobileSubmenu(menu);
  };

  const handleBackClick = () => {
    setMobileSubmenu(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full text-gray-800 dark:text-gray-200 transition-all duration-300 z-50 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-black"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-2">
              <img
                src="/fav.svg"
                alt="Payvel Logo"
                width={28}
                height={28}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-semibold text-[#001959] dark:text-[#fff]  tracking-wide  transition-colors duration-300">
                Payvel
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center font-medium text-gray-700 dark:text-gray-300">
            <CountriesDropdown isActive={activeDropdown === "Send to"} />
            <Link href="how-it-works" className={getLinkClass("#")}>
              How It Works
            </Link>
            <Link href="/download-app" className={getLinkClass("#")}>
              Download App
            </Link>
            <Link href="/travel" className={getLinkClass("#")}>
              Travel
            </Link>
            <Link href="/student" className={getLinkClass("#")}>
              Student
            </Link>
            <Link href="/help-center" className={getLinkClass("#")}>
              Help Center
            </Link>
            <Link href="/blog" className={getLinkClass("#")}>
              Blog
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Contact Sales
            </Link>
            <a
              href="/send-money"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Send Money
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Sub-header - Desktop only */}
        <div
          className={`hidden lg:block border-t border-gray-200 dark:border-gray-800 transition-all duration-500 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
          }`}
        >
          <div className="bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 dark:from-teal-900/20 dark:via-cyan-900/20 dark:to-blue-900/20">
            <div className="container mx-auto px-4 md:px-6 lg:px-16 py-3 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Shield size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Bank-level Security
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      256-bit encryption
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Globe size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Global Reach
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      16+ countries
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Lightning Fast
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Instant transfers
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Trusted Platform
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      5M+ users
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20 transition-all duration-300"
                >
                  <Sparkles
                    size={16}
                    className="text-teal-600 dark:text-teal-400 group-hover:rotate-12 transition-transform"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    24/7 Support
                  </span>
                </Link>
                <div className="text-sm font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 group cursor-pointer">
                  <TrendingUp
                    size={16}
                    className="group-hover:translate-y-[-2px] transition-transform"
                  />
                  <span>$2B+ Processed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* All Countries Modal */}
      {showAllCountries && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowAllCountries(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Globe
                    className="text-teal-600 dark:text-teal-400"
                    size={28}
                  />
                  Select Country
                </h2>
                <button
                  onClick={() => setShowAllCountries(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-180px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredCountries.map((country, idx) => (
                  <Link
                    key={idx}
                    href={country.href}
                    onClick={() => setShowAllCountries(false)}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200 group"
                  >
                    <img
                      src={country.flag}
                      onError={(e) =>
                        (e.currentTarget.src = "")
                      }
                      alt={`${country.name} flag`}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {country.name}
                    </span>
                    <ArrowRight
                      size={16}
                      className="ml-auto text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
              {filteredCountries.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <img
                    src="/img/sad.gif"
                    alt="No Countries"
                    width={80}
                    height={80}
                    className="transform transition-transform duration-300"
                  />
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-medium text-center">
                    We're expanding fast! This country isn't live yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={closeMobileMenu}
          />

          {/* Main Menu */}
          <div
            className={`absolute right-0 top-0 h-full w-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ${
              mobileSubmenu ? "translate-x-full" : "translate-x-0"
            } animate-slideInRight`}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <div className="flex items-center gap-3">
                {/* Theme Toggle Button - Mobile Only */}
                <div className="lg:hidden">
                  <ThemeToggle />
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Nav Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {/* Send To Button */}
                <button
                  onClick={() => handleMobileMenuClick("countries")}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe
                      className="text-teal-600 dark:text-teal-400"
                      size={24}
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">
                        Send to
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {countries.length} countries
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className="text-gray-400 group-hover:translate-x-1 transition-transform rotate-[-90deg]"
                    size={20}
                  />
                </button>

                {/* Other Links */}
                <div className="space-y-2 pt-4">
                  <Link
                    href="how-it-works"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/download-app"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Download App
                  </Link>
                  <Link
                    href="/travel"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Travel
                  </Link>
                  <Link
                    href="/student"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Student
                  </Link>

                  <Link
                    href="/help-center"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/blog"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <Link
                href="#"
                className="block w-full px-4 py-3 text-center rounded-lg border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Sales
              </Link>
              <a
                href="/send-money"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Send Money
              </a>
            </div>
          </div>

          {/* Submenu Panel for Countries */}
          {mobileSubmenu === "countries" && (
            <div className="absolute right-0 top-0 h-full w-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col animate-slideInLeft">
              {/* Submenu Header */}
              <div className="flex items-center gap-4 p-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={handleBackClick}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Select Country
                </span>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Submenu Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-3">
                  {filteredCountries.map((country, idx) => (
                    <Link
                      key={idx}
                      href={country.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all group"
                      onClick={closeMobileMenu}
                    >
                      <img
                        src={country.flag}
                        onError={(e) => (e.currentTarget.src = "")}
                        alt={`${country.name} flag`}
                        className="w-8 h-8 rounded-full  object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {country.name}
                        </div>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:translate-x-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all"
                      />
                    </Link>
                  ))}
                  {filteredCountries.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <img
                        src="/img/sad.gif"
                        alt="No Countries"
                        width={80}
                        height={80}
                        className="transform transition-transform duration-300"
                      />
                      <p className="text-gray-600 dark:text-gray-400 text-lg font-medium text-center">
                        We're expanding fast! This country isn't live yet.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
