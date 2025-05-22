import { ReasonsList } from "@/components/lists/reasons/reasons-list";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl flex flex-col items-center gap-2">
        <h2 className="section-title">Por que escolher a Coderaw?</h2>
        <p className="section-subtitle">
          Somos uma empresa de consultoria em tecnologia comprometida em
          fornecer soluções inovadoras e de alta qualidade para impulsionar o
          sucesso dos nossos clientes.
        </p>
      </div>
      <div className="section-content">
        <div className="flex flex-col items-center">
          <ReasonsList />
        </div>
      </div>
    </section>
  );
}
