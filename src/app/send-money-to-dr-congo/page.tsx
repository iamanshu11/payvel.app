
import AudNgnSlider from "@/components/ui/AudNgnSlider";
import SendMoneyHero from "@/components/ui/benin/SendMoneyHero";
import BudgetHome from "@/components/ui/BudgetHome";
import FAQComponent from "@/components/ui/FAQComponent";
import HowItWorks from "@/components/ui/HowItWorks";
import SendApp from "@/components/ui/benin/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TrustedCustomers from "@/components/ui/TrustedCustomers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Money To Benin | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless money transfers with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/send-money" },
};

export default function HomePage() {
  return (
    <>
     
      <SendMoneyHero
  fromCountry="Australia"
  toCountry="DR Congo"  
  toCurrency="CDF"
  heroImage="/img/send-money/congo/image.webp"
/>
      <HowItWorks />
      <BudgetHome />
      <SendApp backgroundImage="/img/send-money/congo/app.webp" />
      <AudNgnSlider />
      <FAQComponent />
    
    </>
  );
}
