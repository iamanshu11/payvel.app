'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NoFeesSection() {
  const [sendAmount, setSendAmount] = useState('0');
  const [receiveAmount, setReceiveAmount] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);

  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  // ✅ Dynamic Exchange Rate Table (sending countries to receiving countries)
  const exchangeRates: Record<string, Record<string, number>> = {
    AUD: { 
      XOF: 380, // Benin, Burkina Faso, Cote d'Ivoire, Mali, Senegal, Togo (West African CFA franc)
      BWP: 8.5, // Botswana
      XAF: 380, // Cameroon, Gabon, Republic of Congo (Central African CFA franc)
      CDF: 1850, // DR Congo
      KES: 85, // Kenya
      MWK: 1100, // Malawi
      NGN: 1140, // Nigeria
      RWF: 850, // Rwanda
      ZAR: 11.5, // South Africa
      TZS: 1650, // Tanzania
      UGX: 2450, // Uganda
      ZMW: 16.5, // Zambia
    },
    USD: { 
      XOF: 585, 
      BWP: 13.2, 
      XAF: 585, 
      CDF: 2850, 
      KES: 131, 
      MWK: 1700, 
      NGN: 1760, 
      RWF: 1310, 
      ZAR: 18, 
      TZS: 2550, 
      UGX: 3780, 
      ZMW: 25.5,
    },
    CAD: { 
      XOF: 430, 
      BWP: 9.7, 
      XAF: 430, 
      CDF: 2100, 
      KES: 96, 
      MWK: 1250, 
      NGN: 1290, 
      RWF: 965, 
      ZAR: 13.2, 
      TZS: 1875, 
      UGX: 2780, 
      ZMW: 18.7,
    },
  };

  // ✅ Sending Countries (FROM)
  const sendingCurrencies = [
    { code: 'AUD', flag: 'au', name: 'Australian Dollar', country: 'Australia' },
    { code: 'USD', flag: 'us', name: 'US Dollar', country: 'United States' },
    { code: 'CAD', flag: 'ca', name: 'Canadian Dollar', country: 'Canada' },
  ];

  // ✅ Receiving Countries (TO)
  const receivingCurrencies = [
    { code: 'XOF', flag: 'bj', name: 'West African CFA Franc', country: 'Benin' },
    { code: 'BWP', flag: 'bw', name: 'Botswana Pula', country: 'Botswana' },
    { code: 'XOF', flag: 'bf', name: 'West African CFA Franc', country: 'Burkina Faso' },
    { code: 'XAF', flag: 'cm', name: 'Central African CFA Franc', country: 'Cameroon' },
    { code: 'XOF', flag: 'ci', name: 'West African CFA Franc', country: "Cote d'Ivoire" },
    { code: 'CDF', flag: 'cd', name: 'Congolese Franc', country: 'DR Congo' },
    { code: 'XAF', flag: 'ga', name: 'Central African CFA Franc', country: 'Gabon' },
    { code: 'KES', flag: 'ke', name: 'Kenyan Shilling', country: 'Kenya' },
    { code: 'MWK', flag: 'mw', name: 'Malawian Kwacha', country: 'Malawi' },
    { code: 'XOF', flag: 'ml', name: 'West African CFA Franc', country: 'Mali' },
    { code: 'NGN', flag: 'ng', name: 'Nigerian Naira', country: 'Nigeria' },
    { code: 'XAF', flag: 'cg', name: 'Central African CFA Franc', country: 'Republic of Congo' },
    { code: 'RWF', flag: 'rw', name: 'Rwandan Franc', country: 'Rwanda' },
    { code: 'XOF', flag: 'sn', name: 'West African CFA Franc', country: 'Senegal' },
    { code: 'ZAR', flag: 'za', name: 'South African Rand', country: 'South Africa' },
    { code: 'TZS', flag: 'tz', name: 'Tanzanian Shilling', country: 'Tanzania' },
    { code: 'XOF', flag: 'tg', name: 'West African CFA Franc', country: 'Togo' },
    { code: 'UGX', flag: 'ug', name: 'Ugandan Shilling', country: 'Uganda' },
    { code: 'ZMW', flag: 'zm', name: 'Zambian Kwacha', country: 'Zambia' },
  ];

  useEffect(() => {
    if (!isNaN(Number(sendAmount)) && sendAmount !== '') {
      const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
      setReceiveAmount((Number(sendAmount) * rate).toFixed(2));
    } else {
      setReceiveAmount('0');
    }
  }, [sendAmount, fromCurrency, toCurrency]);

  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setSendAmount(value);
    }
  };

  // Filtered lists
  const filteredFromCurrencies = sendingCurrencies.filter(
    (c) =>
      c.code.toLowerCase().includes(fromSearch.toLowerCase()) ||
      c.name.toLowerCase().includes(fromSearch.toLowerCase()) ||
      c.country.toLowerCase().includes(fromSearch.toLowerCase())
  );

  const filteredToCurrencies = receivingCurrencies.filter(
    (c) =>
      c.code.toLowerCase().includes(toSearch.toLowerCase()) ||
      c.name.toLowerCase().includes(toSearch.toLowerCase()) ||
      c.country.toLowerCase().includes(toSearch.toLowerCase())
  );

  return (
    <section className="relative py-12 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-2 lg:px-16">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              No Fees.
            </h2>
            <h3 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-white leading-tight mb-8">
              One World.
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Need to send money across the world?{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Do it with Payvel.</span>
            </p>
            <p className="text-xl font-semibold text-teal-500 mt-4">
              $0 fees on every transfer — no hidden costs.
            </p>
          </div>

          {/* Calculator */}
          <div className="w-full lg:w-1/2 relative overflow-visible">
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 -right-20 w-56 h-56 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>

            <div className="hidden lg:block lg:absolute -top-30 lg:-right-70">
              <Image src="/img/spiral.png" alt="spiral" width={400} height={300} className="object-contain" />
            </div>

            <div className="relative backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 overflow-visible">

              {/* From Section */}
              <div className="mb-6 relative overflow-visible">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">If you send</label>
                <div className="relative overflow-visible bg-gray-100 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-300 dark:border-gray-700">
                  <input
                    type="text"
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    placeholder="0"
                    className="w-full pr-32 bg-transparent text-xl lg:text-4xl font-bold text-gray-900 dark:text-white outline-none"
                  />
                  
                  {/* Dropdown Button */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                    <button
                      onClick={() => {
                        setFromDropdownOpen(!fromDropdownOpen);
                        setToDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${sendingCurrencies.find(c => c.code === fromCurrency)?.flag}.png`}
                        alt={fromCurrency}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="font-semibold dark:text-white">{fromCurrency}</span>
                      <svg
                        className={`w-4 h-4 text-black dark:text-white transition-transform ${fromDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Overlapping Dropdown */}
                  {fromDropdownOpen && (
                    <div className="absolute right-4 top-0 translate-y-10 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
                      {/* ✅ Search Bar */}
                      <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={fromSearch}
                          onChange={(e) => setFromSearch(e.target.value)}
                          className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-900 dark:text-white outline-none"
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredFromCurrencies.map(currency => (
                          <button
                            key={currency.code}
                            onClick={() => {
                              setFromCurrency(currency.code);
                              setFromDropdownOpen(false);
                              setFromSearch('');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-white transition-all"
                          >
                            <img
                              src={`https://flagcdn.com/32x24/${currency.flag}.png`}
                              alt={currency.code}
                              className="w-8 h-6 object-cover rounded"
                            />
                            <div className="text-left">
                              <p className="font-semibold text-black dark:text-white">{currency.country}</p>
                              <p className="text-xs text-gray-500">{currency.code} - {currency.name}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* To Section */}
              <div className="mb-6 relative overflow-visible">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">They will receive</label>
                <div className="relative overflow-visible bg-gray-100 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-300 dark:border-gray-700">
                  <input
                    type="text"
                    value={receiveAmount}
                    readOnly
                    placeholder="0"
                    className="w-full pr-32 bg-transparent text-xl lg:text-4xl font-bold text-gray-900 dark:text-white outline-none"
                  />
                  
                  {/* Dropdown Button */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                    <button
                      onClick={() => {
                        setToDropdownOpen(!toDropdownOpen);
                        setFromDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${receivingCurrencies.find(c => c.code === toCurrency)?.flag}.png`}
                        alt={toCurrency}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="font-semibold text-black dark:text-white">{toCurrency}</span>
                      <svg
                        className={`w-4 h-4 text-black dark:text-white transition-transform ${toDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Overlapping Dropdown */}
                  {toDropdownOpen && (
                    <div className="absolute right-4 top-0 translate-y-10 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
                      {/* ✅ Search Bar */}
                      <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={toSearch}
                          onChange={(e) => setToSearch(e.target.value)}
                          className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-900 dark:text-white outline-none"
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredToCurrencies.map((currency, idx) => (
                          <button
                            key={`${currency.code}-${currency.flag}-${idx}`}
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
                              <p className="font-semibold text-black dark:text-white">{currency.country}</p>
                              <p className="text-xs text-gray-500">{currency.code} - {currency.name}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Exchange Info */}
              <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 mb-6">
                <span>Exchange Rate</span>
                <span className="font-semibold">
                  1 {fromCurrency} ≈ {exchangeRates[fromCurrency]?.[toCurrency] || 1} {toCurrency}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-6">
                  <span>Transaction fee</span>
                  <span className="font-bold text-teal-500 text-lg">$0.00</span>
                </div>

              <button className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:scale-105">
                Send Money Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}