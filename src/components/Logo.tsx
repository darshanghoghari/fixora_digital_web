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
    sm: "w-10 h-10 md:w-12 md:h-12",
    md: "w-12 h-12 md:w-16 md:h-16",
    lg: "w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24",
    xl: "w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32",
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
          fill
          sizes="(max-width: 768px) 80px, 128px"
          className="object-contain"
          priority
          unoptimized
        />
      </motion.div>
    </Link>
  );
}

