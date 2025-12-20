import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";
import contentData from "@/data/content.json";

export const metadata: Metadata = {
  title: `Download ${SITE_NAME} - iOS & Android App`,
  description: `Download ${SITE_NAME} mobile app for iOS and Android. Manage your service provider business on the go with real-time notifications, secure payments, and offline mode support. Available now for Android, iOS coming soon.`,
  keywords: [
    "download FIXORA",
    "FIXORA app download",
    "service provider app",
    "business management app",
    "iOS app download",
    "Android app download",
    "mobile app for service providers",
    "business app",
  ],
  openGraph: {
    title: `Download ${SITE_NAME} - iOS & Android App`,
    description: `Download ${SITE_NAME} mobile app for iOS and Android. Manage your service provider business on the go with real-time notifications, secure payments, and offline mode support.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Download ${SITE_NAME} - iOS & Android App`,
    description: `Download ${SITE_NAME} mobile app for iOS and Android. Manage your service provider business on the go.`,
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
