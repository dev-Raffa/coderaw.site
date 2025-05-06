/*
export const ProductsSection = () => {
  return (
    <section
      id="products"
      data-aos="fade-right"
      className="section"
    >
        <h2 className="section-title">Soluções prontas para levar o </h2>
        <p className="section-subtitle">
          Conheça nossos produtos e soluções inovadoras.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          { Product cards will go here }
        </div>
    </section>
  );
}
*/

import { ProductsList } from "@/components/lists/products/product-list"

export default function Products() {
  return (
    <section id="products" className="section" data-aos="fade-right">  
      <h2 className="section-title">
        Soluções prontas para levar o seu negócio ao próximo nível
      </h2>
      <p className="section-subtitle">
        Desenvolvemos soluções proprietárias para atender necessidades específicas do mercado
      </p>
      <div className="space-y-20">
        <ProductsList />
      </div>
    </section>
  )
}
