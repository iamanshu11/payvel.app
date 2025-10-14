
import type { Metadata } from "next";
import CareersClient from "@/components/ui/CareersClient";

export const metadata: Metadata = {
  title: "Careers - Build the Future of Finance",
  description:
    "Join Payvel and help build seamless, secure, and accessible money transfer solutions for the world. Explore open positions and grow your career with us.",
  openGraph: {
    title: "Careers at Payvel | Build the Future of Finance",
    description:
      "Join Payvel and help build seamless, secure, and accessible money transfer solutions for the world. Explore open positions and grow your career with us.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}