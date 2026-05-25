"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { departments, courseCatalog, trainers as defaultTrainers } from "../tenantadmin-data"

const emptyForm = {
  course: "",
  trainer: "",
  audience: "all",
  department: "",
  dueDate: "",
  notes: "",
}

const rules = {
  course: { required: true },
  trainer: { required: true },
  dueDate: { required: true },
}

export default function AssignCourseModal({
  open,
  onOpenChange,
  onSuccess,
  trainers = defaultTrainers,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Course assignment created successfully",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      setForm(emptyForm)
    }
  }, [open, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Assign Course"
      description="Assign a course to employees with a trainer and completion deadline."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Create Assignment"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => {
          const activeRules = { ...rules }
          if (form.audience === "department") {
            activeRules.department = { required: true }
          }
          submit(form, activeRules)
        }}
      >
        <FormField label="Course" name="course" required error={errors.course}>
          <FormSelect
            id="course"
            value={form.course}
            error={errors.course}
            onChange={(e) => update("course", e.target.value)}
          >
            <option value="">Select course</option>
            {courseCatalog.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </FormSelect>
        </FormField>
        <FormField label="Trainer" name="trainer" required error={errors.trainer}>
          <FormSelect
            id="trainer"
            value={form.trainer}
            error={errors.trainer}
            onChange={(e) => update("trainer", e.target.value)}
          >
            <option value="">Select trainer</option>
            {trainers.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </FormSelect>
        </FormField>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Assign To" name="audience">
            <FormSelect
              id="audience"
              value={form.audience}
              onChange={(e) => update("audience", e.target.value)}
            >
              <option value="all">All employees</option>
              <option value="department">Specific department</option>
            </FormSelect>
          </FormField>
          {form.audience === "department" && (
            <FormField label="Department" name="department" required error={errors.department}>
              <FormSelect
                id="department"
                value={form.department}
                error={errors.department}
                onChange={(e) => update("department", e.target.value)}
              >
                <option value="">Select department</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </FormSelect>
            </FormField>
          )}
        </div>
        <FormField label="Due Date" name="dueDate" required error={errors.dueDate}>
          <FormInput
            id="dueDate"
            type="date"
            value={form.dueDate}
            error={errors.dueDate}
            onChange={(e) => update("dueDate", e.target.value)}
          />
        </FormField>
        <FormField label="Notes" name="notes">
          <FormTextarea
            id="notes"
            placeholder="Optional instructions for learners..."
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
