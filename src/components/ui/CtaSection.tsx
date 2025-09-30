"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import RequestDemoPopup from "@/components/ui/RequestDemoPopup";

export default function CtaSection() {
  const [showForm, setShowForm] = useState(false);


  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
          Ready to Revolutionize
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Your Onboarding?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
          Talk to an expert and discover how our unified platform can eliminate fraud, guarantee compliance, and accelerate your growth.
        </p>

        {/* Button */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(59,130,246,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block py-3 px-4 lg:px-8 rounded-lg text-sm lg:text-lg font-semibold text-white bg-gradient-to-b from-blue-500 to-purple-600   shadow-md transition"
        >
          Request Demo
        </motion.a>
      </motion.div>

      {/* ✅ Popup */}
      <RequestDemoPopup
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        portalId="243257004"
        formId="1bb503d4-cb35-48b7-889c-009bb3e694f4"
        region="na2"
      />
    </section>
  );
}
