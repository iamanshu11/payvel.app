"use client";

import { useEffect } from "react";

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

export default function HubspotForm({
  portalId,
  formId,
  region = "na2",
}: HubspotFormProps) {
  useEffect(() => {
    const targetId = `hubspotForm-${formId}`;
    const targetEl = document.getElementById(targetId);

    // 🧹 Clear previous form if already rendered
    if (targetEl) {
      targetEl.innerHTML = "";
    }

    const loadForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`,
        });
      }
    };

    // Load HubSpot script only once
    if (!(window as any).hbspt) {
      const script = document.createElement("script");
      script.src = `https://js.hsforms.net/forms/embed/v2.js`;
      script.async = true;
      script.defer = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, [portalId, formId, region]);

  return <div id={`hubspotForm-${formId}`} />;
}
