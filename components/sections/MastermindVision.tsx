import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { vision } from "@/lib/copy";

export function MastermindVision() {
  return (
    <section
      aria-labelledby="vision-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
        <FadeIn>
          <div>
            <SectionLabel>{vision.label}</SectionLabel>
            <h2
              id="vision-heading"
              className="t-h2 text-[32px] sm:text-[44px] leading-[1.12] mb-8"
            >
              Imagine the <span className="text-[var(--gold)]">room.</span>
            </h2>
            <div className="space-y-5">
              {vision.body.map((p, i) => (
                <p key={i} className="t-body max-w-[56ch]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative rounded-[6px] overflow-hidden border border-[var(--border)] aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80"
              alt="A small group of business operators meeting around a wooden table with laptops, coffee, and notes - the kind of focused working session the program runs every week."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/35 to-transparent"
            />
            <div className="absolute bottom-4 left-4 right-4 text-[var(--paper)]">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--gold)] mb-1">
                The Room
              </div>
              <div className="font-serif text-[18px] sm:text-[22px] leading-tight max-w-[28ch]">
                14 operators. Weekly. By application only.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
