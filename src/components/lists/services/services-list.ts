type service = {
  title: string;
  description: string[];
};

export const serviceList: service[] = [
  {
    title: "Arquitetura e Design de Sistemas",
    description: [
      "Definição de padrões arquiteturais (monolito, microsserviços, event‑driven etc.)",
      "Modelagem de dados, entidades e fluxos (ERD, UML)",
      "Prototipação rápida e validação de soluções (PoC, wireframes)"
    ]
  },
  {
    title: "Desenvolvimento Personalizado",
    description: [
      "Criação de aplicações web e mobile sob medida",
      "APIs RESTful/GraphQL com autenticação e autorização",
      "Integração com serviços externos, banco de dados e mensageria"
    ]
  },
  {
    title: "Migração e Modernização de Sistemas Legado",
    description: [
      "Análise técnica de sistemas existentes e identificação de riscos",
      "Refatoração de código e modernização de arquitetura",
      "Migração para ambientes em nuvem ou containers"
    ]
  },
  {
    title: "Suporte e Manutenção",
    description: [
      "Correção de bugs e aplicação de melhorias contínuas",
      "Atualizações técnicas e compatibilidade com novas versões",
      "Monitoramento e suporte com SLA definido"
    ]
  },
  {
    title: "Consultoria em Nuvem e Infraestrutura",
    description: [
      "Arquitetura e deploy de sistemas em ambientes AWS, Azure ou GCP",
      "Implantação de práticas DevOps e automação de infraestrutura (IaC)",
      "Governança de custos, segurança e escalabilidade na nuvem"
    ]
  },
  {
    title: "Serviços em Inteligência Artificial",
    description: [
      "Desenvolvimento de soluções com IA generativa e NLP",
      "Implantação de modelos preditivos e classificadores",
      "Criação de assistentes virtuais, recomendadores e automações com IA"
    ]
  }
];



