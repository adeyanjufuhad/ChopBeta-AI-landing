import { AfricanPattern } from "@/components/AfricanPattern";
import { CheckIcon, UiIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/ScrollEffects";
import { cn } from "@/lib/utils";

const list = [
  { item: "Rice", qty: "1 mudu", price: 3500 },
  { item: "Fresh tomatoes", qty: "½ paint rubber", price: 2500 },
  { item: "Tatashe & rodo", qty: "1 heap", price: 1500 },
  { item: "Onions", qty: "3 pieces", price: 600 },
  { item: "Vegetable oil", qty: "1 bottle", price: 2800 },
  { item: "Chicken", qty: "1 kg", price: 5500 },
];

const total = list.reduce((sum, row) => sum + row.price, 0);
const naira = (value: number) => `₦${value.toLocaleString("en-NG")}`;

const steps = ["List sent", "Vendor confirmed", "On the way"];

const points = [
  { icon: "bowl" as const, title: "Units the market understands", body: "Mudu, derbi, paint rubber. No converting grams in your head." },
  { icon: "wallet" as const, title: "Local market prices", body: "See what the meal will cost before you leave the house." },
  { icon: "chat" as const, title: "Order over WhatsApp", body: "Your list goes to a market vendor. Direct delivery partners are coming next." },
];

export function MarketSection() {
  return (
    <section id="market" className="anchor-section section-pad relative overflow-hidden bg-alternate">
      <Parallax distance={70}><AfricanPattern className="opacity-[.06]" /></Parallax>
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
        <Reveal from="scale" className="order-2 lg:order-1">
          <div className="mx-auto max-w-md rounded-[28px] border border-ink/10 bg-white p-5 shadow-soft sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">Shopping list</p>
                <p className="mt-1 font-heading text-lg font-extrabold">Jollof rice for 4</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Halal-safe</span>
            </div>

            <div role="list" className="mt-5 divide-y divide-ink/10">
              {list.map((row, index) => (
                <Reveal key={row.item} from="right" delay={.2 + index * .08}>
                  <div role="listitem" className="flex items-center gap-3 py-2.5">
                    <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-primary/40 text-primary"><CheckIcon className="size-3" /></span>
                    <span className="flex-1 text-[15px] font-semibold">{row.item}</span>
                    <span className="rounded-full bg-pepper/20 px-2.5 py-0.5 text-xs font-bold text-[#8A5A00]">{row.qty}</span>
                    <span className="w-16 text-right text-sm font-semibold tabular-nums text-muted">{naira(row.price)}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t-2 border-ink pt-3">
              <span className="font-heading font-bold">Estimated total</span>
              <span className="font-heading text-lg font-extrabold tabular-nums">{naira(total)}</span>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-heading text-sm font-bold text-white">
              <UiIcon type="chat" className="size-5" /> Send to vendor on WhatsApp
            </div>

            <div className="mt-5 flex items-center justify-between">
              {steps.map((step, index) => (
                <Reveal key={step} from="pop" delay={.9 + index * .2} className="flex flex-1 flex-col items-center gap-1.5 text-center">
                  <span className={cn("inline-flex size-7 items-center justify-center rounded-full text-white", index < 2 ? "bg-primary" : "bg-ink/20")}>
                    {index < 2 ? <CheckIcon className="size-3.5" /> : <span className="size-2 rounded-full bg-white" />}
                  </span>
                  <span className="text-[11px] font-semibold text-muted">{step}</span>
                </Reveal>
              ))}
            </div>

            <p className="mt-4 text-center text-[11px] text-muted">Sample list. Prices will come from your local market.</p>
          </div>
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <Reveal from="right">
            <h2 className="section-title">From meal to market, <span className="text-accent">without the stress.</span></h2>
            <p className="section-copy mt-5 max-w-xl">
              Once you pick a meal, ChopBeta turns it into a shopping list you can take straight to the market, then helps you order it.
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            {points.map((point, index) => (
              <Reveal key={point.title} from="right" delay={.1 + index * .12}>
                <div className="flex gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-deep shadow-soft"><UiIcon type={point.icon} className="size-6" /></span>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{point.title}</h3>
                    <p className="mt-1 leading-7 text-muted">{point.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
