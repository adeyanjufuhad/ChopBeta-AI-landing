import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <span className={cn("inline-flex size-11 shrink-0 items-center justify-center rounded-full", inverse ? "bg-white" : "bg-white shadow-soft")}>
        <Image src="/images/chop-beta-symbol.png" alt="" width={52} height={52} priority className="size-9 object-contain" />
      </span>
      <span className={cn("whitespace-nowrap font-heading text-lg font-extrabold tracking-tight", inverse ? "text-white" : "text-ink")}>
        Chop Beta <span className={inverse ? "text-pepper" : "text-primary"}>AI</span>
      </span>
    </div>
  );
}
