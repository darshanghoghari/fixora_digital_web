"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface WorkflowStep {
  title: string;
  description?: string;
}

interface WorkflowCardProps {
  title: string;
  description: string;
  steps: WorkflowStep[];
  icon: React.ReactNode;
  color: string;
  index: number;
}

export default function WorkflowCard({
  title,
  description,
  steps,
  icon,
  color,
  index,
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>

      <div className="space-y-4">
        {steps.map((step, stepIndex) => (
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
            className="flex items-start gap-4 group"
          >
            <div className="flex-shrink-0 mt-1">
              <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-foreground font-semibold mb-1">{step.title}</h4>
              {step.description && (
                <p className="text-sm text-muted-foreground">{step.description}</p>
              )}
            </div>
            {stepIndex < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stepIndex * 0.1 + 0.3 }}
                className="hidden md:flex items-center justify-center mt-2"
              >
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

