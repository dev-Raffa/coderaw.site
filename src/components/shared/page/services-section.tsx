"use client"

import { ServiceLists } from "@/components/lists/services/service-lists";
import { HeroPattern } from "../hero-pattern";
import { IntegrationsSection } from "./integrations-section";

export const ServicesSection = () => {
    return (
      <section data-aos="fade-right" className="section">
        <h2 className="section-title">
          Serviços sob-medida para transformar seu negócio
        </h2>
        <p className="section-subtitle">
          Nossa equipe de especialistas está pronta para ajudar você a alcançar seus objetivos com soluções que se adequam a necessidade do seu negócio.
        </p>
        <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center gap-16 px-4 md:px-10 lg:px-20">
          <div className="absolute inset-0 -z-10 justify-self-center self-center">
            <HeroPattern />
          </div>
          <ServiceLists />
          <IntegrationsSection />
        </div>
      </section>
    );
}