import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Cta() {
  return (
    <section className="py-20 bg-blue-600 text-coderaw-text">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              a impulsionar sua empresa com soluções tecnológicas inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-coderaw-bg text-coderaw-text hover:bg-gray-800">
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                className="text-coderaw-text border-coderaw-text hover:bg-blue-700"
              >
                Ver Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="bg-coderaw-bg text-coderaw-text rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
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
                    className="bg-gray-800 border-gray-700 text-coderaw-text"
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
                    className="bg-gray-800 border-gray-700 text-coderaw-text"
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
                  className="bg-gray-800 border-gray-700 text-coderaw-text"
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
                  className="bg-gray-800 border-gray-700 text-coderaw-text"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
