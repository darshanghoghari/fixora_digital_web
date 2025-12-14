import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Services",
  description: `Discover the comprehensive services we offer to help providers succeed.`,
  openGraph: {
    title: `Services | ${SITE_NAME}`,
    description: `Discover the comprehensive services we offer to help providers succeed.`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

