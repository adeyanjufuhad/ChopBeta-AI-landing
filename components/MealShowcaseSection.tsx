"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowIcon } from "@/components/Icons";
import { MealPhoto, type MealPhotoKey } from "@/components/MealPhotos";
import { Reveal } from "@/components/Reveal";

const meals: { name: string; type: MealPhotoKey; tags: string[] }[] = [
  { name: "Jollof Rice & Plantain", type: "jollof", tags: ["Rice-based", "Tomato stew", "Party favourite"] },
  { name: "Egusi Soup", type: "egusi", tags: ["Melon seed", "Leafy greens", "Soup & swallow"] },
  { name: "Rice & Efo Riro", type: "efoRice", tags: ["Leafy greens", "Rice-based", "Iron-rich"] },
  { name: "Ofada Stew", type: "ofada", tags: ["Pepper stew", "Assorted meat", "Spicy"] },
  { name: "Eba & Native Soup", type: "eba", tags: ["Garri", "Soup & swallow", "Hearty"] },
  { name: "Pounded Yam & Fish Soup", type: "poundedYam", tags: ["Yam", "Fish", "Soup & swallow"] },
  { name: "Fish Stew", type: "fishStew", tags: ["Protein-rich", "Pepper stew", "Pairs with anything"] },
  { name: "Rice & Chicken Stew", type: "chickenStew", tags: ["Rice-based", "Veggie-packed", "Family meal"] },
  { name: "Egg & Avocado Salad", type: "eggAvocado", tags: ["Light meal", "Healthy fats", "No cooking stress"] },
  { name: "Fruit Bowl", type: "fruit", tags: ["Fresh fruit", "Snack", "Naturally sweet"] },
];

export function MealShowcaseSection() {
  const row = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const scroll = (direction: number) => row.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  return (
    <section id="meals" className="anchor-section section-pad overflow-hidden">
      <div className="section-shell">
        <Reveal className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="section-title">Meals that actually make sense <span className="text-primary">here</span></h2>
            <p className="section-copy mt-4">We’re building around the foods you already know and love.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button type="button" aria-label="Show previous meals" onClick={() => scroll(-1)} className="focus-ring inline-flex size-12 items-center justify-center rounded-full border border-ink/15 bg-white transition hover:border-primary hover:bg-primary hover:text-white"><ArrowIcon direction="left" /></button>
            <button type="button" aria-label="Show next meals" onClick={() => scroll(1)} className="focus-ring inline-flex size-12 items-center justify-center rounded-full border border-ink/15 bg-white transition hover:border-primary hover:bg-primary hover:text-white"><ArrowIcon /></button>
          </div>
        </Reveal>
        <div ref={row} className="meal-scroll -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          {meals.map((meal, index) => (
            <motion.article
              key={meal.name}
              initial={reduceMotion ? false : { opacity: 0, x: 60, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : Math.min(index, 3) * .1, ease: [0.22, 1, 0.36, 1] }}
              className="lift-card group w-[80vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-card border border-ink/10 bg-white">
              <MealPhoto type={meal.type} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Meal preview</p>
                <h3 className="mt-1.5 font-heading text-xl font-bold">{meal.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {meal.tags.map((tag) => <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-deep">{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="text-sm leading-6 text-muted">Example dishes. Recommendations will depend on your profile and preparation.</p>
      </div>
    </section>
  );
}
