
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cases } from "./cases";

export function SuccessCasesTimeline() {

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Nossa Trajetória de Sucesso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça a história de transformação dos nossos clientes ao longo dos
            anos.
          </p>
        </div>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-600 transform md:translate-x-px" />

          {cases.map((study, index) => (
            <div key={index} className="mb-16 relative">
              <div
                className={cn(
                  "flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Marcador de ano */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <Calendar className="h-5 w-5" />
                </div>

                {/* Conteúdo */}
                <div
                  className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0",
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  )}
                >
                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-slate-700 text-slate-300"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.client} case study`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{study.client}</h3>

                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {study.description}
                    </p>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                      )}
                    >
                      <div className="pt-4 border-t mt-4 border-slate-700">
                        <h4 className="font-semibold mb-3">
                          Serviços Implementados
                        </h4>
                        <ul className="space-y-3">
                          {study.services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                              <li
                                key={idx}
                                className="flex items-center text-sm"
                              >
                                <div className="mr-3 h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                  <Icon className="h-3.5 w-3.5" />
                                </div>
                                <span>{service.label}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-primary"
                    >
                      "Ver mais"
                      <ArrowRight
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                        )}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
