import { AfricanPattern } from "@/components/AfricanPattern";
import { FeatureIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/ScrollEffects";
import { cn } from "@/lib/utils";

const features = [
  { title: "Meal suggestions made for you", body: "Tell it the time of day, the occasion, your mood or what’s already in the house. The AI suggests one meal that fits your goals and your pocket.", icon: "brain" as const, span: "md:col-span-2", chip: "bg-leaf text-white" },
  { title: "Health-aware by default", body: "Suggestions respect conditions like diabetes and hypertension, plus your allergies.", icon: "heart" as const, span: "", chip: "bg-tomato text-white" },
  { title: "Halal-safe, always", body: "Halal needs are enforced by strict rules, not left to the AI.", icon: "halal" as const, span: "", chip: "bg-accent text-white" },
  { title: "Shopping lists in market units", body: "Ingredients come in the units you actually buy with at the market, like mudu, derbi and paint rubber, priced from local markets.", icon: "basket" as const, span: "md:col-span-2", chip: "bg-pepper text-ink" },
  { title: "Order from market vendors", body: "Send your list to a vendor over WhatsApp. Direct delivery partners are coming next.", icon: "chat" as const, span: "", chip: "bg-leaf text-white" },
  { title: "Updates at every step", body: "Know where your order is by push notification, SMS or WhatsApp.", icon: "bell" as const, span: "", chip: "bg-pepper text-ink" },
  { title: "Private by design", body: "Health details are encrypted and only used to shape your meals.", icon: "lock" as const, span: "", chip: "bg-white text-ink" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="anchor-section section-pad relative overflow-hidden bg-ink text-white">
      <Parallax distance={110}><AfricanPattern className="opacity-[.22]" /></Parallax>
      <div className="section-shell relative">
        <Reveal from="left" className="max-w-2xl">
          <h2 className="section-title text-white">What Chop Beta AI will do</h2>
          <p className="section-copy mt-4 text-white/70">One app for the whole journey: deciding what to eat, checking it’s right for you, and getting the ingredients home.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} from="scale" delay={(index % 3) * .1} className={cn("h-full", feature.span)}>
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
