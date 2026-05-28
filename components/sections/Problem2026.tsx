import { FadeIn } from "@/components/motion/FadeIn";
import { problem2026 } from "@/lib/copy";

export function Problem2026() {
  return (
    <section
      aria-labelledby="problem2026-heading"
      className="bg-[var(--paper-3)] py-24 sm:py-32 relative"
    >
      {/* Parchment texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(90,90,82,0.18) 0px, transparent 40%), radial-gradient(circle at 80% 70%, rgba(90,90,82,0.12) 0px, transparent 50%)",
        }}
      />
      <div className="relative max-w-[880px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="problem2026-heading"
            className="t-h2 text-[32px] sm:text-[48px] leading-[1.12] max-w-[22ch] mb-10"
          >
            {problem2026.headline}
          </h2>
        </FadeIn>
        <div className="space-y-5">
          {problem2026.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <p className="t-body max-w-[64ch]">{p}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <p className="mt-14 font-sans font-500 text-[26px] sm:text-[36px] leading-[1.2] text-[var(--ink)]">
            {problem2026.question}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}


