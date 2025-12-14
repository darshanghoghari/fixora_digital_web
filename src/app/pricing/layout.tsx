import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent pricing and commission model for ${SITE_NAME} providers.`,
  openGraph: {
    title: `Pricing | ${SITE_NAME}`,
    description: `Transparent pricing and commission model for ${SITE_NAME} providers.`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

