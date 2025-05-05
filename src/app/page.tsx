import { AnimatedBeamSection } from "@/components/shared/page/animated-beam-section";
import { BoutiqueSection } from "@/components/shared/page/boutique-section";
import { CompanyTabsSection } from "@/components/shared/page/company-tabs-section";
import { FaqSection } from "@/components/shared/page/faq-section";
import { FlickeringServicesSection } from "@/components/shared/page/flickering-services.section";
import { Footer } from "@/components/shared/page/footer";
import { Header } from "@/components/shared/page/header";
import { HeroSection } from "@/components/shared/page/hero-section";
import { ServicesSection } from "@/components/shared/page/services-section";
import { ToolsSection } from "@/components/shared/page/tools-section";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      {
      //<IntegrationsSection />
      //<ToolsSection />
      }

      <BoutiqueSection />
      <AnimatedBeamSection />
      <FlickeringServicesSection />
      <CompanyTabsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
