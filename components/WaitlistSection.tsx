"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { AfricanPattern } from "@/components/AfricanPattern";
import { DownloadButtons } from "@/components/DownloadButtons";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { WAITLIST_EMBED_URL, WAITLIST_FORM_URL } from "@/lib/links";

const perks = [
  "Priority early access when the app goes live",
  "Help shape Chop Beta — a quick 5–7 minute survey",
  "One ping on launch day. No spam.",
];

export function WaitlistSection() {
  const [showForm, setShowForm] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="download" className="anchor-section section-pad">
      <div className="section-shell">
        <Reveal from="scale">
          <div id="waitlist" className="anchor-section relative overflow-hidden rounded-[32px] bg-primary px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <AfricanPattern className="opacity-[.18]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div className="min-w-0">
                <h2 className="text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
                  The app is coming. Don’t miss it.
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/80">
                  We’re building something that actually fits your life, your wallet, and your plate. Download early access for Android or iPhone by joining the waitlist.
                </p>
                <DownloadButtons tone="light" className="mt-8" />
              </div>

              <div className="rounded-card border border-white/15 bg-forest p-6 sm:p-8">
                <p className="font-heading text-lg font-bold">What you get on the waitlist</p>
                <ul className="mt-5 space-y-4">
                  {perks.map((perk, index) => (
                    <motion.li
                      key={perk}
                      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: reduceMotion ? 0 : .5, delay: reduceMotion ? 0 : .3 + index * .12, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-3 text-white/90"
                    >
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-pepper text-ink"><CheckIcon className="size-3.5" /></span>
                      <span className="leading-6">{perk}</span>
                    </motion.li>
                  ))}
                </ul>
                <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" className="focus-ring btn-primary mt-8 w-full text-base">
                  Join the Waitlist <ArrowIcon direction="up-right" className="size-4" />
                </a>
                <button
                  type="button"
                  aria-expanded={showForm}
                  aria-controls="waitlist-form"
                  onClick={() => setShowForm((value) => !value)}
                  className="focus-ring mt-3 w-full rounded-full py-2 text-sm font-bold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
                >
                  {showForm ? "Hide the form" : "Or fill it right here"}
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {showForm && (
                <motion.div
                  id="waitlist-form"
                  initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: reduceMotion ? 0 : .35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden"
                >
                  <div className="mt-10 overflow-hidden rounded-card bg-white shadow-soft">
                    <iframe
                      src={WAITLIST_EMBED_URL}
                      title="Chop Beta AI waitlist form"
                      className="block h-[75vh] min-h-[560px] w-full border-0"
                    >
                      Loading…
                    </iframe>
                  </div>
                  <p className="mt-3 text-center text-sm text-white/70">
                    Form not loading?{" "}
                    <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" className="focus-ring rounded font-bold text-white underline">Open it in a new tab</a>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
