"use client";

import "./list-cases.styles.css";
import Image from "next/image";
import { cases } from "./cases";

export function CasesList() {

  return (
    <ul className="case-list">
      <h2 className="section-title">Cases de Sucesso</h2>
      <p className="section-description">
        Conheça alguns dos projetos que desenvolvemos e os resultados que
        alcançamos
      </p>
      {cases.map((study, index) => (
        <li key={`case-${study.name}`} className="case-card flex-col">
          <div>
            <article className="card-content backdrop-blur-xl flex">
              <figure>
                <Image src={study.image} fill alt=""></Image>
              </figure>
              <section className="card-texts">
                <h3>{study.name}</h3>
                <ul className="flex flex-col h-full">
                  <li className="h-[fit-content]">
                    <h4>Desafio Inicial</h4>
                    <p> {study.desafio}</p>
                  </li>
                  <li>
                    <h4>Solução Proposta</h4>
                    <p>{study.solucao}</p>
                  </li>
                  <li>
                    <h4>Resultado Atual</h4>
                    <p>{study.resultado}</p>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </li>
      ))}
    </ul>
  );
}
