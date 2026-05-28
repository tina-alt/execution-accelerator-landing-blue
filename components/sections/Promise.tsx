import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Overline } from "@/components/ui/Overline";
import { promise, cta } from "@/lib/copy";

export function Promise() {
  return (
    <section
      aria-labelledby="promise-heading"
      className="relative bg-[var(--ink)] text-[var(--paper)] py-28 sm:py-36 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 size-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,168,75,0.12) 0%, rgba(200,168,75,0) 65%)",
        }}
      />
      <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8 text-center">
        <FadeIn>
          <h2
            id="promise-heading"
            className="mt-6 font-serif text-[34px] sm:text-[56px] leading-[1.08] max-w-[20ch] mx-auto"
          >
            Implement <span className="text-[var(--gold)]">AI Systems</span> That
            Make You Money -- In Days, Not Months.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Button href="#apply" variant="gold" size="lg" arrow>
              {cta.apply}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


