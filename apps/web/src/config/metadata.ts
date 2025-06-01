import { Metadata } from "next";

const info = {
  NAME: "Jihan Jasper Al Rashid",
  TITLE: "Jihan Jasper Al Rashid | Software Engineer",
  DESCRIPTION:
    "Software engineer specialized in crafting solid user interfaces and dependable APIs.",
  URL: "https://jaspercode.com",
  KEYWORDS: [
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "NestJS Developer",
  ],
};

export const metadata: Metadata = {
  title: info.TITLE,
  description: info.DESCRIPTION,
  authors: [{ name: info.NAME, url: info.URL }],
  keywords: info.KEYWORDS,
  alternates: {
    canonical: info.URL,
  },
  openGraph: {
    title: info.TITLE,
    description: info.DESCRIPTION,
    url: info.URL,
    siteName: info.TITLE,
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: info.TITLE,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: info.TITLE,
    description: info.DESCRIPTION,
    images: ["https://yourwebsite.com/twitter-image.jpg"],
    creator: "@Jasper_JJA",
  },
};
