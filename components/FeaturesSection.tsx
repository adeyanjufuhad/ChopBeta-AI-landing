import { AfricanPattern } from "@/components/AfricanPattern";
import { FeatureIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const features = [
  { title: "AI Nutritional Mapping", body: "Planned insights into how your meals align with your nutritional goals.", icon: "mapping" as const, span: "md:col-span-2", chip: "bg-leaf text-white" },
  { title: "Nigerian Food Intelligence", body: "Built around swallows, soups, rice bowls, beans, and other familiar meals.", icon: "local" as const, span: "", chip: "bg-accent text-white" },
  { title: "Predictive Meal Scheduling", body: "Plan recurring meals days or weeks ahead.", icon: "schedule" as const, span: "", chip: "bg-pepper text-ink" },
  { title: "Everyday Wellbeing", body: "Support more informed, consistent food choices.", icon: "wellbeing" as const, span: "md:col-span-2", chip: "bg-tomato text-white" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="anchor-section section-pad relative overflow-hidden bg-ink text-white">
      <AfricanPattern className="opacity-[.22]" />
      <div className="section-shell relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow border-white/20 text-pepper">Built for real life</p>
          <h2 className="section-title mt-5 text-white">What Chop Beta AI will do</h2>
          <p className="section-copy mt-4 text-white/70">Designed around everyday wellbeing and local food intelligence.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * .07} className={cn("h-full", feature.span)}>
              <article className="group flex h-full flex-col justify-between gap-10 rounded-card border border-white/10 bg-[#1C2B23] p-7 transition duration-300 hover:border-white/25 hover:bg-[#223329] sm:p-8">
                <span className={cn("inline-flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6", feature.chip)}>
                  <FeatureIcon type={feature.icon} />
                </span>
                <div>
                  <h3 className="text-balance font-heading text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-3 max-w-md text-pretty leading-7 text-white/70">{feature.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
