import "./globals.css";

import { AOSInit } from "@/components/shared/aos-init";
import type { Metadata } from "next";
import {
  Michroma,
  Montserrat,
  Poppins,
} from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/shared/page/layout/footer";
import { TopGradient } from "@/components/shared/top-gradient";
import { Header } from "@/components/shared/page/layout/header";
import { BackToTopButton } from "@/components/shared/buttons/backToTop.component";

const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-michroma",
});

const montserrat = Montserrat({
  weight: ["400", "500","600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Consultoria em Software | coderaw.io",
  description: "Consultoria em software com foco em arquitetura, desenvolvimento sob medida, modernização de sistemas e soluções em nuvem e IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${michroma.variable}  ${poppins.className} antialiased`}
      >
        <AOSInit />
        <TopGradient />
        <BackToTopButton />
        <Header />
        <main className="min-h-screen sm:pb-[64px]">
          {children}
        </main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
