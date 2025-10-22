
import AudNgnSlider from "@/components/ui/AudNgnSlider";
import BudgetHome from "@/components/ui/BudgetHome";
import FAQComponent from "@/components/ui/FAQComponent";
import HowItWorks from "@/components/ui/benin/HowItWorks";
import SendApp from "@/components/ui/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TrustedCustomers from "@/components/ui/TrustedCustomers";
import DirectLineHome from "@/components/ui/benin/DirectLineHome";
import SendMoneyHero from "@/components/ui/benin/SendMoneyHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Money To Nigeria | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless money transfers with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/send-money" },
};

export default function HomePage() {
  return (
    <>
     
      <SendMoneyHero
  fromCountry="Australia"
  toCountry="Nigeria"  
  toCurrency="NGN"
  heroImage="/img/ngn-hero.webp"
/>
<DirectLineHome />
      <HowItWorks />
      <BudgetHome />
      <SendApp />
      <AudNgnSlider />
      <FAQComponent  country="Nigeria"/>
    
    </>
  );
}
