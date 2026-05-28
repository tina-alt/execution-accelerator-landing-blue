import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "gold" | "ink" | "ghost" | "ink-on-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium text-[14px] tracking-[0.02em] rounded-[2px] " +
  "transition-all duration-200 will-change-transform select-none whitespace-nowrap " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  gold:
    "bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-pale)] " +
    "hover:-translate-y-[1px] active:translate-y-0 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
  ink:
    "bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--ink-2)] " +
    "hover:-translate-y-[1px]",
  "ink-on-dark":
    "bg-[var(--paper)] text-[var(--ink)] hover:bg-white " +
    "hover:-translate-y-[1px]",
  ghost:
    "bg-transparent text-[var(--ink)] border border-[var(--ink)] " +
    "hover:bg-[var(--ink)] hover:text-[var(--paper)]",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-[13px]",
  lg: "px-8 py-[16px] text-[15px]",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  pulse?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "gold",
  size = "md",
  arrow = false,
  className,
  pulse = false,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], pulse && "cta-pulse", className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group", cls)}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cn("group", cls)}>
      {content}
    </button>
  );
}

