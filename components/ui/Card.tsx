import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * StatCard - white bg, subtle border. For social proof / results.
 */
export function StatCard({
  num,
  desc,
  className,
}: {
  num: ReactNode;
  desc: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[var(--white-warm)] border border-[var(--border)] p-6 rounded-[4px]",
        "transition-shadow duration-300 hover:shadow-[0_2px_24px_-12px_rgba(14,14,12,0.18)]",
        className,
      )}
    >
      <div className="font-sans font-500 text-[42px] leading-none mb-2 text-[var(--ink)]">
        {num}
      </div>
      <div className="text-[13px] text-[var(--ink-3)] leading-snug">{desc}</div>
    </div>
  );
}

/**
 * FeatureCard - parchment bg, gold top border. For program components.
 */
export function FeatureCard({
  n,
  title,
  body,
  className,
  icon,
}: {
  n: string;
  title: string;
  body: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-[var(--paper-2)] border border-[var(--border)] p-6 rounded-[4px]",
        "border-t-[3px] border-t-[var(--gold)] h-full",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_-16px_rgba(14,14,12,0.22)]",
        className,
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-sans font-500 text-[22px] leading-tight mb-2 text-[var(--ink)]">
        {title}
      </h3>
      <p className="text-[14px] text-[var(--ink-3)] leading-relaxed">{body}</p>
    </div>
  );
}
