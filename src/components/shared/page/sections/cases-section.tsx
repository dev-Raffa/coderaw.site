import { TestCasesList } from "@/components/lists/cases/teste";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";

export  const CasesSection = () => {
  return (
    <section
      id="cases"
      className="section bg-gradient-to-tr from-zinc-900 to-black"
    >
      <div className="section-texts">
        <h2 className="section-title">Nossos Casos de Sucesso</h2>
        <p className="section-subtitle">
          Conheça os projetos que desenvolvemos e como impactamos nossos
          clientes.
        </p>
      </div>
      <div className="section-content">
        {/*<CasesList />*/}
        <TestCasesList />
      </div>
      <DotPattern
        width={10}
        height={10}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]" +
            " h-[200px]"
        )}
      />
    </section>
  );
}
