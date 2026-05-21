"use client"

import { useEffect, useState } from "react"
import DashboardModal from "../DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect } from "../FormLayout"
import { useFormSubmit } from "../useFormSubmit"

const emptyForm = {
  reportType: "analytics",
  dateRange: "30",
  format: "pdf",
  email: "",
}

const rules = {
  reportType: { required: true },
  dateRange: { required: true },
  format: { required: true },
  email: { required: true, email: true },
}

export default function ReportFormModal({ open, onOpenChange, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Report generation started — you'll receive an email when ready",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      setForm({ ...emptyForm, email: "admin@skillsphere.io" })
    }
  }, [open, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Generate Report"
      description="Export platform analytics and send to your inbox."
      size="default"
    >
      <FormLayout
        loading={loading}
        submitLabel="Generate Report"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <FormField label="Report Type" name="reportType" required error={errors.reportType}>
          <FormSelect
            id="reportType"
            value={form.reportType}
            error={errors.reportType}
            onChange={(e) => update("reportType", e.target.value)}
          >
            <option value="analytics">Platform Analytics</option>
            <option value="revenue">Revenue Summary</option>
            <option value="users">User Activity</option>
            <option value="tenants">Tenant Overview</option>
          </FormSelect>
        </FormField>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Date Range" name="dateRange" required error={errors.dateRange}>
            <FormSelect
              id="dateRange"
              value={form.dateRange}
              error={errors.dateRange}
              onChange={(e) => update("dateRange", e.target.value)}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </FormSelect>
          </FormField>
          <FormField label="Format" name="format" required error={errors.format}>
            <FormSelect
              id="format"
              value={form.format}
              error={errors.format}
              onChange={(e) => update("format", e.target.value)}
            >
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="xlsx">Excel</option>
            </FormSelect>
          </FormField>
        </div>
        <FormField label="Delivery Email" name="email" required error={errors.email}>
          <FormInput
            id="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
