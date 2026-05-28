import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  onDark = false,
}: {
  children: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "text-[10px] tracking-[0.16em] uppercase font-medium pb-2 mb-8",
        "border-b border-[var(--border)]",
        onDark
          ? "text-[rgba(244,242,236,0.55)] border-[rgba(244,242,236,0.15)]"
          : "text-[var(--ink-3)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

