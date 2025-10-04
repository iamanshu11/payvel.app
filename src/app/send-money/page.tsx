import NoFeesSection from "@/components/ui/NoFeesSection";
import SendApp from "@/components/ui/SendApp";
import SendMoney from "@/components/ui/SendMoney";
import TransferGuarantee from "@/components/ui/TransferGuarantee";
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
      <TransferGuarantee />
      <SendApp />
      <TrustedCustomers />
    
    </>
  );
}
