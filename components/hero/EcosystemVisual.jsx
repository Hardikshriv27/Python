"use client";

export default function EcosystemVisual() {
  return (
    <div className="relative h-full w-full select-none -translate-y-6" aria-hidden="true">
      {/* =====================================================
          TRIUNE CORE — parent node, top center
          ===================================================== */}
      <div className="absolute left-1/2 top-0 z-20 flex h-[82px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[20px] border border-paper/15 bg-ink-soft/95 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="absolute inset-2 rounded-[15px] border border-paper/[0.06]" />
        <div className="relative text-center">
          <div className="font-display text-[0.95rem] font-semibold tracking-[0.24em] text-paper">
            TRIUNE
          </div>
          <div className="mt-1 text-[0.46rem] uppercase tracking-[0.22em] text-slate">
            Digital Platform
          </div>
        </div>
      </div>

      {/* =====================================================
          SIGNAL LINES — all three originate from the SAME point:
          TRIUNE's bottom-center edge (50%, 82px), then fan out to
          each card's top-center. One shared origin = parent → children.
          ===================================================== */}
      <svg
        className="pointer-events-none absolute left-0 top-0 z-0 h-[218px] w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="toIms" x1="50%" y1="82" x2="9%" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-paper)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-azure)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="toMero" x1="50%" y1="82" x2="50%" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-paper)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-verdant)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="toCafe" x1="50%" y1="82" x2="91%" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-paper)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-cafe)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* single shared origin: TRIUNE bottom-center */}
        <line x1="50%" y1="82" x2="9%" y2="150" stroke="url(#toIms)" strokeWidth="1.25" />
        <line x1="50%" y1="82" x2="50%" y2="150" stroke="url(#toMero)" strokeWidth="1.25" />
        <line x1="50%" y1="82" x2="91%" y2="150" stroke="url(#toCafe)" strokeWidth="1.25" />

        {/* origin pulse — the "signal sent" point on TRIUNE */}
        <circle cx="50%" cy="82" r="2.5" fill="var(--color-paper)" opacity="0.6" />
      </svg>

      {/* Traveling signal dots — same path as the lines above, same timing so
          they read as ONE pulse fired from TRIUNE to all three children. */}
      {/* left track: TRIUNE center (50%) → IMS center (9%) */}
      <div className="pointer-events-none absolute left-[9%] top-[82px] z-0 h-[68px] w-[41%]">
        <div className="signal-dot signal-dot-blue" />
      </div>
      {/* center track: TRIUNE center → Mero Lagaani center (straight down) */}
      <div className="pointer-events-none absolute left-1/2 top-[82px] z-0 h-[68px] w-0 -translate-x-1/2">
        <div className="signal-dot signal-dot-green" />
      </div>
      {/* right track: TRIUNE center (50%) → Cafe center (91%) */}
      <div className="pointer-events-none absolute left-1/2 top-[82px] z-0 h-[68px] w-[41%]">
        <div className="signal-dot signal-dot-orange" />
      </div>

      {/* =====================================================
          CARD ROW — children, sit below TRIUNE
          ===================================================== */}

      {/* IMS — left */}
      <div
        className="ecosystem-card absolute left-[0%] top-[150px] z-10 w-[170px] rounded-[18px] border border-azure/20 bg-ink-soft/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        style={{ "--float-delay": "0s" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-slate">IMS</p>
            <p className="mt-1 text-[0.62rem] text-slate-dim">Inventory Management</p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-azure/20 bg-azure/[0.08]">
            <span className="h-1.5 w-1.5 rounded-full bg-azure" />
          </span>
        </div>
        <div className="flex h-11 items-end gap-[4px]">
          {[38, 55, 46, 72, 57, 84, 68, 94].map((height, index) => (
            <div key={index} className="flex-1 rounded-[2px] bg-azure/50" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[var(--color-line-soft)] pt-3">
          <span className="text-[0.56rem] text-slate">Stock movement</span>
          <span className="text-[0.6rem] font-medium text-azure">Active</span>
        </div>
      </div>

      {/* Mero Lagaani — center */}
      <div
        className="ecosystem-card absolute left-1/2 top-[150px] z-10 w-[170px] -translate-x-1/2 rounded-[18px] border border-verdant/20 bg-ink-soft/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        style={{ "--float-delay": "0s" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-slate">Mero Lagaani</p>
            <p className="mt-1 text-[0.62rem] text-slate-dim">Digital Investing</p>
          </div>
          <span className="text-[0.62rem] font-medium text-verdant">▲ 1.24%</span>
        </div>
        <svg viewBox="0 0 150 42" className="mt-4 w-full" fill="none">
          <polyline
            points="0,34 17,28 34,30 51,21 68,25 85,15 102,19 119,9 136,13 150,4"
            stroke="var(--color-verdant)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="4" r="2.5" fill="var(--color-verdant)" />
        </svg>
        <div className="mt-2 flex justify-between border-t border-[var(--color-line-soft)] pt-2">
          <span className="text-[0.55rem] text-slate">NEPSE</span>
          <span className="text-[0.58rem] text-verdant">Live</span>
        </div>
      </div>

      {/* Cafe Management — right */}
      <div
        className="ecosystem-card absolute right-[0%] top-[150px] z-10 w-[170px] rounded-[18px] border border-cafe/20 bg-ink-soft/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        style={{ "--float-delay": "0s" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-slate">Cafe Management</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
        </div>
        <div className="mt-4">
          <span className="font-display text-[1.35rem] font-medium tracking-[-0.035em] text-paper">142</span>
          <span className="ml-2 text-[0.6rem] text-slate">orders</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[0.56rem] text-slate">Today</span>
          <span className="rounded-full border border-cafe/20 bg-cafe/[0.08] px-2 py-1 text-[0.5rem] font-medium uppercase tracking-[0.12em] text-cafe">
            Active
          </span>
        </div>
      </div>

      {/* =====================================================
          ANIMATION — one shared "signal" timing for all 3 dots,
          each traveling ITS OWN vector (--dx, --dy) from the same origin.
          ===================================================== */}
      <style jsx>{`
        .signal-dot {
          position: absolute;
          top: 0%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          margin-top: -3px;
          border-radius: 9999px;
          box-shadow: 0 0 14px currentColor;
          animation: signalDown 2.2s ease-in-out infinite;
        }
        .signal-dot-blue {
          color: var(--color-azure);
          background: var(--color-azure);
          left: 100%;
          animation-name: signalToLeft;
        }
        .signal-dot-green {
          color: var(--color-verdant);
          background: var(--color-verdant);
          left: 0%;
          animation-name: signalDown;
        }
        .signal-dot-orange {
          color: var(--color-cafe);
          background: var(--color-cafe);
          left: 0%;
          animation-name: signalToRight;
        }

        /* center: straight down, top 0% -> 100% */
        @keyframes signalDown {
          0% {
            opacity: 0;
            top: 0%;
            transform: translateY(0) scale(0.6);
          }
          15% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            top: 100%;
            transform: translateY(0) scale(0.6);
          }
        }

        /* left card: dot starts at TRIUNE side (left:100%) and moves to IMS (left:0%) */
        @keyframes signalToLeft {
          0% {
            opacity: 0;
            left: 100%;
            top: 0%;
            transform: scale(0.6);
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            left: 0%;
            top: 100%;
            transform: scale(0.6);
          }
        }

        /* right card: dot starts at TRIUNE side (left:0%) and moves to Cafe (left:100%) */
        @keyframes signalToRight {
          0% {
            opacity: 0;
            left: 0%;
            top: 0%;
            transform: scale(0.6);
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            left: 100%;
            top: 100%;
            transform: scale(0.6);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .signal-dot {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}