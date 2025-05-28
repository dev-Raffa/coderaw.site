import "./globals.css";

import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/shared/page/layout/footer";
import { TopGradient } from "@/components/shared/top-gradient";
import { Header } from "@/components/shared/page/layout/header";
import { AOSInit } from "@/components/shared/aos-init";
import GridPattern from "@/components/magic-ui/grid-pattern";
import { cn } from "@/lib/utils";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-text",
});

const chakra = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-title",
})


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
        className={`${chakra.variable} relative ${inter.className} antialiased`}
      >
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={cn(
            "absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />

        <AOSInit />
        <TopGradient />
        {/*<BackToTopButton /> */}
        <Header />
        <main className="min-h-screen sm:pb-[64px]">{children}</main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
