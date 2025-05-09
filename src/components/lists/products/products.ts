import placeholder from "../../../../public/placeholder.svg"
import spendImage from "../../../app/assets/images/spend-dashboard.png"
import condoTecImage from "../../../app/assets/images/condotec-dashboard.png"
import beeConversaImage from "../../../app/assets/images/beeconversa.png"

export const products = [
  {
    name: "BeeConversa",
    description:
      "SaaS especializado para melhorar a eficiência e qualidade de atendimentos em diversos setores, aumentando a satisfação do cliente.",
    image: beeConversaImage,
    features: [
      "Atendimento multicanal",
      "Automação de respostas",
      "Análise de sentimento",
      "Integração com CRM",
    ],
  },
  {
    name: "SpendManagement",
    description:
      "Soluções avançadas para finanças pessoais e empresariais, ajudando a otimizar gastos e melhorar a gestão financeira.",
    image: spendImage,
    features: [
      "Controle de despesas",
      "Relatórios financeiros",
      "Previsão orçamentária",
      "Integração bancária",
    ],
  },
  {
    name: "Gestão Condominial",
    description:
      "Ferramentas inovadoras para simplificar e aprimorar a administração de condomínios, melhorando a comunicação e eficiência.",
    image: condoTecImage,
    features: [
      "Portal do condômino",
      "Gestão financeira",
      "Reserva de áreas comuns",
      "Comunicação integrada",
    ],
  },
];