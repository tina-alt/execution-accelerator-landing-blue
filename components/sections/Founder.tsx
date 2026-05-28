import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { founder } from "@/lib/copy";

export function Founder() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[var(--ink)] text-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <FadeIn>
          <div className="relative">
            <div className="relative rounded-[6px] overflow-hidden border border-[rgba(244,242,236,0.1)] aspect-[3/4] max-w-[420px]">
              <Image
                src="/images/Antonio Centeno.webp"
                alt="Antonio Centeno, Founder of AI Execution Accelerator"
                width={420}
                height={560}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-[filter] duration-700"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 to-transparent"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[var(--gold)] text-[var(--ink)] px-4 py-2 rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-medium">
              Antonio Centeno - Founder
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            <h2
              id="founder-heading"
              className="font-serif text-[32px] sm:text-[48px] leading-[1.12] mb-8"
            >
              Why <span className="text-[var(--gold)]">AI Execution Accelerator</span> Exists
            </h2>
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-[var(--paper)] font-light mb-6">
              {founder.intro}
            </p>
            <div className="space-y-5 max-w-[58ch]">
              {founder.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] sm:text-[16px] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light"
                >
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[60ch]">
              {founder.credentials.map((c) => (
                <li
                  key={c}
                  className="text-[13px] tracking-[0.02em] text-[rgba(244,242,236,0.7)] flex items-start gap-2 before:content-['—'] before:text-[var(--gold)] before:shrink-0"
                >
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
