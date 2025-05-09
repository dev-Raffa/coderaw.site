import Link from "next/link";
import { Logo } from "../icons/logo";
import { subRouters } from "@/components/lists/sub-routers/sub-routers";
import { ThemeToggle } from "../theme-toggle";

export const Navigation = () => {
    return (
      <nav className="bg-background relative max-w-6xl w-full flex items-center justify-between mx-auto pt-2">
        <ul>
          <Link
            className="h-[56px] flex items-center rounded-[0.3rem]"
            href="/"
          >
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
                className={`p-3 rounded-md ${
                  router.href === "/#contact"
                    ? "bg-primary hover:bg-background text-background"
                    : "text-foreground"
                }  font-item hover:text-primary focus:outline-none`}
              >
                {router.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </ul>
      </nav>
    );
}