'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Plane, Hotel, Send, Calendar, Users, MapPin } from 'lucide-react';

type TabType = 'money' | 'flights' | 'hotels';

const TravelHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('flights');
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [fromCity, setFromCity] = useState('Sydney (SYD)');
  const [toCity, setToCity] = useState('Lagos (LOS)');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [sendAmount, setSendAmount] = useState('1000');
  const [receiveAmount, setReceiveAmount] = useState('1,140,000');
  const [hotelDest, setHotelDest] = useState('');
  const [guests, setGuests] = useState('1 room, 2 adults');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    setDepartDate(tomorrow.toISOString().split('T')[0]);
    setReturnDate(nextWeek.toISOString().split('T')[0]);
    setCheckInDate(tomorrow.toISOString().split('T')[0]);
    setCheckOutDate(nextWeek.toISOString().split('T')[0]);
  }, []);

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleAmountChange = (value: string) => {
    const numValue = parseFloat(value.replace(/,/g, '')) || 0;
    setSendAmount(value);
    const converted = (numValue * 1140).toFixed(0);
    setReceiveAmount(converted.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const handleSearch = () => {
    if (activeTab === 'flights') {
      alert(`Searching flights from ${fromCity} to ${toCity}`);
    } else if (activeTab === 'hotels') {
      alert(`Searching hotels in ${hotelDest || 'selected destination'}`);
    } else {
      alert(`Sending ${sendAmount} AUD`);
    }
  };

  return (
    <div className="lg:min-h-screen py-10 lg:py-24 md:mt-10 flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">All-in-One Travel Platform</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white dark:text-white leading-tight">
              Your Journey,{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Simplified
              </span>
              : Send, Book, Go.
            </h1>
            
            <p className="text-xl text-gray-300 dark:text-gray-300 leading-relaxed">
              Your entire trip, simplified. Send money to any destination, book your flight and hotel—all in one secure app.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <span className="text-sm">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Interactive Widget */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/20 p-8 shadow-2xl">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-white/5 dark:bg-white/5 p-1.5 rounded-xl">
                <button
                  onClick={() => setActiveTab('money')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'money'
                      ? 'bg-white dark:bg-white text-teal-900 dark:text-teal-900 shadow-lg transform scale-105'
                      : 'text-white dark:text-white hover:bg-white/10 dark:hover:bg-white/10'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send Money</span>
                </button>
                <button
                  onClick={() => setActiveTab('flights')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'flights'
                      ? 'bg-white dark:bg-white text-teal-900 dark:text-teal-900 shadow-lg transform scale-105'
                      : 'text-white dark:text-white hover:bg-white/10 dark:hover:bg-white/10'
                  }`}
                >
                  <Plane className="w-4 h-4" />
                  <span className="hidden sm:inline">Book Flight</span>
                </button>
                <button
                  onClick={() => setActiveTab('hotels')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'hotels'
                      ? 'bg-white dark:bg-white text-teal-900 dark:text-teal-900 shadow-lg transform scale-105'
                      : 'text-white dark:text-white hover:bg-white/10 dark:hover:bg-white/10'
                  }`}
                >
                  <Hotel className="w-4 h-4" />
                  <span className="hidden sm:inline">Book Hotel</span>
                </button>
              </div>

              {/* Send Money Panel */}
              {activeTab === 'money' && (
                <div className="space-y-6 animate-slide-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">You send</label>
                      <input
                        type="text"
                        value={`${sendAmount} AUD`}
                        onChange={(e) => handleAmountChange(e.target.value.replace(' AUD', ''))}
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">They receive</label>
                      <input
                        type="text"
                        value={`${receiveAmount} NGN`}
                        readOnly
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white text-xl font-bold cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-300 dark:text-gray-300 bg-white/5 dark:bg-white/5 rounded-lg p-3">
                    <span>Exchange Rate</span>
                    <span className="font-semibold">1 AUD = 1,140 NGN</span>
                  </div>
                  <button
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white dark:text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/50 dark:hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Continue to Send
                  </button>
                </div>
              )}

              {/* Book Flight Panel */}
              {activeTab === 'flights' && (
                <div className="space-y-6 animate-slide-in">
                  <div className="flex items-center justify-center gap-3">
                    <span className={`text-sm font-medium transition-all ${!isRoundTrip ? 'text-white dark:text-white' : 'text-gray-400 dark:text-gray-400'}`}>
                      One-way
                    </span>
                    <button
                      onClick={() => setIsRoundTrip(!isRoundTrip)}
                      className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                        isRoundTrip ? 'bg-teal-600 dark:bg-teal-600' : 'bg-white/20 dark:bg-white/20'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-white rounded-full shadow-md transition-transform duration-300 ${
                          isRoundTrip ? 'transform translate-x-7' : ''
                        }`}
                      ></span>
                    </button>
                    <span className={`text-sm font-medium transition-all ${isRoundTrip ? 'text-white dark:text-white' : 'text-gray-400 dark:text-gray-400'}`}>
                      Round trip
                    </span>
                  </div>

                  <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
                    <div>
                      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        From
                      </label>
                      <input
                        type="text"
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
                      />
                    </div>
                    <button
                      onClick={handleSwapCities}
                      className="mb-3 p-3 bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 rounded-xl transition-all duration-300 hover:rotate-180 transform"
                    >
                      <ArrowLeftRight className="w-5 h-5 text-white dark:text-white" />
                    </button>
                    <div>
                      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        To
                      </label>
                      <input
                        type="text"
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        Depart
                      </label>
                      <input
                        type="date"
                        value={departDate}
                        onChange={(e) => setDepartDate(e.target.value)}
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
                      />
                    </div>
                    {isRoundTrip && (
                      <div>
                        <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          Return
                        </label>
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white dark:text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/50 dark:hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Search Flights
                  </button>
                </div>
              )}

              {/* Book Hotel Panel */}
              {activeTab === 'hotels' && (
  <div className="space-y-6 animate-slide-in">
    <div>
      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
        <MapPin className="w-3 h-3 inline mr-1" />
        Destination or hotel
      </label>
      <input
        type="text"
        value={hotelDest}
        onChange={(e) => setHotelDest(e.target.value)}
        placeholder="e.g., Lagos"
        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
      />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
          <Calendar className="w-3 h-3 inline mr-1" />
          Check-in
        </label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
        />
      </div>
      <div>
        <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
          <Calendar className="w-3 h-3 inline mr-1" />
          Check-out
        </label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
        />
      </div>
    </div>

    <div>
      <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-2">
        <Users className="w-3 h-3 inline mr-1" />
        Rooms & Guests
      </label>
      <input
        type="text"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        placeholder="1 room, 2 adults"
        className="w-full bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-xl px-4 py-3 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500 transition-all"
      />
    </div>

    <button
      onClick={handleSearch}
      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white dark:text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/50 dark:hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
    >
      Search Hotels
    </button>
  </div>
)}

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TravelHero;