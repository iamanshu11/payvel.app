"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Zap, Shield, Globe, CreditCard, Users, BarChart, ChevronLeft, Sparkles, TrendingUp, Award } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";

const products = [
  { name: "Payment Gateway", icon: CreditCard, desc: "Accept payments worldwide" },
  { name: "Cross-Border", icon: Globe, desc: "International transfers" },
  { name: "Business Account", icon: BarChart, desc: "Manage your finances" },
];

const solutions = [
  { name: "For Startups", icon: Zap, desc: "Scale your business" },
  { name: "Enterprise", icon: Shield, desc: "Enterprise-grade security" },
  { name: "Developers", icon: Users, desc: "APIs and integrations" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) =>
    pathname === path
      ? "text-teal-500 font-bold"
      : "hover:text-teal-400 transition-colors duration-200";

  const DropdownMenu = ({ title, items, isActive, onToggle }) => (
    <div 
      className="relative"
      onMouseEnter={() => onToggle(title)}
      onMouseLeave={() => onToggle(null)}
    >
      <button className="flex items-center gap-1 hover:text-teal-400 transition-colors duration-200 font-medium">
        {title}
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-fadeIn">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={`/${title.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-start gap-4 p-4 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200 group"
              >
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
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
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg' 
            : 'bg-white dark:bg-black'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src="/img/web-logo.png" 
                alt="Payvel Logo" 
                width={100} 
                height={100}
                className="transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center font-medium text-gray-700 dark:text-gray-300">
            <DropdownMenu 
              title="Products" 
              items={products}
              isActive={activeDropdown === 'Products'}
              onToggle={setActiveDropdown}
            />
            <DropdownMenu 
              title="Solutions" 
              items={solutions}
              isActive={activeDropdown === 'Solutions'}
              onToggle={setActiveDropdown}
            />
            <Link href="#" className={getLinkClass("#")}>
              Platform
            </Link>
            <Link href="#" className={getLinkClass("#")}>
              Pricing
            </Link>
            <Link href="#" className={getLinkClass("#")}>
              Developers
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
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Sub-header - Desktop only */}
        <div className={`hidden lg:block border-t border-gray-200 dark:border-gray-800 transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
        }`}>
          <div className="bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 dark:from-teal-900/20 dark:via-cyan-900/20 dark:to-blue-900/20">
            <div className="container mx-auto px-4 md:px-6 lg:px-16 py-3 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Shield size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Bank-level Security</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">256-bit encryption</div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Globe size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Global Reach</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">190+ countries</div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Lightning Fast</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Instant transfers</div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Trusted Platform</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">5M+ users</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="#" className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20 transition-all duration-300">
                  <Sparkles size={16} className="text-teal-600 dark:text-teal-400 group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">24/7 Support</span>
                </Link>
                <div className="text-sm font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 group cursor-pointer">
                  <TrendingUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
                  <span>$2B+ Processed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={closeMobileMenu}
          />
          
          {/* Main Menu */}
          <div className={`absolute right-0 top-0 h-full w-full  bg-white dark:bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileSubmenu ? 'translate-x-full' : 'translate-x-0'
          } animate-slideInRight`}>
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Menu</span>
              <button 
                onClick={closeMobileMenu}
                className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Content */}
            <div className="flex-1 overflow-y-auto p-6 ">
              <div className="space-y-3">
                {/* Products Button */}
                <button
                  onClick={() => handleMobileMenuClick('products')}
                  className="w-full flex items-center justify-between p-4  rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-900/30 dark:hover:to-cyan-900/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-teal-600 dark:text-teal-400" size={24} />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">Products</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{products.length} options</div>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400 group-hover:translate-x-1 transition-transform rotate-[-90deg]" size={20} />
                </button>

                {/* Solutions Button */}
                <button
                  onClick={() => handleMobileMenuClick('solutions')}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="text-purple-600 dark:text-purple-400" size={24} />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">Solutions</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{solutions.length} options</div>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-400 group-hover:translate-x-1 transition-transform rotate-[-90deg]" size={20} />
                </button>

                {/* Other Links */}
                <div className="space-y-2 pt-4">
                  <Link
                    href="#"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Platform
                  </Link>
                  <Link
                    href="#"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="block p-4 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Developers
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

          {/* Submenu Panel */}
          {mobileSubmenu && (
            <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl flex flex-col animate-slideInLeft">
              {/* Submenu Header */}
              <div className="flex items-center gap-4 p-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={handleBackClick}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-xl font-bold text-gray-900 dark:text-white capitalize">{mobileSubmenu}</span>
              </div>

              {/* Submenu Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-3">
                  {(mobileSubmenu === 'products' ? products : solutions).map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={`/${mobileSubmenu}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all group"
                        onClick={closeMobileMenu}
                      >
                        <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform shadow-md">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{item.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                        </div>
                        <ArrowRight size={20} className="text-gray-400 group-hover:translate-x-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }
      `}</style>
    </>
  );
}