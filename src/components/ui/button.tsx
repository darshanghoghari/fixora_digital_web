import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[length:var(--text-btn)] font-semibold transition-all duration-[var(--animate-duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 rounded-[var(--radius-button)]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-dark shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 border-2 border-transparent",
        destructive:
          "bg-danger text-white hover:bg-red-700 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 border-2 border-transparent",
        outline:
          "border-2 border-border bg-transparent text-text-primary hover:bg-surface hover:border-gray-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5",
        secondary:
          "bg-surface text-text-primary hover:bg-gray-200 shadow-[var(--shadow-md)] border-2 border-transparent",
        ghost:
          "hover:bg-surface hover:text-text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-gray-900 border-2 border-transparent hover:bg-gray-50 shadow-[var(--shadow-md)]",
      },
      size: {
        default: "h-[var(--spacing-12)] px-[var(--spacing-6)] py-[var(--spacing-3)]",
        sm: "h-[var(--spacing-10)] px-[var(--spacing-4)] text-[length:var(--text-body-sm)]",
        lg: "h-[var(--spacing-16)] px-[var(--spacing-8)] text-[length:var(--text-h6)]",
        icon: "h-[var(--spacing-12)] w-[var(--spacing-12)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
