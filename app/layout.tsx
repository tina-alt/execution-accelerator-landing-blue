import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/LenisProvider";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The AI Execution Accelerator — Stop Consuming. Start Shipping.",
  description:
    "A 12-week action-oriented mastermind for entrepreneurs tired of overthinking. Transform from AI Zero to AI Hero. By application only.",
  openGraph: {
    title: "The AI Execution Accelerator",
    description:
      "In 12 weeks you transform from AI Zero to AI Hero. Guaranteed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
