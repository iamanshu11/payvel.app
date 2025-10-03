"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NoFeesSection() {
    const [sendAmount, setSendAmount] = useState("0");
    const [receiveAmount, setReceiveAmount] = useState("0");
    const [exchangeRate] = useState(1140);
    const [fromCurrency, setFromCurrency] = useState("AUD");
    const [toCurrency, setToCurrency] = useState("NGN");
    const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
    const [toDropdownOpen, setToDropdownOpen] = useState(false);

    const currencies = [
        { code: "AUD", flag: "au", name: "Australian Dollar" },
        { code: "NGN", flag: "ng", name: "Nigerian Naira" },
        { code: "USD", flag: "us", name: "US Dollar" },
        { code: "GBP", flag: "gb", name: "British Pound" },
        { code: "EUR", flag: "eu", name: "Euro" },
    ];

    useEffect(() => {
        if (sendAmount && !isNaN(Number(sendAmount))) {
            const calculated = (Number(sendAmount) * exchangeRate).toFixed(2);
            setReceiveAmount(calculated);
        } else {
            setReceiveAmount("0");
        }
    }, [sendAmount, exchangeRate]);

    const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "" || /^\d*\.?\d*$/.test(value)) {
            setSendAmount(value);
        }
    };

    return (
        <section className="relative py-2 lg:py-16 bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="container  mx-auto px-6 lg:px-16 relative z-10">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black rounded-2xl px-2 lg:px-8 py-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                            No Fees.
                        </h2>
                        <h3 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-white leading-tight mb-8">
                            One World.
                        </h3>

                        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                            <p>
                                Need to send money across the world?{" "}
                                <span className="font-bold text-gray-900 dark:text-white">Do it with Payvel.</span>
                            </p>
                            <p>
                                Relocating?{" "}
                                <span className="font-bold text-gray-900 dark:text-white">Get started with Payvel.</span>
                            </p>
                            <p className="text-xl font-semibold text-gray-900 dark:text-white mt-8">
                                You'll enjoy{" "}
                                <span className="text-teal-500">$0 fees</span> on every transfer –{" "}
                                <span className="text-teal-500">no hidden costs or surprises.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Calculator Card */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Spring/Organic Shapes */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                        <div className="absolute top-1/2 -right-20 w-56 h-56 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>

                        <div className="hidden lg:block lg:absolute -top-30 lg:-right-70">
                            <Image
                                src="/img/spiral.png"
                                alt="spiral"
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                        </div>

                        {/* Glassmorphism Card */}
                        <div className="relative backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 lg:p-10">

                            {/* Send Amount */}
                            <div className="mb-6">
                                <div className="relative bg-gray-100 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 border border-gray-300 dark:border-gray-600/30">
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    If you send
                                </label>
                                    <input
                                        type="text"
                                        value={sendAmount}
                                        onChange={handleSendAmountChange}
                                        placeholder="0"
                                        className="w-full pr-32 bg-transparent text-4xl font-bold text-gray-900 dark:text-white outline-none"
                                    />

                                    {/* Currency Dropdown */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                                        <button
                                            onClick={() => setFromDropdownOpen(!fromDropdownOpen)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700/80 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                                        >
                                            <img 
                                                src={`https://flagcdn.com/24x18/${currencies.find((c) => c.code === fromCurrency)?.flag}.png`}
                                                alt={fromCurrency}
                                                className="w-6 h-5 object-cover rounded"
                                            />
                                            <span className="text-gray-900 dark:text-white font-semibold">{fromCurrency}</span>
                                            <svg
                                                className={`w-4 h-4 text-gray-900 dark:text-white transition-transform ${fromDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {fromDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                                                {currencies.map((currency) => (
                                                    <button
                                                        key={currency.code}
                                                        onClick={() => {
                                                            setFromCurrency(currency.code);
                                                            setFromDropdownOpen(false);
                                                        }}
                                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                                    >
                                                        <img 
                                                            src={`https://flagcdn.com/32x24/${currency.flag}.png`}
                                                            alt={currency.code}
                                                            className="w-8 h-6 object-cover rounded"
                                                        />
                                                        <div className="text-left">
                                                            <p className="font-semibold text-gray-900 dark:text-white">{currency.code}</p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">{currency.name}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Receive Amount */}
                            <div className="mb-6">
                                <div className="relative bg-gray-100 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 border border-gray-300 dark:border-gray-600/30">
                                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    They will receive
                                </label>
                                    <input
                                        type="text"
                                        value={receiveAmount}
                                        readOnly
                                        placeholder="0"
                                        className="w-full pr-32 bg-transparent text-4xl font-bold text-gray-900 dark:text-white outline-none"
                                    />

                                    {/* Currency Dropdown */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                                        <button
                                            onClick={() => setToDropdownOpen(!toDropdownOpen)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700/80 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                                        >
                                            <img 
                                                src={`https://flagcdn.com/24x18/${currencies.find((c) => c.code === toCurrency)?.flag}.png`}
                                                alt={toCurrency}
                                                className="w-6 h-5 object-cover rounded"
                                            />
                                            <span className="text-gray-900 dark:text-white font-semibold">{toCurrency}</span>
                                            <svg
                                                className={`w-4 h-4 text-gray-900 dark:text-white transition-transform ${toDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {toDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                                                {currencies.map((currency) => (
                                                    <button
                                                        key={currency.code}
                                                        onClick={() => {
                                                            setToCurrency(currency.code);
                                                            setToDropdownOpen(false);
                                                        }}
                                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                                    >
                                                        <img 
                                                            src={`https://flagcdn.com/32x24/${currency.flag}.png`}
                                                            alt={currency.code}
                                                            className="w-8 h-6 object-cover rounded"
                                                        />
                                                        <div className="text-left">
                                                            <p className="font-semibold text-gray-900 dark:text-white">{currency.code}</p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">{currency.name}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Exchange Rate Info */}
                            <div className="space-y-3 mb-6 text-sm">
                                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                        </svg>
                                        <span>By exchange rate</span>
                                    </div>
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        ≈ {exchangeRate} {fromCurrency} 1 {toCurrency}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Transactions fee</span>
                                    </div>
                                    <span className="font-bold text-teal-500 text-lg">$0.00</span>
                                </div>
                            </div>

                            {/* Send Button */}
                            <button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Send money now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}