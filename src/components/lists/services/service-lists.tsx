"use client";

import "./services.css"; // use seu CSS adaptado para React
import Image from "next/image";
import { serviceList } from "./services-list";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";
//import {useGSAP } from "@gsap/react"
//import gsap from "gsap";
//import { useRef } from "react";
//import ScrollTrigger from "gsap/ScrollTrigger";

//gsap.registerPlugin(useGSAP)
//gsap.registerPlugin(ScrollTrigger)
export const ServiceLists = () => {
  //const serviceListRef = useRef<HTMLDivElement>(null);
  const highlightedServices = serviceList.filter(
    (service) => service.highlight === true
  );

  /*
  useGSAP(()=>{
    
    const cards = gsap.utils.toArray<HTMLDivElement>(".card-service")

    cards.forEach((card, index)=>{
      index === 0 ? (
        gsap.to(card, {
          scrollTrigger:{
            trigger: ".sevice-list",
            start: "top 100px",
            end: "center center"
          },
          opacity: 1,
          scale: 1,
        })
      ):(
        console.log(card)
      )

    })
  }, {})
*/

  return (
    <ul id="service-list" className="service-list">
      {highlightedServices.map((service, index) => {
        return (
          <li key={`card-service-${service.title}`} className="card-service">
            <article className="card-service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
            <figure
              className="card-service-image"
              /*@ts-expect-error */
              style={{ "--card-number": index }}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                loading="lazy"
                className="object-cover"
              ></Image>
            </figure>
            <DotPattern
              width={10}
              height={10}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]" +
                  " h-[200px]"
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};
