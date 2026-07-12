import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/constants/navigation";
import Logo from "./Logo";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { AppleStoreButton, GooglePlayButton } from "./StoreButtons";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18" strokeWidth="2.5" />
    <path d="M6 6l12 12" strokeWidth="1.2" />
    <path d="M7 7l10 10" strokeWidth="1.2" />
  </svg>
);
import contentData from "@/data/content.json";

export default function Footer() {
  const siteData = contentData.site;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Logo size="xl" className="mb-4" />
              <p className="text-muted-foreground max-w-md mb-5 leading-relaxed text-sm">
                {siteData.description}
              </p>

              {/* <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2.5 sm:gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed whitespace-nowrap">
                    {siteData.address.street}, {siteData.address.suite},{" "}
                    {siteData.address.city}, {siteData.address.state}{" "}
                    {siteData.address.zip}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${siteData.phone}`}
                    className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-colors text-xs sm:text-sm whitespace-nowrap"
                  >
                    {siteData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-colors text-xs sm:text-sm break-all sm:break-normal"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div> */}
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out text-xs sm:text-sm inline-flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300 ease-in-out">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out text-xs sm:text-sm inline-flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300 ease-in-out">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources &&
                  FOOTER_LINKS.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out text-xs sm:text-sm inline-flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-300 ease-in-out">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-4">
              <p className="text-foreground font-medium text-sm text-center">
                For better experience, download the app now
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <AppleStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
                © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                {/* <div className="flex items-center gap-2.5 md:gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:border-transparent hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div> */}
                <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 text-xs md:text-sm">
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out whitespace-nowrap inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out whitespace-nowrap inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-muted-foreground hover:text-[hsl(var(--color-secondary))] hover:underline transition-all duration-300 ease-in-out whitespace-nowrap inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                    Cookie Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
