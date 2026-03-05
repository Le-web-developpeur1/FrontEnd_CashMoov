import { HeroSection } from "@/components/sections/HeroSection";
import PartnerSlider from "@/components/sliders/PartnerSlider";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import SectionChoix from "@/components/sections/SectionChoix";
import HistorySection from "@/components/sections/HistorySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import EnterpriseOffersSection from "@/components/sections/EnterpriseOffersSection";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil"
        description="Cashmoov - Leader du transfert d'argent en Guinée. Envoyer et revevez de l'argent rapidement et en toute sécurité via mobile money."
        keywords="cashmoov, transfert argent guinée, mobile money, paiement mobile, envoi argent"
        url="https://cashmoov.net"
      />
      <div className="relative min-h-screen">
        <HeroSection />
        <FeaturesSection/>
        <SectionChoix/>
        <EnterpriseOffersSection/>
        <TestimonialsSlider/>
        <HistorySection/>
        <PartnerSlider/>
      </div>
    </>
  );
}
