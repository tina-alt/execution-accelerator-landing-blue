import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Overline } from "@/components/ui/Overline";
import { Check } from "lucide-react";
import { audit } from "@/lib/copy";

export function Audit() {
  return (
    <section
      id="audit"
      aria-labelledby="audit-heading"
      className="bg-[var(--ink)] text-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div>
          <FadeIn>
            <Overline className="mb-4 text-[var(--gold)]">{audit.overline}</Overline>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="audit-heading"
              className="font-sans font-500 text-[36px] sm:text-[56px] leading-[1.05] mb-8 text-[var(--paper)]"
            >
              The <span className="text-[var(--gold)]">A.I. Business Audit.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="font-sans font-500 text-[24px] sm:text-[28px] text-[var(--paper)] mb-6">
              {audit.intro}
            </p>
          </FadeIn>
          <div className="space-y-5 mb-10">
            {audit.body.map((p, i) => (
              <FadeIn key={i} delay={0.22 + i * 0.05}>
                <p className="text-[15px] sm:text-[16px] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[56ch]">{p}</p>
              </FadeIn>
            ))}
          </div>

          <Stagger className="grid sm:grid-cols-2 gap-x-6 gap-y-4" stagger={0.06}>
            {audit.statBlocks.map((s) => (
              <StaggerItem
                key={s.label}
                className="bg-[rgba(244,242,236,0.05)] border border-[rgba(244,242,236,0.1)] rounded-[4px] p-5"
              >
                <div className="font-sans font-500 text-[36px] sm:text-[42px] leading-none text-[var(--gold)]">
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] tracking-[0.04em] text-[rgba(244,242,236,0.6)] uppercase">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeIn delay={0.15}>
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="relative rounded-[6px] overflow-hidden border border-[rgba(244,242,236,0.1)] aspect-[16/9]">
              <Image
                src="/images/lighthouse.png"
                alt="A lighthouse cutting through fog - the metaphor for the AI Business Audit: a clear beam in the noise, pointing toward where to start."
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 to-transparent"
              />
            </div>

            <div className="bg-[rgba(244,242,236,0.05)] border border-[rgba(244,242,236,0.1)] rounded-[6px] p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--gold)] mb-4">
                What's included
              </div>
              <Stagger className="space-y-3" stagger={0.05}>
                {audit.checklist.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 text-[14px] leading-[1.6]">
                      <span className="mt-[3px] shrink-0 size-[18px] rounded-full bg-[var(--gold)] flex items-center justify-center">
                        <Check
                          className="size-3 text-[var(--ink)]"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-[rgba(244,242,236,0.72)]">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
