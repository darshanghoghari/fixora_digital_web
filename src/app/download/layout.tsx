import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Download",
  description: `Download ${SITE_NAME} for iOS and Android and start growing your business today.`,
  openGraph: {
    title: `Download | ${SITE_NAME}`,
    description: `Download ${SITE_NAME} for iOS and Android and start growing your business today.`,
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

