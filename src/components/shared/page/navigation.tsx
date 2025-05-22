
import Link from "next/link";
import { Logo } from "../icons/logo";
import { subRouters } from "@/components/lists/sub-routers/sub-routers";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="header-bg sticky top-[5px] rounded-xl backdrop-blur-xl max-w-6xl w-full flex items-center justify-between h-[68px] p-4">
      <ul>
        <Link className="h-[56px] w-[220px] relative flex items-center rounded-[0.3rem]" href="/">
          <Logo className="w-1/2 h-auto object-cover" />
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
              className={`p-3 rounded-md font-item hover:text-primary focus:outline-none`}
            >
              {router.label}
            </Link>
          ))}

          <Button className="bg-primary text-black font-item">
            Fale com um especialista
          </Button>
        </div>
      </ul>
    </nav>
  );
};
