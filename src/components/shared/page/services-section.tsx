"use client"

import { HeroPattern } from "../hero-pattern";

export const ServicesSection = () => {
    return (
      <section
        data-aos="fade-right"
        className="relative overflow-hidden min-h-screen p-t"
      >
        <div className="absolute inset-0 -z-10">
            <HeroPattern />
        </div>
      </section>
    );
}