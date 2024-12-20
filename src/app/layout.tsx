import { Header } from './components/header/page';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PH - Tatuagens",
  description: "Descrição...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
