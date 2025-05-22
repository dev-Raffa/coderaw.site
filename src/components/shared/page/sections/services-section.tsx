import { ServiceLists } from "@/components/lists/services/service-lists";
import { HeroPattern } from "../../hero-pattern";
import { IntegrationsSection } from "../integrations-section";

export const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="max-w-6xl flex flex-col items-center gap-2">
        <h2 className="section-title">
          Serviços sob-medida para transformar seu negócio
        </h2>
        <p className="section-subtitle">
          Nossa equipe de especialistas está pronta para ajudar você a alcançar
          seus objetivos com soluções que se adequam a necessidade do seu
          negócio.
        </p>
      </div>
      <div className="section-content justify-center">
        <div className="absolute inset-0 -z-10 justify-self-center self-center">
          <HeroPattern />
        </div>
        <ServiceLists />
        <IntegrationsSection />
      </div>
    </section>
  );
};
