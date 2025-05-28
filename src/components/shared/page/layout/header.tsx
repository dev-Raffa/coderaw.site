"use client";

import Link from "next/link";

import { Logo } from "../../icons/logo";
import { MobileMenu } from "../mobile-menu";
import { Navigation } from "../navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const caseSection: HTMLElement = gsap.utils.toArray(
      "#cases"
    )[0] as HTMLElement;
    
    caseSection &&
      ScrollTrigger.create({
        trigger: caseSection,
        start: "top top",
        onEnter: () => {
          gsap.to(headerRef.current, {
            color: "rgb(255, 255, 255)",
          });
        },
        onLeave: () => {
          gsap.to(headerRef.current, {
            color: "rgb(0, 0, 0)",
          });
        },
        onEnterBack: () => {
          gsap.to(headerRef.current, {
            color: "rgb(255, 255, 255)",
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            color: "rgb(0, 0, 0)",
          });
        },
      });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="hidden h-[100px] z-[102] fixed top-[0] flex items-center sm:flex px-12 md:px-16 lg:px-24 flex-wrap top-0 inset-x-0 md:justify-center md:flex-nowrap z-50 w-full text-sm"
      >
        <Navigation />
      </header>

      <header className="h-16 w-full flex justify-between items-center p-4 gap-3 sm:hidden">
        <Link
          className="relative text-[96px] flex items-center rounded-[0.3rem]"
          href="/"
        >
          <Logo />
        </Link>

        <MobileMenu />
      </header>
    </>
  );
}
