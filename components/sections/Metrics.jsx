"use client";

import { useEffect, useRef } from "react";
import { scrollFadeReveal, EASE } from "@/lib/animations/helpers";

// Configure real figures here when available. No invented numbers are shown.
const stats = [
  { value: "3", label: "Products" },
  { value: "3", label: "Industries served" },
  { value: "1", label: "Company" },
];

export default function Metrics() {
  const ref = useRef(null);

  useEffect(
    () => scrollFadeReveal(ref.current, ".metric-item", { y: 20, duration: 0.7, stagger: 0.1, start: "top 80%", ease: EASE.soft }),
    []
  );

  return (
    <section ref={ref} className="relative border-t border-[var(--color-line)] bg-ink px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="metric-item">
            <div className="font-display text-4xl font-medium text-paper sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-[0.75rem] tracking-wide text-slate">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
