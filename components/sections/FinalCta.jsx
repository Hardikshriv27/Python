"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { scrollFadeReveal } from "@/lib/animations/helpers";

export default function FinalCta() {
  const ref = useRef(null);

  useEffect(() => scrollFadeReveal(ref.current, ".fc-anim", { y: 30, duration: 1, stagger: 0.1 }), []);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-[var(--color-line)] bg-ink px-6 py-32 text-center lg:px-10 lg:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-ims-soft/30 via-mero-soft/30 to-cafe-soft/30 blur-3xl" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="fc-anim font-display text-[2.4rem] font-medium leading-[1.05] text-paper sm:text-[3.4rem]">
          Let&apos;s build what&apos;s next.
        </h2>
        <p className="fc-anim mx-auto mt-6 max-w-md text-[1.05rem] text-slate">
          Have an idea, a business challenge, or a product to build? Let&apos;s turn it into
          technology that works.
        </p>
        <div className="fc-anim mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@triune.example.com"
            className="group inline-flex items-center gap-2 rounded-full px-7 bg-amber-700 py-3.5 text-[0.85rem] font-medium tracking-wide transition-transform hover:scale-[1.02]"
          >
            Talk to Us
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-7 py-3.5 text-[0.85rem] tracking-wide text-paper transition-colors hover:border-paper/40"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
