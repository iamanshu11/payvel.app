"use client";

import { useEffect } from "react";

interface RequestDemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  portalId: string;
  formId: string;
  region?: string;
}

export default function RequestDemoPopup({
  isOpen,
  onClose,
  portalId,
  formId,
  region = "na2",
}: RequestDemoPopupProps) {
  useEffect(() => {
    if (!isOpen) return;

    const loadForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#hubspotForm-${formId}`,
        });
      }
    };

    if (!(window as any).hbspt) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, [isOpen, portalId, formId, region]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#4a55658a] bg-opacity-50">
      <div className="bg-white  p-6 rounded-xl w-full max-w-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Request a Demo
        </h2>

        {/* HubSpot Form */}
        <div id={`hubspotForm-${formId}`} />
      </div>
    </div>
  );
}
