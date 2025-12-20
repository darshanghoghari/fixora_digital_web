import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Read ${SITE_NAME}'s Terms of Service to understand the rules and guidelines for using our platform. Learn about user responsibilities, payment terms, and service usage policies.`,
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "platform rules",
    "user responsibilities",
  ],
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Read ${SITE_NAME}'s Terms of Service to understand the rules and guidelines for using our platform.`,
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

