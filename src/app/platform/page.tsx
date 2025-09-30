import CtaSection from "@/components/ui/CtaSection";
import PlatformConditionalLogic from "@/components/ui/PlatformConditionalLogic";
import PlatformHero from "@/components/ui/PlatformHero";
import PlatformTemplateSelector from "@/components/ui/PlatformTemplateSelector";
import PlatformVerificationFlow from "@/components/ui/PlatformVerificationFlow";
// import WorkflowBuilderPage from "@/components/ui/WorkflowBuilderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truoco Platform | Intelligent KYC & No-Code Fraud Prevention",
  description:
    "Discover the Truoco Platform — a no-code solution for Intelligent KYC, fraud prevention, and seamless customer onboarding. Reduce costs and onboard more customers with ease.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      {/* <WorkflowBuilderPage /> */}
      <PlatformVerificationFlow />
      <PlatformTemplateSelector />
      <PlatformConditionalLogic />
      <CtaSection />

    </>
  );
}