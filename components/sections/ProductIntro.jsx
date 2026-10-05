"use client";

import { useEffect, useRef } from "react";
import { scrollFadeReveal } from "@/lib/animations/helpers";

export default function ProductIntro() {
  const ref = useRef(null);

  useEffect(
    () =>
      scrollFadeReveal(ref.current, ".pi-line", {
        y: 30,
        duration: 0.9,
        stagger: 0.12,
      }),
    []
  );

  return (
    <section
      id="products"
      ref={ref}
      className="relative overflow-hidden bg-ink px-6 py-32 lg:px-10 lg:py-44"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/[0.018] blur-[140px]" />

        <div className="absolute left-[18%] top-[35%] h-[260px] w-[260px] rounded-full bg-azure/[0.012] blur-[120px]" />

        <div className="absolute right-[15%] bottom-[20%] h-[260px] w-[260px] rounded-full bg-ember/[0.01] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1120px]">
        {/* =====================================================
            SECTION MARKER
            ===================================================== */}

        <div className="pi-line mb-14 flex items-center justify-center gap-3 lg:mb-16">
          <span className="h-px w-8 bg-[var(--color-line)]" />

          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-slate">
            Our Products
          </span>

          <span className="h-px w-8 bg-[var(--color-line)]" />
        </div>

        {/* =====================================================
            MAIN STATEMENT
            ===================================================== */}

        <div className="text-center">
          <h2 className="font-display text-[2.7rem] font-medium leading-[1.02] tracking-[-0.045em] text-paper sm:text-[3.8rem] lg:text-[5rem]">
            <span className="pi-line block">One Company.</span>

            <span className="pi-line block">Three Products.</span>

            <span className="pi-line mt-1 block font-normal italic tracking-[-0.055em] text-slate">
              Built to Move Business Forward.
            </span>
          </h2>

          <p className="pi-line mx-auto mt-9 max-w-[600px] text-[0.98rem] leading-[1.8] tracking-[-0.005em] text-slate sm:text-[1.02rem]">
            From enterprise operations to hospitality management and digital
            investing, our products are designed to solve real-world problems
            with powerful technology.
          </p>
        </div>

        {/* =====================================================
            PRODUCT STATUS CARDS
            ===================================================== */}

        <div className="pi-line mx-auto mt-20 grid max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-3">
          {/* ===================================================
              IMS
              =================================================== */}

          <div className="product-status-card group relative overflow-hidden rounded-2xl border border-azure/20 bg-ink-soft/70 p-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-azure/[0.06] blur-3xl transition-all duration-500 group-hover:bg-azure/[0.1]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.25em] text-slate">
                  01 — Inventory
                </span>

                <span className="flex items-center gap-2">
                  <span className="status-dot status-live-blue" />

                  <span className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-slate">
                    Live
                  </span>
                </span>
              </div>

              <h3 className="font-display text-[1.45rem] font-medium tracking-[-0.035em] text-paper">
                IMS
              </h3>

              <p className="mt-2 max-w-[190px] text-[0.7rem] leading-[1.6] text-slate">
                Inventory Management System
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                <span className="text-[0.57rem] uppercase tracking-[0.18em] text-slate/60">
                  Stock Operations
                </span>

                <span className="h-1 w-8 rounded-full bg-azure/50" />
              </div>
            </div>
          </div>

          {/* ===================================================
              CAFE MANAGEMENT
              =================================================== */}

          <div className="product-status-card group relative overflow-hidden rounded-2xl border border-ember/20 bg-ink-soft/70 p-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-ember/[0.06] blur-3xl transition-all duration-500 group-hover:bg-ember/[0.1]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.25em] text-slate">
                  02 — Hospitality
                </span>

                <span className="flex items-center gap-2">
                  <span className="status-dot status-live-green" />

                  <span className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-slate">
                    Live
                  </span>
                </span>
              </div>

              <h3 className="font-display text-[1.45rem] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
                Café Management System
              </h3>

              <p className="mt-3 max-w-[200px] text-[0.7rem] leading-[1.6] text-slate">
                Complete cafe and restaurant operations.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                <span className="text-[0.57rem] uppercase tracking-[0.18em] text-slate/60">
                  Hospitality
                </span>

                <span className="h-1 w-8 rounded-full bg-ember/50" />
              </div>
            </div>
          </div>

          {/* ===================================================
              MERO LAGAANI
              PURPLE CARD + RED PENDING LIGHT
              =================================================== */}

          <div className="product-status-card group relative overflow-hidden rounded-2xl border border-[#8b7cf6]/20 bg-ink-soft/70 p-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#8b7cf6]/[0.05] blur-3xl transition-all duration-500 group-hover:bg-[#8b7cf6]/[0.1]" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.25em] text-slate">
                  03 — Investing
                </span>

                <span className="flex items-center gap-2">
                  {/* RED = PENDING STATUS */}
                  <span className="status-dot status-pending" />

                  <span className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-slate">
                    Pending
                  </span>
                </span>
              </div>

              <h3 className="font-display text-[1.45rem] font-medium tracking-[-0.035em] text-paper">
                Mero Lagaani
              </h3>

              <p className="mt-2 max-w-[190px] text-[0.7rem] leading-[1.6] text-slate">
                Digital investing and market platform.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                <span className="text-[0.57rem] uppercase tracking-[0.18em] text-slate/60">
                  Digital Markets
                </span>

                {/* PURPLE = PRODUCT BRAND */}
                <span className="h-1 w-8 rounded-full bg-[#8b7cf6]/60" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
            ===================================================== */}

        <div className="pi-line mt-12 flex items-center justify-center gap-3 text-[0.57rem] font-medium uppercase tracking-[0.25em] text-slate/55">
          <span className="h-px w-6 bg-[var(--color-line)]" />

          <span>Three domains. One technology house.</span>

          <span className="h-px w-6 bg-[var(--color-line)]" />
        </div>
      </div>

      {/* =====================================================
          CARD MOTION + STATUS LIGHT ANIMATION
          ===================================================== */}

      <style jsx global>{`
        .product-status-card {
          transform: translateY(0) scale(1);
          transition:
            transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 420ms ease,
            box-shadow 420ms ease;
        }

        .product-status-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.22),
            0 0 0 1px rgba(255, 255, 255, 0.025);
        }

        .status-dot {
          position: relative;
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 9999px;
        }

        .status-dot::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          opacity: 0.45;
          animation: statusPulse 1.8s ease-out infinite;
        }

        .status-live-blue {
          background: #2f8fff;
          box-shadow: 0 0 10px rgba(47, 143, 255, 0.65);
        }

        .status-live-blue::after {
          background: rgba(47, 143, 255, 0.28);
        }

        .status-live-green {
          background: #4fc78a;
          box-shadow: 0 0 10px rgba(79, 199, 138, 0.65);
        }

        .status-live-green::after {
          background: rgba(79, 199, 138, 0.28);
        }

        /* PENDING STAYS RED */
        .status-pending {
          background: #ef4444;
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.7);
        }

        .status-pending::after {
          background: rgba(239, 68, 68, 0.3);
        }

        @keyframes statusPulse {
          0% {
            transform: scale(0.65);
            opacity: 0.55;
          }

          70% {
            transform: scale(1.8);
            opacity: 0;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-status-card {
            transition: none;
          }

          .product-status-card:hover {
            transform: none;
          }

          .status-dot::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}