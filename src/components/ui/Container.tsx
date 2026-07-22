import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function Container({
  children,
  className,
  maxWidth = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--spacing-4)] sm:px-[var(--spacing-6)] lg:px-[var(--spacing-8)]",
        {
          "max-w-screen-sm": maxWidth === "sm",
          "max-w-screen-md": maxWidth === "md",
          "max-w-screen-lg": maxWidth === "lg",
          "max-w-screen-xl": maxWidth === "xl",
          "max-w-screen-2xl": maxWidth === "2xl",
          "max-w-full": maxWidth === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
