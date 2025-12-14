import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${SITE_NAME}.`,
  openGraph: {
    title: `FAQ | ${SITE_NAME}`,
    description: `Frequently asked questions about ${SITE_NAME}.`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

