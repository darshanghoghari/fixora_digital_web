"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[var(--z-fixed)] transition-all duration-[var(--animate-duration-normal)]",
        isScrolled || isMobileMenuOpen
          ? "bg-background shadow-[var(--shadow-sm)] border-b border-border"
          : "bg-background/95 backdrop-blur-md"
      )}
      suppressHydrationWarning
      role="banner"
    >
      <nav aria-label="Main Navigation">
        <Container>
          <div className="flex items-center justify-between h-[var(--spacing-16)] md:h-[var(--spacing-20)]">
            <Logo size="lg" className="flex-shrink-0" />

            <div className="hidden lg:flex items-center space-x-[var(--spacing-6)] xl:space-x-[var(--spacing-8)]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-primary hover:text-primary px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-md)] transition-all duration-[var(--animate-duration-normal)] font-medium text-[length:var(--text-nav)] relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-[var(--animate-duration-normal)]"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-[var(--spacing-4)] lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="text-text-primary"
              >
                {isMobileMenuOpen ? (
                  <X className="w-[var(--spacing-6)] h-[var(--spacing-6)]" />
                ) : (
                  <Menu className="w-[var(--spacing-6)] h-[var(--spacing-6)]" />
                )}
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background border-t border-border overflow-y-auto pb-[var(--spacing-10)] shadow-[var(--shadow-xl)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Container className="py-[var(--spacing-6)]">
                <div className="space-y-[var(--spacing-2)]">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-[var(--spacing-3)] px-[var(--spacing-4)] rounded-[var(--radius-md)] text-text-primary hover:text-primary hover:bg-primary-50 transition-all duration-[var(--animate-duration-normal)] font-medium text-[length:var(--text-nav)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
