import { Reveal } from "@/components/Reveal";

const problems = [
  ["Busy days. Limited food options.", "Classes, work, family life, and tight schedules can make balanced meals harder to plan."],
  ["Your budget should be part of the plan.", "Food recommendations should fit what you can spend and what’s available around you."],
  ["Local food deserves local intelligence.", "Amala, Efo Riro, beans, and plantain should belong in the conversation."],
];

export function ProblemSection() {
  return (
    <section id="about" className="anchor-section bg-alternate section-pad">
      <div className="section-shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <Reveal className="max-w-xl"><p className="mb-3 font-heading text-sm font-bold text-primary">WHY CHOP BETA</p><h2 className="section-title">Eating Well Shouldn’t Be This Complicated</h2><p className="section-copy mt-5">Food decisions should reflect the realities of your day, your wallet, and the meals you already know.</p></Reveal>
        <div className="border-t border-black/15">
          {problems.map(([title, body], index) => <Reveal key={title} delay={index * .07}><article className="grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[48px_1fr] sm:gap-5"><span className="font-heading text-xl font-bold text-accent">0{index + 1}</span><div><h3 className="text-balance font-heading text-xl font-bold">{title}</h3><p className="mt-2 max-w-xl text-pretty leading-7 text-muted">{body}</p></div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
