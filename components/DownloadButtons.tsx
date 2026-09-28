import { AppleIcon, PlayIcon } from "@/components/Icons";
import { APP_IS_LIVE, DOWNLOAD_LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const stores = [
  { key: "android" as const, top: APP_IS_LIVE ? "Get it on" : "Download for", name: "Android", Icon: PlayIcon },
  { key: "ios" as const, top: APP_IS_LIVE ? "Download on the" : "Download for", name: "iPhone", Icon: AppleIcon },
];

export function DownloadButtons({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:flex-wrap", className)}>
      {stores.map(({ key, top, name, Icon }) => (
        <a
          key={key}
          href={DOWNLOAD_LINKS[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={APP_IS_LIVE ? `Download Chop Beta AI for ${name}` : `Download Chop Beta AI for ${name} — join the early-access waitlist (opens in a new tab)`}
          className={cn(
            "focus-ring group relative inline-flex min-h-[56px] min-w-[190px] items-center gap-3 rounded-2xl pl-5 pr-7 transition duration-200 motion-safe:hover:-translate-y-0.5",
            tone === "dark" ? "bg-ink text-white hover:bg-forest" : "bg-white text-ink ring-1 ring-white/20 hover:bg-cream",
          )}
        >
          <Icon className={cn("size-7 shrink-0", key === "ios" && (tone === "dark" ? "text-white" : "text-ink"))} />
          <span className="flex flex-col whitespace-nowrap text-left leading-tight">
            <span className={cn("text-[11px] font-medium", tone === "dark" ? "text-white/70" : "text-muted")}>{top}</span>
            <span className="font-heading text-[17px] font-bold">{name}</span>
          </span>
          {!APP_IS_LIVE && (
            <span className="absolute -right-2 -top-2.5 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              Early access
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
