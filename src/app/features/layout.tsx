import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Features",
  description: `Explore the powerful features that make ${SITE_NAME} the best choice for providers.`,
  openGraph: {
    title: `Features | ${SITE_NAME}`,
    description: `Explore the powerful features that make ${SITE_NAME} the best choice for providers.`,
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

