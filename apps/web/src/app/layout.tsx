import { Footer } from "@/components/global/footer";
import { Header } from "@/components/global/header/header";
import { Providers } from "@/components/providers/providers";
import "@/styles/globals.css";
import {
  IBM_Plex_Sans as FontBackup,
  JetBrains_Mono as FontMono,
  Be_Vietnam_Pro as FontSans,
  Merriweather as FontSpecial,
} from "next/font/google";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-mono",
});

const fontBackup = FontBackup({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontBackup.variable} ${fontSpecial.variable} antialiased`}
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
