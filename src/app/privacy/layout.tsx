import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Read ${SITE_NAME}'s Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your privacy rights and data security.`,
  keywords: [
    "privacy policy",
    "data protection",
    "privacy rights",
    "data security",
    "personal information",
    "GDPR",
    "data privacy",
  ],
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Read ${SITE_NAME}'s Privacy Policy to understand how we collect, use, and protect your personal information.`,
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

