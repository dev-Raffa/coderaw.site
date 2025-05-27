"use client";

import { serviceList } from "@/components/lists/services/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { number } from "zod";

export default function Cta() {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if(!Number(e.target.value)) {
      setName(e.target.value);
    }
  };
  return (
    <section className="section" id="contact">
      <div className="section-texts">
        <h2 className="section-title">
          Pronto para transformar o seu negócio?
        </h2>
        <p className="section-subtitle">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
          impulsionar sua empresa com soluções tecnológicas inovadoras.
        </p>
      </div>
      <div className="section-content relative justify-center">
        <article>
          <section className="bg-coderaw-bg min-w-[300px] w-[100%] text-coderaw-text ">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  Nome
                  <Input
                    placeholder="Seu nome"
                    required
                    value={name}
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    pattern="[a-zA-ZáàãâéèêíìîóòõôúùûçÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇ\s]+"
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
                    service.label.length > 0 && (
                      <label
                        className="checkbox-service"
                        key={`form-checkbox-${service.title}`}
                      >
                        {service.label}
                        <input type="checkbox" name={service.label} />
                      </label>
                    )
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
