import { Reveal } from "@/components/Reveal";
import { StepIcon } from "@/components/Icons";

const steps = [
  { title: "Tell Us About You", body: "Share your goals, dietary preferences, and budget.", icon: "profile" as const },
  { title: "AI Maps Your Nutrition", body: "Get suggested local meals shaped around your profile.", icon: "brain" as const },
  { title: "Plan Your Meals Ahead", body: "Schedule meals with planned batch-prep and delivery options.", icon: "calendar" as const },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="anchor-section section-pad">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center"><p className="mb-3 font-heading text-sm font-bold text-accent">HOW IT WILL WORK</p><h2 className="section-title">Three Steps to Smarter Eating</h2><p className="section-copy mt-4">When the app launches, here’s the plan:</p></Reveal>
        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-primary/20 md:block" />
          {steps.map((step, index) => <Reveal key={step.title} delay={index * .07} className="relative"><article className="text-center"><div className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-primary/20 bg-[#EAF4EB]"><StepIcon type={step.icon}/><span className="absolute -right-2 -top-3 font-heading text-4xl font-extrabold text-accent">{index + 1}</span></div><h3 className="mt-6 font-heading text-xl font-bold">{step.title}</h3><p className="mx-auto mt-3 max-w-xs text-pretty leading-7 text-muted">{step.body}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
