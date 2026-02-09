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
  const [exchangeRates, setExchangeRates] = useState<Record<string, Record<string, number>>>({});
  const [isLoadingRates, setIsLoadingRates] = useState(true);
  const [currentRate, setCurrentRate] = useState<number | null>(null);

  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  // Fixer.io API Key
  const FIXER_API_KEY = '64e5f72a3da85c491d9375360071650b';
  const FIXER_API_URL = `https://data.fixer.io/api/latest`;

  // Minimal fallback rates (only used if API completely fails - set to 0 to indicate unavailable)
  const minimalFallbackRates: Record<string, Record<string, number>> = {
    AUD: { 
      XOF: 0,
      BWP: 0,
      XAF: 0,
      CDF: 0,
      KES: 0,
      MWK: 0,
      NGN: 0,
      RWF: 0,
      ZAR: 0,
      TZS: 0,
      UGX: 0,
      ZMW: 0,
    },
    USD: { 
      XOF: 0, 
      BWP: 0, 
      XAF: 0, 
      CDF: 0, 
      KES: 0, 
      MWK: 0, 
      NGN: 0, 
      RWF: 0, 
      ZAR: 0, 
      TZS: 0, 
      UGX: 0, 
      ZMW: 0,
    },
    CAD: { 
      XOF: 0, 
      BWP: 0, 
      XAF: 0, 
      CDF: 0, 
      KES: 0, 
      MWK: 0, 
      NGN: 0, 
      RWF: 0, 
      ZAR: 0, 
      TZS: 0, 
      UGX: 0, 
      ZMW: 0,
    },
  };

  // Get unique receiving currencies
  const uniqueReceivingCurrencies = ['XOF', 'BWP', 'XAF', 'CDF', 'KES', 'MWK', 'NGN', 'RWF', 'ZAR', 'TZS', 'UGX', 'ZMW'];
  const sendingCurrenciesList = ['AUD', 'USD', 'CAD'];

  // Fetch exchange rates from Fixer.io
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setIsLoadingRates(true);
      try {
        // Fetch rates with EUR as base (free tier limitation)
        const symbols = [...uniqueReceivingCurrencies, ...sendingCurrenciesList].join(',');
        const response = await fetch(
          `${FIXER_API_URL}?access_key=${FIXER_API_KEY}&base=EUR&symbols=${symbols}`
        );
        
        const data = await response.json();
        
        if (data.success && data.rates) {
          const eurRates = data.rates;
          
          // Calculate cross-rates for each sending currency
          const calculatedRates: Record<string, Record<string, number>> = {};
          
          sendingCurrenciesList.forEach((fromCurr) => {
            calculatedRates[fromCurr] = {};
            
            // Check if sending currency is available in API response
            if (eurRates[fromCurr]) {
              const fromCurrToEur = 1 / eurRates[fromCurr]; // Convert EUR to sending currency
              
              uniqueReceivingCurrencies.forEach((toCurr) => {
                if (eurRates[toCurr]) {
                  // Convert: 1 FROM_CURR = (1/EUR_TO_FROM) * EUR_TO_TO = TO_CURR
                  calculatedRates[fromCurr][toCurr] = eurRates[toCurr] * fromCurrToEur;
                } else {
                  // If currency not available, set to 0 to indicate unavailable
                  calculatedRates[fromCurr][toCurr] = 0;
                }
              });
            } else {
              // If sending currency not available, set all to 0
              uniqueReceivingCurrencies.forEach((toCurr) => {
                calculatedRates[fromCurr][toCurr] = 0;
              });
            }
          });
          
          setExchangeRates(calculatedRates);
        } else {
          // Only use minimal fallback if API completely fails
          console.error('Fixer.io API returned error:', data.error || 'Unknown error');
          setExchangeRates(minimalFallbackRates);
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Only use minimal fallback on network error
        setExchangeRates(minimalFallbackRates);
      } finally {
        setIsLoadingRates(false);
      }
    };

    fetchExchangeRates();
  }, []);

  // Update current rate when currencies change
  useEffect(() => {
    if (exchangeRates[fromCurrency]?.[toCurrency] && exchangeRates[fromCurrency][toCurrency] > 0) {
      setCurrentRate(exchangeRates[fromCurrency][toCurrency]);
    } else {
      setCurrentRate(null);
    }
  }, [fromCurrency, toCurrency, exchangeRates]);

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
    if (!isNaN(Number(sendAmount)) && sendAmount !== '' && currentRate && currentRate > 0) {
      setReceiveAmount((Number(sendAmount) * currentRate).toFixed(2));
    } else if (!isNaN(Number(sendAmount)) && sendAmount !== '') {
      // If rate not available, show 0
      setReceiveAmount('0');
    } else {
      setReceiveAmount('0');
    }
  }, [sendAmount, fromCurrency, toCurrency, currentRate]);

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
                  {isLoadingRates ? (
                    'Loading...'
                  ) : currentRate && currentRate > 0 ? (
                    `1 ${fromCurrency} ≈ ${currentRate.toFixed(2)} ${toCurrency}`
                  ) : (
                    'Rate unavailable'
                  )}
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