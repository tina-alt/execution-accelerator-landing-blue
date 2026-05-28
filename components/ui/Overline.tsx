import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Overline({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "t-overline inline-flex items-center gap-3 before:content-[''] before:h-px before:w-6",
        light ? "before:bg-[var(--gold)]" : "before:bg-[var(--gold)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

