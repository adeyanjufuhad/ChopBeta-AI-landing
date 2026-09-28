import { UiIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const problems = [
  { icon: "clock" as const, title: "Busy days. Limited food options.", body: "Classes, work, family life, and tight schedules can make balanced meals harder to plan.", tint: "bg-[#E7F5EC] text-primary", bar: "bg-primary" },
  { icon: "wallet" as const, title: "Your budget should be part of the plan.", body: "Food recommendations should fit what you can spend and what’s available around you.", tint: "bg-[#FFF3D6] text-[#A66F00]", bar: "bg-pepper" },
  { icon: "bowl" as const, title: "Local food deserves local intelligence.", body: "Amala, Efo Riro, beans, and plantain should belong in the conversation.", tint: "bg-[#FFE8D6] text-accent-deep", bar: "bg-accent" },
];

export function ProblemSection() {
  return (
    <section id="about" className="anchor-section section-pad">
      <div className="section-shell">
        <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="eyebrow border-primary/20 text-primary">Why Chop Beta</p>
            <h2 className="section-title mt-5">Eating well shouldn’t be <span className="text-accent">this complicated.</span></h2>
          </div>
          <p className="section-copy lg:pb-2">Food decisions should reflect the realities of your day, your wallet, and the meals you already know.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * .08} className="h-full">
              <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-white p-7">
                <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", problem.bar)} />
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className={cn("inline-flex size-14 items-center justify-center rounded-2xl", problem.tint)}><UiIcon type={problem.icon} className="size-7" /></span>
                  <span className="font-heading text-5xl font-extrabold text-ink/[.07]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-balance font-heading text-xl font-bold leading-snug">{problem.title}</h3>
                <p className="mt-3 text-pretty leading-7 text-muted">{problem.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
