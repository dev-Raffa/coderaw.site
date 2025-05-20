import { serviceList } from "@/components/lists/services/services-list";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section className="section" id="contact" data-aos="fade-up">
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
        <article className="flex flex-col items-center">
          <h2 className="section-title">
            Pronto para transformar o seu negócio?
          </h2>
          <p className="section-subtitle">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
            impulsionar sua empresa com soluções tecnológicas inovadoras.
          </p>

          <section className="bg-coderaw-bg pt-[24px] min-w-[300px] w-[90%] text-coderaw-text ">
            <form className="w-full flex flex-col gap-8 bg-white rounded-xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nome
                    <Input placeholder="Seu nome" />
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Empresa
                  <Input id="company" placeholder="Nome da sua empresa" />
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceList.map((service)=>{
                  return(
                    <label className="checkbox-service" key={`form-checkbox-${service.title}`}>
                      {service.label}
                      <input type="checkbox" name={service.label} />
                    </label>
                  )
                })}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  rows={8}
                  className="text-area"
                />
              </div>
              <div className="flex items-center justify-end">
                <Button className="font-title">Enviar Mensagem</Button>
              </div>
            </form>
          </section>
        </article>
      </div>
    </section>
  );
}
