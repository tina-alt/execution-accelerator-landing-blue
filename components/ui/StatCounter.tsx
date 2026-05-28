"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * StatCounter - animates a number from 0 -> value when it scrolls into view.
 * Pass `prefix` / `suffix` to wrap (e.g. "$" / " hrs").
 * If the value cannot be parsed as a number (e.g. "4x/yr", "Guaranteed"),
 * the raw value is rendered as-is.
 */
export function StatCounter({
  value,
  duration = 1.4,
  prefix = "",
  suffix = "",
  className,
}: {
  value: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduce = useReducedMotion();

  // Try to extract a number from the value
  const match = value.match(/^(\$?)([\d,]+(?:\.\d+)?)(.*)$/);
  const parsedPrefix = match?.[1] ?? "";
  const parsedNumStr = match?.[2] ?? "";
  const parsedSuffix = match?.[3] ?? "";
  const target = parsedNumStr ? Number(parsedNumStr.replace(/,/g, "")) : NaN;

  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (Number.isNaN(target)) return;
    if (prefersReduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      setN(Math.round(target * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, prefersReduce]);

  // Number couldn't be parsed - just render raw
  if (Number.isNaN(target)) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  // Format with thousands separator if the source had one
  const formatted = parsedNumStr.includes(",")
    ? n.toLocaleString()
    : String(n);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {parsedPrefix}
      {formatted}
      {parsedSuffix}
      {suffix}
    </span>
  );
}
