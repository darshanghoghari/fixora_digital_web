import type { Metadata } from "next";
import { SITE_NAME } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} support team.`,
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: `Get in touch with ${SITE_NAME} support team.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

