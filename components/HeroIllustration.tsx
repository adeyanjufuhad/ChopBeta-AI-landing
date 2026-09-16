"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroIllustration() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .58, delay: reduceMotion ? 0 : .1, ease: [0.22,1,.36,1] }} className="mx-auto w-full max-w-[650px]">
      <Image src="/images/chop-beta-hero.png" alt="Circuit brain flowing into an orange fork, surrounded by Nigerian meals and fresh ingredients" width={1672} height={941} priority sizes="(max-width: 1023px) 94vw, 52vw" className="h-auto w-full object-contain" />
    </motion.div>
  );
}
