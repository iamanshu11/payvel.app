import HomeHero from "@/components/ui/students/HomeHero";
import DirectLineHome from "@/components/ui/benin/DirectLineHome";
import AfriexHero from "@/components/ui/students/AfriexHero";
import BudgetHome from "@/components/ui/students/BudgetHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Portal | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless student portal with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/student" },
};


export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BudgetHome />
      <DirectLineHome />
      <AfriexHero />

    </>
  );
}
