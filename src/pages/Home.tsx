import { HeroSection } from "@/components/sections/HeroSection";
import PartnerSlider from "@/components/sliders/PartnerSlider";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import SectionChoix from "@/components/sections/SectionChoix";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <ServicesSection/>
      <SectionChoix/>
      <TestimonialsSlider/>
      <PartnerSlider/>
    </div>
  );
}
