import { AfricanPattern } from "@/components/AfricanPattern";
import { Reveal } from "@/components/Reveal";
import { StepIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Tell Us About You", body: "Share your goals, dietary preferences, and budget.", icon: "profile" as const, tone: "bg-primary text-white" },
  { title: "AI Maps Your Nutrition", body: "Get suggested local meals shaped around your profile.", icon: "brain" as const, tone: "bg-accent text-white" },
  { title: "Plan Your Meals Ahead", body: "Schedule meals with planned batch-prep and delivery options.", icon: "calendar" as const, tone: "bg-pepper text-ink" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="anchor-section section-pad relative overflow-hidden bg-alternate">
      <AfricanPattern className="opacity-[.06]" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow border-accent/25 text-accent-deep">How it will work</p>
          <h2 className="section-title mt-5">Three steps to smarter eating</h2>
          <p className="section-copy mt-4">When the app launches, here’s the plan:</p>
        </Reveal>
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[17%] right-[17%] top-[52px] hidden border-t-2 border-dashed border-ink/15 md:block" />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * .1} className="relative">
              <article className="flex h-full flex-col items-center rounded-card px-6 pb-8 pt-2 text-center">
                <div className="relative">
                  <div className={cn("relative flex size-[104px] items-center justify-center rounded-[32px] shadow-soft", step.tone)}>
                    <StepIcon type={step.icon} />
                  </div>
                  <span className="absolute -right-3 -top-3 inline-flex size-9 items-center justify-center rounded-full border-4 border-alternate bg-ink font-heading text-sm font-extrabold text-white">{index + 1}</span>
                </div>
                <h3 className="mt-7 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-pretty leading-7 text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
