"use client";

import { useEffect, useRef } from "react";
import { scrollFadeReveal } from "@/lib/animations/helpers";

export default function CompanyStory() {
  const ref = useRef(null);

  useEffect(() => scrollFadeReveal(ref.current, ".cs-anim", { y: 26, duration: 0.9, stagger: 0.1, start: "top 70%" }), []);

  return (
    <section id="story" ref={ref} className="relative border-t border-[var(--color-line)] bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <span className="cs-anim block text-[0.7rem] font-medium tracking-[0.3em] text-slate">ABOUT TRIUNE</span>
          <h2 className="cs-anim font-display mt-5 text-[2.1rem] font-medium leading-[1.1] text-paper sm:text-[2.8rem]">
            Technology with purpose.
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-[1.02rem] leading-relaxed text-slate">
          <p className="cs-anim">
            Triune is built on a simple premise: practical technology should solve real
            operational and business problems, not just look good in a demo. Every product
            we ship has to hold up under actual daily use.
          </p>
          <p className="cs-anim">
            We work across enterprise operations, hospitality, and finance because the
            underlying discipline is the same — understand the workflow first, then build
            software that gets out of the way.
          </p>
          <div className="cs-anim mt-4 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-6 sm:grid-cols-4">
            {["Engineering", "Innovation", "Reliability", "Long-term Vision"].map((v) => (
              <div key={v} className="text-[0.78rem] tracking-wide text-paper/80">
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
