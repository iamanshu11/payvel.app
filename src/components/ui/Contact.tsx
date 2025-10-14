'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideRight 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-delay-1 {
          animation-delay: 0.1s;
        }

        .animate-delay-2 {
          animation-delay: 0.2s;
        }

        .animate-delay-3 {
          animation-delay: 0.3s;
        }

        .animate-delay-4 {
          animation-delay: 0.4s;
        }

        .animate-delay-5 {
          animation-delay: 0.5s;
        }
      `}} />

      <div className="min-h-screen md:mt-20 bg-white dark:bg-gray-950">
        {/* Hero Section */}
        <section className="text-center container mx-auto px-6 py-16 lg:py-24">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Get in{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-up">
              We're here to help. Whether you have a question about our service, a press inquiry, or need support, 
              you can reach us through the channels below.
            </p>
          </div>
        </section>

        {/* Contact Form & Details Section */}
        <section className="container mx-auto px-6 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 animate-slide-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in">
                  <p className="text-green-800 dark:text-green-300 font-medium">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="opacity-0 animate-fade-in animate-delay-1">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                             text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                             focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                <div className="opacity-0 animate-fade-in animate-delay-2">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                             text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                             focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                <div className="opacity-0 animate-fade-in animate-delay-3">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                             text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                             focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent
                             transition-all duration-200"
                  />
                </div>

                <div className="opacity-0 animate-fade-in animate-delay-4">
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                             text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                             focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent
                             transition-all duration-200 resize-none"
                  />
                </div>

                <div className="opacity-0 animate-fade-in animate-delay-5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 
                             text-white px-8 py-3 rounded-lg font-semibold
                             transform transition-all duration-200 hover:scale-105 hover:shadow-lg
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                             flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 animate-slide-right">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                            hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 
                            hover:shadow-lg hover:shadow-teal-500/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-300">General Inquiries</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">For general questions about Payvel.</p>
                    <a 
                      href="mailto:connect@payvel.com" 
                      className="text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-400 
                               transition-colors duration-200 inline-block mt-2"
                    >
                      connect@payvel.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                            hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 
                            hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">Customer Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Need help with a transfer or your account?</p>
                    <a 
                      href="mailto:support@payvel.com" 
                      className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 
                               transition-colors duration-200 inline-block mt-2"
                    >
                      support@payvel.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                            hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 
                            hover:shadow-lg hover:shadow-indigo-500/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">Press & Media</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">For all media and press-related inquiries.</p>
                    <a 
                      href="mailto:press@payvel.com" 
                      className="text-gray-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 
                               transition-colors duration-200 inline-block mt-2"
                    >
                      press@payvel.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                            hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 
                            hover:shadow-lg hover:shadow-purple-500/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Office</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Payvel PTY LTD<br />
                      SOUTH RIPLEY QLD 4306, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}