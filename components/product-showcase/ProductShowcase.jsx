"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/lib/constants/products";
import { mockupRegistry } from "@/components/products/mockups";
import { prefersReducedMotion } from "@/lib/animations/helpers";
import ProductShowcaseMobile from "./ProductShowcaseMobile";
import IMSStats from "@/components/products/mockups/IMSStats";

gsap.registerPlugin(ScrollTrigger);

const N = products.length;

export default function ProductShowcase() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const bgRefs = useRef([]);
  const titleRefs = useRef([]);
  const catRefs = useRef([]);
  const descRefs = useRef([]);

  const skipPin =
    typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = cardRefs.current;
      const bgs = bgRefs.current;

      /*
       * Initial state
       * -----------------------------
       * First product visible.
       * Remaining products hidden.
       */

      gsap.set(cards, {
        scale: 0.72,
        borderRadius: 32,
        opacity: 0,
        y: 60,
      });

      gsap.set(cards[0], {
        opacity: 1,
        y: 0,
      });

      gsap.set(bgs, {
        opacity: 0,
      });

      gsap.set(bgs[0], {
        opacity: 1,
      });

      gsap.set(titleRefs.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(catRefs.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(descRefs.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(
        [
          titleRefs.current[0],
          catRefs.current[0],
          descRefs.current[0],
        ],
        {
          opacity: 1,
          y: 0,
        }
      );

      const segmentLength = 1;

      /*
       * Master scroll timeline
       */

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${N * 1400}`,
          scrub: 0.6,
          pin: stageRef.current,
          anticipatePin: 1,
        },
      });

      products.forEach((_, i) => {
        const label = `p${i}`;

        master.addLabel(label);

        /*
         * Current product grows into view
         */

        master.to(
          cards[i],
          {
            scale: 1.15,
            borderRadius: 0,
            duration: segmentLength * 0.6,
            ease: "power1.inOut",
          },
          label
        );

        /*
         * Transition to next product
         */

        if (i < N - 1) {
          master.to(
            cards[i],
            {
              opacity: 0,
              scale: 1.4,
              duration: segmentLength * 0.35,
              ease: "power1.in",
            },
            `${label}+=${segmentLength * 0.6}`
          );

          master.to(
            bgs[i],
            {
              opacity: 0,
              duration: segmentLength * 0.35,
              ease: "power1.in",
            },
            `${label}+=${segmentLength * 0.6}`
          );

          master.to(
            [
              titleRefs.current[i],
              catRefs.current[i],
              descRefs.current[i],
            ],
            {
              opacity: 0,
              y: -20,
              duration: segmentLength * 0.25,
              ease: "power1.in",
            },
            `${label}+=${segmentLength * 0.6}`
          );

          /*
           * Next product appears
           */

          master.set(
            cards[i + 1],
            {
              opacity: 1,
              y: 0,
            },
            `${label}+=${segmentLength * 0.75}`
          );

          master.fromTo(
            cards[i + 1],
            {
              scale: 0.72,
            },
            {
              scale: 1,
              duration: segmentLength * 0.5,
              ease: "power2.out",
            },
            `${label}+=${segmentLength * 0.75}`
          );

          master.to(
            bgs[i + 1],
            {
              opacity: 1,
              duration: segmentLength * 0.5,
              ease: "power1.out",
            },
            `${label}+=${segmentLength * 0.75}`
          );

          master.fromTo(
            [
              titleRefs.current[i + 1],
              catRefs.current[i + 1],
              descRefs.current[i + 1],
            ],
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: segmentLength * 0.4,
              stagger: 0.06,
              ease: "power2.out",
            },
            `${label}+=${segmentLength * 0.9}`
          );
        }
      });

      return () => {
        master.scrollTrigger?.kill();
        master.kill();
      };
    });

    return () => mm.revert();
  }, []);

  /*
   * ============================================================
   * REDUCED MOTION / STATIC FALLBACK
   * ============================================================
   */

  if (skipPin) {
    return (
      <div className="bg-ink">
        <div className="mx-auto max-w-2xl px-5 py-10 md:hidden">
          <ProductShowcaseMobile />
        </div>

        <div className="mx-auto hidden max-w-3xl flex-col gap-10 px-10 py-16 md:flex">
          {products.map((p, index) => {
            const Mockup =
              index === 0
                ? IMSStats
                : mockupRegistry[p.slug];

            return (
              <div
                key={p.id}
                className="overflow-hidden rounded-3xl border shadow-2xl"
                style={{
                  borderColor: `${p.accentHex}33`,
                }}
              >
                <div className="aspect-[16/9] w-full">
                  <Mockup />
                </div>

                <div className="bg-ink-soft p-6">
                  <span
                    className="text-[0.68rem] font-medium tracking-[0.25em]"
                    style={{
                      color: p.accentHex,
                    }}
                  >
                    {p.category.toUpperCase()}
                  </span>

                  <h3 className="font-display mt-2 text-2xl font-medium text-paper">
                    {p.name}
                  </h3>

                  <p className="mt-2 max-w-x1 text-sm leading-relaxed text-slate">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /*
   * ============================================================
   * DESKTOP SCROLL SHOWCASE
   * ============================================================
   */

  return (
    <div
      ref={wrapRef}
      className="relative bg-zinc-50 dark:bg-ink"
    >
      <ProductShowcaseMobile />

      <div
        ref={stageRef}
        className="relative hidden h-[100svh] w-full overflow-hidden md:block"
      >
        {/* =====================================================
            PRODUCT BACKGROUNDS
        ===================================================== */}

        {products.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => {
              bgRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(
                ellipse 80% 60% at 50% 30%,
                ${p.accentSoft} 0%,
                transparent 70%
              )`,
            }}
          />
        ))}

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 lg:px-10">
          {/* ===================================================
              PRODUCT CATEGORY
          =================================================== */}

          {products.map((p, i) => (
            <span
              key={p.id}
              ref={(el) => {
                catRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-[12%] -translate-x-1/2 whitespace-nowrap text-[0.68rem] font-medium tracking-[0.3em]"
              style={{
                color: p.accentHex,
              }}
            >
              {p.eyebrow} · {p.category.toUpperCase()}
            </span>
          ))}

          {/* ===================================================
              PRODUCT VISUAL / DYNAMIC DATA
          =================================================== */}

          <div className="relative flex w-full flex-1 items-center justify-center py-10">
            {products.map((p, i) => {
              /*
               * FIRST PRODUCT = IMS dynamic statistics UI
               *
               * Other products continue using their
               * existing mockups.
               */

              const Mockup =
                i === 0
                  ? IMSStats
                  : mockupRegistry[p.slug];

              return (
                <div
                  key={p.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="absolute mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden border shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]"
                  style={{
                    borderColor: `${p.accentHex}33`,
                  }}
                >
                  <Mockup />
                </div>
              );
            })}
          </div>

          {/* ===================================================
              PRODUCT TITLE / DESCRIPTION
          =================================================== */}

          {products.map((p, i) => (
            <div
              key={p.id}
              className="pointer-events-none absolute bottom-[3%] left-1/2 z-20 w-full max-w-2xl -translate-x-1/2 px-6 text-center"
            >
              <h3
                ref={(el) => {
                  titleRefs.current[i] = el;
                }}
                className="font-display text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
              >
                {i === 0 ? "IMS" : p.name}
              </h3>

              <p
                ref={(el) => {
                  descRefs.current[i] = el;
                }}
                className="mx-auto mt-2 max-w-x1 text-center text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base"
              >
                {i === 0
                  ? "A powerful inventory management system for products, stock, warehouses and everyday operations."
                  : p.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            PROGRESS DOTS
        ===================================================== */}

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          {products.map((p) => (
            <span
              key={p.id}
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: `${p.accentHex}66`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}