import { CasesList } from "@/components/lists/cases/grid-cases-lists";
import { TestCasesList } from "@/components/lists/cases/teste";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";

export  const CasesSection = () => {
  return (
    <section
      id="cases"
      className="section bg-gradient-to-tr from-zinc-900 to-black"
    >
      <div className="section-content">
        <CasesList />
      </div>
      <DotPattern
        width={10}
        height={10}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "hidden md:block [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]" +
            " h-[1500px]"
        )}
      />
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(" md:hidden opacity-30 " + "h-full")}
      />
    </section>
  );
}
