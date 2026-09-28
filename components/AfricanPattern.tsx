import { cn } from "@/lib/utils";

// Hand-drawn African motif tile (zigzags, spirals, eye-triangles, diamonds) used as a background texture.
// Set the strength with an opacity class, e.g. <AfricanPattern className="opacity-[.08]" />.
export function AfricanPattern({ className, size = 320 }: { className?: string; size?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ backgroundImage: "url(/images/african-pattern.svg)", backgroundSize: `${size}px auto`, backgroundRepeat: "repeat" }}
    />
  );
}

// A thin woven strip used as a section divider.
export function KenteStrip({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex h-2 w-full overflow-hidden", className)}>
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i} className={cn("h-full flex-1", ["bg-primary", "bg-pepper", "bg-accent", "bg-forest", "bg-tomato", "bg-leaf"][i % 6])} />
      ))}
    </div>
  );
}
