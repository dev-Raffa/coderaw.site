"use client";

import { serviceList } from "@/components/lists/services/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target)
    
    await fetch("/api/send-lead-email", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: (e.target as HTMLFormElement).email.value,
        company: (e.target as HTMLFormElement).company.value,
        message: (e.target as HTMLFormElement).message.value,
        services: Array.from(
          (e.target as HTMLFormElement).querySelectorAll(
            "input[type='checkbox']:checked"
          )
        ).map((checkbox) => checkbox.getAttribute("name")),
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          await fetch("/api/send-reply-email", {method: "POST"}).then(()=>{
            toast.success("SUCESSO! RECEMOS O SEU CONTATO", {
              description:
                "Em breve um de nossos consultores entrará em contato com você.",
            });
          });
        }
        setName("");
        //@ts-expect-error TS does not know reset method 
        e.target.reset();
      })
      .catch((e) => {
        toast.error("ERRO AO PROCESSAR REQUISIÇÃO", {
          description: "Verifique os dados digitados e tente novamente.",
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number(e.target.value)) {
      setName(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          Nome
          <Input
            placeholder="Seu nome"
            required
            value={name}
            onChange={(e) => handleChange(e)}
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
            id="message"
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
  );
};
