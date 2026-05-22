"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

function MiniSparkline({ data = [], barClassName = "bg-violet-400" }) {
  const max = Math.max(...data, 1)

  return (
    <div className="flex h-8 items-end justify-end gap-[3px]">
      {data.map((value, i) => (
        <div
          key={i}
          className={cn("w-[4px] rounded-sm opacity-90", barClassName)}
          style={{
            height: `${Math.max(16, (value / max) * 100)}%`,
            maxHeight: 32,
          }}
        />
      ))}
    </div>
  )
}

function MiniRing({ percent = 72 }) {
  const r = 14
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c

  return (
    <svg width="36" height="36" className="-rotate-90">
      <circle
        cx="18"
        cy="18"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        className="text-slate-100 dark:text-slate-800"
      />
      <circle
        cx="18"
        cy="18"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-violet-500"
      />
    </svg>
  )
}

export default function StatsCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  compact = false,
  enterprise = false,
  sparkline,
  visual = "sparkline",
  href = "#",
}) {
  if (enterprise) {
    return (
      <div
        className={cn(
          "group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200",
          "hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/90"
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <a
            href={href}
            className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-50 hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
            aria-label={`View ${title} details`}
          >
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {value}
            </p>
          </div>

          <div className="shrink-0">
            {visual === "ring" ? (
              <MiniRing percent={sparkline?.[0] ?? 72} />
            ) : (
              <MiniSparkline
                data={sparkline ?? [40, 65, 45, 80, 55, 90, 70]}
                barClassName={
                  title.toLowerCase().includes("revenue")
                    ? "bg-violet-400"
                    : title.toLowerCase().includes("tenant")
                      ? "bg-fuchsia-400"
                      : "bg-cyan-400"
                }
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group border border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-200",
        "hover:border-violet-200/80 hover:shadow-md hover:shadow-violet-500/5",
        "dark:border-slate-800/70 dark:bg-slate-900/80 dark:hover:border-violet-500/25",
        compact ? "rounded-2xl p-4" : "rounded-2xl p-5"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "font-medium text-slate-500 dark:text-slate-400",
              compact ? "text-xs" : "text-sm"
            )}
          >
            {title}
          </p>

          <h2
            className={cn(
              "truncate font-bold tracking-tight text-slate-900 dark:text-slate-50",
              compact ? "mt-1 text-xl" : "mt-2 text-3xl"
            )}
          >
            {value}
          </h2>
        </div>

        {icon && (
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-xl",
              compact ? "h-10 w-10" : "h-11 w-11",
              iconBg
            )}
          >
            <div className={iconColor}>{icon}</div>
          </div>
        )}
      </div>
    </div>
  )
}