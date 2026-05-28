import { footer } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="bg-[var(--ink-2)] text-[var(--paper)] py-12 border-t border-[rgba(244,242,236,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="font-sans font-500 text-[20px]">
            <span className="text-[var(--gold)]">EA</span>
            <span className="ml-2 text-[14px] font-sans tracking-wide opacity-80">
              {footer.brand}
            </span>
          </div>
          <p className="mt-2 text-[12px] text-[rgba(244,242,236,0.5)] max-w-[42ch]">
            {footer.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footer.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] tracking-wide text-[rgba(244,242,236,0.65)] hover:text-[var(--paper)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-10 pt-6 border-t border-[rgba(244,242,236,0.06)] text-[11px] tracking-[0.04em] text-[rgba(244,242,236,0.4)]">
        {footer.copyright}
      </div>
    </footer>
  );
}

