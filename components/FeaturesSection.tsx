import { FeatureIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const features = [
  { title: "AI Nutritional Mapping", body: "Planned insights into how your meals align with your nutritional goals.", icon: "mapping" as const },
  { title: "Nigerian Food Intelligence", body: "Built around swallows, soups, rice bowls, beans, and other familiar meals.", icon: "local" as const },
  { title: "Predictive Meal Scheduling", body: "Plan recurring meals days or weeks ahead.", icon: "schedule" as const },
  { title: "Everyday Wellbeing", body: "Support more informed, consistent food choices.", icon: "wellbeing" as const },
];

export function FeaturesSection() {
  return (
    <section id="features" className="anchor-section bg-alternate section-pad">
      <div className="section-shell">
        <Reveal className="max-w-2xl"><p className="mb-3 font-heading text-sm font-bold text-primary">BUILT FOR REAL LIFE</p><h2 className="section-title">What Chop Beta AI Will Do</h2><p className="section-copy mt-4">Designed around everyday wellbeing and local food intelligence.</p></Reveal>
        <div className="mt-12 grid border-t border-black/15 sm:grid-cols-2">
          {features.map((feature, index) => <Reveal key={feature.title} delay={index * .07} className="h-full"><article className={cn("h-full border-b border-black/15 py-7 sm:p-8", index % 2 === 0 && "sm:border-r")}><div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-[#E5F2E7]"><FeatureIcon type={feature.icon}/></div><h3 className="text-balance font-heading text-xl font-bold">{feature.title}</h3><p className="mt-3 max-w-md text-pretty leading-7 text-muted">{feature.body}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
