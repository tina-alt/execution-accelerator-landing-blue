import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Placeholder } from "@/components/ui/Placeholder";
import { FeatureCard } from "@/components/ui/Card";
import { components } from "@/lib/copy";

export function ProgramComponents() {
  return (
    <section
      aria-labelledby="components-heading"
      className="bg-[var(--paper-2)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="components-heading"
            className="t-h2 text-[32px] sm:text-[44px] mb-12 max-w-[24ch]"
          >
            What you <span className="text-[var(--gold)]">get.</span>
          </h2>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {components.cards.map((c) => (
            <StaggerItem key={c.title}>
              <FeatureCard
                n={c.n}
                title={c.title}
                body={c.body}
                icon={
                  <div className="w-full">
                    {c.image ? (
                      <div className="relative w-full aspect-video overflow-hidden bg-[var(--paper-3)] rounded-[4px]">
                        <Image
                          src={c.image}
                          alt={`${c.title} photo`}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <Placeholder
                        label={`${c.title} photo`}
                        aspect="16/9"
                        tone="parchment"
                        className="w-full"
                      />
                    )}
                  </div>
                }
              />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.25}>
          <div className="mt-14 pt-8 border-t border-[var(--border)]">
            <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--ink-3)] mb-4">
              What you walk out with
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {components.outcomes.map((o) => (
                <li
                  key={o}
                  className="font-sans font-500 text-[22px] sm:text-[26px] text-[var(--ink)] flex items-center gap-3"
                >
                  <span className="text-[var(--gold)] text-[20px] leading-none">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

