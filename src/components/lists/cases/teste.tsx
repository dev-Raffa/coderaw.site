"use client";

import "./teste.css";
import Image from "next/image";
import { cases } from "./cases";
import { useState } from "react";

export function TestCasesList() {
  const [ itemSelected, setItemSelected ] = useState(0);

  const selectItem = (index: number) => {
    setItemSelected(index);
  };

  return (
    <section className="projects-slide">
      <section className="items">
        <ul className="index-carousel">
          {cases.map((_, index) => {
            return (
              <label key={`carousel-index-${index}`}>
                <input
                  type="radio"
                  name="index"
                  value={index + 1}
                  onChange={() => selectItem(index)}
                  checked={index === itemSelected ? true : false}
                />
              </label>
            );
          })}
        </ul>
        {cases.map((caseItem, index) => {
          return (
            // @ts-expect-error
            <article name={`item-${index + 1}`} key={`case-${index}`}>
              <figure>
                <Image fill src={caseItem.image} alt={caseItem.name} className="object-cover" />
              </figure>
              <section>
                <h3>{caseItem.name}</h3>
                <p>{caseItem.desafio}</p>
                <p>{caseItem.solucao}</p>
                <p>{caseItem.resultado}</p>
                <ul>
                  <li>repo</li>
                  <li>prototipo</li>
                  <li>projeto</li>
                </ul>
              </section>
            </article>
          );
        })}
      </section>
    </section>
  );
}
