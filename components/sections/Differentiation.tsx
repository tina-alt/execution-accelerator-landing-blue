import { FadeIn } from "@/components/motion/FadeIn";
import { differentiation } from "@/lib/copy";

export function Differentiation() {
  return (
    <section
      aria-labelledby="diff-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="diff-heading"
            className="t-h2 text-[32px] sm:text-[48px] leading-[1.12] max-w-[22ch] mb-10"
          >
            What Makes{" "}
            <span className="text-[var(--gold)]">AI Execution Accelerator</span>{" "}
            Different
          </h2>
        </FadeIn>
        <div className="space-y-5">
          {differentiation.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <p className="t-body max-w-[64ch]">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


