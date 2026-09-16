"use client";

import { useRef } from "react";
import { ArrowIcon } from "@/components/Icons";
import { MealIllustration } from "@/components/MealIllustrations";
import { Reveal } from "@/components/Reveal";

const meals = [
  { name: "Jollof Rice", type: "jollof" as const, tags: ["Rice-based", "Tomato stew", "One-pot meal"] },
  { name: "Efo Riro + Amala", type: "efo" as const, tags: ["Leafy greens", "Yam flour", "Soup & swallow"] },
  { name: "Moi Moi + Akara", type: "moi" as const, tags: ["Bean-based", "Steamed & fried", "Breakfast style"] },
  { name: "Beans & Fried Plantain", type: "beans" as const, tags: ["Bean-based", "Ripe plantain", "Comfort meal"] },
  { name: "Pepper Soup", type: "pepper" as const, tags: ["Spiced broth", "Warm bowl", "Herb seasoned"] },
];

export function MealShowcaseSection() {
  const row = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => row.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  return (
    <section id="meals" className="anchor-section section-pad">
      <div className="section-shell">
        <Reveal className="flex items-end justify-between gap-6"><div className="max-w-2xl"><p className="mb-3 font-heading text-sm font-bold text-accent">LOCAL BY DESIGN</p><h2 className="section-title">Meals That Actually Make Sense Here</h2><p className="section-copy mt-4">We’re building around the foods you already know and love.</p></div><div className="hidden gap-2 md:flex"><button type="button" aria-label="Show previous meals" onClick={() => scroll(-1)} className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-black/15 transition hover:border-primary hover:text-primary"><ArrowIcon direction="left"/></button><button type="button" aria-label="Show next meals" onClick={() => scroll(1)} className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-black/15 transition hover:border-primary hover:text-primary"><ArrowIcon/></button></div></Reveal>
        <div ref={row} className="meal-scroll -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          {meals.map((meal) => <article key={meal.name} className="lift-card w-[84vw] max-w-[336px] shrink-0 snap-start overflow-hidden rounded-card border border-black/10 bg-white"><MealIllustration type={meal.type}/><div className="p-5"><p className="mb-2 text-xs font-bold text-primary">Meal preview</p><h3 className="font-heading text-xl font-bold">{meal.name}</h3><div className="mt-4 flex flex-wrap gap-2">{meal.tags.map((tag) => <span key={tag} className="rounded-full bg-[#FFF0E6] px-3 py-1 text-xs font-semibold text-[#B54600]">{tag}</span>)}</div></div></article>)}
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">Illustrative meal previews. Recommendations will depend on your profile and preparation.</p>
      </div>
    </section>
  );
}
