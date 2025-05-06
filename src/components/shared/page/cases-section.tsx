import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Cases() {
  const cases = [
    {
      client: "TechCorp",
      industry: "Tecnologia",
      challenge: "Modernização de sistema legado com mais de 10 anos",
      solution: "Migração para arquitetura de microserviços na nuvem",
      result:
        "Redução de 40% nos custos operacionais e aumento de 60% na velocidade de processamento",
      logo: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      client: "FinanceGroup",
      industry: "Finanças",
      challenge: "Integração de múltiplos sistemas após fusão empresarial",
      solution: "Desenvolvimento de middleware personalizado com APIs RESTful",
      result:
        "Unificação de dados em tempo real e redução de 70% no tempo de geração de relatórios",
      logo: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      client: "HealthPlus",
      industry: "Saúde",
      challenge:
        "Necessidade de sistema seguro para gestão de dados de pacientes",
      solution:
        "Plataforma em nuvem com criptografia avançada e conformidade com LGPD",
      result:
        "100% de conformidade regulatória e melhoria de 50% na experiência do usuário",
      logo: "/placeholder.svg?height=80&width=80",
      image: "/placeholder.svg?height=300&width=500",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CTO, TechCorp",
      quote:
        "A Coderaw transformou completamente nossa infraestrutura tecnológica. O resultado superou todas as nossas expectativas.",
      rating: 5,
    },
    {
      name: "Ana Ferreira",
      position: "Diretora de Inovação, FinanceGroup",
      quote:
        "A expertise técnica e o comprometimento da equipe Coderaw foram fundamentais para o sucesso do nosso projeto.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      position: "Gerente de TI, HealthPlus",
      quote:
        "Profissionais extremamente competentes e soluções que realmente atendem às necessidades do negócio.",
      rating: 5,
    },
  ];

  return (
    <section id="cases" className="py-20 bg-coderaw-bg">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-coderaw-text">
            Cases de Sucesso
          </h2>
          <p className="mt-4 text-gray-300">
            Conheça alguns dos projetos que desenvolvemos e os resultados que
            alcançamos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.client}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-coderaw-text">
                      {item.client}
                    </h3>
                    <p className="text-sm text-gray-300">{item.industry}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">
                      Desafio:
                    </h4>
                    <p className="text-coderaw-text">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">
                      Solução:
                    </h4>
                    <p className="text-coderaw-text">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300">
                      Resultado:
                    </h4>
                    <p className="text-coderaw-text">{item.result}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full text-coderaw-text border-gray-600"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
