import "./list-cases.styles.css";
import Image from "next/image";
import { cases } from "./cases";

export function CasesList() {
  return (
    //@ts-expect-error
    <ul id="cards" style={{ "--columns": 4 }}>
      {cases.map((caseItem, index) => {
        return (
          <li
            className="card"
            key={`case-card-${index}`}
            //@ts-expect-error
            style={{ "--index": index + 1 }}
          >
            {index === 0 && (
              <div className="card-header">
                <h2 className="section-title">Nossos Casos de Sucesso</h2>
                <p className="section-subtitle">
                  Conheça os projetos que desenvolvemos e como impactamos nossos
                  clientes.
                </p>
              </div>
            )}
            <article className="card-content backdrop-blur-md">
              <figure>
                <Image src={caseItem.image} fill alt={caseItem.name} className="object-right object-cover" />
              </figure>
              <section>
                <h3>{caseItem.name}</h3>
                <ul className="flex flex-col h-full">
                  <li className="h-[fit-content]">
                    <h4>Desafio Inicial</h4>
                    <p> {caseItem.desafio}</p>
                  </li>
                  <li>
                    <h4>Solução Proposta</h4>
                    <p>{caseItem.solucao}</p>
                  </li>
                  <li>
                    <h4>Resultado Atual</h4>
                    <p>{caseItem.resultado}</p>
                  </li>
                </ul>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
