"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckIcon, UiIcon } from "@/components/Icons";

export function HeroIllustration() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .7, delay: reduceMotion ? 0 : .1, ease: [0.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-[640px]">
      <div className="relative overflow-hidden rounded-[32px] border border-ink/10 bg-white p-3 shadow-soft sm:p-4">
        <Image src="/images/chop-beta-hero.png" alt="Circuit brain flowing into an orange fork, surrounded by Nigerian meals and fresh ingredients" width={1672} height={941} priority sizes="(max-width: 1023px) 94vw, 52vw" className="h-auto w-full rounded-[22px] object-contain" />
      </div>

      <div className="absolute -left-2 top-[12%] hidden animate-float rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-soft motion-reduce:animate-none sm:block lg:-left-8">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Today&apos;s pick</p>
        <p className="inline-flex items-center gap-1.5 font-heading text-sm font-extrabold text-ink">Efo Riro + Amala <UiIcon type="leaf" className="size-4 text-primary" /></p>
      </div>
      <div className="absolute -right-2 bottom-[14%] hidden animate-float-slow rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-soft motion-reduce:animate-none sm:block lg:-right-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Fits your budget</p>
        <p className="inline-flex items-center gap-1.5 font-heading text-sm font-extrabold text-primary">Under ₦2,500 <CheckIcon className="size-4" /></p>
      </div>
      <div className="absolute -bottom-5 left-[18%] hidden rounded-full bg-accent px-4 py-2 font-heading text-sm font-bold text-white shadow-soft sm:inline-flex sm:items-center sm:gap-1.5">
        <UiIcon type="chili" className="size-4" /> Naija-first AI
      </div>
    </motion.div>
  );
}
