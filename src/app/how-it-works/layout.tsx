import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "How It Works",
  description: `Learn how ${SITE_NAME} works and get started in minutes.`,
  openGraph: {
    title: `How It Works | ${SITE_NAME}`,
    description: `Learn how ${SITE_NAME} works and get started in minutes.`,
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

