"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { WAITLIST_FORM_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

const links = [
  { label: "Why Chop Beta", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Health & Halal", href: "#health" },
  { label: "Features", href: "#features" },
  { label: "Meals", href: "#meals" },
  { label: "Get the App", href: "#download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex h-16 max-w-content items-center justify-between rounded-full pl-2 pr-2 transition-all duration-300 sm:pl-3",
          scrolled || open ? "border border-ink/10 bg-white shadow-soft" : "border border-transparent bg-transparent",
        )}
      >
        <a href="#main-content" aria-label="Chop Beta AI home" className="focus-ring rounded-full"><Logo /></a>
        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-primary/10 hover:text-primary">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" className="focus-ring btn-primary hidden min-h-11 px-5 text-sm shadow-none sm:inline-flex">
            Join Waitlist <ArrowIcon direction="up-right" className="size-4" />
          </a>
          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)} className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white xl:hidden">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id="mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : .18, ease: "easeOut" }} className="mx-auto mt-2 max-w-content rounded-3xl border border-ink/10 bg-white p-3 shadow-soft xl:hidden">
            <div className="flex flex-col">
              {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="focus-ring rounded-2xl px-4 py-3 font-semibold text-ink hover:bg-cream">{link.label}</a>)}
              <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="focus-ring btn-primary mt-2 w-full">Join Waitlist <ArrowIcon direction="up-right" className="size-4" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
