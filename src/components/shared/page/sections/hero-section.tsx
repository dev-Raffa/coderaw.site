import { ToolsListSlide } from "@/components/lists/tools/tools.components";
import GridPattern from "@/components/magic-ui/grid-pattern";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-8">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvendo soluções que impulsionam negócios
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-base font-title text-muted-foreground sm:text-lg">
            Da consultoria à execução, aceleramos a transformação digital com
            tecnologias de ponta, IA e cloud computing.
          </p>
        </div>

        <ToolsListSlide />
      </div>
    </div>
  );
}
