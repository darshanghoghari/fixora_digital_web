import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: `Cookie Settings | ${SITE_NAME}`,
  description: `Manage your cookie preferences for ${SITE_NAME}. Control essential, analytics, marketing, and functional cookies to customize your browsing experience.`,
  keywords: [
    "cookie settings",
    "cookie preferences",
    "cookie policy",
    "privacy settings",
    "cookie consent",
    "manage cookies",
  ],
  openGraph: {
    title: `Cookie Settings | ${SITE_NAME}`,
    description: `Manage your cookie preferences for ${SITE_NAME} and control how we use cookies.`,
    type: "website",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



