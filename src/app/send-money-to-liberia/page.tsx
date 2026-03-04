
import AudNgnSlider from "@/components/ui/AudNgnSlider";
import SendMoneyHero from "@/components/ui/benin/SendMoneyHero";
import BudgetHome from "@/components/ui/BudgetHome";
import FAQComponent from "@/components/ui/FAQComponent";
import HowItWorks from "@/components/ui/benin/HowItWorks";
import SendApp from "@/components/ui/benin/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TrustedCustomers from "@/components/ui/TrustedCustomers";
import DirectLineHome from "@/components/ui/benin/DirectLineHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Money To Liberia | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless money transfers with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/send-money-to-liberia" },
};

export default function HomePage() {
  return (
    <>
     
      <SendMoneyHero
      fromCountry="Australia"
      toCountry="Liberia"
      toCurrency="LRD"
      heroImage="/img/send-money/gabon/image.webp" // Your Benin hero image
    />
    <DirectLineHome />
      <HowItWorks /> 
      <BudgetHome />
      <SendApp backgroundImage="/img/send-money/gabon/app.webp" />
      <AudNgnSlider />
      <FAQComponent country="Liberia"/>
    
    </>
  );
}
