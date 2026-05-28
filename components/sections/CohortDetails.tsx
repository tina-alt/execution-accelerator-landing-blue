import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { StatCounter } from "@/components/ui/StatCounter";
import { Button } from "@/components/ui/Button";
import { cohort, cta } from "@/lib/copy";

export function CohortDetails() {
  return (
    <section
      aria-labelledby="cohort-heading"
      className="bg-[var(--ink)] text-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="cohort-heading"
            className="font-sans font-500 text-[34px] sm:text-[52px] leading-[1.1] max-w-[20ch] mb-6"
          >
            {cohort.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[rgba(244,242,236,0.7)] font-light max-w-[60ch] mb-14">
            {cohort.body}
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 border-t border-[rgba(244,242,236,0.12)] pt-10">
          {cohort.stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="font-sans font-500 text-[38px] sm:text-[44px] leading-none text-[var(--paper)]">
                <StatCounter value={s.value} />
              </div>
              <div className="mt-3 text-[12px] tracking-[0.06em] uppercase text-[rgba(244,242,236,0.55)] max-w-[18ch]">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <div className="mt-14">
            <Button href="#apply" variant="gold" size="lg" arrow>
              {cta.apply}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


