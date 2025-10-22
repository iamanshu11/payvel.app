import HomeHero from "@/components/ui/HomeHero";
import ScrollingMarquee from "@/components/ui/ScrollingMarquee";
import CtaSection from "@/components/ui/CtaSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import GlobalReachSection from "@/components/ui/GlobalReachSection";
import ComparisonSection from "@/components/ui/ComparisonSection";
import NoFeesSection from "@/components/ui/NoFeesSection";
import ChipperCashHero from "@/components/ui/ChipperCashHero";
import DirectLineHome from "@/components/ui/benin/DirectLineHome";
import TrustedEverywhere from "@/components/ui/TrustedEverywhere";
import AfriexHero from "@/components/ui/AfriexHero";
import BudgetHome from "@/components/ui/BudgetHome";
import TravelHero from "@/components/ui/travel/TravelHero";
import ScrollStep from "@/components/ui/travel/ScrollytellingSection";
import ScrollytellingSection from "@/components/ui/travel/ScrollytellingSection";
import TestimonialsSlider from "@/components/ui/travel/TestimonialsSlider";

export default function TravelPage() {
  return (
    <>
      <TravelHero />
      <ScrollytellingSection />
      <DirectLineHome />
      <TestimonialsSlider />
      <AfriexHero />
    </>
  );
}
