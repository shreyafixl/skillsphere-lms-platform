"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormSelect,
  FormTextarea,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { courseCatalog } from "../manager-data"

export default function NudgeLearnerModal({
  open,
  onOpenChange,
  member,
  onSuccess,
}) {
  const [form, setForm] = useState({
    course: courseCatalog[0],
    message: "",
  })

  const { loading, submit } = useFormSubmit({
    successMessage: "Reminder sent successfully",
    onSuccess: () => {
      onSuccess?.(form, member)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open && member) {
      setForm({
        course: courseCatalog[0],
        message: `Hi ${member.name.split(" ")[0]}, please complete your assigned course before the deadline.`,
      })
    }
  }, [open, member])

  if (!member) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form, {})
  }

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Send Reminder"
      description={`Nudge ${member.name} to stay on track with their learning.`}
      size="default"
    >
      <FormLayout
        loading={loading}
        submitLabel="Send Reminder"
        onSubmit={handleSubmit}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Course" name="course">
          <FormSelect
            value={form.course}
            onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))}
          >
            {courseCatalog.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </FormSelect>
        </FormField>
        <FormField label="Message" name="message">
          <FormTextarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
