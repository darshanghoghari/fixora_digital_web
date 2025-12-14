"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={sizeClasses[size]}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            width="40"
            height="40"
            rx="10"
            className="fill-primary"
          />
          <path
            d="M20 12L26 18H22V26H18V18H14L20 12Z"
            className="fill-primary-foreground"
          />
          <circle cx="20" cy="28" r="2" className="fill-primary-foreground" />
        </svg>
      </motion.div>
      <span className="text-xl md:text-2xl font-bold text-foreground transition-colors">
        ProviderApp
      </span>
    </Link>
  );
}

