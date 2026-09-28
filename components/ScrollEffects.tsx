"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

// Thin reading-progress bar pinned to the top of the page.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-accent" />;
}

// Moves its children vertically at a different speed than the page while the parent section is on screen.
// Negative distance drifts up as you scroll down, positive drifts down.
export function Parallax({ children, className, distance = 60 }: PropsWithChildren<{ className?: string; distance?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-distance, distance]);
  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-24">
        {children}
      </motion.div>
    </div>
  );
}

// A dashed connector that draws itself left-to-right as the section scrolls into view.
export function DrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 40%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0, 1]);
  return (
    <div ref={ref} aria-hidden="true" className={className}>
      <motion.div style={{ scaleX }} className="h-0 origin-left border-t-2 border-dashed border-primary/40" />
    </div>
  );
}
