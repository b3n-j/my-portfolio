"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/app/_utils/class-names";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export function Section({ id, children, className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    margin: "-40% 0px -40% 0px",
    once: false 
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20,
      }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.section>
  );
} 