"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FlowNodeProps {
  title: string;
  description?: string;
  index: number;
  isActive: boolean;
  delay?: number;
}

export default function FlowNode({
  title,
  description,
  index,
  isActive,
  delay = 0,
}: FlowNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.9, y: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className="relative"
    >
      <div
        className={`relative p-4 md:p-6 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-primary text-white shadow-lg shadow-primary/30"
            : "bg-card border border-border text-foreground"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              isActive ? "bg-white/20" : "bg-primary/20"
            }`}
          >
            <Check
              className={`w-4 h-4 ${isActive ? "text-white" : "text-primary"}`}
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">{title}</h4>
            {description && (
              <p
                className={`text-sm ${
                  isActive ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}


