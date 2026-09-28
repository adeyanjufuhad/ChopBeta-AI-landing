import type { ReactNode } from "react";

const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// 48px line icons for steps and feature cards.
const icons48: Record<string, ReactNode> = {
  profile: <><circle cx="24" cy="17" r="7" {...common}/><path d="M11 39c1.5-8 6-12 13-12s11.5 4 13 12" {...common}/><path d="M35 11v8M31 15h8" {...common}/></>,
  brain: <><path d="M20 11a7 7 0 0 0-7 7c0 1 .2 2 .6 2.8A7.5 7.5 0 0 0 16 35a7 7 0 0 0 8-1 7 7 0 0 0 8 1 7.5 7.5 0 0 0 2.4-14.2A7 7 0 0 0 27 11c-1.1 0-2.1.3-3 .7-1-.4-2-.7-4-.7Z" {...common}/><path d="M24 12v22M17 20c3 0 5 2 5 5M31 18c-3 0-5 2-5 5M16 29c3 0 4 1 5 3M32 27c-3 0-5 2-5 5" {...common}/></>,
  list: <><rect x="11" y="9" width="26" height="31" rx="4" {...common}/><path d="M18 9v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1M17 19h2M23 19h8M17 26h2M23 26h8M17 33h2M23 33h5" {...common}/></>,
  basket: <><path d="M8 20h32l-4 18H12L8 20Z" {...common}/><path d="m16 20 6-11M32 20l-6-11M18 27v5M24 27v5M30 27v5" {...common}/></>,
  chat: <><path d="M24 8c9 0 16 6.5 16 14.5S33 37 24 37c-2.2 0-4.3-.4-6.2-1.1L10 39l2.3-6.6C9.6 29.8 8 26.3 8 22.5 8 14.5 15 8 24 8Z" {...common}/><path d="M17 22.5h.01M24 22.5h.01M31 22.5h.01" {...common} strokeWidth={3.5}/></>,
  heart: <><path d="M24 39S9 31 9 20c0-5 4-9 9-9 3 0 5 1 6 4 1-3 3-4 6-4 5 0 9 4 9 9 0 11-15 19-15 19Z" {...common}/><path d="M15 25h6l2-5 4 10 3-5h4" {...common}/></>,
  halal: <><path d="M24 7 38 12v11c0 9-6 15.5-14 18-8-2.5-14-9-14-18V12l14-5Z" {...common}/><path d="M27.5 17.5a7 7 0 1 0 0 11 5.5 5.5 0 1 1 0-11Z" {...common}/></>,
  bell: <><path d="M14 33V22a10 10 0 0 1 20 0v11l3 3H11l3-3Z" {...common}/><path d="M21 40a3 3 0 0 0 6 0M24 9v3" {...common}/></>,
  lock: <><rect x="11" y="21" width="26" height="19" rx="4" {...common}/><path d="M17 21v-5a7 7 0 0 1 14 0v5M24 29v4" {...common}/></>,
};

export function StepIcon({ type }: { type: "profile" | "brain" | "list" | "chat" }) {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="size-9">{icons48[type]}</svg>;
}

export function FeatureIcon({ type, className = "size-7" }: { type: "brain" | "heart" | "halal" | "basket" | "chat" | "bell" | "lock"; className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>{icons48[type]}</svg>;
}

export function ArrowIcon({ direction = "right", className = "size-5" }: { direction?: "left" | "right" | "up-right"; className?: string }) {
  const d = direction === "right" ? "M5 12h14m-6-6 6 6-6 6" : direction === "left" ? "M19 12H5m6-6-6 6 6 6" : "M7 17 17 7M9 7h8v8";
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className}><path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export function AppleIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.37 12.62c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.69ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z"/>
    </svg>
  );
}

export function PlayIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.5-9.7-9.5-9.7Z" fill="#2AAE66"/>
      <path d="m16.3 15.2-3.2-3.2 3.2-3.2 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1Z" fill="#FFB703"/>
      <path d="m16.3 15.2-3.2-3.2-9.5 9.7c.4.4 1 .4 1.6.1l11.1-6.6Z" fill="#E4472B"/>
      <path d="M16.3 8.8 5.2 2.2c-.6-.3-1.2-.3-1.6.1l9.5 9.7 3.2-3.2Z" fill="#FC7200"/>
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className}><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

// 24px line icons used in small UI spots (cards, chips).
const line = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function UiIcon({ type, className = "size-6" }: { type: "clock" | "wallet" | "bowl" | "leaf" | "chili" | "shield" | "block" | "lock" | "chat" | "sparkle"; className?: string }) {
  const paths: Record<string, ReactNode> = {
    clock: <><circle cx="12" cy="13" r="8" {...line}/><path d="M12 9v4l2.5 2.5M9.5 2.5h5M12 2.5V5" {...line}/></>,
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v4" {...line}/><rect x="4" y="7.5" width="16" height="12" rx="2.5" {...line}/><path d="M16 13.5h.01" {...line} strokeWidth={3}/></>,
    bowl: <><path d="M3.5 11h17a8.5 8.5 0 0 1-17 0Z" {...line}/><path d="M8 20h8M9 3.5c-1 1.2 1 2.3 0 3.5M13 3.5c-1 1.2 1 2.3 0 3.5M17 3.5c-1 1.2 1 2.3 0 3.5" {...line}/></>,
    leaf: <><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" {...line}/><path d="M5 19c3-4 6-7 10-9" {...line}/></>,
    chili: <><path d="M17 7c2 1.5 2.5 4 1 7-2 4-7 7-13 7 5-3 7-6 8-10 .5-2.5 2-4 4-4Z" {...line}/><path d="M17 7c0-2 1-3.5 3-4" {...line}/></>,
    shield: <><path d="M12 3 19 5.5V11c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V5.5L12 3Z" {...line}/><path d="m9 11.5 2 2 4-4" {...line}/></>,
    block: <><circle cx="12" cy="12" r="8.5" {...line}/><path d="m9 9 6 6M15 9l-6 6" {...line}/></>,
    lock: <><rect x="5" y="10.5" width="14" height="10" rx="2.5" {...line}/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...line}/></>,
    chat: <><path d="M12 4c4.7 0 8.5 3.4 8.5 7.5S16.7 19 12 19c-1.1 0-2.2-.2-3.2-.6L4.5 20l1.2-3.5C4.3 15.2 3.5 13.4 3.5 11.5 3.5 7.4 7.3 4 12 4Z" {...line}/></>,
    sparkle: <><path d="M12 3.5 13.8 9 19.5 11l-5.7 2-1.8 5.5-1.8-5.5-5.7-2 5.7-2L12 3.5Z" {...line}/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>{paths[type]}</svg>;
}

export function NigeriaFlag({ className = "h-3 w-[18px]" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 4" className={className}>
      <rect width="6" height="4" fill="#008751" />
      <rect x="2" width="2" height="4" fill="#FFFFFF" />
    </svg>
  );
}
