import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/ui/Countdown";
import { Overline } from "@/components/ui/Overline";
import { finalCta, cta } from "@/lib/copy";

export function FinalCTA() {
  return (
    <section
      id="apply"
      aria-labelledby="apply-heading"
      className="relative bg-[var(--ink)] text-[var(--paper)] py-28 sm:py-40 overflow-hidden"
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,168,75,0.10) 0%, rgba(200,168,75,0) 60%)",
        }}
      />
      <div className="relative max-w-[1100px] mx-auto px-6 sm:px-8 text-center">
        <FadeIn>
          <Overline className="justify-center mx-auto inline-flex">{finalCta.overline}</Overline>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-8 flex justify-center">
            <Countdown />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            id="apply-heading"
            className="mt-12 font-sans font-500 text-[36px] sm:text-[60px] leading-[1.05] max-w-[22ch] mx-auto"
          >
            Apply To Join{" "}
            <span className="text-[var(--gold)]">AI Execution Accelerator.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-[rgba(244,242,236,0.72)] font-light max-w-[58ch] mx-auto">
            {finalCta.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 inline-flex items-center gap-6 sm:gap-10">
            <div className="text-left">
              <div className="font-sans font-500 text-[34px] sm:text-[48px] leading-none">
                {finalCta.priceValue}
              </div>
              <div className="mt-1 text-[11px] tracking-[0.12em] uppercase text-[rgba(244,242,236,0.55)]">
                {finalCta.priceLabel}
              </div>
            </div>
            <div className="h-12 w-px bg-[rgba(244,242,236,0.15)]" />
            <Button href="#apply" variant="gold" size="lg" arrow pulse>
              {cta.apply}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-[13px] tracking-[0.04em] text-[rgba(244,242,236,0.55)] max-w-[50ch] mx-auto">
            {finalCta.closer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}


