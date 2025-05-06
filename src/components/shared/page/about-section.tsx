import Image from "next/image";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

export default function About() {
  const reasons = [
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Expertise Técnica",
      description:
        "Nossa equipe é formada por profissionais altamente qualificados e com vasta experiência em diversas tecnologias.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Abordagem Colaborativa",
      description:
        "Trabalhamos em estreita colaboração com nossos clientes, garantindo transparência e alinhamento em todas as etapas.",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Qualidade Garantida",
      description:
        "Seguimos rigorosos padrões de qualidade e melhores práticas de desenvolvimento para entregar soluções robustas.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Compromisso com Prazos",
      description:
        "Respeitamos os prazos estabelecidos e mantemos uma comunicação clara sobre o progresso dos projetos.",
    },
  ];

  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "100+", label: "Projetos entregues" },
    { value: "50+", label: "Clientes satisfeitos" },
    { value: "30+", label: "Especialistas" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-coderaw-text">
              Por que escolher a Coderaw?
            </h2>
            <p className="text-gray-300 mb-8">
              Somos uma empresa de consultoria em tecnologia comprometida em
              fornecer soluções inovadoras e de alta qualidade para impulsionar
              o sucesso dos nossos clientes.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{reason.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1 text-coderaw-text">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Equipe Coderaw"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
