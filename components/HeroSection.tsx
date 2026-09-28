"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AfricanPattern } from "@/components/AfricanPattern";
import { DownloadButtons } from "@/components/DownloadButtons";
import { HeroIllustration } from "@/components/HeroIllustration";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { Parallax } from "@/components/ScrollEffects";
import { WAITLIST_FORM_URL } from "@/lib/links";

const dishes = ["Jollof Rice", "Efo Riro", "Amala", "Moi Moi", "Akara", "Beans & Dodo", "Pepper Soup", "Egusi", "Ofada Stew", "Yam Porridge", "Suya", "Okra Soup"];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, .75], reduceMotion ? [1, 1] : [1, .2]);
  const artY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110]);
  const artScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, .94]);
  const item = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });
  return (
    <section ref={hero} className="relative bg-cream overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <Parallax distance={90}><AfricanPattern className="opacity-[.08]" /></Parallax>
      <div className="section-shell relative grid items-center gap-12 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:pb-24">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="min-w-0 max-w-[600px]">
          <motion.h1 {...item(0)} className="text-balance font-heading text-[44px] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[72px]">
            Eat Smart.<br /><span className="text-primary">Live Well.</span><br />Powered by AI.
          </motion.h1>
          <motion.p {...item(.16)} className="mt-6 max-w-[540px] text-pretty text-lg leading-8 text-muted">
            An AI-powered food decision platform built for Nigeria — connecting your goals, budget, and preferences with familiar local meals.
          </motion.p>
          <motion.div {...item(.24)} className="mt-8">
            <DownloadButtons />
            <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" className="focus-ring group mt-5 inline-flex items-center gap-1.5 rounded font-heading text-sm font-bold text-primary">
              Or join the waitlist for early access
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
          <motion.ul {...item(.32)} className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink/70">
            {["Health-aware", "Halal-safe", "Budget-friendly", "Naija meals first"].map((point) => (
              <li key={point} className="inline-flex items-center gap-1.5"><span className="inline-flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary"><CheckIcon className="size-3" /></span>{point}</li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div style={{ y: artY, scale: artScale }}>
          <HeroIllustration />
        </motion.div>
      </div>

      <div className="relative border-y border-ink/10 bg-forest py-4 text-white">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
            {[...dishes, ...dishes].map((dish, index) => (
              <span key={index} aria-hidden={index >= dishes.length} className="inline-flex shrink-0 items-center gap-8 font-heading text-lg font-bold">
                {dish}
                <svg aria-hidden="true" viewBox="0 0 12 12" className="size-3 text-pepper"><path d="M6 0 12 6 6 12 0 6Z" fill="currentColor" /></svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
