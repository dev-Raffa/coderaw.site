import { StaticImageData } from "next/image";
import developmentImage from "../../../../public/images/service-cards/software-development.png"
import cloudImage from "../../../../public/images/service-cards/cloud.png";
import solutionsImage from "../../../../public/images/service-cards/solutions-architecture.png"
import aiImage from "../../../../public/images/service-cards/AI.png"
import migrationImage from "../../../../public/images/service-cards/migration.png"
import placeholderImage from "../../../../public/placeholder.svg"
import { SlSocialSoundcloud } from "react-icons/sl";
import { LuBrain } from "react-icons/lu";
import {
  MdBrowserUpdated,
  MdOutlineMoneyOff,
  MdOutlineDevices,
  MdKeyboardDoubleArrowUp,
  MdPermIdentity,
  MdCloudQueue,
  MdTrendingUp,
  MdOutlineAutoGraph,
  MdSupportAgent,
  MdUpdate,
  MdSchema,
  MdBugReport,
  MdSpeed,
  MdArchitecture,
  MdSecurity,
  MdOutlineRule,
  MdOutlineDesignServices,
  MdSystemUpdateAlt,
  MdOutlineLock,
} from "react-icons/md";


type advantage = {
  icon: React.ReactNode;
  label: string;
}

type service = {
  title: string;
  label:string;
  description: string;
  features: string[];
  advantages: advantage[];
  icon: React.ReactNode;
  highlight: boolean 
};

export const serviceList: service[] = [
  {
    label: "Desenvolvimento",
    title: "Soluções exclusivas para demandas específicas.",
    description:
      "Desenvolvemos sistemas que atendem exatamente às necessidades do seu negócio, com tecnologia atual, alta performance e foco total nos seus objetivos.",
    features: [
      "Soluções alinhadas ao seu processo",
      "Escalabilidade desde a concepção",
      "Acompanhamento completo, da ideia ao deploy",
    ],
    advantages: [
      {
        icon: <MdOutlineMoneyOff />,
        label: "Redução de custos com soluções personalizadas",
      },
      {
        icon: <MdKeyboardDoubleArrowUp />,
        label: "Aumento da eficiência operacional",
      },
      {
        icon: <MdPermIdentity />,
        label: "Melhoria na experiência do usuário final",
      },
    ],
    icon: <MdOutlineDevices />,
    highlight: true,
  },
  {
    label: "Cloud Computing",
    title: "Seu negócio na nuvem, com segurança e escalabilidade.",
    description:
      "Auxiliamos na adoção, migração e otimização de ambientes em nuvem, com foco em performance, redução de custos e conformidade.",
    icon: <SlSocialSoundcloud />,
    features: [
      "Arquitetura em AWS, Azure e GCP",
      "Otimização de recursos e custos",
      "Ambientes seguros e escaláveis",
    ],
    advantages: [
      {
        icon: <MdCloudQueue />,
        label: "Acesso remoto e contínuo a qualquer hora",
      },
      {
        icon: <MdOutlineMoneyOff />,
        label: "Redução de infraestrutura local",
      },
      {
        icon: <MdTrendingUp />,
        label: "Melhora na performance e elasticidade",
      },
    ],
    highlight: true,
  },
  {
    label: "AI & Marching Laning",
    title: "Automatize processos e antecipe decisões.",
    description:
      "Criamos soluções de IA sob medida para transformar dados em inteligência e agregar valor ao seu produto ou operação.",
    features: [
      "Modelos de IA personalizados",
      "Previsão e recomendação com ML",
      "Processamento de linguagem natural (NLP)",
    ],
    advantages: [
      {
        icon: <MdOutlineAutoGraph />,
        label: "Automação inteligente de processos repetitivos",
      },
      {
        icon: <MdKeyboardDoubleArrowUp />,
        label: "Aumento da precisão em decisões estratégicas",
      },
      {
        icon: <MdPermIdentity />,
        label: "Experiência personalizada para seus usuários",
      },
    ],
    icon: <LuBrain />,
    highlight: true,
  },
  {
    label: "Migração de Sistemas",
    title: "Atualize sistemas antigos com segurança e eficiência.",
    description:
      "Modernizamos arquiteturas ultrapassadas com tecnologias atuais, mantendo a integridade de dados e reduzindo riscos operacionais.",
    features: [
      "Reengenharia de sistemas antigos",
      "Migração de dados segura",
      "Interface moderna e responsiva",
    ],
    advantages: [
      {
        icon: <MdSystemUpdateAlt />,
        label: "Redução de riscos operacionais",
      },
      {
        icon: <MdSpeed />,
        label: "Melhoria de performance",
      },
      {
        icon: <MdUpdate />,
        label: "Maior compatibilidade com novas tecnologias",
      },
    ],
    icon: <MdSystemUpdateAlt />,
    highlight: true,
  },
  {
    label: "Arquitetura de Soluções",
    title: "Estruture sua tecnologia para crescer com segurança.",
    description:
      "Desenhamos arquiteturas escaláveis, modulares e alinhadas aos objetivos do negócio, otimizando custos e reduzindo complexidade.",
    features: [
      "Padrões modernos de arquitetura",
      "Integração de sistemas e APIs",
      "Escalabilidade horizontal e vertical",
    ],
    advantages: [
      {
        icon: <MdArchitecture />,
        label: "Redução de retrabalho e gargalos técnicos",
      },
      {
        icon: <MdOutlineDesignServices />,
        label: "Projetos prontos para escalar",
      },
      {
        icon: <MdSpeed />,
        label: "Alta performance desde o início",
      },
    ],
    icon: <MdArchitecture />,
    highlight: false,
  },
  {
    label: "Segurança da Informação",
    title: "Proteja seus dados e evite prejuízos.",
    description:
      "Implementamos estratégias de proteção contra ameaças digitais, com foco em compliance, prevenção e resposta a incidentes.",
    features: [
      "Diagnóstico de vulnerabilidades",
      "Políticas e boas práticas de segurança",
      "Monitoramento e resposta a incidentes",
    ],
    advantages: [
      {
        icon: <MdOutlineLock />,
        label: "Prevenção de vazamento de dados",
      },
      {
        icon: <MdOutlineRule />,
        label: "Conformidade com regulamentações",
      },
      {
        icon: <MdSecurity />,
        label: "Proteção contínua contra ameaças",
      },
    ],
    icon: <MdSecurity />,
    highlight: false,
  },
  {
    label: "Arquitetura de Sistemas",
    title: "Conceba projetos com base sólida desde o início.",
    description:
      "Planejamos a estrutura técnica do seu sistema para garantir performance, manutenibilidade e adaptação futura.",
    features: [
      "Definição de camadas e responsabilidades",
      "Padrões como Clean Architecture e DDD",
      "Base sólida para escalar com confiança",
    ],
    advantages: [
      {
        icon: <MdSchema />,
        label: "Organização técnica desde o início",
      },
      {
        icon: <MdArchitecture />,
        label: "Facilidade na manutenção e testes",
      },
      {
        icon: <MdSpeed />,
        label: "Alta performance desde a arquitetura",
      },
    ],
    icon: <MdSchema />,
    highlight: false,
  },
  {
    label: "Suporte Técnico",
    title: "Mantenha seus sistemas sempre estáveis e atualizados.",
    description:
      "Oferecemos suporte contínuo com foco em melhorias, correções e atualizações que garantem evolução constante.",
    features: [
      "Correção de bugs e incidentes",
      "Atualizações e melhorias contínuas",
      "Monitoramento de performance",
    ],
    advantages: [
      {
        icon: <MdSupportAgent />,
        label: "Rapidez na resolução de problemas",
      },
      {
        icon: <MdBugReport />,
        label: "Correções constantes e preventivas",
      },
      {
        icon: <MdUpdate />,
        label: "Atualizações com zero downtime",
      },
    ],
    icon: <MdSupportAgent />,
    highlight: false,
  },
];
