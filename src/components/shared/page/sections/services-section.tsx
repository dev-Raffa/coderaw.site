import { IntegrationsSection } from "../integrations-section";
import { ServiceList } from "@/components/lists/services/service-lists";

export const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="section-texts">
        <h2 className="section-title">
          Serviços sob-medida para transformar seu negócio
        </h2>
        <p className="section-subtitle">
          Nossa equipe de especialistas está pronta para ajudar você a alcançar
          seus objetivos com soluções que se adequam a necessidade do seu
          negócio.
        </p>
      </div>
      <div className="section-content">
        <ServiceList />
        <IntegrationsSection />
      </div>
    </section>
  );
};
