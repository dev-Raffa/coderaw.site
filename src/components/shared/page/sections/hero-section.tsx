import { ToolsListSlide } from "@/components/lists/tools/tools.components";
export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-8">
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-sm sm:max-w-3xl text-center mx-auto">
          <h1 className="block font-medium font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Soluções que impulsionam negócios
          </h1>
        </div>

        <div className="max-w-sm sm:max-w-3xl text-center mx-auto">
          <p className="text-base text-muted-foreground sm:text-2xl">
            Da consultoria à execução, aceleramos a transformação digital com
            tecnologias de ponta, IA e cloud computing.
          </p>
        </div>

        <ToolsListSlide />
      </div>
    </div>
  );
}
