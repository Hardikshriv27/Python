export default function MeroMockup() {
  const chart = [
    32, 38, 30, 46, 39, 54, 47, 63, 52, 68, 60, 72, 65, 76, 70, 82, 75,
    86,
  ];

  const gainers = [
    ["NIFRA", "Nepal Infrastructure", "5.44%"],
    ["NICL", "NIC Asia Bank", "2.51%"],
    ["SHPC", "Sanima Mai Hydro", "2.38%"],
    ["UPPER", "Upper Tamakoshi", "2.31%"],
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-white text-zinc-900 dark:bg-[#10121c] dark:text-white">
      {/* Header */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 px-5 dark:border-white/10">
        <span className="text-[0.65rem] font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
          MERO LAGAANI
        </span>

        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[0.58rem] font-medium text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          ● NEPSE Live
        </span>
      </div>

      {/* Main */}
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-4 p-5">
        {/* Market Overview */}
        <div className="col-span-3 flex min-h-0 flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-[#191b2b]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[0.58rem] font-medium tracking-[0.12em] text-zinc-500">
                MARKET OVERVIEW
              </div>

              <div className="mt-4 text-[0.58rem] text-zinc-500">
                NEPSE INDEX
              </div>

              <div className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                2,847.32
              </div>

              <div className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[0.58rem] font-medium text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                ▲ +34.82 (+1.24%)
              </div>
            </div>

            <span className="rounded-full bg-red-50 px-2.5 py-1.5 text-[0.55rem] font-medium text-red-500 dark:bg-red-400/10 dark:text-red-400">
              Closed
            </span>
          </div>

          {/* Chart */}
          <div className="mt-5 flex min-h-0 flex-1 items-end gap-1.5 border-b border-zinc-200 dark:border-white/10">
            {chart.map((value, index) => (
              <div
                key={index}
                className="relative flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-full bg-violet-500/80 dark:bg-violet-500"
                  style={{ height: `${value}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-2 flex min-h-0 flex-col gap-3">
          {/* Portfolio */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-[#191b2b]">
            <div className="text-[0.58rem] text-zinc-500">
              PORTFOLIO
            </div>

            <div className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
              ₹8,42,100
            </div>

            <div className="mt-1 text-[0.55rem] text-emerald-500">
              +2.9% today
            </div>
          </div>

          {/* Turnover */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
              <div className="text-[0.52rem] text-zinc-500">
                TURNOVER
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
                ₹3.2B
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
              <div className="text-[0.52rem] text-zinc-500">
                TRADES
              </div>
              <div className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
                14,280
              </div>
            </div>
          </div>

          {/* Gainers / Losers */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
              <div className="text-[0.52rem] text-zinc-500">
                GAINERS
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-500">
                92
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
              <div className="text-[0.52rem] text-zinc-500">
                LOSERS
              </div>
              <div className="mt-2 text-sm font-semibold text-red-500">
                48
              </div>
            </div>
          </div>

          {/* Market Time */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
            <span className="text-[0.55rem] text-zinc-500">
              Market closes in
            </span>

            <span className="text-sm font-semibold text-amber-500">
              Opens 11:00 AM
            </span>
          </div>

          {/* Top Gainers */}
          <div className="min-h-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-[#191b2b]">
            <div className="text-[0.55rem] font-medium tracking-[0.1em] text-zinc-500">
              TOP GAINERS
            </div>

            <div className="mt-2 space-y-2">
              {gainers.map(([symbol, name, change]) => (
                <div
                  key={symbol}
                  className="flex items-center justify-between border-b border-zinc-200 pb-2 last:border-0 dark:border-white/5"
                >
                  <div>
                    <div className="text-[0.65rem] font-medium text-zinc-900 dark:text-white">
                      {symbol}
                    </div>

                    <div className="text-[0.48rem] text-zinc-500">
                      {name}
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[0.5rem] font-medium text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                    ▲ {change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
