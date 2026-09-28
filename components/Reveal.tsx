"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type From = "up" | "left" | "right" | "scale" | "pop";

const hidden: Record<From, TargetAndTransition> = {
  up: { opacity: 0, y: 32 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.92, y: 24 },
  pop: { opacity: 0, scale: 0.6, rotate: -8 },
};

export function Reveal({ children, className, delay = 0, from = "up" }: PropsWithChildren<{ className?: string; delay?: number; from?: From }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : hidden[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : from === "pop"
            ? { type: "spring", stiffness: 260, damping: 18, delay }
            : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
