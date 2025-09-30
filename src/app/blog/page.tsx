import type { Metadata } from "next";
import BlogList from "@/components/ui/BlogList"; 

export const metadata: Metadata = {
  title: "Truoco Blog | Insights on KYC, Fraud Prevention & Digital Onboarding",
  description:
    "Explore the Truoco Blog for expert insights on Intelligent KYC, fraud prevention, compliance, liveness detection, and seamless digital onboarding.",
  alternates: {
    canonical: "https://www.truoco.com/blog", 
  },
  openGraph: {
    title: "Truoco Blog | Insights on KYC, Fraud Prevention & Digital Onboarding",
    description:
      "Stay informed with Truoco’s latest blog posts covering KYC, fraud detection, compliance, and onboarding innovations.",
    url: "https://www.truoco.com/blog",
    siteName: "Truoco",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truoco Blog | Insights on KYC, Fraud Prevention & Digital Onboarding",
    description:
      "Expert insights on Intelligent KYC, fraud prevention, compliance, and seamless onboarding.",
  },
};

export default function BlogPage() {
  return <BlogList />;
}
