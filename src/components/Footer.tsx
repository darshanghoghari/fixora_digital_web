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
} from "lucide-react";

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
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="col-span-1 lg:col-span-2">
              <Logo size="md" className="mb-6" />
              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed text-sm">
                {siteData.description}
              </p>

              <div className="mb-6">
                <p className="text-foreground font-medium mb-4 text-sm">
                  For better experience, download the app now
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black hover:bg-black/90 text-white px-4 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                    aria-label="Download on App Store"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] leading-tight">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black hover:bg-black/90 text-white px-4 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                    aria-label="Get it on Google Play"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] leading-tight">
                        GET IT ON
                      </span>
                      <span className="text-sm font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <p>
                      {siteData.address.street}, {siteData.address.suite}
                    </p>
                    <p>
                      {siteData.address.city}, {siteData.address.state}{" "}
                      {siteData.address.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${siteData.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {siteData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6 text-base uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6 text-base uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6 text-base uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources &&
                  FOOTER_LINKS.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-block group"
                      >
                        <span className="group-hover:translate-x-1 inline-block transition-transform">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-muted-foreground text-sm text-center md:text-left">
                © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-black transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:border-transparent hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
