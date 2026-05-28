import { FadeIn } from "@/components/motion/FadeIn";
import { problem } from "@/lib/copy";

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">

        <FadeIn delay={0.05}>
          <h2
            id="problem-heading"
            className="t-h2 text-[36px] sm:text-[52px] mb-10"
          >
            {problem.headline}
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {problem.body.map((p, i) => (
            <FadeIn key={i} delay={0.05 + i * 0.05}>
              <p className="t-body max-w-[64ch]">{p}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <blockquote className="mt-14 pl-6 border-l-[3px] border-[var(--gold)]">
            <p className="font-sans font-500 text-[26px] sm:text-[34px] leading-[1.2] text-[var(--ink)] max-w-[26ch]">
              {problem.pullQuote.split("execution problem")[0]}
              <span className="text-[var(--gold)]">execution problem.</span>
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

