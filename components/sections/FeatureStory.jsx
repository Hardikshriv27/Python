"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/animations/helpers";

export default function FeatureStory({ product }) {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isInProgress = product.status === "in-progress";

  const displayName =
    product.slug === "ims"
      ? "IMS"
      : product.slug === "cafe"
        ? "Café Management System"
        : product.name;

  const activeFeature =
    product.features[activeIndex] || product.features[0];

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-stage",
        {
          opacity: 0,
          y: 45,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-stage",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".feature-intro",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-intro",
            start: "top 88%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".active-copy",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".active-visual",
        {
          opacity: 0,
          scale: 0.94,
          rotate: -1,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.65,
          ease: "power3.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      ref={ref}
      id={`${product.slug}-features`}
      className="relative overflow-hidden bg-ink px-6 py-24 lg:px-10 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
          ===================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-[35%] h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.025] blur-[170px]"
        style={{ backgroundColor: product.accentHex }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[48%] h-[1px] w-[75%] -translate-x-1/2 opacity-20"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${product.accentHex},
            transparent
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px]">

        {/* =====================================================
            INTRO
            ===================================================== */}

        <div className="feature-intro grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-px w-9"
                style={{ backgroundColor: product.accentHex }}
              />

              <span
                className="text-[0.59rem] font-semibold uppercase tracking-[0.3em]"
                style={{ color: product.accentHex }}
              >
                {product.eyebrow}
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] font-display text-[3.2rem] font-medium leading-[0.9] tracking-[-0.065em] text-paper sm:text-[4.5rem] lg:text-[5.4rem]">
              {displayName}
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[430px] text-[0.9rem] leading-[1.8] text-slate sm:text-[0.98rem]">
              {product.positioning}
            </p>

            <div
              className="mt-5 flex items-center gap-2 text-[0.56rem] font-semibold uppercase tracking-[0.18em]"
              style={{
                color: isInProgress
                  ? "#a396ff"
                  : product.accentHex,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: isInProgress
                    ? "#a396ff"
                    : product.accentHex,
                  boxShadow: `0 0 12px ${
                    isInProgress
                      ? "#a396ff"
                      : product.accentHex
                  }66`,
                }}
              />

              {isInProgress ? "In Progress" : "Available Now"}
            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURE STAGE
            ===================================================== */}

        <div className="feature-stage relative mt-16 overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-ink-soft/25 lg:mt-20">

          {/* Decorative frame */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px]"
            style={{
              boxShadow: `inset 0 0 90px ${product.accentHex}08`,
            }}
          />

          {/* Top micro-label */}
          <div className="relative flex items-center justify-between px-6 pt-6 sm:px-9 sm:pt-8">
            <span className="text-[0.52rem] font-medium uppercase tracking-[0.28em] text-slate/40">
              Inside the system
            </span>

            <span className="text-[0.52rem] uppercase tracking-[0.2em] text-slate/30">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(product.features.length).padStart(2, "0")}
            </span>
          </div>

          {/* ===================================================
              VISUAL STAGE
              =================================================== */}

          <div className="relative px-6 pb-7 pt-12 sm:px-9 sm:pb-9 lg:px-14 lg:pb-12 lg:pt-16">

            {/* Decorative orbital lines */}
            <div
              className="pointer-events-none absolute left-1/2 top-[42%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-30"
              style={{
                borderColor: `${product.accentHex}20`,
              }}
            />

            <div
              className="pointer-events-none absolute left-1/2 top-[42%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-30"
              style={{
                borderColor: `${product.accentHex}18`,
              }}
            />

            {/* Floating particles */}
            <span
              className="pointer-events-none absolute left-[18%] top-[20%] h-1 w-1 rounded-full"
              style={{
                backgroundColor: product.accentHex,
                boxShadow: `0 0 12px ${product.accentHex}`,
              }}
            />

            <span
              className="pointer-events-none absolute right-[17%] top-[30%] h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: product.accentHex,
                boxShadow: `0 0 16px ${product.accentHex}`,
              }}
            />

            <span
              className="pointer-events-none absolute bottom-[18%] left-[28%] h-1 w-1 rounded-full"
              style={{
                backgroundColor: product.accentHex,
                boxShadow: `0 0 10px ${product.accentHex}`,
              }}
            />

            {/* =================================================
                CENTRAL PRODUCT MARK
                ================================================= */}

            <div className="relative mx-auto flex min-h-[310px] items-center justify-center sm:min-h-[360px]">

              {/* Connecting lines */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[68%] -translate-x-1/2 -translate-y-1/2 opacity-25"
                style={{
                  background: `linear-gradient(
                    90deg,
                    transparent,
                    ${product.accentHex},
                    transparent
                  )`,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-px -translate-x-1/2 -translate-y-1/2 opacity-20"
                style={{
                  background: `linear-gradient(
                    180deg,
                    transparent,
                    ${product.accentHex},
                    transparent
                  )`,
                }}
              />

              {/* Core glow */}
              <div
                className="absolute h-[190px] w-[190px] rounded-full blur-[55px] opacity-[0.07]"
                style={{
                  backgroundColor: product.accentHex,
                }}
              />

              {/* Core */}
              <div
                className="relative z-10 flex h-[132px] w-[132px] items-center justify-center rounded-full border sm:h-[150px] sm:w-[150px]"
                style={{
                  borderColor: `${product.accentHex}45`,
                  background: `
                    radial-gradient(
                      circle at 35% 30%,
                      ${product.accentHex}16,
                      rgba(0,0,0,0.08) 60%,
                      transparent
                    )
                  `,
                  boxShadow: `
                    0 0 70px ${product.accentHex}12,
                    inset 0 0 40px ${product.accentHex}08
                  `,
                }}
              >
                <div className="text-center">
                  <span
                    className="block font-display text-[1.7rem] font-medium tracking-[-0.06em] sm:text-[2rem]"
                    style={{ color: product.accentHex }}
                  >
                    {displayName === "Café Management System"
                      ? "CAFÉ"
                      : displayName}
                  </span>

                  <span className="mt-1 block text-[0.45rem] uppercase tracking-[0.25em] text-slate/45">
                    Product System
                  </span>
                </div>
              </div>

              {/* Capability nodes */}
              {product.features
                .slice(0, 6)
                .map((feature, index) => {
                  const positions = [
                    "left-[8%] top-[17%]",
                    "right-[8%] top-[17%]",
                    "left-[2%] bottom-[17%]",
                    "right-[2%] bottom-[17%]",
                    "left-[34%] top-[2%]",
                    "right-[34%] bottom-[2%]",
                  ];

                  const active = index === activeIndex;

                  return (
                    <button
                      key={feature.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`absolute ${positions[index]} group z-20`}
                    >
                      <div
                        className="flex items-center gap-2 transition-all duration-500"
                        style={{
                          opacity: active ? 1 : 0.48,
                          transform: active
                            ? "scale(1.06)"
                            : "scale(1)",
                        }}
                      >
                        <span
                          className="h-2 w-2 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: product.accentHex,
                            boxShadow: active
                              ? `0 0 18px ${product.accentHex}`
                              : `0 0 7px ${product.accentHex}55`,
                          }}
                        />

                        <span
                          className="whitespace-nowrap text-[0.52rem] font-semibold uppercase tracking-[0.15em]"
                          style={{
                            color: active
                              ? product.accentHex
                              : "var(--color-slate)",
                          }}
                        >
                          {feature.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
            </div>

            {/* =================================================
                ACTIVE FEATURE
                ================================================= */}

            <div className="relative mx-auto max-w-[760px] text-center">

              <div className="active-copy">

                <span
                  className="text-[0.55rem] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: product.accentHex }}
                >
                  {activeFeature.label}
                </span>

                <h3 className="mt-4 font-display text-[2rem] font-medium leading-[1] tracking-[-0.05em] text-paper sm:text-[2.8rem] lg:text-[3.35rem]">
                  {activeFeature.headline}
                </h3>

                <p className="mx-auto mt-4 max-w-[570px] text-[0.82rem] leading-[1.75] text-slate sm:text-[0.92rem]">
                  {activeFeature.body}
                </p>
              </div>

              {/* Accent line */}
              <div className="mx-auto mt-7 flex w-[180px] items-center justify-center gap-2">
                <span className="h-px flex-1 bg-[var(--color-line)]" />

                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: product.accentHex,
                    boxShadow: `0 0 12px ${product.accentHex}77`,
                  }}
                />

                <span className="h-px flex-1 bg-[var(--color-line)]" />
              </div>
            </div>
          </div>

          {/* ===================================================
              CAPABILITY NAVIGATION
              =================================================== */}

          <div className="relative border-t border-[var(--color-line)]">

            <div className="flex overflow-x-auto">
              {product.features.map((feature, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={feature.label}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="group relative min-w-[150px] flex-1 border-r border-[var(--color-line)] px-4 py-5 text-left last:border-r-0 sm:px-5"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-display text-[0.75rem]"
                        style={{
                          color: active
                            ? product.accentHex
                            : "var(--color-slate)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: active
                            ? product.accentHex
                            : "var(--color-line)",
                          boxShadow: active
                            ? `0 0 10px ${product.accentHex}`
                            : "none",
                        }}
                      />
                    </div>

                    <span
                      className="mt-3 block truncate text-[0.52rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                      style={{
                        color: active
                          ? "var(--color-paper)"
                          : "var(--color-slate)",
                      }}
                    >
                      {feature.label}
                    </span>

                    {/* Active indicator */}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
                      style={{
                        width: active ? "100%" : "0%",
                        backgroundColor: product.accentHex,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
            ===================================================== */}

        <div className="feature-intro mt-12 text-center">
          <span className="text-[0.54rem] font-medium uppercase tracking-[0.3em] text-slate/40">
            One product. Many moving parts. One connected system.
          </span>
        </div>
      </div>
    </section>
  );
}