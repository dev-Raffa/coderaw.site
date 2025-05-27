import Link from "next/link";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

import { Logo } from "../../icons/logo";

export function Footer() {
  return (
    <footer className="overflow-x-hidden w-full space-y-16 py-12 px-12 md:px-16 lg:px-24 bg-black">
      <section className="flex flex-col space-y-12 md:flex-row md:justify-between  md:space-y-0">
        <ul className="list-inside space-y-4">
          <span className="font-medium text-white font-title">Social</span>
          <li>
            <Link
              href="https://github.com/coderaw-io"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <GithubIcon className="size-4" />
              Github
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/company/coderaw"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
              Linkedin
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/coderaw.io/#"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </Link>
          </li>
        </ul>
        <ul className="list-inside space-y-4">
          <span className="font-medium font-title text-white">Atendimento</span>
          <li>
            <Link
              href="mailto:contato@coderaw.io"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <MailIcon className="size-4" />
              Informações: contato@coderaw.io
            </Link>
          </li>

          <li>
            <Link
              href="mailto:comercial@coderaw.io"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <MailIcon className="size-4" />
              Comercial: comercial@coderaw.io
            </Link>
          </li>
        </ul>
        <ul className="list-inside space-y-4 overflow-x-hidden">
          <Link href={"/"}>
            <figure className="w-[180px] h-[25px] relative flex overflow-x-hidden">
              <Logo color="white" className="object-cover overflow-x-hidden" />
            </figure>
          </Link>
          <li>
            <Link
              href={"#services"}
              className="flex px-3 items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              Servicos
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://www.linkedin.com/company/coderaw/"
              }
              className="flex px-3 items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              Trabalhe conosco
            </Link>
          </li>
        </ul>

        <div className="h-full flex "></div>
      </section>

      <section className="flex flex-col space-y-3 py-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <span className="text-[11px] text-muted-foreground sm:text-[13px]">
          2025 © Copyright - Coderaw Solucoes Tecnologicas LTDA.
        </span>

        <span className="text-xs text-muted-foreground font-medium sm:text-[13px]">
          Todos os direitos reservados.{" "}
          <Link href="/politica-de-privacidade" className="hover:text-primary">
            Política de Privacidade
          </Link>
        </span>
      </section>
    </footer>
  );
}
