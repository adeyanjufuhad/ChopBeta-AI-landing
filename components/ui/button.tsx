import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(
      "inline-flex min-h-11 items-center justify-center rounded-control bg-accent px-5 py-3 font-heading text-sm font-bold text-ink transition duration-150 hover:bg-[#D75A08] motion-safe:hover:-translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
Button.displayName = "Button";

export { Button };
