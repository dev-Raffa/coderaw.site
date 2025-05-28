import { ToolsListSlide } from "@/components/lists/tools/tools.components";
import Link from "next/link";
export function HeroSection() {
  return (
    <div className="section ">
      <div className="h-full mb-[56px] flex flex-col gap-[22px] max-w-4xl md:mb-[18px] mx-auto">
        <div className="max-w-sm sm:max-w-4xl text-center mx-auto">
          <h1 className="block font-medium font-title text-5xl  md:text-6xl lg:text-[5.4rem]">
            Soluções que <br /> impulsionam negócios
          </h1>
        </div>

        <div className="max-w-sm sm:max-w-4xl text-center mx-auto">
          <p className="text-xl text-muted-foreground lg:text-[26px]">
            Da consultoria à execução, aceleramos a transformação digital com
            tecnologias de ponta, IA e cloud computing.
          </p>
        </div>

        <div className="max-w-sm mt-2 sm:max-w-4xl text-center mx-auto">
          <Link
            href={"#contact"}
            className="bg-black py-3 px-6 rounded-md text-xl text-primary font-item"
          >
            Fale com um especialista
          </Link>
        </div>
        <div className="absolute bottom-[10px]  sm:bottom-[3px] left-[0]">
          <ToolsListSlide />
        </div>
      </div>
    </div>
  );
}
