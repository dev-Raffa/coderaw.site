import { StaticImageData } from "next/image";
import developmentImage from "../../../../public/images/service-cards/software-development.png"
import cloudImage from "../../../../public/images/service-cards/cloud.png";
import solutionsImage from "../../../../public/images/service-cards/solutions-architecture.png"
import aiImage from "../../../../public/images/service-cards/AI.png"
import migrationImage from "../../../../public/images/service-cards/migration.png"
import placeholderImage from "../../../../public/placeholder.svg"

type service = {
  title: string;
  label:string;
  description: string;
  imageUrl?: StaticImageData;
  highlight: boolean 
};

export const serviceList: service[] = [
  {
    title: "Desenvolvimento de Software Sob Medida",
    label: "Desenvolvimento de Software",
    description:
      "Projetamos e desenvolvemos aplicações personalizadas com base nas necessidades específicas do seu negócio. Desde a concepção até a entrega, nosso foco está na performance, escalabilidade e aderência total aos seus processos e objetivos estratégicos.",
    imageUrl: developmentImage,
    highlight: true,
  },
  {
    title: "Consultoria em Cloud Computing",
    label: "Cloud Computing",
    description:
      "Ajudamos sua empresa a migrar para a nuvem com segurança, escalabilidade e eficiência. Nossa consultoria abrange desde a definição da arquitetura ideal até a otimização de custos e implementação de boas práticas em plataformas como AWS, Azure e Google Cloud.",
    imageUrl: cloudImage,
    highlight: true,
  },
  {
    title: "Consultoria em Inteligência Artificial e Machine Learning",
    label: "Inteligência Artificial",
    description:
      "Implementamos soluções inteligentes que usam algoritmos de IA e aprendizado de máquina para automatizar processos, prever comportamentos e extrair insights valiosos dos seus dados, aumentando a eficiência operacional e o poder de decisão do seu negócio.",
    imageUrl: aiImage,
    highlight: true,
  },
  {
    title: "Migração e Modernização de Sistemas Legado",
    label:"Modernização de Sistema Legado",
    description:
      "Transformamos sistemas ultrapassados em plataformas modernas, seguras e de alta performance. Atuamos na migração de dados, atualização tecnológica e remodelagem da arquitetura, reduzindo riscos, eliminando gargalos e elevando a escalabilidade da sua operação.",
    imageUrl: migrationImage,
    highlight: true,
  },
  {
    title: "Arquitetura de Soluções",
    label:"Arquitetura de Soluções",
    description:
      "Desenhamos arquiteturas técnicas robustas que garantem eficiência, segurança e padronização em ambientes complexos. Nossas soluções priorizam performance, flexibilidade e governança, criando bases sólidas para o crescimento sustentável dos seus produtos digitais.",
    imageUrl: solutionsImage,
    highlight: true,
  },
  {
    title: "Consultoria em Segurança da Informação",
    label: "Segurança da Informação",
    description:
      "Avaliamos riscos, implementamos controles e definimos políticas de segurança para proteger dados, aplicações e infraestrutura. Nossas soluções incluem auditorias, testes de vulnerabilidade e práticas de compliance com foco em prevenção de ameaças cibernéticas.",
    imageUrl: placeholderImage,
    highlight: false,
  },
  {
    title: "Arquitetura de Sistemas",
    label: "Arquitetura de Sistemas",
    description:
      "Planejamos a estrutura técnica dos seus sistemas desde o início, garantindo alta disponibilidade, escalabilidade e manutenção facilitada. Nossa abordagem visa alinhar requisitos de negócio com boas práticas de engenharia de software e arquitetura corporativa.",
    imageUrl: placeholderImage,
    highlight: false,
  },
  {
    title: "Suporte Técnico e Evolutivo",
    label: "Suporte",
    description:
      "Garantimos o bom funcionamento dos sistemas com suporte técnico contínuo, correção de falhas e implementação de melhorias. Nosso foco é manter seu software atualizado, estável e preparado para as necessidades futuras do seu negócio.",
    imageUrl: placeholderImage,
    highlight: false,
  },
  {
    title: "",
    label: "",
    description:
      "",
    imageUrl: undefined,
    highlight: true,
  },
];
