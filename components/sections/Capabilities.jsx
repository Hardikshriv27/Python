"use client";

import { useEffect, useRef } from "react";
import { capabilities } from "@/lib/constants/content";
import { scrollFadeReveal, EASE } from "@/lib/animations/helpers";

export default function Capabilities() {
  const ref = useRef(null);

  useEffect(
    () => scrollFadeReveal(ref.current, ".cap-row", { y: 16, duration: 0.6, stagger: 0.05, ease: EASE.soft }),
    []
  );

  return (
    <section id="capabilities" ref={ref} className="relative border-t border-[var(--color-line)] bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <span className="block text-center text-[0.7rem] font-medium tracking-[0.3em] text-slate">
          WHAT WE BUILD
        </span>
        <h2 className="font-display mt-4 text-center text-[2rem] font-medium text-paper sm:text-[2.6rem]">
          Capabilities
        </h2>

        <div className="mt-16 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
          {capabilities.map((c) => (
            <div
              key={c.label}
              className="cap-row group grid grid-cols-1 items-baseline gap-1 py-5 transition-colors sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <span className="font-display text-lg text-paper transition-colors group-hover:text-mero sm:text-xl">
                {c.label}
              </span>
              <span className="text-sm text-slate">{c.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
