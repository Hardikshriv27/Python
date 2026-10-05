export default function CafeMockup() {
  const stats = [
    {
      label: "Revenue",
      value: "₹12,450",
      tone: "blue",
    },
    {
      label: "Orders",
      value: "342",
      tone: "green",
    },
    {
      label: "Customers",
      value: "1,205",
      tone: "purple",
    },
  ];

  const activity = [42, 58, 50, 72, 62, 88, 76];

  const cardStyles = {
    blue: "bg-blue-50 dark:bg-[#1d2a4a]",
    green: "bg-emerald-50 dark:bg-[#19332b]",
    purple: "bg-violet-50 dark:bg-[#292040]",
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[inherit] bg-white text-zinc-900 dark:bg-[#0d0f14] dark:text-white">
      {/* Browser Header */}
      <div className="flex h-14 shrink-0 items-center border-b border-zinc-200 px-5 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <span className="ml-5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Dashboard
        </span>
      </div>

      {/* Dashboard */}
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        {/* Heading */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[0.6rem] font-medium tracking-[0.25em] text-zinc-500 dark:text-zinc-500">
                CAFE
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
            </div>

            <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
              Cafe Overview
            </h2>
          </div>

          <span className="rounded-full bg-zinc-100 px-3 py-2 text-[0.6rem] text-zinc-500 dark:bg-white/5 dark:text-zinc-400">
            This Month
          </span>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl p-3 sm:p-4 ${cardStyles[stat.tone]}`}
            >
              <div className="text-[0.55rem] font-medium tracking-[0.12em] text-zinc-500 dark:text-zinc-500">
                {stat.label.toUpperCase()}
              </div>

              <div className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Activity Chart */}
        <div className="mt-4 min-h-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-[#11141a]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[0.55rem] font-medium tracking-[0.12em] text-zinc-500">
                ORDER ACTIVITY
              </div>

              <div className="mt-1 text-[0.5rem] text-zinc-400">
                Cafe orders over time
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[0.5rem] text-cafe">
              <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
              Activity
            </div>
          </div>

          <div className="mt-4 flex h-[calc(100%-45px)] min-h-[90px] items-end gap-2 border-b border-zinc-200 pb-0 dark:border-white/10">
            {activity.map((value, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-[3px] bg-cafe/80 dark:bg-cafe"
                  style={{
                    height: `${value}%`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-between text-[0.45rem] text-zinc-400">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>
      </div>
    </div>
  );
}
