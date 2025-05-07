import { QuestionsList } from "@/components/lists/questions/questions-list";

export function FaqSection() {
  return (
    <section data-aos="fade-right" className="section">
      <h5 className="section-title">Perguntas Frequentes</h5>
      <div className="section-content justify-start">
        <QuestionsList />
      </div>
    </section>
  );
}