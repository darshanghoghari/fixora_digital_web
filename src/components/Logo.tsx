"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(sizeClasses[size], "relative flex-shrink-0")}
      >
        <Image
          src="/fixora_app_icon.png"
          alt="FIXORA Logo"
          width={size === "sm" ? 48 : size === "md" ? 64 : size === "lg" ? 96 : 128}
          height={size === "sm" ? 48 : size === "md" ? 64 : size === "lg" ? 96 : 128}
          className="w-full h-full object-contain"
          priority
          unoptimized
        />
      </motion.div>
    </Link>
  );
}

