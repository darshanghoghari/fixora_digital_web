import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white hover:bg-primary-dark shadow-[var(--shadow-sm)]",
        secondary:
          "border-transparent bg-surface text-text-primary hover:bg-gray-200",
        destructive:
          "border-transparent bg-danger text-white hover:bg-red-700 shadow-[var(--shadow-sm)]",
        outline: "text-text-primary border-border",
        dark: "border-transparent bg-gray-900 text-white shadow-[var(--shadow-sm)]"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
