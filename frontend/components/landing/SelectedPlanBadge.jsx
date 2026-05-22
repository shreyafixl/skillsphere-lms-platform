"use client"

import { Check, Sparkles } from "lucide-react"

import { getPricingPlan } from "@/lib/pricing-plans"
import { cn } from "@/lib/utils"

export default function SelectedPlanBadge({ planId }) {
  const plan = getPricingPlan(planId)
  if (!plan || planId === "enterprise") return null

  const isPro = plan.featured

  return (
    <div
      className={cn(
        "mb-5 rounded-xl border px-4 py-3 transition-all duration-300",
        isPro
          ? "border-violet-400/60 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-violet-600/10 ring-2 ring-violet-500/25 dark:border-violet-500/50 dark:from-violet-500/15 dark:via-fuchsia-500/10 dark:to-violet-500/15 dark:ring-violet-400/30"
          : "border-violet-200/80 bg-violet-50/80 dark:border-violet-500/30 dark:bg-violet-500/10"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Selected plan
          </p>
          <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
            {plan.label}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              ${plan.price}
            </span>
            /month
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          {isPro && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              <Sparkles size={10} />
              Popular
            </span>
          )}
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              isPro
                ? "bg-violet-600 text-white"
                : "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"
            )}
          >
            <Check size={16} />
          </span>
        </div>
      </div>
    </div>
  )
}
