
import AudNgnSlider from "@/components/ui/AudNgnSlider";
import BudgetHome from "@/components/ui/BudgetHome";
import FAQComponent from "@/components/ui/FAQComponent";
import HowItWorks from "@/components/ui/HowItWorks";
import SendApp from "@/components/ui/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TrustedCustomers from "@/components/ui/TrustedCustomers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Money | Payvel - Fast, Secure, No Fees",
  description:
    "Experience seamless money transfers with Payvel. Fast, secure, and no hidden fees.",
  alternates: { canonical: "/send-money" },
};

export default function HomePage() {
  return (
    <>
     
      <SendMoney />
      <HowItWorks />
      <BudgetHome />
      <SendApp />
      <AudNgnSlider />
      {/* <TrustedCustomers /> */}
      <FAQComponent />
    
    </>
  );
}
