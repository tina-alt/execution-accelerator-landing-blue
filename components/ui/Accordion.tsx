"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = { q: string; a: string };

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("border-t border-[var(--border)]", className)}>
      {items.map((item, i) => (
        <Row
          key={item.q}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen((cur) => (cur === i ? null : i))}
        />
      ))}
    </div>
  );
}

function Row({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const prefersReduce = useReducedMotion();

  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-6 py-5 text-left",
          "transition-colors duration-200 group cursor-pointer",
        )}
      >
        <span className="font-sans font-500 text-[20px] sm:text-[22px] leading-tight text-[var(--ink)] pr-2">
          {item.q}
        </span>
        <Plus
          className={cn(
            "size-5 shrink-0 text-[var(--gold)] transition-transform duration-300",
            isOpen && "rotate-45",
          )}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            initial={prefersReduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-[15px] leading-[1.75] text-[var(--ink-2)] font-light max-w-[68ch]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

