import { QuestionsList } from "@/components/lists/questions/questions-list";

export function FaqSection() {
  return (
    <section className="section">
      <div className="section-texts">
        <h5 className="section-title">Perguntas Frequentes</h5>
      </div>
      <div className="section-content justify-start">
        <QuestionsList />
      </div>
    </section>
  );
}
