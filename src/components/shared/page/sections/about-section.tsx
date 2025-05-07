import Image from "next/image";
import placeholder from "../../../../../public/placeholder.svg";
import { ReasonsList } from "@/components/lists/reasons/reasons-list";
import { StatsList } from "@/components/lists/stats/stats-list";

export default function About() {
  return (
    <section id="about" className="section" data-aos="fade-right">
      <h2 className="section-title">
        Por que escolher a Coderaw?
      </h2>
      <p className="section-subtitle">
        Somos uma empresa de consultoria em tecnologia comprometida em
        fornecer soluções inovadoras e de alta qualidade para impulsionar
        o sucesso dos nossos clientes.
      </p>
      <div className="section-content justify-center">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ReasonsList />
          <figure className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={placeholder}
              alt="Equipe Coderaw"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </figure>
        </div>
        <StatsList />
      </div>
    </section>
  );
}
