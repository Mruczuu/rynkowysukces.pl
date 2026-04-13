import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChartBackground } from "@/components/ChartBackground";
import { FomoToast } from "@/components/FomoToast";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RynkowySukces — Darmowy Ebook, Który Zmienia Grę",
  description:
    "Pobierz darmowy system tradingowy używany przez zyskownych traderów. Prawdziwe strategie. Realne wyniki. Zero lania wody.",
  openGraph: {
    title: "RynkowySukces — Darmowy Ebook, Który Zmienia Grę",
    description:
      "Pobierz darmowy system tradingowy używany przez zyskownych traderów.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">
        <ChartBackground />
        <div className="relative z-10">{children}</div>
        <FomoToast />
      </body>
    </html>
  );
}
