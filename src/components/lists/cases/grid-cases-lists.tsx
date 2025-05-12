import Image from "next/image";
import {
  ArrowRight,
  Code,
  Database,
  LineChart,
  Lock,
  Server,
  Smartphone,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cases } from "./cases";


export function SuccessCasesGrid() {

  return (
    <section className="py-16 text-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Histórias de Sucesso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça como nossas soluções transformaram negócios em diversos
            setores.
          </p>
        </div>

        {/* Grid de cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((study, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-slate-700 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-slate-800"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={`${study.client} case study`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge className="mb-2" variant="secondary">
                    {study.industry}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {study.client}
                  </h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-slate-300 line-clamp-3 mb-4 text-sm">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="flex items-center gap-1 border-slate-600"
                      >
                        <Icon className="h-3 w-3" />
                        <span className="text-xs">{service.label}</span>
                      </Badge>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                >
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
