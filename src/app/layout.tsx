import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/constants/navigation";
import contentData from "@/data/content.json";
import JsonLd from "@/components/seo/JsonLd";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF7A00",
};

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: contentData.seo.metaDescription,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    title: SITE_NAME,
    description: contentData.seo.metaDescription,
    url: contentData.site.url,
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
    title: SITE_NAME,
    description: contentData.seo.metaDescription,
    creator: contentData.seo.twitterHandle,
    images: [contentData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-text-primary`}
        suppressHydrationWarning
      >
        <Providers>
          <Toaster position="bottom-right" />
          <Loader />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20 pb-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
