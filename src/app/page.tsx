import About from "@/components/shared/page/sections/about-section";
import Cases from "@/components/shared/page/sections/cases-section";
import Cta from "@/components/shared/page/sections/cta-section";
import { FaqSection } from "@/components/shared/page/sections/faq-section";
import { Footer } from "@/components/shared/page/layout/footer";
import { Header } from "@/components/shared/page/layout/header";
import { HeroSection } from "@/components/shared/page/sections/hero-section";
import Products from "@/components/shared/page/sections/products-section";
import { ServicesSection } from "@/components/shared/page/sections/services-section";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      { /*
        <Products />
       */}
      <Cases />
      <About />
      <FaqSection />
      <Cta />
      <Footer />
    </>
  );
}
