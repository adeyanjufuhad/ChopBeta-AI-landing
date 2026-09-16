"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroIllustration } from "@/components/HeroIllustration";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const item = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : .54, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });
  return (
    <section className="overflow-hidden bg-[#FFFCF7] pb-14 pt-9 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-5">
        <div className="max-w-[590px]">
          <motion.div {...item(0)} className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary"><span aria-hidden="true" className="size-2 rounded-full bg-accent" />Coming soon</motion.div>
          <motion.h1 {...item(.08)} className="text-balance font-heading text-[42px] font-extrabold leading-[1.04] text-ink sm:text-[52px] lg:text-[64px]">Eat Smart.<br/><span className="text-primary">Live Well.</span><br/>Powered by AI.</motion.h1>
          <motion.p {...item(.16)} className="mt-5 max-w-[560px] text-pretty text-[17px] leading-7 text-muted sm:text-lg sm:leading-8">An AI-powered food decision platform built for Nigeria — connecting your goals, budget, and preferences with familiar local meals.</motion.p>
          <motion.div {...item(.24)} className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-l-full rounded-r-2xl bg-accent px-6 font-heading font-bold text-ink transition duration-150 hover:bg-[#D75A08] motion-safe:hover:-translate-y-px active:scale-[.98]">Join the Waitlist <span aria-hidden="true" className="ml-2">→</span></a>
              <a href="#how-it-works" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-control border border-primary/30 px-6 font-heading font-bold text-primary transition hover:bg-[#EAF4EB] motion-safe:hover:-translate-y-px">See How It Works</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="font-semibold text-ink/70">App coming soon</span><span aria-hidden="true">·</span><span>iOS planned</span><span aria-hidden="true">·</span><span>Android planned</span>
            </div>
          </motion.div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
