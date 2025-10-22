import AudNgnSlider from "@/components/ui/AudNgnSlider";
import SendMoneyHero from "@/components/ui/benin/SendMoneyHero";
import BudgetHome from "@/components/ui/BudgetHome";
import FAQComponent from "@/components/ui/FAQComponent";
import HowItWorks from "@/components/ui/benin/HowItWorks";
import SendApp from "@/components/ui/benin/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TrustedCustomers from "@/components/ui/TrustedCustomers";
import type { Metadata } from "next";
import DirectLineHome from "@/components/ui/benin/DirectLineHome";

export const metadata: Metadata = {
  title: "Send Money To Uganda | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless money transfers with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/send-money" },
};

export default function HomePage() {
  return (
    <>
      <SendMoneyHero
        fromCountry="Australia"
        toCountry="Uganda"
        toCurrency="UGX"
        heroImage="/img/send-money/uganda/image.webp"
      />
      <DirectLineHome />
      <HowItWorks />
      <BudgetHome />
      <SendApp backgroundImage="/img/send-money/uganda/app.webp" />
      <AudNgnSlider />
      <FAQComponent country="Uganda"/>
    </>
  );
}