import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/constants/navigation";
import contentData from "@/data/content.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: contentData.seo.metaDescription,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    description: contentData.seo.metaDescription,
    images: [
      {
        url: contentData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description: contentData.seo.metaDescription,
    creator: contentData.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Providers>
          <Loader />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20 pb-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
