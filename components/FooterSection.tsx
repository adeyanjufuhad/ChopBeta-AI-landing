import { AfricanPattern, KenteStrip } from "@/components/AfricanPattern";
import { DownloadButtons } from "@/components/DownloadButtons";
import { ArrowIcon, NigeriaFlag } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { WAITLIST_FORM_URL } from "@/lib/links";

const links = [
  { label: "Why Chop Beta", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Meals", href: "#meals" },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <KenteStrip />
      <AfricanPattern className="top-2 opacity-[.07]" />
      <div className="section-shell relative grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">AI-powered food decision platform, built for Nigeria. App launching soon.</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-heading text-sm font-bold text-white">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => <li key={link.href}><a href={link.href} className="focus-ring rounded text-sm text-white/65 transition hover:text-white">{link.label}</a></li>)}
            <li><a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-1 rounded text-sm font-bold text-accent transition hover:text-pepper">Join the waitlist <ArrowIcon direction="up-right" className="size-3.5" /></a></li>
          </ul>
        </nav>
        <div>
          <p className="font-heading text-sm font-bold text-white">Get the app</p>
          <DownloadButtons tone="light" className="mt-4 sm:flex-col" />
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="section-shell flex items-center gap-2 py-6 text-sm text-white/50">© {new Date().getFullYear()} Chop Beta AI · Built in Nigeria <NigeriaFlag className="h-3 w-[18px] rounded-[2px]" /></p>
      </div>
    </footer>
  );
}
