import type { ReactNode } from "react";

export function StepIcon({ type }: { type: "profile" | "brain" | "calendar" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-12 text-primary">
      {type === "profile" && <><circle cx="24" cy="17" r="7" {...common}/><path d="M11 39c1.5-8 6-12 13-12s11.5 4 13 12" {...common}/><path d="M35 11v8M31 15h8" {...common}/></>}
      {type === "brain" && <><path d="M20 11a7 7 0 0 0-7 7c0 1 .2 2 .6 2.8A7.5 7.5 0 0 0 16 35a7 7 0 0 0 8-1 7 7 0 0 0 8 1 7.5 7.5 0 0 0 2.4-14.2A7 7 0 0 0 27 11c-1.1 0-2.1.3-3 .7-1-.4-2-.7-4-.7Z" {...common}/><path d="M24 12v22M17 20c3 0 5 2 5 5M31 18c-3 0-5 2-5 5M16 29c3 0 4 1 5 3M32 27c-3 0-5 2-5 5" {...common}/></>}
      {type === "calendar" && <><rect x="9" y="12" width="30" height="27" rx="4" {...common}/><path d="M16 8v8M32 8v8M9 21h30" {...common}/><path d="m18 30 4 4 8-9" {...common}/></>}
    </svg>
  );
}

export function FeatureIcon({ type }: { type: "mapping" | "local" | "schedule" | "wellbeing" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, ReactNode> = {
    mapping: <><circle cx="24" cy="24" r="15" {...common}/><path d="M24 9v30M9 24h30M14 14c7 5 13 15 20 20M34 14c-7 5-13 15-20 20" {...common}/></>,
    local: <><path d="M10 23h28l-3 13H13l-3-13Z" {...common}/><path d="M14 23c2-7 6-10 10-10s8 3 10 10M17 18c3 1 5 3 7 5M31 17c-3 1-5 3-7 6" {...common}/></>,
    schedule: <><rect x="9" y="11" width="30" height="28" rx="4" {...common}/><path d="M16 8v7M32 8v7M9 20h30M16 27h6M16 33h12" {...common}/></>,
    wellbeing: <><path d="M24 39S9 31 9 20c0-5 4-9 9-9 3 0 5 1 6 4 1-3 3-4 6-4 5 0 9 4 9 9 0 11-15 19-15 19Z" {...common}/><path d="M15 25h6l2-5 4 10 3-5h4" {...common}/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="size-12 text-primary">{paths[type]}</svg>;
}

export function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5"><path d={direction === "right" ? "m9 5 7 7-7 7" : "m15 5-7 7 7 7"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
