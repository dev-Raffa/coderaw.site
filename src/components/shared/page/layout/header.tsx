import Link from "next/link";

import { Logo } from "../../icons/logo";
import { ThemeToggle } from "../../theme-toggle";
import { MobileMenu } from "../mobile-menu";
import { Navigation } from "../navigation";

export function Header() {
  return (
    <>
      <header className="hidden sm:flex px-12 md:px-16 lg:px-24 flex-wrap top-0 inset-x-0 md:justify-start md:flex-nowrap z-50 w-full h-[100px] text-sm">
        <Navigation />
      </header>

      <header className="h-16 flex justify-between items-center p-4 gap-3 sm:hidden">
        <div>
          <Link className="h-12 flex items-center rounded-[0.3rem]" href="/">
            <Logo className="w-3/4 h-auto object-cover" />
          </Link>
        </div>

        <ThemeToggle className="w-16 h-8" />
        <MobileMenu />
      </header>
    </>
  );
}
