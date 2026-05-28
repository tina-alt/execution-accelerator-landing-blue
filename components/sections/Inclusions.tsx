import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Placeholder } from "@/components/ui/Placeholder";
import { inclusions } from "@/lib/copy";

export function Inclusions() {
  return (
    <section
      aria-labelledby="inclusions-heading"
      className="bg-[var(--paper)] py-24 sm:py-32"
    >
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
        <FadeIn>
          <h2
            id="inclusions-heading"
            className="t-h2 text-[30px] sm:text-[44px] leading-[1.15] mb-12 max-w-[24ch]"
          >
            AI Execution Accelerator{" "}
            <span className="text-[var(--gold)]">Membership</span> Includes:
          </h2>
        </FadeIn>

        <Stagger className="space-y-8" stagger={0.06}>
          {inclusions.items.map((item) => (
            <StaggerItem
              key={item.title}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 items-start py-5 border-b border-[var(--border)]"
            >
              {item.image ? (
                <div className="relative w-full aspect-video overflow-hidden bg-[var(--paper-3)] rounded-[4px]">
                  <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <Placeholder
                  label={`${item.title} image`}
                  aspect="16/9"
                  tone="parchment"
                  className="w-full h-auto"
                />
              )}
              <div>
                <h3 className="font-sans font-500 text-[20px] sm:text-[22px] text-[var(--ink)] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[var(--ink-3)] font-light">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


