"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import EcosystemVisual from "./EcosystemVisual";
import { prefersReducedMotion } from "@/lib/animations/helpers";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ introDone }) {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const bodyRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!introDone) return;

    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "cubic-bezier(.16,1,.3,1)",
        },
      });

      if (reduced) {
        gsap.set(
          [
            eyebrowRef.current,
            line1Ref.current,
            line2Ref.current,
            bodyRef.current,
            ctaRef.current,
            visualRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
      } else {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
          .fromTo(
            line1Ref.current,
            { opacity: 0, y: 48 },
            { opacity: 1, y: 0, duration: 0.85 },
            0.08
          )
          .fromTo(
            line2Ref.current,
            { opacity: 0, y: 42 },
            { opacity: 1, y: 0, duration: 0.9 },
            0.18
          )
          .fromTo(
            bodyRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.4
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.54
          )
          .fromTo(
            visualRef.current,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1, duration: 1.2 },
            0.24
          );
      }

      if (!reduced) {
        gsap.to(contentRef.current, {
          scale: 0.95,
          opacity: 0.28,
          y: -42,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(visualRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [introDone]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
    >
      {/* =====================================================
          AMBIENT ATMOSPHERE
          ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[54%] top-[-220px] h-[720px] w-[900px] -translate-x-1/2 rounded-full bg-azure/[0.035] blur-[140px]" />

        <div className="absolute bottom-[-260px] left-[-80px] h-[480px] w-[520px] rounded-full bg-ember/[0.018] blur-[140px]" />

        <div className="absolute right-[-80px] top-[34%] h-[420px] w-[420px] rounded-full bg-verdant/[0.018] blur-[140px]" />
      </div>

      {/* =====================================================
          MAIN HERO
          ===================================================== */}

      <div
        ref={contentRef}
        className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-12 px-6 py-20 sm:gap-16 lg:grid-cols-[0.93fr_1.07fr] lg:gap-4 lg:px-10 lg:py-24"
      >
        {/* ===================================================
            LEFT CONTENT
            =================================================== */}

        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <span
            ref={eyebrowRef}
            className="mb-7 inline-flex w-fit items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.28em] text-slate"
          >
            <span className="h-px w-9 bg-verdant/70" />

            Digital Products
          </span>

          {/* Heading */}
          <h1 className="max-w-[650px] font-display text-[3.65rem] font-semibold leading-[0.94] tracking-[-0.055em] text-paper sm:text-[4.8rem] lg:text-[5.25rem] xl:text-[5.65rem]">
            <span
              ref={line1Ref}
              className="block overflow-hidden pb-2"
            >
              Products that move
            </span>

            <span
              ref={line2Ref}
              className="block overflow-hidden pb-3 font-medium leading-[0.98] tracking-[-0.045em] text-slate"
            >
              business{" "}
              <span className="text-paper">forward.</span>
            </span>
          </h1>

          {/* Description */}
          <p
            ref={bodyRef}
            className="mt-7 max-w-[490px] text-[0.98rem] leading-[1.75] tracking-[-0.005em] text-slate sm:text-[1.02rem]"
          >
            From inventory and hospitality to digital investing, we build
            focused products that make complex work simpler.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* Primary */}
            <a
              href="#products"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--color-paper)] px-6 text-[0.74rem] font-semibold tracking-[0.045em] text-[var(--color-ink)] transition-all duration-300 hover:scale-[1.015] hover:bg-[var(--color-paper-dim)]"
            >
              <span className="text-[var(--color-ink)]">
                Explore Our Products
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.9}
                className="text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Secondary */}
            <a
              href="#story"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-[var(--color-line)] px-6 text-[0.74rem] font-medium tracking-[0.045em] text-[var(--color-paper)] transition-all duration-300 hover:border-[var(--color-paper)]/25 hover:bg-[var(--color-paper)]/[0.035]"
            >
              <span>About Us</span>

              <span className="h-1.5 w-1.5 rounded-full bg-azure transition-transform duration-300 group-hover:scale-125" />
            </a>
          </div>
        </div>

        {/* ===================================================
            RIGHT — ECOSYSTEM
            LOCKED — DO NOT CHANGE
            =================================================== */}

        <div
          ref={visualRef}
          className="relative hidden min-h-[480px] lg:block"
        >
          <EcosystemVisual />
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <div className="pointer-events-none absolute bottom-8 left-6 flex items-center gap-3 text-[0.57rem] font-medium uppercase tracking-[0.25em] text-slate/55 lg:left-10">
        <span className="h-px w-8 bg-[var(--color-line)]" />

        <span>Scroll to explore</span>
      </div>

      {/* =====================================================
          ECOSYSTEM FLOAT
          ===================================================== */}

      <style jsx global>{`
        .ecosystem-card {
          animation: ecoFloat 6s ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }

        @keyframes ecoFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ecosystem-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}