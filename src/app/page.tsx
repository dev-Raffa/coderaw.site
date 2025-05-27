import About from "@/components/shared/page/sections/about-section";
import { CasesSection } from "@/components/shared/page/sections/cases-section";
import Cta from "@/components/shared/page/sections/contact-section";
import { FaqSection } from "@/components/shared/page/sections/faq-section";
import { HeroSection } from "@/components/shared/page/sections/hero-section";
import { ServicesSection } from "@/components/shared/page/sections/services-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <About />
      <FaqSection />
      <Cta />
    </>
  );
}
