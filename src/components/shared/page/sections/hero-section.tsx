import { ToolsListSlide } from "@/components/lists/tools/tools.components";
export function HeroSection() {
  return (
    <div className="section ">
      <div className="h-full flex flex-col gap-3 max-w-4xl mx-auto">
        <div className="max-w-sm sm:max-w-4xl text-center mx-auto">
          <h1 className="block font-medium font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Soluções que impulsionam negócios
          </h1>
        </div>

        <div className="max-w-sm sm:max-w-3xl text-center mx-auto">
          <p className="text-base text-muted-foreground  md:text-3xl lg:text-4xl">
            Da consultoria à execução, aceleramos a transformação digital com
            tecnologias de ponta, IA e cloud computing.
          </p>
        </div>
        <div className="absolute bottom-[0] left-[0]">
          <ToolsListSlide />
        </div>
      </div>
    </div>
  );
}
