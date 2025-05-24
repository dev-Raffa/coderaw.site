import Link from "next/link";

import { Logo } from "../../icons/logo";
import { ThemeToggle } from "../../theme-toggle";
import { MobileMenu } from "../mobile-menu";
import { Navigation } from "../navigation";

export function Header() {
  return (
    <>
      <header className="hidden h-[100px] fixed top-[0] flex items-center sm:flex px-12 md:px-16 lg:px-24 flex-wrap top-0 inset-x-0 md:justify-center md:flex-nowrap z-50 w-full text-sm">
        <Navigation />
      </header>

      <header className="h-16 flex justify-between items-center p-4 gap-3 sm:hidden">
        <div>
          <Link className="h-[100px] w-[220px] relative flex items-center rounded-[0.3rem]" href="/">
            <Logo className="w-3/4 h-auto object-cover" />
          </Link>
        </div>
      </header>
    </>
  );
}
