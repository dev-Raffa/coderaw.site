"use client";

import { serviceList } from "@/components/lists/services/services-list";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FormEvent } from "react";

export default function Cta() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="section" id="contact">
      <div className="section-content relative justify-center">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <article className="flex flex-col items-center gap-2">
          <h2 className="section-title">
            Pronto para transformar o seu negócio?
          </h2>
          <p className="section-subtitle">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
            impulsionar sua empresa com soluções tecnológicas inovadoras.
          </p>

          <section className="bg-coderaw-bg pt-[24px] min-w-[300px] w-[90%] text-coderaw-text ">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  Nome
                  <Input
                    placeholder="Seu nome"
                    required
                    type="text"
                    minLength={3}
                  />
                  <p>insira no mínimo 3 caractéres</p>
                </label>
                <label>
                  Email
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    required
                    minLength={5}
                  />
                  <p>o email deve seguir o formato email@domain.com</p>
                </label>
              </div>
              <div>
                <label>
                  Empresa
                  <Input id="company" placeholder="Nome da sua empresa" />
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceList.map((service) => {
                  return (
                    service.label.length > 0 &&
                    <label
                      className="checkbox-service"
                      key={`form-checkbox-${service.title}`}
                    >
                      {service.label}
                      <input type="checkbox" name={service.label} />
                    </label>
                  );
                })}
              </div>
              <div>
                <label>
                  Mensagem
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    required
                    minLength={10}
                    rows={8}
                    className="text-area"
                  />
                  <p>a mensagem deve conter pelo menos 10 caractéres</p>
                </label>
              </div>
              <div className="flex items-center justify-end">
                <Button type="submit" className="font-title form-button-submit">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </section>
        </article>
      </div>
    </section>
  );
}
