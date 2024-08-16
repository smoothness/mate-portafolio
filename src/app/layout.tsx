import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import "./globals.css";

import { cn } from "@/lib/utils"
import { Header } from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portafolio de Ejercicios - Javier Poveda",
  description: "Lógica y matemáticas básicas aplicadas a la programación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
