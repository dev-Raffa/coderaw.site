import placeholderImage from "../../../../public/placeholder.svg"


type TCase = {
  name: string;
  desafio?: string;
  solucao?: string;
  resultado?: string;
  description?: string;
  image: string;
  testemonial: string;
};

export const cases: TCase[] = [
  {
    name: "SmartConsig",
    desafio:
      "A SmartConsig, especialista em soluções de crédito consignado, que há 5 anos atua com segurança e qualidade, nos procurou buscando automatizar a verificação de margem de crédito de seus clientes — um processo antes manual, descentralizado e com baixa integração entre canais.",
    solucao:
      "A equipe da Coderaw desenvolveu uma plataforma própria, sob medida, que permite aos clientes da SmartConsig simular a margem de crédito e iniciar o atendimento direto via WhatsApp. Criamos um sistema inteligente de roteamento, que define automaticamente qual operador deve atender cada cliente com base em carga de atendimentos.",
    resultado:
      "Hoje, toda a operação de vendas da SmartConsig é gerenciada pela plataforma desenvolvida pela coderaw: da origem do lead até o fechamento do contrato. Métricas de atendimento, tabulação de contatos e integração com campanhas de marketing foram centralizadas em uma única solução — substituindo diversas ferramentas externas e otimizando todo o processo.",
    image: placeholderImage,
    testemonial: "",
  },
  {
    name: "BeeConversa",
    desafio:
      "O BeeConversa é a solução da Coderaw que potencializa o uso da API oficial do WhatsApp para empresas que desejam escalar sua comunicação com inteligência e eficiência.",
    solucao:
      "Com o BeeConversa, é possível realizar envio de mensagens em massa e acompanhar métricas detalhadas das campanhas: estados com maior taxa de retorno, regiões com menor engajamento, horários mais efetivos — tudo para ajudar o cliente a tomar decisões baseadas em dados.",
    resultado: "",
    image: placeholderImage,
    testemonial: "",
  },
  {
    name: "Spend Management",
    desafio: "",
    solucao: "",
    resultado: "",
    image: placeholderImage,
    testemonial: "",
  },
  {
    name: "CondoTec",
    desafio: "",
    solucao: "",
    resultado: "",
    image: placeholderImage,
    testemonial: "",
  },
];
