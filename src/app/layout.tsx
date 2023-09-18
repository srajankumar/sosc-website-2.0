import { siteConfig } from "@/config/site";
import ScrollObserver from "@/hooks/use-scroll-observer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["sosc", "Sahyadri Open Source Community"],
  creator: "so-sc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sahyadri_osc",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Cursor />
        <ScrollObserver>{children}</ScrollObserver>
        <Footer />
      </body>
    </html>
  );
}
