import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer/footer";

const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-dancing_Script",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Coffe-Brunch",
  description: "BRUNCH|LAUNCH|COFFEE SHOP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${dancing_Script.variable} font-montserrat`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
