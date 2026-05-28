"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { pricing, cta } from "@/lib/copy";

export function Pricing() {
  const priceRef = useRef<HTMLDivElement>(null);
  const priceInView = useInView(priceRef, { once: true, amount: 0.6 });
  const prefersReduce = useReducedMotion();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-[var(--ink)] text-[var(--paper)] py-24 sm:py-36 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,168,75,0.10) 0%, rgba(200,168,75,0) 60%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="pricing-heading"
            className="font-sans font-500 text-[34px] sm:text-[52px] leading-[1.1] mb-12 max-w-[22ch]"
          >
            How Much Does{" "}
            <span className="text-[var(--gold)]">ALL This</span> Cost?
          </h2>
        </FadeIn>

        {/* Market rate context */}
        <Stagger className="grid sm:grid-cols-3 gap-5 mb-12">
          {pricing.context.map((c) => (
            <StaggerItem
              key={c.label}
              className="bg-[rgba(244,242,236,0.04)] border border-[rgba(244,242,236,0.1)] rounded-[4px] p-5"
            >
              <div className="text-[11px] tracking-[0.12em] uppercase text-[rgba(244,242,236,0.5)] mb-2">
                {c.label}
              </div>
              <div className="font-sans font-500 text-[20px] sm:text-[22px] leading-tight text-[var(--paper)]">
                {c.value}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1}>
          <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[64ch] mb-16">
            {pricing.anecdote}
          </p>
        </FadeIn>

        {/* The reveal */}
        <div
          ref={priceRef}
          className="relative bg-[rgba(244,242,236,0.04)] border border-[rgba(244,242,236,0.12)] rounded-[8px] p-8 sm:p-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center"
        >
          <div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--gold)] mb-4">
              The full 12-week program
            </div>
            <motion.div
              initial={prefersReduce ? false : { opacity: 0, letterSpacing: "0.4em" }}
              animate={
                priceInView
                  ? { opacity: 1, letterSpacing: "-0.02em" }
                  : { opacity: 0 }
              }
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-500 text-[72px] sm:text-[110px] leading-[0.95] text-[var(--paper)]"
            >
              {pricing.priceValue}
            </motion.div>
            <div className="mt-4 text-[16px] text-[rgba(244,242,236,0.7)] max-w-[40ch]">
              {pricing.closer}
            </div>
            <div className="mt-2 text-[12px] tracking-[0.16em] uppercase text-[var(--gold)]">
              {pricing.admission}
            </div>
            <div className="mt-8">
              <Button href="#apply" variant="gold" size="lg" arrow pulse>
                {cta.apply}
              </Button>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-[rgba(244,242,236,0.5)] mb-4">
              What's included
            </div>
            <ul className="space-y-3">
              {pricing.priceIncludes.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[15px] leading-[1.6] text-[rgba(244,242,236,0.85)]"
                >
                  <span className="mt-[3px] shrink-0 size-[18px] rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <Check
                      className="size-3 text-[var(--ink)]"
                      strokeWidth={3}
                    />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


