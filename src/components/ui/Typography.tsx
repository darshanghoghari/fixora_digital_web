import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function DisplayXL({ className, children, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-display-xl)] font-black leading-tight", className)} {...props}>
      {children}
    </Component>
  );
}

export function DisplayLg({ className, children, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-display-lg)] font-extrabold leading-tight", className)} {...props}>
      {children}
    </Component>
  );
}

export function DisplayMd({ className, children, as: Component = "h3", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-display-md)] font-bold leading-tight", className)} {...props}>
      {children}
    </Component>
  );
}

export function H1({ className, children, as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h1)] font-bold leading-snug tracking-tight", className)} {...props}>
      {children}
    </Component>
  );
}

export function H2({ className, children, as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h2)] font-bold leading-snug tracking-tight", className)} {...props}>
      {children}
    </Component>
  );
}

export function H3({ className, children, as: Component = "h3", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h3)] font-semibold leading-snug", className)} {...props}>
      {children}
    </Component>
  );
}

export function H4({ className, children, as: Component = "h4", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h4)] font-semibold leading-snug", className)} {...props}>
      {children}
    </Component>
  );
}

export function H5({ className, children, as: Component = "h5", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h5)] font-medium leading-normal", className)} {...props}>
      {children}
    </Component>
  );
}

export function H6({ className, children, as: Component = "h6", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-h6)] font-medium leading-normal", className)} {...props}>
      {children}
    </Component>
  );
}

export function BodyLg({ className, children, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-body-lg)] leading-relaxed text-text-secondary", className)} {...props}>
      {children}
    </Component>
  );
}

export function BodyMd({ className, children, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-body-md)] leading-relaxed text-text-secondary", className)} {...props}>
      {children}
    </Component>
  );
}

export function BodySm({ className, children, as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-body-sm)] leading-relaxed text-text-secondary", className)} {...props}>
      {children}
    </Component>
  );
}

export function Caption({ className, children, as: Component = "span", ...props }: TypographyProps) {
  return (
    <Component className={cn("text-[length:var(--text-caption)] leading-normal text-text-secondary", className)} {...props}>
      {children}
    </Component>
  );
}
