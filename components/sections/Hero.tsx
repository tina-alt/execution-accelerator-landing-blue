"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { hero, cta } from "@/lib/copy";

export function Hero() {
  const prefersReduce = useReducedMotion();

  const baseInit = prefersReduce ? false : { opacity: 0, y: 16 };
  const baseAnim = { opacity: 1, y: 0 };
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative bg-[var(--ink)] text-[var(--paper)] overflow-hidden pt-[120px] pb-20 sm:pt-[140px] sm:pb-28"
    >
      {/* Gold ambient orb (top-right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,168,75,0.14) 0%, rgba(200,168,75,0) 65%)",
        }}
      />
      {/* Subtle film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Background image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/hero-drowning.jpg"
          alt="An entrepreneur drowning in an AI ocean – overwhelmed by floating tool logos (Copilot, Gemini, Claude, Perplexity), invoices and deadlines, while a rescue helicopter lowers a lifebuoy labelled 'Execution Accelerator.'"
          width={1462}
          height={812}
          priority
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,14,12,0) 0%, rgba(14,14,12,0) 100%)",
          }}
        />

        {/* Copy overlay */}
        <div className="absolute inset-0 max-w-[1200px] mx-auto px-6 sm:px-8 py-8 sm:py-16 lg:py-20 flex flex-col justify-center">
          <div className="relative z-10 max-w-[600px]">
          <motion.div
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.6, ease }}
            className="t-overline mb-6 flex items-center gap-3 before:content-[''] before:h-px before:w-8 before:bg-[var(--gold)]"
          >
            {hero.overline}
          </motion.div>

          <motion.div
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-[11px] tracking-[0.22em] uppercase text-[rgba(244,242,236,0.55)] mb-4"
          >
            {hero.brand}
          </motion.div>

          <h1 className="t-hero text-[32px] sm:text-[40px] lg:text-[48px] text-[var(--paper)] [line-height:1.02]">
            <motion.span
              className="block"
              initial={baseInit}
              animate={baseAnim}
              transition={{ duration: 0.75, ease, delay: 0.1 }}
            >
              {hero.headlineLead}
            </motion.span>
            <motion.span
              className="block"
              initial={baseInit}
              animate={baseAnim}
              transition={{ duration: 0.75, ease, delay: 0.2 }}
            >
              {hero.headlineMid}
            </motion.span>
            <motion.span
              className="block text-[var(--gold)]"
              initial={baseInit}
              animate={baseAnim}
              transition={{ duration: 0.85, ease, delay: 0.32 }}
            >
              {hero.headlineTail}
            </motion.span>
          </h1>

          <motion.p
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-6 max-w-[500px] text-[13px] sm:text-[14px] leading-[1.65] text-[rgba(244,242,236,0.72)] font-light"
          >
            {hero.subhead}
          </motion.p>

          <motion.p
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-5 font-sans font-500 text-[16px] sm:text-[18px] leading-snug max-w-[520px]"
          >
            In 12 weeks you transform from AI Zero to AI Hero.{" "}
            <span className="text-[var(--gold)]">Guaranteed.</span>
          </motion.p>

          <motion.div
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#apply" variant="gold" size="lg" arrow pulse>
              {cta.apply}
            </Button>
            <a
              href="#program"
              className="text-[14px] text-[rgba(244,242,236,0.75)] hover:text-[var(--paper)] underline underline-offset-[6px] decoration-[var(--gold)]/40 hover:decoration-[var(--gold)] transition-colors"
            >
              See what's inside
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={baseInit}
            animate={baseAnim}
            transition={{ duration: 0.7, ease, delay: 0.85 }}
            className="mt-12 sm:mt-14 pt-8 border-t border-[rgba(244,242,236,0.12)] grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5"
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-sans font-500 text-[28px] sm:text-[32px] leading-none">
                  <StatCounter value={s.value} />
                </div>
                <div className="mt-2 text-[11px] tracking-[0.08em] uppercase text-[rgba(244,242,236,0.5)]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

