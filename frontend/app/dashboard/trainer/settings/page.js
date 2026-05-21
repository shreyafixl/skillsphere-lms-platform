"use client"

import { Settings2, Star } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { TrainerLayout, trainerCopy, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerSettingsPage() {
  return (
    <TrainerLayout topbarTitle="Settings">
      {({ trainerInfo, openSettings }) => (
        <TrainerPageSection className="space-y-6 sm:space-y-8">
          <PageHeader
            title="Settings"
            description={trainerCopy.settingsDescription}
            action={
              <PrimaryActionButton onClick={openSettings}>
                <Settings2 size={18} />
                Edit Settings
              </PrimaryActionButton>
            }
          />
          <DashboardCard>
            <SectionHeader title="Trainer Profile" subtitle="Your teaching workspace" />
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Name", trainerInfo.admin],
                ["Specialty", trainerInfo.name],
                ["Role", trainerInfo.plan],
                ["Rating", `${trainerInfo.rating} / 5`],
                ["Students", `${trainerInfo.totalStudents} active`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</dt>
                  <dd className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {label === "Rating" && <Star size={14} className="fill-amber-400 text-amber-400" />}
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </DashboardCard>
        </TrainerPageSection>
      )}
    </TrainerLayout>
  )
}
