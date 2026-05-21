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
  reportType: "performance",
  dateRange: "30",
  format: "pdf",
}

const rules = {
  reportName: { required: true, minLength: 3 },
  reportType: { required: true },
  dateRange: { required: true },
  format: { required: true },
}

export default function TeamReportFormModal({ open, onOpenChange, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Team report queued — ready shortly",
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
        reportName: "Team Performance Summary",
      })
    }
  }, [open, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Create Team Report"
      description="Generate learning analytics for your direct reports."
      size="lg"
    >
      <FormLayout
        loading={loading}
        errors={errors}
        submitLabel="Generate Report"
        onSubmit={(e) => {
          e.preventDefault()
          submit(form, rules)
        }}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Report name" name="reportName" error={errors.reportName}>
          <FormInput
            value={form.reportName}
            onChange={(e) => update("reportName", e.target.value)}
          />
        </FormField>
        <FormField label="Report type" name="reportType">
          <FormSelect
            value={form.reportType}
            onChange={(e) => update("reportType", e.target.value)}
          >
            <option value="performance">Team Performance</option>
            <option value="completion">Course Completion</option>
            <option value="engagement">Engagement</option>
            <option value="deadlines">Deadline Summary</option>
          </FormSelect>
        </FormField>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Date range" name="dateRange">
            <FormSelect
              value={form.dateRange}
              onChange={(e) => update("dateRange", e.target.value)}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last quarter</option>
            </FormSelect>
          </FormField>
          <FormField label="Format" name="format">
            <FormSelect
              value={form.format}
              onChange={(e) => update("format", e.target.value)}
            >
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="xlsx">Excel</option>
            </FormSelect>
          </FormField>
        </div>
      </FormLayout>
    </DashboardModal>
  )
}
