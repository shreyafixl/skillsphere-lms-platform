"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormInput,
  FormSelect,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"

const emptyForm = {
  reportName: "",
  reportType: "analytics",
  dateRange: "30",
  format: "pdf",
  email: "",
}

const rules = {
  reportName: { required: true, minLength: 3 },
  reportType: { required: true },
  dateRange: { required: true },
  format: { required: true },
  email: { required: true, email: true },
}

export default function TenantReportFormModal({
  open,
  onOpenChange,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Report queued — you will receive an email when it is ready",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      setForm({
        ...emptyForm,
        email: "admin@company.com",
      })
    }
  }, [open, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Create Report"
      description="Generate and export learning analytics for your organization."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Generate Report"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <FormField label="Report Name" name="reportName" required error={errors.reportName}>
          <FormInput
            id="reportName"
            value={form.reportName}
            error={errors.reportName}
            placeholder="Q2 Learning Progress Summary"
            onChange={(e) => update("reportName", e.target.value)}
          />
        </FormField>
        <FormField label="Report Type" name="reportType" required error={errors.reportType}>
          <FormSelect
            id="reportType"
            value={form.reportType}
            error={errors.reportType}
            onChange={(e) => update("reportType", e.target.value)}
          >
            <option value="analytics">Learning Analytics</option>
            <option value="compliance">Compliance Audit</option>
            <option value="performance">Trainer Performance</option>
            <option value="engagement">Course Engagement</option>
            <option value="enrollment">Enrollment Trends</option>
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
