import { FadeIn } from "@/components/motion/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/lib/faq";
import { faqIntro } from "@/lib/copy";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[var(--paper-2)] py-24 sm:py-32"
    >
      <div className="max-w-[920px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="faq-heading"
            className="t-h2 text-[32px] sm:text-[48px] mb-12"
          >
            {faqIntro.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion items={faq} />
        </FadeIn>
      </div>
    </section>
  );
}

