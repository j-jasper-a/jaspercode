import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header/header";
import { Providers } from "@/components/providers/providers";
import "@/styles/globals.css";
import {
  Inter as FontBackup,
  Merriweather as FontSpecial,
} from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";

const fontMain = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-main",
});

const fontBackup = FontBackup({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-backup",
});

const fontSpecial = FontSpecial({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-special",
});

export { metadata } from "@/config/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontMain.variable} ${fontBackup.variable} ${fontSpecial.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
