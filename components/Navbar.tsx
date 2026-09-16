"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Meals", href: "#meals" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header className={`sticky top-0 z-40 bg-[#FFFCF7]/95 ${scrolled || open ? "border-b border-black/10" : "border-b border-transparent"}`}>
      <nav className="section-shell flex h-[76px] items-center justify-between lg:h-20" aria-label="Main navigation">
        <a href="#main-content" aria-label="Chop Beta AI home" className="focus-ring rounded-control"><Logo /></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="focus-ring rounded text-sm font-semibold text-ink transition-colors hover:text-primary">{link.label}</a>)}
          <a href="#waitlist" className="focus-ring inline-flex min-h-11 items-center rounded-control bg-accent px-5 font-heading text-sm font-bold text-ink transition duration-150 hover:bg-[#D75A08] motion-safe:hover:-translate-y-px">Join Waitlist</a>
        </div>
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)} className="focus-ring inline-flex size-11 items-center justify-center rounded-control border border-black/10 md:hidden">
          <span className="sr-only">Menu</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </nav>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id="mobile-menu" initial={reduceMotion ? false : { opacity: 0, scaleY: .96 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: .96 }} transition={{ duration: reduceMotion ? 0 : .18, ease: "easeOut" }} style={{ transformOrigin: "top" }} className="absolute inset-x-0 top-full border-b border-black/10 bg-white px-5 py-5 shadow-sm md:hidden">
            <div className="mx-auto flex max-w-content flex-col gap-1">
              {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="focus-ring rounded-control px-3 py-3 font-semibold text-ink hover:bg-alternate">{link.label}</a>)}
              <a href="#waitlist" onClick={() => setOpen(false)} className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center rounded-control bg-accent px-5 font-heading font-bold text-ink">Join Waitlist</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
