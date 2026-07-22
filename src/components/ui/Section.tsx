import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: "sm" | "md" | "lg" | "none";
  background?: "default" | "surface" | "primary" | "dark" | "transparent";
}

export function Section({
  children,
  className,
  spacing = "md",
  background = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        {
          "py-[var(--spacing-8)] md:py-[var(--spacing-12)]": spacing === "sm",
          "py-[var(--spacing-12)] md:py-[var(--spacing-20)]": spacing === "md",
          "py-[var(--spacing-20)] md:py-[var(--spacing-30)]": spacing === "lg",
          "py-0": spacing === "none",
          
          "bg-background text-text-primary": background === "default",
          "bg-surface text-text-primary": background === "surface",
          "bg-primary text-white": background === "primary",
          "bg-gray-900 text-white": background === "dark",
          "bg-transparent": background === "transparent",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
