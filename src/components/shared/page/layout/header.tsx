import Link from "next/link";

import { Logo } from "../../icons/logo";
import { ThemeToggle } from "../../theme-toggle";
import { MobileMenu } from "../mobile-menu";

export function Header() {
  return (
    <>
      <header className="hidden sm:flex flex-wrap sticky top-0 inset-x-0 md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="bg-background relative max-w-6xl w-full flex items-center justify-between mx-auto pt-2">
          <div>
            <Link
              className="h-[56px] flex items-center rounded-[0.3rem]"
              href="/"
            >
              <Logo className="w-1/2 h-auto object-cover" />
            </Link>
          </div>

          <div
            id="hs-navbar-header-floating"
            className="block hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
          >
            <div className="flex justify-end items-center gap-8 ps-8">
              <Link
                href="/#services"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Serviços
              </Link>
              <Link
                href="/#products"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Produtos
              </Link>
              <Link
                href="/#cases"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Cases
              </Link>
              <Link
                href="/#contact"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Contato
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16 flex justify-between items-center p-4 gap-3 sm:hidden">
        <div>
          <Link className="h-12 flex items-center rounded-[0.3rem]" href="/">
            <Logo className="w-3/4 h-auto object-cover" />
          </Link>
        </div>

        <ThemeToggle className="w-16 h-8" />
        <MobileMenu />
      </div>
    </>
  );
}
