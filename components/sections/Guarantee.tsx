import { FadeIn } from "@/components/motion/FadeIn";
import { ShieldCheck } from "lucide-react";
import { guarantee } from "@/lib/copy";

export function Guarantee() {
  return (
    <section
      aria-labelledby="guarantee-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="bg-[var(--white-warm)] border border-[var(--border)] border-l-[4px] border-l-[var(--teal)] rounded-[6px] p-8 sm:p-12">
            <div className="flex items-start gap-5">
              <span className="shrink-0 size-12 rounded-full bg-[var(--teal)] flex items-center justify-center">
                <ShieldCheck
                  className="size-6 text-[var(--paper)]"
                  strokeWidth={1.75}
                />
              </span>
              <div>
                <h2
                  id="guarantee-heading"
                  className="font-sans font-500 text-[26px] sm:text-[34px] leading-tight text-[var(--ink)] mb-4"
                >
                  {guarantee.headline}
                </h2>
                <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[var(--ink-2)] font-light max-w-[60ch]">
                  {guarantee.body}
                </p>
                <p className="mt-5 font-sans font-500 text-[18px] text-[var(--ink-3)]">
                  {guarantee.signoff}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


