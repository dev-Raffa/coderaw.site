import Link from "next/link";
import { Logo } from "../icons/logo";
import { subRouters } from "@/components/lists/sub-routers/sub-routers";

export const Navigation = () => {
  return (
    <nav className="header-bg  shadow-md rounded-xl backdrop-blur-xl max-w-6xl w-full flex items-center justify-between h-[68px] p-4">
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
        <div className="flex justify-end items-center gap-8 ps-8">
          {subRouters.map((router) => (
            <Link
              key={`router-${router.label}`}
              href={router.href}
              className={`p-3 rounded-md text-base font-item hover:text-primary focus:outline-none`}
            >
              {router.label}
            </Link>
          ))}

          <Link
            href={"#contact"}
            className="bg-primary py-2 px-4 rounded-md text-black font-item"
          >
            Fale com um especialista
          </Link>
        </div>
      </ul>
    </nav>
  );
};
