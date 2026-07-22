import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/constants/navigation";
import Logo from "./Logo";
import {
  ChevronRight,
} from "lucide-react";
import { AppleStoreButton, GooglePlayButton } from "./StoreButtons";
import { Container } from "@/components/ui/Container";
import { BodyMd, BodySm, H6 } from "@/components/ui/Typography";
import contentData from "@/data/content.json";

export default function Footer() {
  const siteData = contentData.site;

  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <Container>
        <div className="py-[var(--spacing-12)] md:py-[var(--spacing-16)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[var(--spacing-6)] md:gap-[var(--spacing-10)]">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Logo size="xl" className="mb-[var(--spacing-4)]" />
              <BodySm className="text-text-secondary max-w-md mb-[var(--spacing-5)]">
                {siteData.description}
              </BodySm>
            </div>

            <div className="mt-[var(--spacing-6)] sm:mt-0">
              <H6 className="mb-[var(--spacing-4)] text-text-primary uppercase tracking-wider text-xs">
                Product
              </H6>
              <ul className="space-y-[var(--spacing-2)]">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-[var(--animate-duration-normal)]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[var(--spacing-6)] sm:mt-0">
              <H6 className="mb-[var(--spacing-4)] text-text-primary uppercase tracking-wider text-xs">
                Company
              </H6>
              <ul className="space-y-[var(--spacing-2)]">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-[var(--animate-duration-normal)]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[var(--spacing-6)] sm:mt-0">
              <H6 className="mb-[var(--spacing-4)] text-text-primary uppercase tracking-wider text-xs">
                Resources
              </H6>
              <ul className="space-y-[var(--spacing-2)]">
                {FOOTER_LINKS.resources &&
                  FOOTER_LINKS.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-[var(--animate-duration-normal)]">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-[var(--spacing-8)] pt-[var(--spacing-8)] border-t border-border">
            <div className="flex flex-col items-center gap-[var(--spacing-4)]">
              <BodyMd className="text-text-primary font-medium text-center">
                For better experience, download the app now
              </BodyMd>
              <div className="flex flex-col sm:flex-row gap-[var(--spacing-3)] justify-center">
                <AppleStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>

          <div className="mt-[var(--spacing-10)] pt-[var(--spacing-8)] border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--spacing-6)]">
              <BodySm className="text-text-secondary text-center md:text-left">
                © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </BodySm>
              <div className="flex flex-col md:flex-row items-center gap-[var(--spacing-6)]">
                <div className="flex flex-wrap justify-center md:justify-end gap-[var(--spacing-4)]">
                  <Link
                    href="/privacy"
                    className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-text-secondary hover:text-primary hover:underline transition-all duration-[var(--animate-duration-normal)] text-[length:var(--text-body-sm)] inline-flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--animate-duration-normal)]" />
                    Cookie Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
