'use client';

import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const Calculator = ({ standalone = false }) => {
  const [sendAmount, setSendAmount] = useState('0');
  const [receiveAmount, setReceiveAmount] = useState('0');
  const [exchangeRate] = useState(1140);
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);

  // New: search states for dropdowns
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  const currencies = [
    { code: 'AUD', flag: 'au', name: 'Australian Dollar' },
    { code: 'NGN', flag: 'ng', name: 'Nigerian Naira' },
    { code: 'USD', flag: 'us', name: 'US Dollar' },
    { code: 'GBP', flag: 'gb', name: 'British Pound' },
    { code: 'EUR', flag: 'eu', name: 'Euro' },
  ];

  useEffect(() => {
    if (sendAmount && !isNaN(Number(sendAmount))) {
      const calculated = (Number(sendAmount) * exchangeRate).toFixed(2);
      setReceiveAmount(calculated);
    } else {
      setReceiveAmount('0');
    }
  }, [sendAmount, exchangeRate]);

  const handleSendAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setSendAmount(value);
    }
  };

  // helpers for filtering
  const filterCurrencies = (list, q) => {
    const s = q.trim().toLowerCase();
    if (!s) return list;
    return list.filter((c) => c.code.toLowerCase().includes(s) || c.name.toLowerCase().includes(s));
  };

  return (
    <div className={`w-full ${standalone ? 'min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black p-6' : ''}`}>
      <div className="w-full max-w-2xl mx-auto relative">
        {/* Spring/Organic Shapes */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-56 h-56 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>

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
              <div className="absolute right-4 top-4 z-9">
                <button
                  onClick={() => {
                    setFromDropdownOpen(!fromDropdownOpen);
                    setToDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700/80 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  <img
                    src={`https://flagcdn.com/24x18/${currencies.find((c) => c.code === fromCurrency)?.flag}.png`}
                    alt={fromCurrency}
                    className="w-6 h-5 object-cover rounded"
                  />
                  <span className="text-gray-900 dark:text-white font-semibold">{fromCurrency}</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 dark:text-white transition-transform ${fromDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {fromDropdownOpen && (
                  <div className="absolute right-0 mb-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden" style={{ bottom: '100%', top: 'auto' }}>
                    {/* Search Bar */}
                    <div className="px-3 pt-3 pb-2">
                      <input
                        type="text"
                        value={fromSearch}
                        onChange={(e) => setFromSearch(e.target.value)}
                        placeholder="Search currency or country"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 text-sm outline-none"
                      />
                    </div>

                    <div className="max-h-56 overflow-auto ">
                      {filterCurrencies(currencies, fromSearch).map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setFromCurrency(currency.code);
                            setFromDropdownOpen(false);
                            setFromSearch('');
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
              <div className="absolute right-4 top-4 ">
                <button
                  onClick={() => {
                    setToDropdownOpen(!toDropdownOpen);
                    setFromDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700/80 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  <img
                    src={`https://flagcdn.com/24x18/${currencies.find((c) => c.code === toCurrency)?.flag}.png`}
                    alt={toCurrency}
                    className="w-6 h-5 object-cover rounded"
                  />
                  <span className="text-gray-900 dark:text-white font-semibold">{toCurrency}</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 dark:text-white transition-transform ${toDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {toDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-40">
                    {/* Search Bar */}
                    <div className="px-3 pt-3 pb-2">
                      <input
                        type="text"
                        value={toSearch}
                        onChange={(e) => setToSearch(e.target.value)}
                        placeholder="Search currency or country"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 text-sm outline-none"
                      />
                    </div>

                    <div className="max-h-56 overflow-auto">
                      {filterCurrencies(currencies, toSearch).map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setToCurrency(currency.code);
                            setToDropdownOpen(false);
                            setToSearch('');
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
          <button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
            <Send size={20} />
            Send money now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
