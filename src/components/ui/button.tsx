import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--color-primary))] text-white hover:bg-white hover:text-[hsl(var(--color-primary))] hover:border-2 hover:border-[hsl(var(--color-primary))] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-[hsl(var(--color-destructive))] text-[hsl(var(--color-destructive-foreground))] hover:bg-white hover:text-[hsl(var(--color-destructive))] hover:border-2 hover:border-[hsl(var(--color-destructive))] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-[hsl(var(--color-primary))] bg-transparent text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary))] hover:text-white hover:shadow-lg hover:-translate-y-0.5",
        secondary:
          "bg-[hsl(var(--color-secondary))] text-[hsl(var(--color-secondary-foreground))] hover:bg-white hover:text-[hsl(var(--color-primary))] hover:border-2 hover:border-[hsl(var(--color-primary))] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        ghost:
          "hover:bg-[hsl(var(--color-primary))] hover:text-white hover:shadow-md hover:-translate-y-0.5",
        link: "text-[hsl(var(--color-primary))] underline-offset-4 hover:underline hover:text-[hsl(var(--color-primary))]/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
