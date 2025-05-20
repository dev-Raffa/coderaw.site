import "./list-cases.styles.css";
import Image from "next/image";
import { cases } from "./cases";

export function CasesList() {
  return (
    <ul className="case-list">
      {cases.map((study, index) => (
        <li key={`case-${study.name}`}>
          <article>
            <figure>
              <Image src={study.image} alt=""></Image>
            </figure>
            <section>
              <h3>{study.name}</h3>
              <p>{study.description}</p>
            </section>
          </article>
        </li>
      ))}
    </ul>
  );
}
