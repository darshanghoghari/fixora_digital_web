import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} and our mission to empower service providers.`,
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME} and our mission to empower service providers.`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

