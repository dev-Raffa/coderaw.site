"use client";

import "./services.css";
import Image from "next/image";
import { serviceList } from "./services";
import DotPattern from "@/components/magic-ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const ServiceLists = () => {
  const highlightedServices = serviceList.filter(
    (service) => service.highlight === true
  );

  useGSAP(() => {
    const restCards = gsap.utils
      .toArray<HTMLDivElement>(".card-service")
      .slice(1);

    restCards.forEach((card, index) => {
      const article = card.querySelector(".card-service-text");
      const image = card.querySelector(".card-service-image");

      gsap.to(article, {
        scrollTrigger: {
          trigger: card,
          start: "bottom top",
          scrub: true,
        },
        opacity: 1,
        scale: 1,
        backgroundColor: "white",
      });

      gsap.to(image, {
        scrollTrigger: {
          trigger: card,
          start: "top top",
          scrub: true,
        },
        scale: 1,
        translateX: 0,
      });
    });
  }, {});

  return (
    <ul id="service-list" className="service-list">
      {highlightedServices.map((service, index) => {
        return (
          <li key={`card-service-${service.title}`} className="card-service">
            <article className="card-service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <DotPattern
                width={10}
                height={10}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]" +
                    " h-[100px]"
                )}
              />
            </article>
            <figure
              className="card-service-image"
              /*@ts-expect-error */
              style={{ "--card-number": index }}
            >
              {service.imageUrl && (
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                ></Image>
              )}
            </figure>
          </li>
        );
      })}
    </ul>
  );
};
