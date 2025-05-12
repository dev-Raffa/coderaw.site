import placeholderImage from "../../../../public/placeholder.svg"

type TService = {
  label: string;
  icon: React.ElementType;
};

type TCase = {
  client: string;
  industry: string;
  description: string;
  image: string;
  services: TService[];
};

export const cases: TCase[] = [
  {
    client: "SmartConsig",
    industry: "Tecnologia",
    description:
      "Redução de 40% nos custos operacionais e aumento de 60% na velocidade de processamento",
    image: placeholderImage,
    services: [],
  },
  {
    client: "FinanceGroup",
    industry: "Finanças",
    description: "Desenvolvimento de middleware personalizado com APIs RESTful",
    image: placeholderImage,
    services: [],
  },
  {
    client: "HealthPlus",
    industry: "Saúde",
    description:
      "Plataforma em nuvem com criptografia avançada e conformidade com LGPD",
    image: placeholderImage,
    services: [],
  },
];
