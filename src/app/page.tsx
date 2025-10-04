import HomeHero from "@/components/ui/HomeHero";
import ScrollingMarquee from "@/components/ui/ScrollingMarquee";
import CtaSection from "@/components/ui/CtaSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import GlobalReachSection from "@/components/ui/GlobalReachSection";
import ComparisonSection from "@/components/ui/ComparisonSection";
import NoFeesSection from "@/components/ui/NoFeesSection";
import ChipperCashHero from "@/components/ui/ChipperCashHero";
import DirectLineHome from "@/components/ui/DirectLineHome";
import TrustedEverywhere from "@/components/ui/TrustedEverywhere";
import AfriexHero from "@/components/ui/AfriexHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <NoFeesSection />
      <ScrollingMarquee />
      <DirectLineHome />
      <AfriexHero />
      <TrustedEverywhere />
      <ChipperCashHero />
      {/* <ComparisonSection />
      <GlobalReachSection />
      <TestimonialsSection /> */}
      {/* <CtaSection /> */}
    
    </>
  );
}
