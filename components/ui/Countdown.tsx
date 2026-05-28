"use client";

import { useEffect, useState } from "react";

// Next cohort target date - configurable. Default: 30 days from today at 00:00 UTC.
function defaultTarget(): Date {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + 30);
  return d;
}

export function Countdown({ target = defaultTarget() }: { target?: Date }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Server render - neutral placeholder so hydration doesn't mismatch
  if (now === null) {
    return (
      <div className="flex gap-4 sm:gap-6">
        {["Days", "Hours", "Min", "Sec"].map((l) => (
          <Cell key={l} value="--" label={l} />
        ))}
      </div>
    );
  }

  const diff = Math.max(0, target.getTime() - now);
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  return (
    <div className="flex gap-4 sm:gap-6">
      <Cell value={String(days).padStart(2, "0")} label="Days" />
      <Cell value={String(hours).padStart(2, "0")} label="Hours" />
      <Cell value={String(mins).padStart(2, "0")} label="Min" />
      <Cell value={String(secs).padStart(2, "0")} label="Sec" />
    </div>
  );
}

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-sans font-500 text-[36px] sm:text-[48px] text-[var(--paper)] leading-none tabular-nums">
        {value}
      </div>
      <div className="mt-2 text-[10px] tracking-[0.16em] uppercase text-[rgba(244,242,236,0.5)]">
        {label}
      </div>
    </div>
  );
}

