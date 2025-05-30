import smartImage from "../../../app/assets/images/system-smartconsig.jpg";
import beeImage from "../../../app/assets/images/beeconversa.jpeg";
import spendImage from "../../../app/assets/images/spend-dashboard.jpeg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TCase = {
  name: string;
  desafio?: string;
  solucao?: string;
  resultado?: string;
  description?: string;
  image: StaticImport;
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
    image: smartImage,
    testemonial: "",
  },
  {
    name: "BeeConversa",
    desafio: `Empresas buscam ampliar sua presença no WhatsApp, mas enfrentam barreiras para escalar. Campanhas em massa têm pouca personalização e impacto limitado. O atendimento automatizado muitas vezes soa engessado e impessoal. Além disso, faltam dados que apoiem decisões estratégicas com precisão.`,
    solucao: 
      `BeeConversa evolui o mercado com uma comunicação mais inteligente e flexível.
      Integra-se à API oficial do WhatsApp com foco em escala, dados e personalização.
      Oferece campanhas orientadas por dados, IA avançada (LLMs + RAG) e atendimento humano.
      A escolha entre IA e operadores reais é ajustável conforme a estratégia da empresa.`,
    resultado:
      `Empresas se comunicam melhor, com mais retorno e menos esforço operacional.
      A IA atende com precisão, e o humano entra onde o contexto exige empatia.
      Milhares de conversas ganham escala sem perder personalização e controle.
      O resultado: mais engajamento, conversão e inteligência em cada interação.`,
    image: beeImage,
    testemonial: "",
  },
  {
    name: "SpendManagement",
    desafio:
      "Auxiliar empresas e pessoas a controlar seus gastos com precisão, enfrentando a falta de visibilidade financeira, dificuldade em manter o orçamento sob controle e a ausência de informações claras para tomar decisões.",
    solucao:
      "O SpendManagement, da Coderaw, centraliza o controle financeiro em uma plataforma simples e visual. Com ele, é possível registrar despesas, categorizá-las, definir metas e acompanhar múltiplas carteiras com gráficos e insights em tempo real.",
    resultado:
      "Gestão financeira mais eficiente, redução de desperdícios e decisões orientadas por dados. Usuários ganham clareza sobre seus gastos, otimizam recursos e mantêm o foco em suas metas pessoais ou corporativas.",
    image: spendImage,
    testemonial: "",
  },
];
