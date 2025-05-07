import { CasesList } from "@/components/lists/cases/cases-lists";

export default function Cases() {

  return (
    <section id="cases" className="section" data-aos="fade-right">
      <h2 className="section-title">Cases de Sucesso</h2>
      <p className="section-subtitle">
        Conheça alguns dos projetos que desenvolvemos e os resultados que
        alcançamos
      </p>
      <div className="section-content justify-center">
        <CasesList />
      </div>
    </section>
  );
}
