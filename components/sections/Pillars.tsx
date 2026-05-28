import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { pillars } from "@/lib/copy";

const iconMap: Record<string, string> = {
  "Clarity on Direction": "/images/Clarity-on-Direction.svg",
  "Focused Action": "/images/Focused Action-01.svg",
  Accountability: "/images/Accountability-01.svg",
};

export function Pillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="bg-[var(--paper-2)] py-24 sm:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="pillars-heading"
            className="t-h2 text-[32px] sm:text-[44px] max-w-[26ch] mb-16"
          >
            {pillars.headline}
          </h2>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {pillars.items.map((p) => (
            <StaggerItem
              key={p.title}
              className="group relative bg-[var(--white-warm)] border border-[var(--border)] p-7 rounded-[4px] overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 shrink-0 mb-6 flex items-center justify-center">
                <Image
                  src={iconMap[p.title]}
                  alt={`${p.title} icon`}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-sans font-500 text-[24px] leading-tight mb-3 text-[var(--ink)]">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--ink-3)] font-light">
                {p.body}
              </p>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--gold)] w-0 group-hover:w-full transition-all duration-500 ease-out"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

