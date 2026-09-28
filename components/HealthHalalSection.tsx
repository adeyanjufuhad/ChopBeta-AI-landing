import Image from "next/image";
import { CheckIcon, FeatureIcon, UiIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const profileChips = ["Halal", "Type 2 diabetes", "Groundnut allergy", "Student budget"];

const suggestions = [
  { meal: "Pork pepper soup", verdict: "blocked" as const, reason: "Not halal" },
  { meal: "Groundnut soup & eba", verdict: "blocked" as const, reason: "Contains groundnut" },
  { meal: "Efo riro & rice", verdict: "passed" as const, reason: "Fits your profile", photo: "/images/meals/rice-efo-riro.jpg" },
];

export function HealthHalalSection() {
  return (
    <section id="health" className="anchor-section section-pad">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div className="min-w-0">
          <Reveal from="left">
            <h2 className="section-title">Health-aware and halal-safe. <span className="text-primary">Every single time.</span></h2>
            <p className="section-copy mt-5 max-w-xl">
              Tell ChopBeta about your health once. Before any meal reaches you, it goes through a strict, rules-based check against your profile. If it doesn’t fit, you never see it.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal delay={.1} className="h-full">
              <article className="lift-card h-full rounded-card border border-ink/10 bg-white p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-white"><FeatureIcon type="heart" className="size-7" /></span>
                <h3 className="mt-5 font-heading text-lg font-bold">Built around your health</h3>
                <ul className="mt-3 space-y-2 text-[15px] leading-6 text-muted">
                  {["Conditions like diabetes and hypertension", "Allergies and foods you avoid", "Your budget and household size"].map((item) => (
                    <li key={item} className="flex gap-2"><CheckIcon className="mt-1 size-4 shrink-0 text-primary" />{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={.2} className="h-full">
              <article className="lift-card h-full rounded-card border border-ink/10 bg-white p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-white"><FeatureIcon type="halal" className="size-7" /></span>
                <h3 className="mt-5 font-heading text-lg font-bold">Halal is a hard rule</h3>
                <p className="mt-3 text-[15px] leading-6 text-muted">
                  If you eat halal, anything that isn’t halal-safe is removed before you see it. It’s a fixed rule in the app, never a guess by the AI, held to a zero-tolerance standard.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={.3}>
            <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-muted">
              <UiIcon type="lock" className="mt-0.5 size-4 shrink-0 text-ink" />
              Your health details are sensitive. They’ll be encrypted and used only to shape your meals. ChopBeta helps you choose meals; it doesn’t replace advice from your doctor.
            </p>
          </Reveal>
        </div>

        <Reveal from="scale" delay={.1}>
          <div className="relative mx-auto max-w-md rounded-[28px] border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Your profile</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profileChips.map((chip) => <span key={chip} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{chip}</span>)}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted">AI suggestions → health &amp; halal check</p>
            <div role="list" className="mt-3 space-y-3">
              {suggestions.map((item, index) => {
                const passed = item.verdict === "passed";
                return (
                  <Reveal key={item.meal} from="right" delay={.3 + index * .25}>
                    <div role="listitem" className={cn("flex items-center gap-3 rounded-2xl border p-3", passed ? "border-primary/30 bg-primary/[.06]" : "border-tomato/20 bg-tomato/[.05]")}>
                      {passed && item.photo ? (
                        <Image src={item.photo} alt="" width={96} height={96} className="size-12 shrink-0 rounded-xl object-cover" />
                      ) : (
                        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-tomato"><UiIcon type="block" className="size-6" /></span>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className={cn("truncate font-heading text-[15px] font-bold", passed ? "text-ink" : "text-ink/50 line-through decoration-tomato/60")}>{item.meal}</p>
                        <p className={cn("text-xs font-semibold", passed ? "text-primary" : "text-tomato")}>{passed ? item.reason : `Blocked: ${item.reason.toLowerCase()}`}</p>
                      </div>
                      <Reveal from="pop" delay={.5 + index * .25}>
                        <span className={cn("inline-flex size-8 items-center justify-center rounded-full text-white", passed ? "bg-primary" : "bg-tomato")}>
                          {passed ? <CheckIcon className="size-4" /> : <UiIcon type="block" className="size-4" />}
                        </span>
                      </Reveal>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4 text-xs font-semibold text-ink/70">
              <UiIcon type="shield" className="size-4 shrink-0 text-primary" />
              Checked by strict rules, not left to the AI’s judgement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
