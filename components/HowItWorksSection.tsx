import { AfricanPattern } from "@/components/AfricanPattern";
import { Reveal } from "@/components/Reveal";
import { DrawLine, Parallax } from "@/components/ScrollEffects";
import { StepIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Set up your profile", body: "Your health conditions, allergies, halal needs, budget and household size. You only do this once.", icon: "profile" as const, tone: "bg-primary text-white" },
  { title: "Get a meal suggestion", body: "Ask for breakfast, lunch, dinner or an occasion. The AI suggests a meal, and it’s checked against your profile before you see it.", icon: "brain" as const, tone: "bg-accent text-white" },
  { title: "Get your shopping list", body: "Every ingredient in local market units like mudu and paint rubber, with local prices.", icon: "list" as const, tone: "bg-pepper text-ink" },
  { title: "Order from the market", body: "Send your list to a market vendor through WhatsApp and get updates at every step.", icon: "chat" as const, tone: "bg-tomato text-white" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="anchor-section section-pad relative overflow-hidden bg-alternate">
      <Parallax distance={70}><AfricanPattern className="opacity-[.06]" /></Parallax>
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">From profile to plate in four steps</h2>
          <p className="section-copy mt-4">When the app launches, “what should I eat?” goes from a daily headache to a few taps.</p>
        </Reveal>
        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DrawLine className="absolute left-[12.5%] right-[12.5%] top-[52px] hidden lg:block" />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * .15} className="relative">
              <article className="flex h-full flex-col items-center rounded-card px-4 pb-8 pt-2 text-center">
                <Reveal from="pop" delay={.15 + index * .15} className="relative">
                  <div className={cn("relative flex size-[104px] items-center justify-center rounded-[32px] shadow-soft", step.tone)}>
                    <StepIcon type={step.icon} />
                  </div>
                  <span className="absolute -right-3 -top-3 inline-flex size-9 items-center justify-center rounded-full border-4 border-alternate bg-ink font-heading text-sm font-extrabold text-white">{index + 1}</span>
                </Reveal>
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
