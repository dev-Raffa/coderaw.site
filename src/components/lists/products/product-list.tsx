import { ChevronRight } from "lucide-react";
import { products } from "./products"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ProductsList = ()=>{
    return (
      <ul className="flex flex-col gap-8">
        {products.map((product, index) => (
          <li
            key={index}
            data-aos="fade-up"
            className={`grid gap-8 items-center py-12 ${
              index % 2 === 0
                ? "lg:grid-cols-[1fr_1.2fr]"
                : "lg:grid-cols-[1.2fr_1fr]"
            }`}
          >
            <article className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
              <h3 className="text-2xl font-bold mb-4 text-coderaw-text">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button>
                Saiba Mais
              </Button>
            </article>
            <div
              className={`h-full ${
                index % 2 === 1 ? "order-2 lg:order-1" : ""
              }`}
            >
              <figure className="relative rounded-xl overflow-hidden shadow-lg h-full w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    );
}