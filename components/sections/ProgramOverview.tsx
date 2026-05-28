import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { programOverview, cta } from "@/lib/copy";

export function ProgramOverview() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="program-heading"
            className="t-h2 text-[30px] sm:text-[44px] leading-[1.18] max-w-[24ch] mb-10"
          >
            {programOverview.headline}
          </h2>
        </FadeIn>
        <div className="space-y-5">
          {programOverview.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <p className="t-body max-w-[64ch]">{p}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.35}>
          <div className="mt-10">
            <Button href="#apply" variant="ink" size="md" arrow>
              {cta.apply}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

