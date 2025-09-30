"use client";
import { useEffect } from "react";

export default function Newsletter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: "na2",
          portalId: "40tub0",
          formId: "2eALLS1jBSzuJWpOumQJbxQ",
          target: "#hubspotForm",
        });
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50/60 to-indigo-50/60 dark:from-[#3477EF]/10 dark:to-blue-500/10 border border-blue-200/30 dark:border-[#3477EF]/20 rounded-2xl p-8 mb-12">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest updates about our products and industry insights.
        </p>

        {/* HubSpot Form Embed */}
        <div id="hubspotForm" className="max-w-md mx-auto"></div>
      </div>
    </div>
  );
}
