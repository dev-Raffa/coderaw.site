import { CasesList } from "@/components/lists/cases/grid-cases-lists";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Cases() {
  return (
    <section id="cases" className="section" data-aos="fade-right">
      <h2 className="section-title">Cases de Sucesso</h2>
      <p className="section-subtitle">
        Conheça alguns dos projetos que desenvolvemos e os resultados que
        alcançamos
      </p>
      <div className="section-content">
        <CasesList />
      </div>
      <DotPattern
        width={10}
        height={10}
        cx={1}
        cy={1}
        cr={1}
        className={
          (cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]" +
              " h-[200px]"
          )
          )
        }
      />
    </section>
  );
}
