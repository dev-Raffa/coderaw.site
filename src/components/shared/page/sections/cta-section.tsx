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
        <article className="grid gap-10 lg:grid-cols-2 items-center">
          <section>
            <h2 className="text-3xl font-bold font-title tracking-tight sm:text-4xl md:text-5xl mb-4">
              Pronto para transformar o seu negócio?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              a impulsionar sua empresa com soluções tecnológicas inovadoras.
            </p>
          </section>

          <section className="bg-coderaw-bg text-coderaw-text rounded-xl p-6 shadow-lg">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="border-gray-700 text-coderaw-text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="border-gray-700 text-coderaw-text"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1"
                >
                  Empresa
                </label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  className="border-gray-700 text-coderaw-text"
                />
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
                  rows={4}
                  className="border-gray-700 text-coderaw-text"
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
