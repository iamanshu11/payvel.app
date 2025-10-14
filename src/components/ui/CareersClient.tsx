"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Globe, Heart, Rocket, Mail, Upload, X, CheckCircle } from "lucide-react";

export default function CareersClient() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openForm = (role) => {
    setSelectedRole(role);
    setShowForm(true);
    setFormStep(1);
    setSubmitted(false);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedRole("");
    setFormStep(1);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      experience: "",
      message: ""
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.name && formData.email) {
      setFormStep(2);
    }
  };

  const handleSubmit = () => {
    if (formData.experience && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        closeForm();
      }, 2500);
    }
  };

  const jobs = [
    {
      title: "Senior Software Engineer (Backend)",
      location: "Remote | Full-time",
      department: "Engineering",
      icon: "💻"
    },
    {
      title: "Product Manager, Mobile",
      location: "South Ripley, QLD | Full-time",
      department: "Product",
      icon: "📱"
    },
    {
      title: "Customer Support Specialist",
      location: "Remote | Part-time",
      department: "Support",
      icon: "💬"
    },
  ];

  const perks = [
    { icon: <Rocket className="w-8 h-8" />, title: "Innovation-Driven", desc: "Tackle complex challenges with cutting-edge technology to create a seamless financial experience." },
    { icon: <Heart className="w-8 h-8" />, title: "Customer-Centric", desc: "Our users are at the heart of everything we do. We build products that solve real-world problems." },
    { icon: <Globe className="w-8 h-8" />, title: "Global Team", desc: "Be part of a diverse and talented team making a worldwide impact, one transfer at a time." },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Page Header */}
      <section className="relative text-center container mx-auto px-6 pt-24 pb-12 lg:pt-46 lg:pb-16 fade-up">
        <div className="inline-block mb-6 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 text-sm font-medium animate-bounce-slow">
          🚀 We're Hiring!
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Build the Future of{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Finance
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to make money transfers simple, secure, and
          accessible for everyone. Join our team and help us build bridges that
          connect people to what matters most.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a href="#openings" className="px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            View Open Roles
          </a>
          <a href="#culture" className="px-8 py-3 border-2 border-teal-500 text-teal-500 rounded-full font-semibold hover:bg-teal-500 hover:text-white hover:scale-105 transition-all duration-300">
            Learn More
          </a>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="relative container mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Work at{" "}
            <span className="text-teal-500">Payvel?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((item, index) => (
            <div
              key={index}
              className="fade-up group relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-teal-500 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-12 shadow-2xl fade-up">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "150+", label: "Team Members" },
              { number: "25+", label: "Countries" },
              { number: "10M+", label: "Transfers Made" },
              { number: "4.9★", label: "Employee Rating" }
            ].map((stat, i) => (
              <div key={i} className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="relative container mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Current <span className="text-teal-500">Openings</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="fade-up group bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {job.icon}
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-semibold rounded-full mb-2">
                      {job.department}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => openForm(job.title)}
                  className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}

          <div className="text-center mt-12 p-8 bg-gray-100 dark:bg-gray-900 rounded-2xl fade-up">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              Don't see a role that fits?
            </p>
            <a
              href="mailto:careers@payvel.com"
              className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-semibold text-lg hover:underline transition-all"
            >
              <Mail className="w-5 h-5" />
              Send us your resume
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Popup Apply Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl shadow-2xl relative transform animate-slideUp max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 z-10 p-2 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-300 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-4">
                    <Briefcase className="w-10 h-10 text-teal-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    Apply for <span className="text-teal-500">{selectedRole}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're excited to learn more about you!
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${formStep >= 1 ? 'bg-teal-500 text-white scale-110' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    1
                  </div>
                  <div className={`h-1 w-16 rounded-full transition-all duration-300 ${formStep >= 2 ? 'bg-teal-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${formStep >= 2 ? 'bg-teal-500 text-white scale-110' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    2
                  </div>
                </div>

                {formStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all"
                        placeholder="linkedin.com/in/yourprofile"
                      />
                    </div>
                    <button
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold hover:from-teal-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Next Step →
                    </button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Why do you want to join Payvel? *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900/50 transition-all resize-none"
                        placeholder="Tell us what excites you about this opportunity..."
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Upload Resume * (PDF, DOC, DOCX)
                      </label>
                      <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/10 transition-all cursor-pointer group">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400 group-hover:text-teal-500 transition-colors" />
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Max file size: 10MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setFormStep(1)}
                        className="flex-1 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.experience || !formData.message}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold hover:from-teal-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-12 text-center animate-fadeIn">
                <div className="inline-block p-6 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 animate-bounce">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Thank you for applying. We'll review your application and get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}