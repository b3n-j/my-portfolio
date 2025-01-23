"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: string;
  to?: string;
  height?: string;
}

export function HighlightedText({
  children,
  className,
  delay = 0.5,
  duration = 0.8,
  from = "from-indigo-600/30",
  to = "to-violet-600/30",
  height = "110%",
}: HighlightedTextProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: `100% ${height}` }}
      transition={{ delay, duration, ease: "easeInOut" }}
      className={cn(
        "relative inline-block",
        `bg-gradient-to-r ${from} ${to}`,
        "bg-no-repeat bg-left-bottom",
        className
      )}
    >
      {children}
    </motion.span>
  );
} 