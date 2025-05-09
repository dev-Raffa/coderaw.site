import { ReasonsList } from "@/components/lists/reasons/reasons-list";
import TeamSection from "./team-section";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magic-ui/grid-pattern";

export default function About() {
  return (
    <section id="about" className="section" data-aos="fade-right">
      <h2 className="section-title">Por que escolher a Coderaw?</h2>
      <p className="section-subtitle">
        Somos uma empresa de consultoria em tecnologia comprometida em fornecer
        soluções inovadoras e de alta qualidade para impulsionar o sucesso dos
        nossos clientes.
      </p>
      <div className="section-content justify-center">
        <div className="flex flex-col items-center">
          <ReasonsList />
          <TeamSection />
        </div>
      </div>
    </section>
  );
}
