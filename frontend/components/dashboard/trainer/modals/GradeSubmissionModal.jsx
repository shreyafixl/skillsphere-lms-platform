"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormInput, FormTextarea } from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"

export default function GradeSubmissionModal({ open, onOpenChange, submission, onSuccess }) {
  const [form, setForm] = useState({ score: "", feedback: "" })
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Submission graded successfully",
    onSuccess: (values) => {
      onSuccess?.(values, submission)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open && submission) {
      clearErrors()
      setForm({ score: "", feedback: "" })
    }
  }, [open, submission, clearErrors])

  if (!submission) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Grade Submission"
      description={`${submission.student} — ${submission.assignment}`}
    >
      <FormLayout
        loading={loading}
        errors={errors}
        submitLabel="Submit Grade"
        onSubmit={(e) => {
          e.preventDefault()
          submit(form, {
            score: { required: true },
            feedback: { required: true, minLength: 5 },
          })
        }}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Score (%)" name="score" error={errors.score}>
          <FormInput
            type="number"
            min={0}
            max={100}
            value={form.score}
            onChange={(e) => setForm((f) => ({ ...f, score: e.target.value }))}
          />
        </FormField>
        <FormField label="Feedback" name="feedback" error={errors.feedback}>
          <FormTextarea
            rows={4}
            value={form.feedback}
            onChange={(e) => setForm((f) => ({ ...f, feedback: e.target.value }))}
            placeholder="Provide constructive feedback for the learner..."
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
