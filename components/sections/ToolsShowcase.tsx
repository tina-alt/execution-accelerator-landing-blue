"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Placeholder } from "@/components/ui/Placeholder";
import { categories, type Tool } from "@/lib/tools";
import { tools as toolsCopy } from "@/lib/copy";
import { cn } from "@/lib/cn";

export function ToolsShowcase() {
  const [active, setActive] = useState(categories[0].id);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const prefersReduce = useReducedMotion();
  const cat = categories.find((c) => c.id === active) ?? categories[0];

  const isExpanded = !!expanded[cat.id];
  const featured = cat.tools.filter((t) => t.featured);
  const extra = cat.tools.filter((t) => !t.featured);
  const visible = isExpanded ? cat.tools : featured;

  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="tools-heading"
            className="t-h2 text-[30px] sm:text-[44px] leading-[1.16] max-w-[26ch] mb-4"
          >
            Examples of Revenue-Generating, Cost-Cutting, &{" "}
            <span className="text-[var(--gold)]">Time-Saving</span> Tools We've
            Built.
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="t-body max-w-[60ch] mb-12">{toolsCopy.body}</p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div
            role="tablist"
            aria-label="Tool categories"
            className="flex flex-wrap gap-x-0 gap-y-3 border-b border-[var(--border)] mb-10"
          >
            {categories.map((c, i) => {
              const selected = c.id === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "relative px-5 sm:px-6 pb-3 text-[14px] tracking-wide transition-colors font-500",
                    selected
                      ? "text-[var(--ink)] font-700"
                      : "text-[var(--ink-3)] hover:text-[var(--ink-2)]",
                  )}
                >
                  {c.name}
                  {selected && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-[3px] bg-[var(--gold)]"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  {i < categories.length - 1 && (
                    <div className="absolute right-0 top-1/4 h-1/2 w-px bg-[var(--border)]" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans font-500 text-[20px] sm:text-[22px] text-[var(--ink-2)] mb-10 max-w-[60ch]">
            {cat.description}
          </p>
        </FadeIn>

        <motion.div
          layout={!prefersReduce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((t) => (
              <ToolCard key={`${cat.id}-${t.name}`} tool={t} />
            ))}
          </AnimatePresence>
        </motion.div>

        {extra.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() =>
                setExpanded((p) => ({ ...p, [cat.id]: !p[cat.id] }))
              }
              className="group inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors border-b border-[var(--border)] hover:border-[var(--gold)] pb-1"
            >
              {isExpanded ? "Show fewer" : `Show ${extra.length} more`}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const prefersReduce = useReducedMotion();
  return (
    <motion.article
      layout={!prefersReduce}
      initial={prefersReduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[var(--white-warm)] border border-[var(--border)] rounded-[4px] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_-20px_rgba(14,14,12,0.22)] transition-transform duration-300"
    >
      {tool.image ? (
        <div className="relative w-full aspect-square overflow-hidden bg-[var(--paper-2)]">
          <Image
            src={tool.image}
            alt={`${tool.name} screenshot`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <Placeholder
          label={`${tool.name} - screenshot`}
          aspect="1/1"
          tone="parchment"
        />
      )}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans font-500 text-[19px] leading-tight text-[var(--ink)]">
            {tool.name}
          </h3>
          <ArrowUpRight
            className="size-4 text-[var(--ink-3)] group-hover:text-[var(--gold)] transition-colors shrink-0 mt-1"
            strokeWidth={1.5}
          />
        </div>
        <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--gold)] font-medium">
          {tool.stat}
        </div>
        <p className="text-[13px] leading-[1.65] text-[var(--ink-3)]">{tool.body}</p>
      </div>
    </motion.article>
  );
}
