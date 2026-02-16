import { HeroSection } from "@/components/sections/HeroSection";
import PartnerSlider from "@/components/sliders/PartnerSlider";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import SectionChoix from "@/components/sections/SectionChoix";
import HistorySection from "@/components/sections/HistorySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import EnterpriseOffersSection from "@/components/sections/EnterpriseOffersSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <FeaturesSection/>
      <SectionChoix/>
      <EnterpriseOffersSection/>
      <TestimonialsSlider/>
      <HistorySection/>
      <PartnerSlider/>
    </div>
  );
}
