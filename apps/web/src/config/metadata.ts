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
  OPEN_GRAPH_IMAGE_URL: "/assets/opengraph-image.png",
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
        url: info.OPEN_GRAPH_IMAGE_URL,
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
    images: [info.OPEN_GRAPH_IMAGE_URL],
    creator: "@Jasper_JJA",
  },
};
