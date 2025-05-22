import "./list-cases.styles.css";
import Image from "next/image";
import { cases } from "./cases";

export function CasesList() {
  return (
    <ul className="case-list">
      {cases.map((study, index) => (
        <li key={`case-${study.name}`} className="case-card">
          <article className="backdrop-blur-xl">
            <figure>
              <Image src={study.image} fill alt=""></Image>
            </figure>
            <section>
              <h3>{study.name}</h3>
              <ul className="flex flex-col h-full">
                <li className="h-[fit-content]">
                  <h4>🚩 Desafio Inicial</h4>
                  <p> {study.desfio}</p>
                </li>
                <li>
                  <h4>💡 Solução Proposta</h4>
                  <p>{study.solucao}</p>
                </li>
                <li>
                  <h4>✅ Resultado Atual</h4>
                  <p>{study.resultado}</p>
                </li>
              </ul>
            </section>
          </article>
        </li>
      ))}
    </ul>
  );
}
