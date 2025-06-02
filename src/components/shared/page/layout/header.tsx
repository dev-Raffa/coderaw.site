"use client";

import Link from "next/link";

import { Logo } from "../../icons/logo";
import { MobileMenu } from "../mobile-menu";
import { Navigation } from "../navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";
import { BLACK_SECTION } from "@/consts/black-section.const";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);
export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const blackSection: HTMLElement = gsap.utils.toArray(
      BLACK_SECTION.replace("/", "")
    )[0] as HTMLElement;
    const blackSectionAnchor = headerRef.current?.querySelector(`a[href="${BLACK_SECTION}"]`) as HTMLAnchorElement;
  
    if (window.location.hash === BLACK_SECTION.replace("/", "")) {
      gsap.to(headerRef.current, {
        color: "rgb(252, 251, 251)",
        duration: 0.1,
      });
    } 

    if(blackSection) {
      ScrollTrigger.create({
        trigger: blackSection,
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
          gsap.context(()=>{
            if (blackSectionAnchor) {
              blackSectionAnchor.classList.remove("active");
            }
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
          gsap.context(() => {
            if (blackSectionAnchor) {
              blackSectionAnchor.classList.remove("active");
            }
          });
        },
      });
    }
  }, [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`hidden h-[100px] z-[102] fixed top-[0] flex items-center sm:flex px-12 md:px-16 lg:px-24 flex-wrap top-0 inset-x-0 md:justify-center md:flex-nowrap z-50 w-full text-sm`}
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
