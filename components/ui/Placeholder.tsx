import { cn } from "@/lib/cn";
import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  aspect?: "16/10" | "16/9" | "4/3" | "1/1" | "3/4";
  className?: string;
  tone?: "paper" | "parchment" | "ink";
};

const tones = {
  paper: "bg-[var(--paper-2)] border border-[var(--border)] text-[var(--ink-3)]",
  parchment:
    "bg-[var(--paper-3)] border border-[var(--border)] text-[var(--ink-3)]",
  ink:
    "bg-[var(--ink-2)] border border-[rgba(244,242,236,0.1)] text-[rgba(244,242,236,0.55)]",
};

const aspects: Record<NonNullable<Props["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

export function Placeholder({
  label,
  aspect = "16/10",
  className,
  tone = "paper",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative overflow-hidden rounded-[4px] shimmer",
        "flex flex-col items-center justify-center gap-3 p-6",
        aspects[aspect],
        tones[tone],
        className,
      )}
    >
      {/* Diagonal grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)",
        }}
      />
      <ImageIcon className="size-6 opacity-60" strokeWidth={1.25} />
      <div className="text-[11px] tracking-[0.08em] uppercase opacity-80 text-center max-w-[80%]">
        {label}
      </div>
    </div>
  );
}

