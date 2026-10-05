"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/constants/content";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--color-line)] bg-ink/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1320px] items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Triune home"
          >
            <Image
              src="/brand/triune-mark.png"
              alt="Triune"
              width={32}
              height={32}
              priority
              className="h-8 w-8 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:rotate-[6deg]"
            />

            <span className="font-display text-[0.92rem] font-semibold tracking-[0.18em] text-paper">
              TRIUNE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 text-[0.76rem] font-medium tracking-[0.08em] text-slate transition-colors duration-300 hover:text-paper"
              >
                {item.label}

                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-paper transition-all duration-300 ease-[var(--ease-premium)] group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <a
              href="#products"
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-line)] px-5 text-[0.74rem] font-medium tracking-[0.08em] text-paper transition-all duration-300 hover:border-paper/25 hover:bg-paper/[0.045]"
            >
              <span>Explore Products</span>

              <span className="h-1.5 w-1.5 rounded-full bg-verdant transition-transform duration-300 group-hover:scale-125" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-paper transition-colors duration-300 hover:bg-paper/5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} strokeWidth={1.7} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-ink transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-[76px] items-center justify-between border-b border-[var(--color-line-soft)] px-6">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/brand/triune-mark.png"
              alt="Triune"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
            />

            <span className="font-display text-[0.88rem] font-semibold tracking-[0.18em] text-paper">
              TRIUNE
            </span>
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] text-paper transition-colors duration-300 hover:bg-paper/5"
            >
              <X size={17} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col px-6 pt-10">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-[var(--color-line-soft)] py-5 text-[1.55rem] font-medium tracking-[-0.025em] text-paper transition-all duration-500"
              style={{
                transitionDelay: menuOpen ? `${i * 70}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(14px)",
              }}
            >
              <span>{item.label}</span>

              <span className="text-sm text-slate transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}

          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex h-12 items-center justify-center rounded-full border border-[var(--color-line)] text-[0.76rem] font-medium tracking-[0.1em] text-paper transition-colors duration-300 hover:bg-paper/5"
          >
            Explore Products
          </a>
        </div>

        {/* Mobile Footer Detail */}
        <div
          className={`absolute bottom-8 left-6 right-6 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-slate transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>THE HOUSE OF BUILDERS</span>
          <span className="text-verdant">●</span>
        </div>
      </div>
    </>
  );
}
