"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";

export default function BudgetHome() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [currentTime, setCurrentTime] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [amount, setAmount] = useState(1);
    const [rate, setRate] = useState(970);
    const [fromDate, setFromDate] = useState('2024-10-11');
    const [toDate, setToDate] = useState('2024-10-12');

    // Real-time clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Auto-slide carousel
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % 3);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);


    const slides = [
        {
            title: "Dashboard",
            component: (
                <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 overflow-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                    </div>

                    {/* Today Rate Card */}
                    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-4 mb-4 shadow-lg">
                        <div className="text-white text-xs font-semibold mb-3">TODAY RATE</div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white dark:bg-gray-800 rounded-lg px-2 py-2 flex items-center gap-1 text-xs">
                                🇺🇸 <span className="font-semibold">USD</span>
                            </div>
                            <input
                                type=""
                                placeholder="Enter your amount"
                                className="w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500"
                            />

                        </div>
                        <div className="flex items-center justify-center my-2">
                            <div className="dark:text-gray-900 text-gray-100 text-2xl">⇅</div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-2 py-2 flex items-center gap-1 text-xs">
                                🇦🇺 <span className="font-semibold">AUD</span>
                            </div>
                            <input
                                type=""
                                placeholder="Enter your amount"
                                className="w-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-500" />
                        </div>
                        <div className="dark:text-gray-900  text-white text-xs mt-3">Conversation Rate: 1.8</div>
                    </div>

                    {/* Navigation Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🎓</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">Student Hub</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💸</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">Remittance Hub</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">✈️</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">Travel Hub</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💰</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">Budget</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💲</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">Rate alert</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">👤</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 text-center font-medium">My Profile</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-3">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🎟️</div>
                            <p className="text-xs text-blue-600 dark:text-blue-100 font-medium">Vouchers</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Rate Management",
            component: (
                <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 p-4 scrollbar-hide overflow-auto scrollbar-hide">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                        <button className="mr-3">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-base font-bold">Rate Management</h2>
                    </div>

                    {/* Origin Country Section */}
                    <div className="mb-4">
                        <label className="text-xs font-semibold mb-2 block">Your Origin country and currency</label>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span>🇺🇸</span>
                                    <span className="text-sm font-medium">USA</span>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm font-semibold">USD</div>
                            <button className="text-blue-500">✏️</button>
                        </div>
                    </div>

                    {/* Other Currency Section */}
                    <div className="mb-4">
                        <label className="text-xs font-semibold mb-2 block">Other currency</label>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span>🇦🇺</span>
                                        <span className="text-sm font-medium">AUSTRALIA</span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm font-semibold">AUD</div>
                                <button className="text-red-500">🗑️</button>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span>🇯🇵</span>
                                        <span className="text-sm font-medium">JAPAN</span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm font-semibold">JPY</div>
                                <button className="text-red-500">🗑️</button>
                            </div>
                        </div>
                        <button className="mt-2 bg-teal-500 text-white text-xs px-3 py-1.5 rounded-lg">Add new currency</button>
                    </div>

                    {/* My Currency Rate */}
                    <div className="mb-4 border-t pt-4">
                        <label className="text-xs font-semibold mb-2 block">My currency rate</label>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                                <span>1 | USD</span>
                                <span className="text-teal-500">⇄</span>
                                <span>1.54 | AUD</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span>1 | USD</span>
                                <span className="text-teal-500">⇄</span>
                                <span>151.621 | JPY</span>
                            </div>
                        </div>
                    </div>

                    {/* Set Rate Alert */}
                    <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-semibold">Set rate alert</label>
                            <button className="text-teal-500 text-xl">+</button>
                        </div>

                        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 mb-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-1 text-xs">
                                    <span>1 | USD</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                    <span>1.60 | AUD</span>
                                </div>
                                <button className="ml-auto text-blue-500 text-xs">✏️</button>
                                <button className="text-red-500 text-xs">🗑️</button>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <div className="flex items-center gap-1">
                                    <span className="text-teal-500">From</span>
                                    <span className="font-medium">10/11/2025</span>
                                </div>
                                <span className="text-teal-500">to</span>
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">10/12/2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Budget",
            component: (
                <div className="w-full h-full bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900  p-4 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                        <button className="mr-3">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-base font-bold">Budget</h2>
                    </div>

                    {/* Month and Budget Card */}
                    <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-4 shadow-sm mb-4">
                        <div className="flex items-center justify-between mb-3">
                            <button>
                                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h3 className="text-blue-500 font-semibold">August</h3>
                            <button>
                                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="mb-2">
                            <div className="flex items-baseline mb-1">
                                <span className="text-3xl font-bold text-blue-500">$14,500.00</span>
                                <span className="text-sm text-gray-500 ml-2">left</span>
                            </div>
                            <div className="text-xs text-gray-500">-$12,450.30 spent this month</div>
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-teal-700 to-cyan-700" style={{ width: '60%' }}></div>
                        </div>

                        <button className="mt-3 bg-teal-100 text-teal-600 text-xs px-3 py-1.5 rounded-lg font-medium">
                            All Budgets
                        </button>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-1.5 mb-4">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex mb-3">
                        <button className="flex-1 text-sm font-semibold text-blue-500 border-b-2 border-blue-500 pb-2">
                            Expense
                        </button>
                        <button className="flex-1 text-sm font-semibold text-gray-500 pb-2">
                            Transfer
                        </button>
                    </div>

                    {/* Expense List */}
                    <div className="space-y-3">
                        {/* Date Group 1 */}
                        <div>
                            <div className="text-xs text-blue-500 font-medium mb-2">16 August 2025</div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Shopping</span>
                                <span className="text-sm text-red-500 font-semibold">-$25.56</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Vacation</span>
                                <span className="text-sm text-red-500 font-semibold">-$100.56</span>
                            </div>
                        </div>

                        {/* Date Group 2 */}
                        <div>
                            <div className="text-xs text-blue-500 font-medium mb-2">15 August 2025</div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Shopping</span>
                                <span className="text-sm text-red-500 font-semibold">-$25.56</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Vacation</span>
                                <span className="text-sm text-red-500 font-semibold">-$100.56</span>
                            </div>
                        </div>

                        {/* Date Group 3 */}
                        <div>
                            <div className="text-xs text-blue-500 font-medium mb-2">14 August 2025</div>
                           
                        </div>
                    </div>
                </div>
            )
        }
    ];

    // Persistent random positions for slide backgrounds
    const slideBubbles = useMemo(
        () =>
            slides.map(() =>
                Array.from({ length: 20 }, () => ({
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    duration: `${Math.random() * 10 + 8}s`,
                    delay: `${Math.random() * 8}s`,
                }))
            ),
        []
    );

    return (
        <section
            ref={heroRef}
            className="relative  py-10 lg:py-16  flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden"
        >
            {/* Floating Gradient Shapes */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20 floating-shape"></div>

            <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text Section */}
                    {/* Text Section - Dynamic based on current slide */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="transition-all duration-700 ease-in-out">
                            {currentSlide === 0 && (
                                <>
                                    <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                                        <span className="relative">
                                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-teal-500 to-cyan-400 opacity-40 -z-10"></span>
                                            Everything in One <span className="text-teal-500">Place</span>
                                        </span>
                                    </h1>
                                    <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                                        Instantly check rates, access specialized hubs for students or travel, and manage your profile. Payvel puts your entire financial world at your fingertips.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                        <a href="/download-app" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            Download App
                                        </a>
                                        <a href="/how-it-works" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            How It Works
                                        </a>
                                    </div>
                                </>
                            )}

                            {currentSlide === 1 && (
                                <>
                                    <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                                        <span className="relative">
                                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 to-blue-400 opacity-40 -z-10"></span>
                                            Transfer  <span className="text-cyan-500">Smarter</span>
                                        </span>
                                    </h1>
                                    <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                                        Never guess the best time to send. Set your ideal exchange rate, and we'll monitor the markets 24/7, notifying you instantly when it's the right time to transfer.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                        <a href="/download-app" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            Download App
                                        </a>
                                        <a href="/how-it-works" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            How It Works
                                        </a>
                                    </div>
                                </>
                            )}

                            {currentSlide === 2 && (
                                <>
                                    <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                                        <span className="relative">
                                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 to-purple-400 opacity-40 -z-10"></span>
                                            Master Your  <span className="text-blue-500">Money</span>
                                        </span>
                                    </h1>
                                    <p className="hero-subtitle mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                                        From automatic spending categories to personalized budgets and savings goals, Payvel gives you the tools to see where your money goes and make it work for you.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                        <a href="/download-app" className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            Download App
                                        </a>
                                        <a href="/how-it-works" className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                                            How It Works
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Phone Mockup Section */}
                    <div className="w-full md:w-1/2 flex justify-center relative">

                        {/* Phone Mockup Section */}
                        <div className="w-full md:w-[320px] flex justify-center relative">

                            {/* Phone Mockup */}
                            <div
                                className="phone-mockup relative w-full h-[600px] cursor-pointer"
                                style={{
                                    transform: 'perspective(1000px) rotateY(0deg)',
                                    transition: 'transform 0.3s ease-out'
                                }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    const rotateX = ((y - centerY) / centerY) * -10;
                                    const rotateY = ((x - centerX) / centerX) * 10;
                                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                                }}
                            >

                                {/* Phone Frame */}
                                <div className="absolute inset-0 bg-black dark:bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                                    {/* Reflection Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                                </div>

                                {/* Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-35 h-7 bg-gray-900 rounded-b-3xl z-20">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                                </div>

                                {/* Screen */}
                                <div className="absolute inset-4 bg-cyan-50 dark:bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 rounded-[2.5rem] overflow-hidden">
                                    {/* Status Bar */}
                                    <div className="flex items-center justify-between px-6 pt-4 
                ">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {currentTime}
                                        </span>

                                        <div className="flex items-center gap-1">
                                            {/* Bar chart icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 text-gray-900 dark:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M2 22h2v-4H2v4zm4 0h2v-7H6v7zm4 0h2v-10h-2v10zm4 0h2V8h-2v14zm4 0h2V4h-2v18zm4-18v18h2V4h-2z" />
                                            </svg>

                                            {/* Monitor icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-4 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4 6h-1v4h1v-4z" />
                                            </svg>
                                        </div>
                                    </div>


                                    {/* Interactive Carousel */}
                                    <div
                                        className="relative h-full"
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    >
                                        {slides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                                                    ? "opacity-100 translate-x-0 scale-100"
                                                    : index < currentSlide
                                                        ? "opacity-0 -translate-x-full scale-95"
                                                        : "opacity-0 translate-x-full scale-95"
                                                    }`}
                                            >
                                                {slide.component}
                                            </div>
                                        ))}

                                        {/* Interactive Slide Indicators */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                            {slides.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentSlide(index)}
                                                    className={`h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${index === currentSlide
                                                        ? "bg-teal-500 w-8 shadow-lg shadow-teal-500/50"
                                                        : "bg-gray-400 w-2 hover:bg-gray-600"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                    </div>

                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full backdrop-blur-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}