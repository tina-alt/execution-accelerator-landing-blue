"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";
import { process } from "@/lib/copy";

const iconMap: Record<string, string> = {
  "AI Business Audit": "/images/AI Business Audit-01.svg",
  "Identify Actions": "/images/Identify Actions-01.svg",
  "Massive Action": "/images/Massive Action-01.svg",
  "Adjust & Act Again": "/images/Adjust & Act Again-01.svg",
};

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  // Progress bar height tied to scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="process-heading"
            className="t-h2 text-[30px] sm:text-[44px] leading-[1.18] max-w-[28ch] mb-16"
          >
            {process.headline}
          </h2>
        </FadeIn>

        <div ref={ref} className="relative">
          {/* Vertical track */}
          <div className="hidden md:block absolute left-20 top-0 bottom-0 w-[2px] bg-[var(--border)]" aria-hidden>
            <motion.div
              style={prefersReduce ? { height: "100%" } : { height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-[var(--gold)]"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {process.steps.map((s, i) => (
              <Step key={s.n} index={i} step={s} prefersReduce={!!prefersReduce} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  prefersReduce,
}: {
  index: number;
  step: (typeof process.steps)[number];
  prefersReduce: boolean;
}) {
  return (
    <motion.div
      initial={prefersReduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-8 items-start"
    >
      {/* Icon badge - single gold circle */}
      <div className="hidden md:flex justify-center shrink-0 ml-6">
        <div className="relative w-[104px] h-[104px] rounded-full border-3 border-[var(--gold)] flex items-center justify-center z-10 shrink-0 bg-white overflow-hidden">
          <Image
            src={iconMap[step.title]}
            alt={`${step.title} icon`}
            width={104}
            height={104}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="pl-0">
        <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--gold)] mb-2">
          {step.when}
        </div>
        <h3 className="font-sans font-500 text-[22px] sm:text-[28px] leading-tight text-[var(--ink)] mb-3">
          {step.title}
        </h3>
        <p className="t-body">{step.body}</p>
      </div>
    </motion.div>
  );
}

