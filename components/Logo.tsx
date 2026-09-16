import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/images/chop-beta-symbol.png" alt="" width={52} height={52} priority className="size-11 shrink-0 object-contain" />
      <span className={cn("font-heading text-lg font-bold", inverse ? "text-white" : "text-primary")}>Chop Beta AI</span>
    </div>
  );
}
