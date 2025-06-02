'use client'

import Link from "next/link";
import { Logo } from "../icons/logo";
import { subRouters } from "@/components/lists/sub-routers/sub-routers";
import { useState } from "react";
import { BLACK_SECTION } from "@/consts/black-section.const";

export const Navigation = () => {
  const [blackAnchorIsActive, setBlackAnchorIsActive] = useState(false);

  const clickOnAnchorHandle = (anchor:string) => {
    if(anchor === BLACK_SECTION ) {
      setBlackAnchorIsActive(true)
    }else {
      setBlackAnchorIsActive(false)
    }
  }
  
  return (
    <nav className="header-bg shadow-md rounded-xl backdrop-blur-xl max-w-6xl w-full flex items-center justify-between h-[68px] p-4">
      <ul>
        <Link
          className="h-[56px] text-[96px] w-[220px] relative flex items-center rounded-[0.3rem]"
          href="/"
        >
          <Logo />
        </Link>
      </ul>

      <ul
        id="hs-navbar-header-floating"
        className="block hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
      >
        <li className="flex justify-end items-center gap-8 ps-8">
          {subRouters.map((router) => (
            <Link
              key={`router-${router.label}`}
              href={router.href}
              className={`${
                blackAnchorIsActive && router.href === BLACK_SECTION
                  ? "active"
                  : " "
              } p-3 rounded-md text-base text-nowrap font-item hover:text-primary focus:outline-none`}
              target={router.label === "Trabalhe Conosco" ? "_blank" : "_self"}
              onClick={() => clickOnAnchorHandle(router.href)}
            >
              {router.label}
            </Link>
          ))}

          <Link
            href={"#contact"}
            className="hidden bg-primary lg:block text-center w-fit p-2 lg:px-4 rounded-md text-black font-item"
          >
            Fale com um especialista
          </Link>
        </li>
      </ul>
    </nav>
  );
};
