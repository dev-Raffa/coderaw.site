import placeholderImage from "../../../../public/placeholder.svg"


type TCase = {
  name: string;
  description: string;
  image: string;
  testemonial: string;
};

export const cases: TCase[] = [
  {
    name: "SmartConsig",
    description:
      "Redução de 40% nos custos operacionais e aumento de 60% na velocidade de processamento",
    image: placeholderImage,
    testemonial: ""
  },
  {
    name: "BeeConversa",
    description: "Desenvolvimento de middleware personalizado com APIs RESTful",
    image: placeholderImage,
    testemonial: ""
  },
  {
    name: "Spend Management",
    description:
      "Plataforma em nuvem com criptografia avançada e conformidade com LGPD",
    image: placeholderImage,
    testemonial: ""
  },
  {
    name: "CondoTec",
    description:
      "Plataforma em nuvem com criptografia avançada e conformidade com LGPD",
    image: placeholderImage,
    testemonial: ""
  },
];
