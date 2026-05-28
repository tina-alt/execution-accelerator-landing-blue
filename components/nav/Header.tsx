"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Program", href: "#program" },
  { label: "Process", href: "#process" },
  { label: "Tools", href: "#tools" },
  { label: "Audit", href: "#audit" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(14,14,12,0.92)] backdrop-blur-md border-b border-[rgba(244,242,236,0.08)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-[64px] flex items-center justify-between">
        <Link
          href="/"
          className="font-sans font-500 text-[20px] text-[var(--paper)] tracking-tight"
        >
          <span className="text-[var(--gold)]">EA</span>
          <span className="opacity-70 text-[14px] ml-2 font-sans tracking-wide">
            Execution Accelerator
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] text-[rgba(244,242,236,0.7)] hover:text-[var(--paper)] transition-colors tracking-wide"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#apply" variant="gold" size="md" arrow>
            Apply
          </Button>
        </div>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-[var(--paper)]"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--ink)] border-t border-[rgba(244,242,236,0.08)]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] text-[var(--paper)] py-1"
              >
                {n.label}
              </a>
            ))}
            <Button href="#apply" variant="gold" size="md" arrow className="self-start mt-2">
              Apply
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

