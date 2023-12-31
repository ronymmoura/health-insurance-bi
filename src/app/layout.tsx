import "./globals.css";
import { Inter, Titillium_Web as Titillium } from "next/font/google";
import Providers from "./Providers";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tt = Titillium({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

export const metadata = {
  title: "Seguro BI",
  description: "Seguro BI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${tt.variable} flex h-screen bg-[var(--color-main-bg)] font-sans text-[var(--foreground)]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
