import { Logo } from "@/components/Logo";

export function FooterSection() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><Logo inverse/><p className="mt-4 text-sm font-semibold text-white/85">AI-Powered Food Decision Platform</p><p className="mt-1 text-sm text-white/60">App launching soon — join the waitlist.</p></div>
        <div className="sm:text-right"><a href="#waitlist" className="focus-ring rounded font-bold text-[#FF9C58] underline decoration-[#FF9C58]/50 hover:decoration-[#FF9C58]">Join the waitlist</a><p className="mt-4 text-sm text-white/60">© {new Date().getFullYear()} Chop Beta AI · Built in Nigeria 🇳🇬</p></div>
      </div>
    </footer>
  );
}
