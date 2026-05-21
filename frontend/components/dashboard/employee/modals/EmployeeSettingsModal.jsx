"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormInput } from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"

export default function EmployeeSettingsModal({ open, onOpenChange, initialName, onSuccess }) {
  const [form, setForm] = useState({
    displayName: initialName ?? "",
    deadlineReminders: true,
    weeklyDigest: true,
    achievementAlerts: true,
  })
  const { loading, submit } = useFormSubmit({
    successMessage: "Settings saved",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      setForm({
        displayName: initialName ?? "",
        deadlineReminders: true,
        weeklyDigest: true,
        achievementAlerts: true,
      })
    }
  }, [open, initialName])

  return (
    <DashboardModal open={open} onOpenChange={onOpenChange} title="Learning Settings" description="Profile and notification preferences.">
      <FormLayout
        loading={loading}
        submitLabel="Save Settings"
        onSubmit={(e) => {
          e.preventDefault()
          submit(form, { displayName: { required: true, minLength: 2 } })
        }}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Display name" name="displayName">
          <FormInput value={form.displayName} onChange={(e) => setForm((f) => ({ ...f, displayName: e.target.value }))} />
        </FormField>
        <div className="space-y-3 rounded-2xl border border-slate-100 p-4 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Notifications</p>
          {[
            ["deadlineReminders", "Deadline reminders"],
            ["weeklyDigest", "Weekly learning digest"],
            ["achievementAlerts", "Achievement unlock alerts"],
          ].map(([key, label]) => (
            <label key={key} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span>{label}</span>
              <input
                type="checkbox"
                checked={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.checked }))}
                className="h-4 w-4 rounded text-violet-600"
              />
            </label>
          ))}
        </div>
      </FormLayout>
    </DashboardModal>
  )
}
