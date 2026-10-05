"use client";

import { Boxes, Package, Warehouse } from "lucide-react";

const defaultData = {
  brand: "IMS",
  title: "Dashboard",

  stats: [
    {
      label: "Products",
      value: "12,450",
      icon: Boxes,
      accent: "blue",
    },
    {
      label: "Low Stock",
      value: "42",
      icon: Package,
      accent: "green",
    },
    {
      label: "Warehouses",
      value: "12",
      icon: Warehouse,
      accent: "purple",
    },
  ],

  sales: [42, 58, 50, 72, 62, 88, 76],
};

const accents = {
  blue: {
    card: "bg-[#182540]",
    icon: "bg-[#243b68]",
    text: "text-[#77a7ff]",
  },
  green: {
    card: "bg-[#182b27]",
    icon: "bg-[#23453a]",
    text: "text-[#70c9a2]",
  },
  purple: {
    card: "bg-[#261e3d]",
    icon: "bg-[#38285d]",
    text: "text-[#a887ff]",
  },
};

export default function IMSStats({ data = defaultData }) {
  const stats = data.stats ?? defaultData.stats;
  const sales = data.sales ?? defaultData.sales;

  const maxSale = Math.max(...sales, 1);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[#0d1016] text-white">

      {/* =====================================================
          WINDOW HEADER
      ===================================================== */}

      <div className="flex h-[54px] items-center border-b border-white/[0.06] px-6">

        <div className="flex items-center gap-[7px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#df6666]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#e3aa4c]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#65b982]" />
        </div>

        <span className="ml-4 text-[11px] font-medium text-white/45">
          {data.title ?? "Dashboard"}
        </span>

      </div>

      {/* =====================================================
          MAIN DASHBOARD
      ===================================================== */}

      <div className="px-7 pb-7 pt-6">

        {/* Header */}

        <div className="mb-5 flex items-center justify-between">

          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/35">
                {data.brand ?? "IMS"}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#5d96f5]" />
            </div>

            <h3 className="text-[18px] font-medium tracking-[-0.03em] text-white/90">
              Inventory Overview
            </h3>
          </div>

          <span className="rounded-full bg-white/[0.045] px-3.5 py-2 text-[9px] text-white/35">
            This Month
          </span>

        </div>

        {/* ===================================================
            THREE STAT CARDS
        =================================================== */}

        <div className="grid grid-cols-3 gap-3">

          {stats.slice(0, 3).map((stat, index) => {
            const Icon = stat.icon;
            const style = accents[stat.accent] ?? accents.blue;

            return (
              <div
                key={stat.label ?? index}
                className={`rounded-[14px] ${style.card} px-4 py-3.5`}
              >
                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/35">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-white/90">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-[9px] ${style.icon}`}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        strokeWidth={1.7}
                        className={style.text}
                      />
                    )}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* ===================================================
            STOCK MOVEMENT
        =================================================== */}

        <div className="mt-3.5 rounded-[14px] border border-white/[0.055] bg-[#11151d] px-4 pb-3.5 pt-4">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/35">
                Stock Movement
              </p>

              <p className="mt-1 text-[7px] text-white/20">
                Inventory activity over time
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6f9df5]" />
              <span className="text-[7px] text-[#6f9df5]">
                Activity
              </span>
            </div>

          </div>

          {/* Bars */}

          <div className="flex h-[115px] items-end gap-2">

            {sales.map((value, index) => {
              const height = `${(value / maxSale) * 100}%`;

              return (
                <div
                  key={index}
                  className="flex h-full flex-1 items-end"
                >
                  <div
                    className="
                      w-full
                      rounded-t-[3px]
                      bg-gradient-to-t
                      from-[#36568c]
                      to-[#719df0]
                    "
                    style={{ height }}
                  />
                </div>
              );
            })}

          </div>

          {/* Bottom line */}

          <div className="mt-2 flex items-center justify-between border-t border-white/[0.035] pt-1.5">

            <span className="text-[6px] text-white/20">
              Jan
            </span>

            <span className="text-[6px] text-white/20">
              Mar
            </span>

            <span className="text-[6px] text-white/20">
              May
            </span>

            <span className="text-[6px] text-white/20">
              Jul
            </span>

            <span className="text-[6px] text-white/20">
              Sep
            </span>

            <span className="text-[6px] text-white/20">
              Nov
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}