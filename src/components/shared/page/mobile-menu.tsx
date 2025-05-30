import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { AlignJustifyIcon } from "lucide-react";
import { Icon } from "../icons/icon";
import { subRouters } from "@/components/lists/sub-routers/sub-routers";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-16 h-8"
        >
          <AlignJustifyIcon className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="p-0">
        <SheetHeader className="py-6 pl-3">
          <SheetTitle className="flex text-black text-[40px] items-center gap-2">
            <Icon />
            <span className="text-base">
              Links de navegação
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Acesse páginas do seu interesse.
          </SheetDescription>
        </SheetHeader>

        <ul className="flex flex-col space-y-6 p-6">
          {
            subRouters.map((router) => (
              <Link
                key={`router-${router.label}`}
                href={router.href}
                className="flex items-center gap-3 text-foreground hover:text-primary focus:outline-none"
              >
                <div className="h-5 w-1 bg-primary" />
                {router.label}
              </Link>
            ))
          }
        </ul>
      </SheetContent>
    </Sheet>
  )
}