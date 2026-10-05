export default function OmsMockup() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-[inherit] bg-[#0e1420] text-paper">
      <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-[var(--color-line)] bg-[#0a0f18] p-4 sm:flex">
        <span className="mb-4 text-[0.65rem] tracking-[0.2em] text-slate">OMS ERP</span>
        {["Dashboard", "Finance", "CRM", "Sales", "Inventory", "Production", "HR"].map((item, i) => (
          <div
            key={item}
            className={`rounded-lg px-3 py-2 text-[0.72rem] ${
              i === 0 ? "bg-oms/15 text-oms" : "text-slate"
            }`}
          >
            {item}
          </div>
        ))}
      </aside>
      <div className="flex-1 overflow-hidden p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-paper">Overview</span>
          <span className="rounded-full bg-oms/15 px-2.5 py-1 text-[0.62rem] text-oms">This Month</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "₹4.2M" },
            { label: "Orders", value: "1,284" },
            { label: "Stock Value", value: "₹1.8M" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-[var(--color-line)] bg-[#111826] p-3">
              <div className="text-[0.6rem] text-slate">{s.label}</div>
              <div className="mt-1 font-display text-lg text-paper">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-[var(--color-line)] bg-[#111826] p-4">
          <div className="mb-3 text-[0.65rem] text-slate">Sales Trend</div>
          <div className="flex h-20 items-end gap-2">
            {[30, 55, 40, 70, 50, 85, 60, 95, 72, 100, 80, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-oms/30 to-oms" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--color-line)] bg-[#111826] p-3">
            <div className="text-[0.6rem] text-slate">Inventory Alert</div>
            <div className="mt-2 space-y-1.5">
              {["Raw Steel — Low", "Packaging — Low"].map((t) => (
                <div key={t} className="text-[0.68rem] text-paper/80">{t}</div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--color-line)] bg-[#111826] p-3">
            <div className="text-[0.6rem] text-slate">Approvals</div>
            <div className="mt-2 space-y-1.5">
              {["PO-2201", "PO-2203"].map((t) => (
                <div key={t} className="text-[0.68rem] text-paper/80">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
