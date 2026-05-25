"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormInput,
  FormSelect,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { tenantInfo } from "../tenantadmin-data"

const emptyForm = {
  organization: "",
  timezone: "America/New_York",
  emailNotifications: true,
  weeklyDigest: true,
  complianceAlerts: true,
}

const rules = {
  organization: { required: true, minLength: 2 },
  timezone: { required: true },
}

export default function SettingsFormModal({
  open,
  onOpenChange,
  onSuccess,
  initialOrganization,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Settings saved successfully",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      setForm({
        organization: initialOrganization || tenantInfo.name,
        timezone: "America/New_York",
        emailNotifications: true,
        weeklyDigest: true,
        complianceAlerts: true,
      })
    }
  }, [open, clearErrors, initialOrganization])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Organization Settings"
      description="Update workspace profile and notification preferences."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Save Settings"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <FormField label="Organization Name" name="organization" required error={errors.organization}>
          <FormInput
            id="organization"
            value={form.organization}
            error={errors.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </FormField>
        <FormField label="Timezone" name="timezone" required error={errors.timezone}>
          <FormSelect
            id="timezone"
            value={form.timezone}
            error={errors.timezone}
            onChange={(e) => update("timezone", e.target.value)}
          >
            <option value="America/New_York">UTC-5 (Eastern)</option>
            <option value="America/Chicago">UTC-6 (Central)</option>
            <option value="America/Denver">UTC-7 (Mountain)</option>
            <option value="America/Los_Angeles">UTC-8 (Pacific)</option>
            <option value="UTC">UTC</option>
          </FormSelect>
        </FormField>
        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Notifications
          </p>
          {[
            ["emailNotifications", "Email notifications for assignments"],
            ["weeklyDigest", "Weekly learning digest"],
            ["complianceAlerts", "Compliance deadline alerts"],
          ].map(([key, label]) => (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
            >
              <input
                type="checkbox"
                checked={form[key]}
                onChange={(e) => update(key, e.target.checked)}
                className="size-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500/30"
              />
              {label}
            </label>
          ))}
        </div>
      </FormLayout>
    </DashboardModal>
  )
}
